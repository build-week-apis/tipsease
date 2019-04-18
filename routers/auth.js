const express = require('express');
const router = express.Router();
const db = require('../server/dbConfig.js');
const secret = require('../server/secret.js').jwtSecret;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.get('/users', (req,res) => {
    db('users')
        .then(response => res.status(200).json(response))
        .catch(err => res.status(500).json(err))
})//-----remember to delete this-----

router.get('/serviceWorkers', (req,res) => {
    db('serviceWorkers')
        .then(response => res.status(200).json(response))
        .catch(err => res.status(500).json(err))
})//-----remember to delete this-----

router.post('/users/login', (req,res) => {
    let { username, password, type } = req.body;

    db(type === 'serviceWorkers' ? 'serviceWorkers' : 'users')
        .where({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                console.log(user);
                const token = generateToken(user);
                res.status(200).json({
                message: `Welcome, ${user.username}!`,
                token: token,
                userInfo: user
                });
            } else {
                res.status(401).json({ message: 'Invalid Credentials' });
            }
        })
        .catch(error => {
            res.status(404).json({message: "Sorry, cant find that user!"});
        });
})

router.post('/users/register', (req,res) => { //edited for postgres
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    db('users')
        .insert(user, ["id"])
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json({message: 'Error registering your account. Either this account already exists, or you didnt complete to form.'});
        });
})

router.post('/serviceWorkers/register', (req,res) => { //edited for postgres
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    user.accountBalance = 0;
    user.rating = 5;
    user.numOfRatings = 0;

    db('serviceWorkers')
        .insert(user, ["id"])
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json({message: 'Error registering your account. Either this account already exists, or you didnt complete to form.'});
        });
})

function generateToken(user){
    const payload = {
      subject: user.id,
      username: user.username
    };
    const options = {
      expiresIn: '1h'
    };
    
    return jwt.sign(payload, secret, options)
  }

module.exports = router;