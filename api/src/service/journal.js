const knex = require('../knex')

exports.showJournalsByUsername = async (username) => {
  
  const userId = (await knex 
  .distinct() // distinct is used to remove duplicate rows
  .from('user') // from is used to specify the table
  .pluck('user_id') // pluck is used to return a single column
  .where ('username', username))[0] // where is used to filter the results

  const moods = await knex('mood').where('user_id', userId) 
  
  return moods
}

exports.createJournal = async (journal) => {// this is the mood object that is passed in from the router

  const createdJournal = await knex('journal').insert(journal)

  return createdJournal
}