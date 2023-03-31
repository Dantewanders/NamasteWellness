const knex = require('../knex')

exports.showMoodsByUsername = async (username) => {
  
  const userId = (await knex 
  .distinct() // distinct is used to remove duplicate rows
  .from('user') // from is used to specify the table
  .pluck('user_id') // pluck is used to return a single column
  .where ('username', username))[0] // where is used to filter the results

  const moods = await knex('mood').where('user_id', userId) 
  
  return moods
}

exports.createmood = async (mood) => {// this is the mood object that is passed in from the router

  const responses = mood.responses 
  delete mood.responses

  const moodId = await knex('game').insert(game)
  
  const results = await Promise.all(responses.map(async (response) => {
    response.mood_id = moodId
    return await knex('response').insert(response) 
    //console.log (response)
  }))

  return moodId
}