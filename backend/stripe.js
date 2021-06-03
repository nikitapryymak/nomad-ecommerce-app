require('dotenv').config({ path: './.env' });

const stripeAPI = require('stripe')(process.env.SECRET_KEY)

module.exports = stripeAPI;