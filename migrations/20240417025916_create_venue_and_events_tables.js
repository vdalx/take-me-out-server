/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema
        .createTable('venues', (table) => {
            table.uuid('id').primary();
            table.string('venue_name').notNullable();
            table.string('address').notNullable();
            table.string('city').notNullable();
            table.string('state');
            table.string('postal_code').notNullable();
            table.string('country').notNullable();
            table.decimal('latitude').notNullable();
            table.decimal('longitude').notNullable();
            table.string('email');
            table.string('phone_number');
            table.string('image');
            table.string('image_attribution');
            table.string('image_attribution_link');
            table.integer('likes').notNullable();
            table.timestamp('created').notNullable().defaultTo(knex.fn.now());
            table.timestamp('modified').notNullable().defaultTo(knex.fn.now());
        })
        .createTable('events', (table) => {
            table.uuid('id').primary();
            table.string('event_name').notNullable();
            table.date('date').notNullable();
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
            table.string('description').notNullable();
            table.string('image');
            table.string('image_attribution');
            table.string('image_attribution_link');
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