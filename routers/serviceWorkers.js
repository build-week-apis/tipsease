const router = require('express').Router();
const db = require('../server/dbConfig.js');
const restricted = require('./restricted-middleware.js');
const bcrypt = require('bcrypt');

router.get('/forDashboard/:id', (req, res) => {
    let id = req.params.id;
    db('serviceWorkers')
        .where({id})
        .first()
        .then(users => {
        res.status(200).json(users);
        })
        .catch(err => res.status(400).json({message: "cant find that user!"}));
});//get by a specified ID unrestricted for dashboard

router.get('/:id', restricted, (req, res) => {
    let id = req.params.id;
    db('serviceWorkers')
        .where({id})
        .first()
        .then(users => {
        res.status(200).json(users);
        })
        .catch(err => res.status(400).json({message: "cant find that user!"}));
});//get by a specified ID restricted
   
router.get('/', restricted, (req, res) => {
    
    db('serviceWorkers')
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => res.status(500).json(err));
});//get all service workers

router.put('/:id', restricted, (req, res) => {
    let id = req.params.id;

    if (req.body.password){
        const hash = bcrypt.hashSync(req.body.password, 10);
        req.body.password = hash;
    }

    db('serviceWorkers')
        .update(req.body)
        .where({id})
        .then(users => {
        res.status(201).json(users);
        })
        .catch(err => res.status(500).json({message: "there was an error while updating your account!"}));
});//update a specified ID
 
router.put('/rate/:id', restricted, (req, res) => {
    const id = req.params.id;

    db('serviceWorkers')
        .where({id})
        .first()
        .then(user => {
            let newRatingFirst = user.numOfRatings * user.rating + req.body.rating;
            user.numOfRatings = user.numOfRatings + 1;
            let finalRating = newRatingFirst/user.numOfRatings;

            user.rating = Math.round(finalRating * 100) / 100;

            db('serviceWorkers')
                .update(user)
                .where({id})
                .then(finalUser => {
                    res.status(201).json(finalUser);
                })
                .catch(err => res.status(500).json({message: 'something went wrong while rating this user.'}));
        })
        .catch(err => res.status(404).json({message: "unable to find that user."}));
});//rate a specified ID

router.put('/pay/:id', restricted, (req, res) => {
    const id = req.params.id;
    
    db('serviceWorkers')
        .where({id})
        .first()
        .then(user => {
            let newAccBalance =  user.accountBalance + req.body.payment;
            user.accountBalance = newAccBalance

            db('serviceWorkers')
                .update(user)
                .where({id})
                .then(finalUser => {

                    const newTip = {
                        swUsername: user.username,
                        senderUsername: req.body.senderUsername || "not supplied",
                        dateRecieved: new Date(Date.now()),
                        tipAmount: req.body.payment,
                        sw_id: id
                    };

                    db('tipHistory')
                        .insert(newTip)
                        .then(response => {
                            res.status(201).json(response);
                        })
                        .catch(err => res.status(400).json({message: "error adding tip"}))
                    //res.status(201).json(finalUser);
                })
                .catch(err => res.status(500).json({message: 'something went wrong tipping this user.'}));
        })
        .catch(err => res.status(404).json({message: "unable to find that user."}));
});//pay a serviceWorker a specified ammount and add a payment to payment history.

router.put('/transferToBank/:id', restricted, (req, res) => {
    const id = req.params.id;

    db('serviceWorkers')
        .where({id})
        .first()
        .then(user => {
            if(user.accountBalance === 0){
                res.status(200).json({message: "Sorry about that, you dont have any money in your account!"})
            }
            else{

                let bankTransferAmmount =  user.accountBalance 
                user.accountBalance = 0
                
                db('serviceWorkers')
                    .update(user)
                    .where({id})
                    .then(finalUser => {
                        const ticket = {
                            username: user.username,
                            balanceInquiry: bankTransferAmmount,
                            sw_id: user.id
                        }
                        db('bankTransfers')
                            .insert(ticket)
                            .then(response => res.status(201).json({message: "succesfully create ticket"}))
                            .catch(err => res.status(500).json({message: "error posting transfer ticket..."}))
                    })
                    .catch(err => res.status(500).json({message: 'something went wrong updating your account'}));
            }
        })
        .catch(err => res.status(404).json({message: "unable to find that user."}));
});//begin proccess to transfer a users money to bank account

module.exports = router;
