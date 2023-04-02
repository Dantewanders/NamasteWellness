/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("user", function (table) {
    table.increments("user_id").primary().unsigned().unique().notNullable();
    table.string("email").notNullable();
    table.string("username").notNullable().unique();
    table.string("password").notNullable();
    table.date("dateCreated").notNullable().defaultTo(knex.raw('(CURRENT_DATE())'));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user");
};
