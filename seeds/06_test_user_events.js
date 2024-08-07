/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const testUserEvents = require('../seed_data/testUserSavedEvents');

exports.seed = function (knex) {
  return knex('user_events')
    .del()
    .then(function () {
      return knex('user_events').insert(testUserEvents);
    })
};