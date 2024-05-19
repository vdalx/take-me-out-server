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
            table.string('post_desc').notNullable();
            table.text('post_body', ["longtext"]).notNullable();
            table.string('post_image');
            table.string('post_image_attribution');
            table.string('post_image_attribution_link');
            table.timestamp('created').notNullable().defaultTo(knex.fn.now());
            table.timestamp('modified').notNullable().defaultTo(knex.fn.now());
        }).createTable('content_lists', (table) => {
            table.uuid('id').primary();
            table
                .uuid('content_id')
                .notNullable()
                .references('id')
                .inTable('content')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table
                .uuid('event_id')
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
        .dropTable('content_lists')
        .dropTable('content');
};