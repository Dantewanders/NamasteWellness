const { getJournalsByUsername, addJournal, getUserJournalForToday } = require("../controller/journal");
const { authenticate } = require("../middleware/authenticate");

const moods = (app) => {
    //app.get('/journal/:username', getJournalsByUsername) // /journal is the destination of the database
    app.post('/journal/new', authenticate, addJournal)
    app.get('/journal/today', authenticate, getUserJournalForToday)
};

module.exports = moods
