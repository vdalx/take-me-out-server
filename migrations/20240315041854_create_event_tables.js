/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema.createTable('events', (table) => {
        table.increments('id').primary();
        table.string('event_name').notNullable();
        table.string('event_venue').notNullable();
        table.string('venue_street_address').notNullable();
        table.string('venue_municipality').notNullable();
        table.string('venue_state').notNullable();
        table.string('venue_postal_code').notNullable();
        table.string('venue_country').notNullable();
        table.string('venue_email');
        table.string('venue_phone_number');
        table.specificType('event_location', 'POINT').notNullable();
        table.date('event_date').notNullable();
        table.timestamp('event_start_time').notNullable();
        table.string('event_description').notNullable();
        table.decimal('event_sellthru').notNullable();
        table.integer('event_price_range').notNullable();
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
  .dropTable('events');
};
