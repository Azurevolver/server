const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
    
    // finalize final charge, update user credit
    // * express的get, post等方法可以接受無限個參數(無限個middlewares)
    app.post('/api/stripe', requireLogin, async (req, res) => {
        // replace following check by requireLogin middleware
        // if (!req.user) {
        //     return res.status(401).send({ error: 'You must log in!'});
        // }
        
        // body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body
        // body-parser幫我們保留client端送出http request的body部分，並保存在req.body
        console.log("[DEBUG] api/stripe triggered req.body = ", req.body);
        
        const charge = await stripe.charges.create({
            amount:500,
            currency: 'usd',
            description: '$5 for 5 emails credit',
            source: req.body.id
        })

        console.log("[DEBUG] get back from stripe, charge = ", charge);

        // get user model
        req.user.credits += 5;
        const user = await req.user.save();
        
        res.send(user);
    });
}