const express = require('express');
const { Customer } = require('../../models');
const { custSchema } = require('../../schema')

const router = express.Router();

router.get('/get/cust', async (req, res) => {
try {
    const result = await Customer.find({}); // berlaku untuk find, findOne
    res.send(result);
    
} catch(e) {
    res.send({ message: e.message });
};
});
module.exports = router;