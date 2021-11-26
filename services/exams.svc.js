const db = require('../db');

const getExamsById = async (examId) => {
    try {
        let studentsById = db.students.filter( s => s.exam === examId );
    
        let scores = studentsById.map( s => s.score);
        let avg = scores.reduce((pre, cur) => pre + cur, 0) / scores.length;
    
        let payload = {
            all_exams: studentsById,
            average_scores: avg
        }
        return payload;

    } catch (e) {
        throw new Error(e.message);
    }
}

const getExams = async () => {
    const exams = [...db.exams];
    
    let payload = {
        all_exams: exams
    }
    return payload;
} 

module.exports = {
    getExams,
    getExamsById
}