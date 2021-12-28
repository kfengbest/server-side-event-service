let Student = require('../models/Student');

test("test student model", () => {
    let s1 = new Student();
    s1.studentId = 'id1';
    expect(s1.studentId).toBe('id1');
})