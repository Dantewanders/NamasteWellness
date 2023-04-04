const { getRandomQuote } = require('../service/quote')

exports.getaRandomQuote = async (req, res) => {
  try {
    const quote = await getRandomQuote();
    res.json(quote);
  } catch (error) {
    console.log(error)
    res.status(500).send("Internal Server Error", error)
  }
}