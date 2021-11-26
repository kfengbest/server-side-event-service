const db = require('../db');

const getStudentsById = async (sid) => {
    try {
        
        let studentsById = db.students.filter( s => s.studentId === sid );

        let scores = studentsById.map( s => s.score);
        let avg = scores.reduce((pre, cur) => pre + cur, 0) / scores.length;
        let payload = {
            all_exams : studentsById,
            average_score : avg
        }

        return payload;

    } catch (e) {
        throw new Error(e.message);
    }
}

const getStudents = async () => {
    
    let students = db.students;

    return students;
} 

module.exports = {
    getStudents,
    getStudentsById
}