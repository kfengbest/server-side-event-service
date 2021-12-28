
const studentsSrv = require('../services/students.svc');


describe('test student.service', () => {
    it('should have students', () => {
      let students = studentsSrv.getStudents();
      expect(students).not.toBeNull;
    });

    it('should find students by id', () => {
        let students = studentsSrv.getStudents("foo");
        expect(students).not.toBeNull;
    });
  });