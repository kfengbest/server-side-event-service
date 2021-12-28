const studentsSrv = require('../services/students.svc');
const Student = require('../models/Student');

const getStudents = async (req, res, next) => {
    
    try {
        let students = await studentsSrv.getStudents();
        res.send(students);
        next();
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500) && next(error);
    }
}

const getStudentsById = async (req, res, next) => {
    let sid = req.params.id;

    try {
        let students = await studentsSrv.getStudentsById(sid);

        res.send(students);
        next();
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500) && next(error);
    }
}

const createStudent = async (req, res, next) => {
    try {
        let newStudent = new Student();
        newStudent.studentId = req.body.studentId;
        newStudent.exam = req.body.exam;
        newStudent.score = req.body.score;

        res.send(newStudent);
    } catch (e) {
        res.sendStatus(500) && next(error);
    }
}

module.exports = {
    getStudents,
    getStudentsById,
    createStudent
}