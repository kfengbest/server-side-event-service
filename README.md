# SSE Server

This is a Server Side Eventing service for take-home project

## Install

    $ git clone https://github.com/launchdarkly/be-coding-test-Kai-Feng.git
    $ cd be-coding-test-Kai-Feng
    $ npm install

## Running the project

    $ npm start

## Coding test

    $ npm test

## API Usage

`/students` that lists all users that have received at least one test score

    $ curl GET 'http://localhost:3000/students'

`/students/{id}` that lists the test results for the specified student, and provides the student's average score across all exams

    $ curl GET 'http://localhost:3000/students/foo'

`/exams` that lists all the exams that have been recorded

    $ curl GET 'http://localhost:3000/exams'

`/exams/{number}` that lists all the results for the specified exam, and provides the average score across all students

    $ curl GET 'http://localhost:3000/exams/1'

## Project requirements

At `http://live-test-scores.herokuapp.com/scores` you'll find a service that follows the [Server-Sent Events](https://www.w3.org/TR/2015/REC-eventsource-20150203/) protocol. You can connect to the service using cURL:

        curl https://live-test-scores.herokuapp.com/scores

Periodically, you'll receive a JSON payload that represents a student's test score (a JavaScript number between 0 and 1), the exam number, and a student ID that uniquely identifies a student. For example:

        event: score
        data: {"exam": 3, "studentId": "foo", score: .991}

This represents that student foo received a score of `.991` on exam #3. 

