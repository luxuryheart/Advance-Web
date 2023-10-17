const express = require('express');

const router = express.Router();

const course = require('../data/course_data');
const auth = require('../config/authorize');

router.get('/course', auth, (req, res) => {
    res.send(course)
})

module.exports = router;