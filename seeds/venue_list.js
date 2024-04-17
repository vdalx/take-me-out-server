/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const venueList = require('../seed_data/venueData');

exports.seed = function (knex) {
  return knex('venues')
    .del()
    .then(function () {
      return knex('venues').insert(venueList);
    })
};