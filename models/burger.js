const { selectAll, insertOne, updateOne } = require('../config/orm');

const selectAllBurgers = () => selectAll('burgers');

const insertOneBurger = (newBurger) => insertOne('burgers', newBurger);

const updateOneBurgerDevouered = (id, newVal) => updateOne('burgers', 'devouered', id, newVal);

module.exports = { selectAllBurgers, insertOneBurger, updateOneBurgerDevouered };
