const express = require('express');
const { Mekanik, Customer, Payment } = require('../../models');

const router = express.Router();

const getData = async (id, model) => {
    const result = await model.findById(id).select(); 
    return result;
}
router.get('/serv', async (req, res) => {
try {
    const result = await Payment.find({});
    const promises = await Promise.all(result.map(async el => { 
        return {
            bayar: el.bayar,
            mekanik : await getData(el.mekanik, Mekanik ),
            customer : await getData(el.customer, Customer ),
            sisaUang: el.totalBiaya - el.bayar,
        }
    }));
    res.send(promises);
} catch(e) {
    res.send({ message: e.message });
}
});
module.exports = router;
