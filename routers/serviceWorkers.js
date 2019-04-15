const router = require('express').Router();
const db = require('../server/dbConfig.js');
const restricted = require('./restricted-middleware.js');
const bcrypt = require('bcrypt');

        //get by a specified ID
router.get('/:id', restricted, (req, res) => {
    let id = req.params.id;
    db('serviceWorkers')
        .where({id})
        .first()
        .then(users => {
        res.status(200).json(users);
        })
        .catch(err => res.send(err));
});

        //get all service workers
router.get('/', restricted, (req, res) => {
    
    db('serviceWorkers')
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => res.status(500).json(err));
});



        //update a specified ID
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
        .catch(err => res.send(err));
});


        //rate a specified ID
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
                .catch(err => res.status(500).json({message: 'something went wrong here'}));
        })
        .catch(err => res.status(404).json({message: "unable to find that user."}));
});

module.exports = router;
