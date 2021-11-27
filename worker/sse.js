var EventSource = require('eventsource')
const db = require('../db')
const config = require('config');
const sseUrl = config.get('sse.url');

let start = () => {
    var es = new EventSource(sseUrl)

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