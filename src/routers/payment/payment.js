const express = require('express');
const mongoose = require('mongoose');

const { Customer, Payment, Mekanik } = require('../../models');
const { paymentSchema } = require('../../schema');

const router = express.Router();


router.post('/payment', async (req, res) => {
try {
    const { error, value } = paymentSchema.validate(req.body);
    const { bayar, customer, mekanik} = value;
    if (error) {
        throw new Error(error.message);
    };
    const customerr = await Customer.findOne({
        _id: mongoose.Types.ObjectId(customer)
    });
    if (!customerr) {
        throw new Error('Customer tidak valid');
    }
    const mekanikk = await Mekanik.findOne({_id: mongoose.
        Types.ObjectId(mekanik)
    });
    if (!mekanikk) {
        throw new Error('mekanik tidak valid');
    };
    const payment = new Payment({
        bayar,  
        customer,
        mekanik,
    });
    await payment.save();
    res.send(payment);

} catch(e) {
    res.send({ message: e.message });
}
});
module.exports = router;


//how to pull and push vscode to github