const knex = require("../knex");
const bcrypt = require("bcrypt");

exports.createUser = async (userData) => {
  const { username, password } = userData;

  // Hash the password with 10 rounds of salt
  const hash = await bcrypt.hash(password, 10);

  // Insert the user into the database
  const result = await knex("user").insert({
    ...userData,
    username: username,
    password: hash, //store the hash. DO NOT store a plaintext password!
  });

  // Get the newly created user
  const user = await knex("user")
    .select("*")
    .where("user_id", result[0])
    .first();
  return user;
};

exports.showUserByUsername = async (username) => {
  // Find the first user in the database with the username
  const user = await knex("user").where("username", username).first();
  return user;
};

exports.showUserById = async (id) => {
  const user = await knex("user").where("user_id", id).first();
  return user;
};

//create a service to update the user's password
exports.updatePassword = async (id, password) => {
  const hash = await bcrypt.hash(password, 10);
  const result = await knex("user").where("user_id", id).update({
    password: hash,
  });

  return result;
};
