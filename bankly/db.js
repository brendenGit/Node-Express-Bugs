/** Database setup for jobly. */

const { Client } = require('pg');
const { getDatabaseConfig } = require('./config');

const client = new Client(getDatabaseConfig());

client.connect();

module.exports = client;
