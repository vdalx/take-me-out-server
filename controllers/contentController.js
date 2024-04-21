const knex = require("knex")(require("../knexfile"));
const { v4: uuidv4 } = require('uuid');

exports.getContent = (_req, res) => {
    knex('content')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) =>
            res.status(400).send(`Error retrieving events`)
    );
};

exports.addContent = (req, res) => {

};

exports.getContentById = (req, res) => {
    knex('content')
        .where({ id: req.params.id })
        .then((data) => {
            if(!data.length) {
                return res.status(404).send(`Record with id: ${req.params.id} is not found`);
            }
            res.status(200).json(data[0]);
        })
        .catch((err) =>
            res.status(400).send(`Error retrieveing content with id ${req.params.id}`)
        );
};

exports.updateContentById = (req, res) => {

};

exports.deleteContentById = (req, res) => {
    knex('content')
        .delete()
        .where({ id: req.params.id })
        .then(() => {
            res.status(204).send(`Content with id: ${req.params.id} has been deleted`);
        })
        .catch((err) =>
            res.status(400).send(`Error deleting content with id: ${req.params.id}`)
        );
};