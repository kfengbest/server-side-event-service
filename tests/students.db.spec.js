const db = require('../db')

describe('test db', () => {
  it('should have students', () => {
    expect.any(db.students);
  });
  it('should have exams', () => {
    expect.any(db.exams);
  })
});