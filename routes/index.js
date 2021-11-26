const express = require('express');
const students = require('../controllers/students.ctrl');

const router = express.Router();

router.get('/students', students.getStudents);
router.get('/students/:id', students.getStudentsById);

router.get('/exams', (req, res) => res.send("get /exams"));
router.get('/exams/:number', (req, res) => res.send("get /exams/:number"));

module.exports = router;