const express = require('express');
const { selectAllBurgers, insertOneBurger, updateOneBurgerDevoured } = require('../models/burger');

const router = express.Router();

router.get('/', (req, res) => selectAllBurgers((dbRes) => res.json(dbRes)));

router.post('/', (req, res) => {
    const { name } = req.body;

    insertOneBurger(name);

    res.send(`${name} added`);
});

router.put('/', (req, res) => {
    const { id } = req.body;
    updateOneBurgerDevoured(id);

    res.send(`Burger with the id of ${id} has been marked as devoured!`);
});

module.exports = router;
