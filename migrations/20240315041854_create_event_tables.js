/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema.createTable('events', (table) => {
        table.increments('id').primary();
        table.string('event_name').notNullable();
        table.string('event_venue').notNullable();
        table.string('event_venue_address').notNullable();
        table.string('event_venue_city').notNullable();
        table.string('event_venue_state');
        table.string('event_venue_postal_code').notNullable();
        table.string('event_venue_country').notNullable();
        table.string('event_venue_email');
        table.decimal('event_venue_latitude').notNullable();
        table.decimal('event_venue_longitude').notNullable();
        table.string('event_venue_phone_number');
        table.specificType('event_location', 'POINT');
        table.date('event_date').notNullable();
        table.time('event_start_time').notNullable();
        table.decimal('event_sell_through').notNullable();
        table.decimal('event_ticket_price');
        table.integer('event_price_range');
        table.string('event_ticket_price_currency').notNullable();
        table.string('event_description').notNullable();
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
