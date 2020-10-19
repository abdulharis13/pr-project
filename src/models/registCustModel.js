const mongoose = require('mongoose');
const custSchema = new mongoose.Schema({
    noUrut: {
        type: Number,
        required: true,
    },
    custoName: {
        type: String,
        minlength: 5,
        unique: true,
        required: true,
    },
    jenisKendaraan: {
        type: String,
        minlength: 5,
        required: true,
    },
    typeKendaraan: {
        type: String,
        minlength: 5,
        required: true,
    },
    keluHan: {
        type: String,
        minlength: 5,
        required: true,
    },
    no_Plat: {
        type: String,
        required: true,
        unique: true
    },
    alamat: {
        type: String,
        required: true,
    },
});
const Customer = mongoose.model('Customer', custSchema);

module.exports = Customer;