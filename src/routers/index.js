const mekanik = require('./mekanik');
const users = require('./users');
const payment = require('./payment');

const routers = [
    ...mekanik,
    ...users,
    ...payment
];

const router = (app) => {
    app.use(routers)
};

module.exports=router;