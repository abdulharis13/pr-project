const Joi = require('joi');

const custSchema = Joi.object({
    noUrut: Joi.number()
    .required(),
    custoName: Joi.string()
    .min(5)
    .max(30)
    .required(),
    jenisKendaraan: Joi.string()
    .min(5)
    .required(),
    typeKendaraan: Joi.string()
    .min(5)
    .required(),
    keluHan: Joi.string()
    .min(5)
    .max(100)
    .required(),
    no_Plat: Joi.string()
    .min(5)
    .required(),
    alamat: Joi.string()
    .max(100)
    .required(),
});

module.exports = custSchema;