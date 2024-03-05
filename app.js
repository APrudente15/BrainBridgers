const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger');

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

app.get(
    // Get a student's current school day
    '/students/:id/schooldays/current',
    schoolDayController.getCurrentSchoolDayForStudent
);

app.patch(
    // Update the 'confidence' score for a particular lesson
    '/lessons/:id/confidence',
    lessonController.updateConfidence
)

module.exports = app;