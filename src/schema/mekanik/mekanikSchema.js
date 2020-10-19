const Joi = require('joi');

const mekanikSchema = Joi.object({
    namaMekanik: Joi.string()
    .min(5)
    .required(),
    spesialisasi: Joi.string()
    .min(5)
    .max(30)
    .required(),
    gantiSparepart: Joi.string()
    .min(5)
    .required(),
    biayaSparepart: Joi.number()
    .min(5)
    .required(),
    biayaServ: Joi.number()
    .min(5)
    .required(),
});

module.exports = mekanikSchema;