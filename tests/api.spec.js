const app = require('../server');
const supertest = require('supertest');
const db = require('../db');

const student1 = {"exam": 3, "studentId": "student1", score: .991};

beforeAll( done => {
    db.students.unshift(student1);

    done();
})

afterAll( done => {
    db.students.shift();

    done();
})

test('GET /students', async () => {
    await supertest(app).get('/students')
        .expect(200)
        .then(res => {
            expect(res.body.length).toBeGreaterThan(0);
        })
})

test('GET /students/{id}', async () => {
    await supertest(app).get(`/students/${student1.studentId}`)
        .expect(200)
        .then(res => {
            expect(res.body.average_score).toBe(student1.score);
            expect(res.body.exams.length).toBeGreaterThan(0);
            expect(res.body.exams[0].studentId).toBe(student1.studentId);
        })
})

test('GET /students/{id} await', async() => {
    const res = await supertest(app).get(`/students/${student1.studentId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.average_score).toBe(student1.score);
    expect(res.body.exams.length).toBeGreaterThan(0);
})