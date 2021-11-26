
const getExamsById = async (examId) => {
    try {
        let studentsById = [
            {"exam": 3, "studentId": "foo", score: .991},
            {"exam": 4, "studentId": "foo", score: .992}
        ]
    
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
    const exams = ["1","2","3"];
    
    let payload = {
        all_exams: exams
    }
    return payload;
} 

module.exports = {
    getExams,
    getExamsById
}