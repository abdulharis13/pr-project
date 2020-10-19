const express = require('express');

const { Customer } = require('../../models');
const { custSchema } = require('../../schema');

const router = express.Router();

router.post('/add/customer', async (req, res) => {
    try {
        const { error, value } = custSchema.validate(req.body);
        if (error) {
            throw new Error(error.message);
        };
        const {
            noUrut,
            custoName,
            keluHan,
            jenisKendaraan,
            typeKendaraan,
            no_Plat,
            alamat,     
        } = value;

        const customer = new Customer({
            noUrut,
            custoName,
            keluHan,
            jenisKendaraan,
            typeKendaraan,
            no_Plat,
            alamat,
        });
        await customer.save();
        res.send(customer);

    } catch (e) {
        res.send({ message: e.message });
    }
});
// request pada http, BACA
module.exports = router; 