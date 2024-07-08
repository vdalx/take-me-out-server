const express = require('express');
const router = express.Router();

const { 
    getEvents, 
    addEvents,
    getEventsById,
    updateEventsById,
    deleteEventsById
    } = require('../controllers/eventsController')

router.route('/')
    .get(getEvents)
    .post(addEvents);

router.route('/:id')
    .get(getEventsById)
    .put(updateEventsById)
    .delete(deleteEventsById);

module.exports = router;