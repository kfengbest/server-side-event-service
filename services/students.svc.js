
const getStudentsById = async (sid) => {
    try {
        // TODO read from DB
        let studentsById = [
            {"exam": 3, "studentId": "foo", score: .991},
            {"exam": 4, "studentId": "foo", score: .992}
        ]
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
    // TODO read from DB
    let students = [
        {"exam": 3, "studentId": "foo", score: .991},
        {"exam": 4, "studentId": "foo", score: .991},
        {"exam": 5, "studentId": "bar", score: .892}
    ]
    return students;
} 

module.exports = {
    getStudents,
    getStudentsById
}