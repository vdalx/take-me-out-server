/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const testUserVenues = require('../seed_data/testUserSavedVenues');

exports.seed = function (knex) {
  return knex('user_venues')
    .del()
    .then(function () {
      return knex('user_venues').insert(testUserVenues);
    })
};