/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema
        .createTable('venues', (table) => {
            table.uuid('id').primary();
            table.string('venue_name').notNullable();
            table.string('venue_address').notNullable();
            table.string('venue_city').notNullable();
            table.string('venue_state');
            table.string('venue_postal_code').notNullable();
            table.string('venue_country').notNullable();
            table.decimal('venue_latitude').notNullable();
            table.decimal('venue_longitude').notNullable();
            table.string('venue_email');
            table.string('venue_phone_number');
            table.string('venue_image');
            table.string('venue_image_attribution');
            table.string('venue_image_attribution_link');
            table.integer('venue_likes').notNullable();
            table.timestamp('created').notNullable().defaultTo(knex.fn.now());
            table.timestamp('modified').notNullable().defaultTo(knex.fn.now());
        })
        .createTable('events', (table) => {
            table.uuid('id').primary();
            table.string('event_name').notNullable();
            table.date('event_date').notNullable();
            table
              .uuid('venue_id')
              .notNullable()
              .references('id')
              .inTable('venues')
              .onUpdate('CASCADE')
              .onDelete('CASCADE');
            table.time('start_time').notNullable();
            table.decimal('sell_through').notNullable();
            table.decimal('ticket_price').notNullable();
            table.integer('price_range');
            table.string('ticket_price_currency').notNullable();
            table.string('event_desc').notNullable();
            table.string('event_image');
            table.string('event_image_attribution');
            table.string('event_image_attribution_link');
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
  .dropTable('events')
  .dropTable('venues');
};