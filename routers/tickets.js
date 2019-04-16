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

module.exports = router;
