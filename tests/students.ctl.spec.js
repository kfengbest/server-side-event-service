const studentsCtrl = require('../controllers/students.ctrl');
const studentsSvc = require('../services/students.svc');

const ITEMS = [{"exam": 3, "studentId": "student1", score: .991}];

jest.mock('../services/students.svc', () => ({
    getStudents : jest.fn(),
    getStudentsById : jest.fn()
}));

test('it gets students correctly', async () => {
    const next = jest.fn();
    const req = {};
    const res = { 
        send : jest.fn(),
        sendStatus: jest.fn()
    };

    studentsSvc.getStudents.mockReturnValue(Promise.resolve(ITEMS));

    await studentsCtrl.getStudents(req, res, next);

    expect(studentsSvc.getStudents.mock.calls.length).toBe(1);
    expect(res.send.mock.calls[0].length).toBe(1);
    expect(res.send.mock.calls[0][0]).toEqual(ITEMS);
})

test('it gets student by id' , async () => {
    const next = jest.fn();
    const req = { params : { id: '123'} };
    const res = { 
        sendStatus : jest.fn(),
        send : jest.fn()
    }

    await studentsCtrl.getStudentsById(req, res, next);
    expect(studentsSvc.getStudentsById.mock.calls.length).toBe(1);
    expect(studentsSvc.getStudentsById.mock.calls[0][0]).toBe(req.params.id);
})