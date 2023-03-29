// import routes
const root = require("./root");
const auth = require("./auth");
const user = require("./user");

const router = (app) => {
  root(app);
  auth(app);
  user(app);
};

module.exports = router;
