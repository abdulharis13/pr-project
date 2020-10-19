const Joi = require('joi');
const paymentSchema = Joi.object({
    bayar: Joi.number()
    .required(),
    customer: Joi.string()
    .required(),
    mekanik: Joi.string()
    .required(),
    sisaUang: Joi.number()
});

module.exports = paymentSchema;