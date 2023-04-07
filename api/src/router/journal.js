const {
  getJournalsByUsername,
  addJournal,
  getUserJournalForToday,
  deleteUserJournal,
} = require("../controller/journal");
const { authenticate } = require("../middleware/authenticate");

const moods = (app) => {
  //app.get('/journal/:username', getJournalsByUsername) // /journal is the destination of the database
  app.post("/journal/new", authenticate, addJournal);
  app.get("/journal", authenticate, getUserJournalForToday);
  app.delete("/journal/:journal_id", authenticate, deleteUserJournal);
};

module.exports = moods;
