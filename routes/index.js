const express = require('express');

const router = express.Router();

router.get('/students', (req, res) => res.send("get /students"));
router.get('/students/:id', (req, res) => res.send("get /students/:id"));

router.get('/exams', (req, res) => res.send("get /exams"));
router.get('/exams/:number', (req, res) => res.send("get /exams/:number"));

module.exports = router;