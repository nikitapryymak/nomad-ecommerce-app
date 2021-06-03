const express = require('express');
const cors = require('cors');
const createCheckoutSession = require('./api/checkout');
require('dotenv').config({ path: './.env' });

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));


app.post('/create-checkout-session', createCheckoutSession);

app.listen(process.env.PORT || 5000, () => console.log('server listening on port 5000'));