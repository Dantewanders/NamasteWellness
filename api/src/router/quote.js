const { getaRandomQuote } = require("../controller/quote");

const quotes = (app) => {
  app.get("/quote/today", getaRandomQuote);
};

module.exports = quotes;
