const express = require('express');
const router = express.Router();
const db = require('../models');

router.post('/add', (req, res) => {
    db.Profile.create({
        name: req.body.name,
        UserId: req.body.UserId
    }).then(newProfile => res.send(newProfile))
})

module.exports = router;