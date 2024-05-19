const knex = require("knex")(require("../knexfile"));
const { v4: uuidv4 } = require('uuid');

exports.getEvents = (_req, res) => {
    knex('events')
        .select(
            'events.id',
            'events.event_name',
            'events.event_date',
            'events.start_time',
            'events.sell_through',
            'events.ticket_price',
            'events.price_range',
            'events.ticket_price_currency',
            'events.event_desc',
            'events.event_image',
            'events.event_image_attribution',
            'events.event_image_attribution_link',
            'events.venue_id',
            'venues.venue_name',
            'venues.venue_address',
            'venues.venue_city',
            'venues.venue_postal_code',
            'venues.venue_country',
            'venues.venue_latitude',
            'venues.venue_longitude',
            'venues.venue_email',
        )
        .join('venues', 'events.venue_id', 'venues.id')
        .then((data) => {
            res.status(200).json(data);
    })
        .catch((err) =>
            res.status(400).send(`Error retrieving events`)
    );
};

exports.addEvents = (req, res) => {
    // Validate the request body for required data
    const {
            event_name,
            date,
            venue_id,
            start_time,
            sell_through,
            ticket_price,
            price_range,
            ticket_price_currency,
            description 
        } = req.body

        if (
            !event_name || 
            !date ||
            !venue_id ||
            !start_time ||
            !sell_through ||
            !ticket_price ||
            !ticket_price_currency ||
            !description) {
            return res.status(400).send(`Please make sure to provide all required fields`);
        }

        const newEvent = {
            id: uuidv4(),
            event_name,
            date,
            venue_id,
            start_time,
            sell_through,
            ticket_price,
            price_range,
            ticket_price_currency,
            description,
        }

        knex('events')
            .insert(newEvent)
            .then((data) => {
                const newEventUrl = `events/${newEvent.id}`;
                res.status(201).location(newEventUrl).send(newEventUrl);
            })
            .catch((err) => 
                res.status(400).send(`Error creating event`)
            );
};

exports.getEventsById = (req, res) => {
    knex('events')
        .where({ 'events.id': req.params.id })
        .select(
            'events.id',
            'events.event_name',
            'events.event_date',
            'events.start_time',
            'events.sell_through',
            'events.ticket_price',
            'events.price_range',
            'events.ticket_price_currency',
            'events.event_desc',
            'events.event_image',
            'events.event_image_attribution',
            'events.event_image_attribution_link',
            'events.venue_id',
            'venues.venue_name',
            'venues.venue_address',
            'venues.venue_city',
            'venues.venue_postal_code',
            'venues.venue_country',
            'venues.venue_latitude',
            'venues.venue_longitude',
            'venues.venue_email',
        )
        .join('venues', 'events.venue_id', 'venues.id')
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

exports.updateEventsById = (req, res) => {
    if (
        !req.body.event_name ||
        !req.body.date ||
        !req.body.venue_id ||
        !req.body.start_time ||
        !req.body.sell_through ||
        !req.body.ticket_price ||
        !req.body.ticket_price_currency ||
        !req.body.description
        ) {
        return res.status(400).send(`Please make sure to provide all required fields`);
    }

    knex('events')
        .update(req.body)
        .where({ id: req.params.id })
        .then(() => {
            res.status(200).send(`Event with id: ${req.params.id} has been updated`);
        })
        .catch((err) =>
            res.status(400).send(`Error updating event with id: ${req.params.id}`)
        );
};

exports.deleteEventsById = (req, res) => {
    knex('events')
        .delete()
        .where({ 'events.id': req.params.id })
        .then(() => {
            res.status(204).send(`Event with id: ${req.params.id} has been deleted`);
        })
        .catch((err) =>
            res.status(400).send(`Error deleting event with id: ${req.params.id}`)
        );
};