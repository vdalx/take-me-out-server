/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const contentList = require('../seed_data/contentData');

exports.seed = function (knex) {
  return knex('content')
    .del()
    .then(function () {
      return knex('content').insert(contentList);
    })
};
