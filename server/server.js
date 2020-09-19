require('dotenv').config()
const path = require('path');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')("sk_test_51HQv4jIbuX0QLvOvRWMmaoqsNpbgz8q70oEoQQYy9Xa8RRSglUvi4ZC4i1TaBwQxMQvBRiMfIRhm2wWsIl3GXO6G00X6RbfZuP")
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'build');

app.use(cors());
app.use(express.static(publicPath));
app.use(express.json());


app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});
app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    console.log('payment receive >>>>', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: 'inr',
    })
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});