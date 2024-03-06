const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger');

const studentController = require('./controllers/student');
const schoolDayController = require('./controllers/schoolDay');
const lessonController = require('./controllers/lesson');

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.get(
    '/',
    (req, res) => {
        res.send('Hello World');
    }
);

app.post(
    '/students/login',
    studentController.login
)

app.get(
    // Get a student's current school day
    '/students/:id/schooldays/current',
    schoolDayController.getCurrentSchoolDayForStudent
);

app.get(
    // Get all lessons for a particular school day
    '/schooldays/:id/lessons',
    lessonController.getLessonsForSchoolDay
);

app.get(
    // Get all lessons for a particular student
    '/students/:id/lessons',
    lessonController.getLessonsForStudent
);

app.patch(
    // Update the 'confidence' score for a particular lesson
    '/lessons/:id/confidence',
    lessonController.updateConfidence
);

app.patch(
    // Update the 'enjoyment' score for a particular lesson
    '/lessons/:id/enjoyment',
    lessonController.updateEnjoyment
);

module.exports = app;