const userSchema = require('./users');
const mekanikSchema = require('./mekanik');
const paymentSchema = require('./payment');

module.exports = {
    ...userSchema,
    ...mekanikSchema,
    ...paymentSchema
};