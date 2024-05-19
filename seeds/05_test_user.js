/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const testUser = require('../seed_data/testUser');

exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert(testUser);
    })
};