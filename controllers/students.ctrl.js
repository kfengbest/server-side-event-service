const studentsSrv = require('../services/students.svc');

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

module.exports = {
    getStudents,
    getStudentsById
}