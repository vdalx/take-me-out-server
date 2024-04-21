/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema
        .createTable('user_events', (table) => {
            table.uuid('id').primary();
            table.string('user_event_status').notNullable();
            table
                .uuid('user_id')
                .notNullable()
                .references('id')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table
                .uuid('event_id')
                .notNullable()
                .references('id')
                .inTable('events')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
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
        .dropTable('user_events')
};