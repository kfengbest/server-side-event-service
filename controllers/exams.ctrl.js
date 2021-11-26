const examSrv = require('../services/exams.svc');

const getExams = async (req, res, next) => {
    try {
        let exams = await examSrv.getExams();
        res.send(exams);
        next();
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500) && next(error);
    }
}

const getExamsByNumber = async (req, res, next) => {
    let examIdStr = req.params.number;
    let examId = Number(examIdStr);

    try {

        let exams = await examSrv.getExamsById(examId);
        res.send(exams);
        next();
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500) && next(error);
    }
}

module.exports = {
    getExams,
    getExamsByNumber
}