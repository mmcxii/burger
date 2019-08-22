const { selectAll, insertOne, updateOne } = require('../config/orm');

const selectAllBurgers = (callback) => selectAll('burgers', (result) => callback(result));

const insertOneBurger = (newBurger) => insertOne('burgers', newBurger);

const updateOneBurgerDevoured = (id) => updateOne('burgers', 'devoured', id, 1);

module.exports = { selectAllBurgers, insertOneBurger, updateOneBurgerDevoured };
