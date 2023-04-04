const knex = require('../knex')

exports.getRandomQuote = async () => {
    const quote = await knex('quotes').orderByRaw('RAND()').limit(1)
    return quote;
  }