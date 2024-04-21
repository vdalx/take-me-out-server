/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('content', (table) => {
            table.uuid('id').primary();
            table.string('post_name').notNullable();
            table.string('post_author');
            table.date('post_date').notNullable();
            table.string('post_location').notNullable();
            table.string('post_likes').notNullable();
            table.string('post_tags');
            table.string('post_desc').notNullable();
            table.string('post_body', [1600]).notNullable();
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
  .dropTable('content');
};
