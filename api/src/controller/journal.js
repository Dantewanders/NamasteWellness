const {
  showJournalsByUsername,
  createJournal,
  getuserJournalByDate,
  deleteUserJournal,
} = require("../service/journal");

exports.getJournalsByUsername = async (req, res) => {
  try {
    const moods = await showJournalsByUsername(req.params.username);

    res.json(moods);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.addJournal = async (req, res) => {
  console.log(req.body);

  const journalPayload = {
    // payload offers a way to add data to carry over to the service
    ...req.body, // spread operator
    user_id: req.userId,
  };

  try {
    const result = await createJournal(journalPayload);

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.getUserJournalForToday = async (req, res) => {
  const { date } = req.query;
  console.log(date, "today");
  try {
    console.log("i got called");
    const journal = await getuserJournalByDate(req.userId, date);
    res.json(journal);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error", error);
  }
};

exports.deleteUserJournal = async (req, res) => {
  const { journal_id } = req.params;
  try {
    console.log("i got called");
    const journal = await deleteUserJournal(req.userId, journal_id);
    res.json(journal);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error", error);
  }
};
