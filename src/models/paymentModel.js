const mongoose = require('mongoose');
const paymentSchema = new mongoose.Schema ({
    bayar: {
        type: Number,
        required: true,
    },
    customer: {
        type: String,
        required: true,
    },
    mekanik:{
        type: String,
        required: true,
    },
    sisaUang: Number,
});
const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;