const knex = require('knex');
const db = require('../knexfile.js');
const env = process.env.DB_ENV || "development"

module.exports = knex(db[env]);