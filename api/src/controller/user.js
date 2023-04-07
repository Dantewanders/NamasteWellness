const { showUserByUsername, showUserById } = require("../service/user");

exports.getUserByUsername = async (req, res) => {
  try {
    const userByName = await showUserByUsername(req.params.username);
console.log(userByName, "userByName");
    res.json(userByName);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

exports.getUserByToken = async (req, res) => {
  try {
    const userByToken = await showUserById(req.userId);
    res.json(userByToken);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
