const { getJournalsByUsername, addJournal } = require("../controller/journal");
const { authenticate } = require("../middleware/authenticate");

const moods = (app) => {
    app.get('/journal/:username', getJournalsByUsername) // /journal is the destination of the database
    app.post('/journal/new', authenticate, addJournal)
};

module.exports = moods
