/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const contentEventList = require('../seed_data/contentListData');

exports.seed = function (knex) {
  return knex('content_lists')
    .del()
    .then(function () {
      return knex('content_lists').insert(contentEventList);
    })
};