const knex = require('knex');
const db = require('../knexfile.js');

const dbEnv = process.env.DB_ENV || "development";

module.exports = knex(db[dbEnv]);