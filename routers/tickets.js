const router = require('express').Router();
const db = require('../server/dbConfig.js');

router.get('/allTickets', (req, res) => {
    db('bankTransfers')
        .then(tickets => {
        res.status(200).json(tickets);
        })
        .catch(err => res.send(err));
});//get a list of bank request tickets

router.delete('/deleteTicket/:id', (req, res) => {
    const id = req.params.id;

    db('bankTransfers')
        .delete()
        .where({id})
        .then(tickets => {
        res.status(200).json(tickets);
        })
        .catch(err => res.send(err));
});//delete a ticket

router.get('/tipHistory', (req, res) => {
    db('tipHistory')
        .then(tips => {
            res.status(200).json(tips)
        })
        .catch(err => res.status(500).json(err))
});//get full tip history

router.get('/tipHistory/:id', (req, res) => {
    db('tipHistory')
        .where({sw_id: req.params.id})
        .then(tips => {
            res.status(200).json(tips)
        })
        .catch(err => res.status(500).json(err))
});//get specified service workers tip history

module.exports = router;
