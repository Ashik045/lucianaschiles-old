// import modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
// app setups
app.use(cors());
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
dotenv.config();

// stripe module
const stripe = require('stripe')(process.env.STRIPE_KEY);
// internal imports
const products = require('./routes/products');
const blogs = require('./routes/blogs');
// database connection
mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Mongodb connection established.');
    })
    .catch((err) => {
        console.log(err);
    });

// application routes
app.use('/api/products', products);
app.use('/api/blogs', blogs);

// default routes
app.use('/', (req, res) => {
    res.status(200).json({
        message: 'server running',
    });
});

// stripe
app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: '{{PRICE_ID}}',
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${process.env.APP_DOMAIN}?success=true`,
        cancel_url: `${process.env.APP_DOMAIN}?canceled=true`,
    });

    res.redirect(303, session.url);
});

// error handlers
app.use((err, req, res, next) => {
    res.status(500).json({
        error: err,
    });
});
// not found handler
app.use((req, res, next) => {
    res.status(404).json({
        error: 'Not found!',
    });
});

// application run
app.listen(process.env.APPLICATION_PORT || 4000, () => {
    console.log(`Application running on port ${process.env.APPLICATION_PORT}`);
});
