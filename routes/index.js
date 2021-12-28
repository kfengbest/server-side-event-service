const express = require('express');
const students = require('../controllers/students.ctrl');
const exams = require('../controllers/exams.ctrl');

const router = express.Router();

router.get('/students', students.getStudents);
router.post('/students', students.createStudent);

router.get('/students/:id', students.getStudentsById);

router.get('/exams', exams.getExams);
router.get('/exams/:number', exams.getExamsByNumber);

module.exports = router;