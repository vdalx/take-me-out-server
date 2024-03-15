const express = require('express');
const router = express.Router();

const { 
    getEvents, 
    addEvents,
    getEventsById,
    updateEventsById,
    deleteEventsById
    } = require('../controllers/eventsController')

router.route('/events')
    .get(getEvents)
    .post(addEvents);

router.route('events/:id')
    .get(getEventsById)
    .put(updateEventsById)
    .delete(deleteEventsById);

module.exports = router;