require('dotenv').config();
const { v4: uuidv4 } = require('uuid');
const { JWT_KEY } = process.env;
const knex = require('knex')(require('../knexfile'));
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.userSignUp = (req, res) => {
    // Receives newUser data
    const newUser = req.body;

    // Confirms if newUser data has a password and username
    if(!newUser.username) {
        return res.send.status(400).send('Username required for account sign up.')
    }
    if(!newUser.password) {
        return res.send.status(400).send('Password required for account sign up.')
    }

    // One way encryption of password
    newUser.password = bcrypt.hashSync(newUser.password, 10);

    const userObject = {
        id: uuidv4(),
        username: newUser.username,
        email: newUser.username,
        password: newUser.password,
    }

    knex('users')
        .insert(userObject)
        .then(data => {
            return res.status(201).json(true)
        })
        .catch(err => {
            return res.status(500).send('Sever error encountered.');
        })
};

exports.userLogin = (req, res) => {
    const user = req.body;

    if(!user.username) {
        return res.send.status(400).send('Username required for login.')
    }
    if(!user.password) {
        return res.send.status(400).send('Password required for login.')
    }

    // Referencing table and creating token

    knex('users')
        .where({ username: user.username })
        .then(data => {
            if(!bcrypt.compareSync(user.password, data[0].password)) {
                return res.status(400).send('Incorrect password')
            }
            const token = jwt.sign({ userId: data[0].id }, JWT_KEY);
            return res.status(200).json(token);
        })
};

exports.getUser = (req, res) => {
    knex('users')
        .where({ id: req.userId })
        .then(data => {
            const currentUser = {
                username: data[0].username,
                firstName: data[0].first_name,
                lastName: data[0].last_name,
                email: data[0].email,
                phone_number: data[0].phone_number,
                location: data[0].location_city,
                created: data[0].created,
                modified: data[0].modified
            };
        return res.status(200).json(currentUser);
    }).catch(err => {
        return res.status(500).send('Server error encountered')
    })
};

exports.updateUser = (req, res) => {
   if (
        !req.body.username ||
        !req.body.email
    ) {
        return res.status(400).send(`Please make sure to provide all required fields`);
    }

    knex('users')
        .update(req.body)
        .where({ id: req.userId })
        .then(() => {
            res.status(200).send(`User has been updated`);
        })
        .catch((err) =>
            res.status(400).send(`Error updating user`)
        );
};

exports.deleteUser = (req, res) => {

};

exports.getProfileDetails = (req, res) => {

};

exports.addProfileDetails = (req, res) => {

};

exports.updateProfileDetails = (req, res) => {
    
};

exports.getSavedEvents = (req, res) => {
    knex('user_events')
        .where({ 'user_events.user_id': req.params.id })
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

// user_event_status to be either saved or confirmed
exports.addSavedEvents = (req, res) => {
    const {
        user_event_status,
        user_id,
        event_id
    } = req.body

    if (
        !user_event_status ||
        !user_id ||
        !event_id
        ) {
            return res.status(400).send(`Please make sure to provide all required fields`);
        }

    const newSavedEvent = {
        id: uuidv4(),
        user_event_status,
        user_id,
        event_id
    }

    knex('user_events')
    .insert(newSavedEvent)
    .then((data) => {
        res.status(201).send(`Event with id: ${req.body.event_id} has been updated`);
    })
    .catch((err) => res.status(400).send(`Error creating event`));
};

exports.updateSavedEvents = (req, res) => {
    if (
        !req.body.user_event_status ||
        !req.body.user_id ||
        !req.body.event_id
        ) {
        return res.status(400).send(`Please make sure to provide all required fields`);
    }

    knex('user_events')
        .where({ 'user_events.user_id': req.body.user_id })
        .where({'user_events.event_id': req.body.event_id })
        .update(req.body)
        .then(() => {
            res.status(200).send(`Event with id: ${req.body.event_id} has been updated`);
        })
        .catch((err) =>
            res.status(400).send(`Error updating event with id: ${req.body.event_id}`)
    );
};

exports.deleteSavedEvents = (req, res) => {
    knex('user_events')
        .delete()
        .where({ 'user_events.user_id': req.body.user_id }) //Need to fix this to target event_id
        .then(() => {
            res.status(204).send(`Event with id: ${req.body.event_id} has been deleted`);
        })
        .catch((err) =>
            res.status(400).send(`Error deleting event with id: ${req.body.event_id}`)
        );
};

exports.getSavedVenues = (req, res) => {
    knex('user_venues')
        .where({ 'user_venues.user_id': req.params.id })
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

exports.addSavedVenues = (req, res) => {
    const {
        user_id,
        venue_id
    } = req.body

    if (
        !user_id ||
        !venue_id
        ) {
            return res.status(400).send(`Please make sure to provide all required fields`);
        }

    const newSavedVenue = {
        id: uuidv4(),
        user_id,
        venue_id
    }

    knex('user_venues')
    .insert(newSavedVenue)
    .then((data) => {
        res.status(201).send(`Event with id: ${req.body.venue_id} has been updated`);
    })
    .catch((err) => res.status(400).send(`Error creating event`));
};

exports.updateSavedVenues = (req, res) => {

};

exports.deleteSavedVenues = (req, res) => {
    knex('user_venues')
        .delete()
        .where({ 'user_venues.user_id': req.body.user_id }) //Need to fix this to target event_id
        .then(() => {
            res.status(204).send(`Event with id: ${req.body.venue_id} has been deleted`);
        })
        .catch((err) =>
            res.status(400).send(`Error deleting event with id: ${req.body.venue_id}`)
        );
};