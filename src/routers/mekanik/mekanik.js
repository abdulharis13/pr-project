const express = require('express');
const { Mekanik } = require('../../models');
const { mekanikSchema } = require('../../schema');
const router = express.Router();

router.post('/mekanik', async (req, res) => {
    try {
        const { error, value } = mekanikSchema.validate(req.body);
        if (error) {
            throw new Error(error.message);
        };
        const {
            namaMekanik,
            spesialisasi,
            gantiSparepart,
            biayaSparepart,
            biayaServ,
        } = value;

        const mekanik = new Mekanik({
            namaMekanik,
            spesialisasi,
            gantiSparepart,
            biayaSparepart,
            biayaServ,
            totalBiaya: biayaSparepart + biayaServ,
        });
        await mekanik.save();
        res.send(mekanik);

    } catch (e) {
        res.send({ message: e.message });
    }
});
// request pada http, BACA
module.exports = router; // agar file dapat diakses dari luar wajib ada di setiap file.js
