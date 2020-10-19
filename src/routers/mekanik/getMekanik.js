const express = require('express');
const { Mekanik } = require('../../models');

const router = express.Router();

router.get('/get/mekanik', async (req, res) => {
try {
    const result = await Mekanik.find({}); // berlaku untuk find, findOne
    res.send(result);
    
} catch(e) {
    res.send({ message: e.message });
};
});
module.exports = router;
