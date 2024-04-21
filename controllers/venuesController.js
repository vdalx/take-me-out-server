const knex = require("knex")(require("../knexfile"));
const { v4: uuidv4 } = require('uuid');

exports.getVenues = (_req, res) => {
    knex('venues')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => 
            res.status(400).send(`Error retrieving events`)
        );
};

exports.addVenues = (req, res) => {
    const {
        venue_name,
        address,
        city,
        state,
        postal_code,
        country,
        latitude,
        longitude,
        email,
        phone_number,
        likes
    } = req.body

    if (
        !venue_name ||
        !address ||
        !city ||
        !postal_code ||
        !country ||
        !latitude ||
        !longitude ||
        !likes
        ) {
            return res.status(400).send(`Please make sure to provide all required fields`);
        }

    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const phoneRegex = /(?=\(|\b)(?:\+?1 ?[-.]?)?(?:\(\d{3}\)|\d{3}) ?[-.]? ?\d{3} ?[-.]? ?\d{4}\b/g;

    if(!email.match(emailRegex) || !phone_number.match(phoneRegex)) {
        return res.status(400).send(`Please make sure to provide a valid email address and phone number`);
    }

    const newVenue = {
        id: uuidv4(),
        venue_name,
        address,
        city,
        state,
        postal_code,
        country,
        latitude,
        longitude,
        email,
        phone_number,
        likes
    }

    knex('venues')
        .insert(newVenue)
        .then((data) => {
            const newVenueUrl = `events/${newVenue.id}`;
            res.status(201).location(newVenueUrl).send(newVenueUrl);
        })
        .catch((err) => res.status(400).send(`Error creating event`));
};

exports.getVenuesById = (req, res) => {
    knex('venues')
        .where({ id: req.params.id })
        .then((data) => {
            if(!data.length) {
                return res.status(404).send(`Record with id: ${req.params.id} is not found`);
            }
            res.status(200).json(data[0]);
        })
        .catch((err) =>
            res.status(400).send(`Error retrieveing event with id ${req.params.id}`)
        );
};

exports.updateVenuesById = (req, res) => {
    if (
        !req.body.venue_name ||
        !req.body.address ||
        !req.body.city ||
        !req.body.postal_code ||
        !req.body.country ||
        !req.body.latitude ||
        !req.body.longitude ||
        !req.body.likes
        ) {
            return res.status(400).send(`Please make sure to provide all required fields`);
        }

    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const phoneRegex = /(?=\(|\b)(?:\+?1 ?[-.]?)?(?:\(\d{3}\)|\d{3}) ?[-.]? ?\d{3} ?[-.]? ?\d{4}\b/g;

    if(!req.body.email.match(emailRegex) || !req.body.phone_number.match(phoneRegex)) {
        return res.status(400).send(`Please make sure to provide a valid email address and phone number`);
    }

    knex('venues')
        .update(req.body)
        .where({ id: req.params.id })
        .then(() => {
            res.status(200).send(`Event with id: ${req.params.id} has been updated`);
        })
        .catch((err) =>
            res.status(400).send(`Error updating event with id: ${req.params.id}`)
    );
};

exports.deleteVenuesById = (req, res) => {
    knex('venues')
        .delete()
        .where({ id: req.params.id })
        .then(() => {
            res.status(204).send(`Event with id: ${req.params.id} has been deleted`);
        })
        .catch((err) =>
            res.status(400).send(`Error deleting event with id: ${req.params.id}`)
        );
};