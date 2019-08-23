const express = require('express');
const path = require('path');
const { selectAllBurgers, insertOneBurger, updateOneBurgerDevoured } = require('../models/burger');

const router = express.Router();

//* Set Static
const static = express.static(path.join(path.dirname(require.main.filename), '/public'));

//* Page Route
router.get('/', (req, res) => selectAllBurgers((dbRes) => res.render('burgerList', { burgers: dbRes })));

//* API Routes
router.get('/api/burgers', (req, res) => selectAllBurgers((dbRes) => res.json(dbRes)));

router.post('/api/burgers', (req, res) => insertOneBurger(req.body.name));

router.put('/api/burgers', (req, res) => updateOneBurgerDevoured(req.body.id));

module.exports = { router, static };
