const root = (app) => {
  app.get("/", (req, res) => {
    res.json({ message: "Namaste World!" });
  });
};

module.exports = root;
