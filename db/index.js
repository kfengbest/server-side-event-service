// in-mem db now. No real db needed per requirements.

var students = [
    {"exam": 1, "studentId": "foo", score: .991},
    {"exam": 2, "studentId": "foo", score: .992}
];

var exams = new Set(['1', '2', '3']);

module.exports = {
    students,
    exams
}