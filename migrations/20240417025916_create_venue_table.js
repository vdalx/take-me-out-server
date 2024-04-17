/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema.createTable('venues', (table) => {
        table.increments('id').primary();
        table.string('venue').notNullable();
        table.string('venue_address').notNullable();
        table.string('venue_city').notNullable();
        table.string('venue_state');
        table.string('venue_postal_code').notNullable();
        table.string('venue_country').notNullable();
        table.string('venue_email');
        table.decimal('venue_latitude').notNullable();
        table.decimal('venue_longitude').notNullable();
        table.string('venue_phone_number');
        table.integer('venue_likes').notNullable();
        table.timestamp('created').notNullable().defaultTo(knex.fn.now());
        table.timestamp('modified').notNullable().defaultTo(knex.fn.now());
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTable('venues');
};