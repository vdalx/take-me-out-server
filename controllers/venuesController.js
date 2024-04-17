const knex = require("knex")(require("../knexfile"));

exports.getVenues = (_req, res) => {
    knex('venues')
    .select('*')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => 
      res.status(400).send(`Error retrieving events`)
    );
};

exports.addVenues = (req, res) => {

};

exports.getVenuesById = (req, res) => {

};

exports.updateVenuesById = (req, res) => {

};

exports.deleteVenuesById = (req, res) => {

};