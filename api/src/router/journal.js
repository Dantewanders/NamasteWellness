const { getJournalsByUsername, addJournal } = require("../controller/journal");
const { authenticate } = require("../middleware/authenticate");

const moods = (app) => {
    app.get('/journal/:username', getJournalsByUsername)
    app.post('/journal/new', authenticate, addJournal)
};

module.exports = moods
