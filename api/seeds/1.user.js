/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  const bcrypt = require('bcrypt')
  
  await knex('user').insert([
    {
      user_id: 1,
      first_name:'Dante',
      last_name:'Alighieri',
      date_of_birth: new Date(1265,05,21),
      state:'FL',
      email: 'dantet@gmail.com',
      username: 'dante',
      password: await bcrypt.hash('wassup', 10),
      dateCreated: new Date(Date.now())
    },
    {
      user_id: 2,
      first_name:'John',
      last_name:'Taylor',
      date_of_birth: new Date(1973,03,19),
      state:'CO',
      email: 'test@gmail.com',
      username: 'wanderer',
      password: await bcrypt.hash('kiliman', 10),
      dateCreated: new Date(Date.now())
    },
    {
      user_id: 6,
      first_name:'John',
      last_name:'Doe',
      date_of_birth: new Date(1990,03,19),
      state:'CA',
      email: 'old@msn.com',
      username: 'oldman',
      password: await bcrypt.hash('testey', 10),
      dateCreated: new Date(Date.now())
    }
  ]);
};

