const express = require('express');
const router = express.Router();
const db = require('../models');

router.post('/add', (req, res) => {
    db.User.create({
        username: req.body.username
    }).then(newUser => res.send(newUser))
})

router.get('/all', (req, res) => {
    db.User.findAll({
        include: [db.Profile]
    }).then(allUsers => res.send(allUsers))
})

module.exports = router;