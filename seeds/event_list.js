/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const eventList = require('../seed_data/eventListData');

exports.seed = function (knex) {
  return knex('events')
    .del()
    .then(function () {
      return knex('events').insert(eventList);
    })
};