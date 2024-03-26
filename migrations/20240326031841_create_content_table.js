/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('content', (table) => {
        table.increments('id').primary();
        table.string('article_name').notNullable();
        table.string('article_author').notNullable();
        table.date('article_date').notNullable();
        table.string('article_location');
        table.string('article_likes').notNullable();
        table.string('article_tags');
        table.string('article_body', [1600]).notNullable();
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
