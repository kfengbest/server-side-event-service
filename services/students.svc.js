const db = require('../db');
const fetch = require('node-fetch');


const createStudent = async (student) => {
    
    db.students.push(student);

    return student;
}

const getStudentsById = async (sid) => {
    try {
        
        let studentsById = db.students.filter( s => s.studentId === sid );

        let scores = studentsById.map( s => s.score);
        let avg = scores.reduce((pre, cur) => pre + cur, 0) / scores.length;

        let payload = {
            exams : studentsById,
            average_score : avg
        }

        return payload;

    } catch (e) {
        throw new Error(e.message);
    }
}

const getStudents = async () => {
    
    let students = db.students.filter( s => s.score && s.score > 0 );
    
    return students;
} 

const getRepos = async (userId) => {

    let url = `https://api.github.com/users/${userId}/repos`;
    let res = await fetch(url);
    let repos = await res.json();
    return repos;

}

module.exports = {
    getStudents,
    getStudentsById,
    createStudent,
    getRepos
}