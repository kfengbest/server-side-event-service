let Exam = require('../models/Exam')

test('test exam', () => {
    let e = new Exam();
    e.id = 'id1';
    expect(e.id).toBe('id1');
})