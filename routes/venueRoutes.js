const express = require('express');
const router = express.Router();

const { 
    getVenues, 
    addVenues,
    getVenuesById,
    updateVenuesById,
    deleteVenuesById
    } = require('../controllers/venuesController')

router.route('/')
    .get(getVenues)
    .post(addVenues);

router.route('/:id')
    .get(getVenuesById)
    .put(updateVenuesById)
    .delete(deleteVenuesById);

module.exports = router;