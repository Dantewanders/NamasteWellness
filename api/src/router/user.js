const { getUserByUsername, getUserByToken } = require("../controller/user");
const { authenticate } = require("../middleware/authenticate");

const user = (app) => {
  app.get("/user/token", authenticate, getUserByToken);
  app.get("/user/username/:username", getUserByUsername);
};

module.exports = user;
