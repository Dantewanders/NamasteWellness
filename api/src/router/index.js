// import routes
const root = require("./root");
const auth = require("./auth");
const user = require("./user");
const mood = require("./journal");

const router = (app) => {
  root(app);
  auth(app);
  user(app);
  mood(app);
};

module.exports = router;
