const knex = require("knex")(require("../knexfile"));

exports.getEvents = (_req, res) => {
    knex('events')
    .select('*')
    .then((data) => {
      res.status(200).json(data);
      console.log(data)
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving events`)
    );
};

exports.addEvents = (req, res) => {

};

exports.getEventsById = (req, res) => {

};

exports.updateEventsById = (req, res) => {

};

exports.deleteEventsById = (req, res) => {

};