var EventSource = require('eventsource')
const db = require('../db')

let start = () => {
    var es = new EventSource('https://live-test-scores.herokuapp.com/scores')

    es.addEventListener('score', function (e) {
        console.log(e.data);
        let student = JSON.parse(e.data);
        db.exams.add(student.exam);
        db.students.push(student);

    })
    
    es.onmessage = function(e) {
        console.log(e)
    }

}

exports.start = start;