const express = require('express');
const router = express.Router();

const { 
    getContent, 
    addContent,
    getContentById,
    updateContentById,
    deleteContentById
    } = require('../controllers/contentController')

router.route('/')
    .get(getContent)
    .post(addContent);

router.route('/:id')
    .get(getContentById)
    .put(updateContentById)
    .delete(deleteContentById);

module.exports = router;