/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  const bcrypt = require('bcrypt')
  
  // Deletes ALL existing entries 
  await knex('user').insert([
    {
      user_id: 1,
      email: 'dantet@gmail.com',
      username: 'dante',
      password: await bcrypt.hash('wassup', 10),
      dateCreated: new Date(Date.now())
    },
    {
      user_id: 2,
      email: 'test@gmail.com',
      username: 'wanderer',
      password: await bcrypt.hash('kiliman', 10),
      dateCreated: new Date(Date.now())
    },
    {
      user_id: 6,
      email: 'old@msn.com',
      username: 'oldman',
      password: await bcrypt.hash('testey', 10),
      dateCreated: new Date(Date.now())
    }
  ]);
};

