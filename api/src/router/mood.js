const { getMoodsByUsername, addMood } = require("../controller/mood");
const { authenticate } = require("../middleware/authenticate");

const mood = (app) => {
    app.get('/mood/:username', getMoodsByUsername)
    app.post('/mood/results', authenticate, addMood)
};

module.exports = mood;
