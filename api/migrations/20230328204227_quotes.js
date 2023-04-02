/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("quotes", function (table) {
    table.increments("quotes_id").primary().unsigned().unique().notNullable();
    table.text("quote").notNullable();
    table.date("dateCreated").notNullable().defaultTo(knex.raw('(CURRENT_DATE())'));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("quotes");
};
