const stripeAPI = require('../stripe');

async function createCheckoutSession(req, res) {
    const domainURL = process.env.WEB_APP_URL;
    const { line_items, customer_email } = req.body;

    if (!line_items || !customer_email) {
        return res.status(400).json({ error: 'missing required session parameters' });
    }

    try {
        const session = await stripeAPI.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items,
            customer_email,
            success_url: `${domainURL}/success`,
            cancel_url: `${domainURL}/canceled`,
            shipping_address_collection: { 
                allowed_countries: ['US', 'CA'] 
            }
        });
        res.status(200).json({ sessionId: session.id });

    } catch (err) {
        console.log(err.message);
        res.status(400).json({ error: 'An error occured. Unable to create session.' });
    }
}

module.exports = createCheckoutSession;