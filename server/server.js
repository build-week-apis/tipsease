const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const authRouter = require('../routers/auth.js');

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/auth', authRouter);







        //home route
server.get('/', (req,res) => {
    res.send('go to https://github.com/lambda-build-tipsease/build-tipsease-be for end point documentation')
})

module.exports = server;