/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.uuid('id').primary();
        table.string('username').unique().notNullable();
        table.string('email').unique().notNullable();
        table.string('password').notNullable();
        table.string('first_name');
        table.string('last_name');
        table.string('phone_number');
        table.string('location_city');
        table.string('location_country');
        table.decimal('location_latitude');
        table.decimal('location_longitude');
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
    .dropTable('users');
};