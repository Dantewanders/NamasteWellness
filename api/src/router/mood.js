const { getMoodsByUsername, addMood } = require("../controller/mood");
const { authenticate } = require("../middleware/authenticate");

const moods = (app) => {
    app.get('/mymood/:username', getMoodsByUsername)
    app.post('/mymood/results', authenticate, addMood)
};

module.exports = moods
