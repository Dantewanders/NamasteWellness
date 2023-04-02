/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("journal", function (table) {
    table.increments("journal_id").primary().unsigned().unique().notNullable();
    table.string("mood").notNullable();
    table.string("energy").notNullable();
    table.text("thoughts");
    table.integer("sleepDuration").notNullable();
    table.date("dateCreated").notNullable().defaultTo(knex.raw('(CURRENT_DATE())'));
    table
      .integer("user_id")
      .unsigned()
      .references("user_id")
      .inTable("user")
      .notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("journal");
};
