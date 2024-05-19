const express = require('express');
const router = express.Router();
const { authorize } = require('../middleware/authorize');

const { 
    userSignUp,
    userLogin,
    getUser, 
    updateUser, 
    deleteUser,
    getProfileDetails,
    addProfileDetails,
    updateProfileDetails,
    getSavedEvents,
    addSavedEvents,
    updateSavedEvents,
    deleteSavedEvents,
    getSavedVenues,
    addSavedVenues,
    updateSavedVenues,
    deleteSavedVenues,
} = require('../controllers/usersController');

router.route('/signup')
    .post(userSignUp);

router.route('/login')
    .post(userLogin);

router.route('/profile')
    .get(authorize, getUser)
    .put(authorize, updateUser)
    .delete(authorize, deleteUser);

router.route('/profile/details')
    .get(getProfileDetails)
    .post(addProfileDetails)
    .put(updateProfileDetails)

router.route('/profile/saved-events')
    .get(getSavedEvents)
    .post(addSavedEvents)
    .put(updateSavedEvents)
    .delete(deleteSavedEvents);

router.route('/profile/saved-venues')
    .get(getSavedVenues)
    .post(addSavedVenues)
    .put(updateSavedVenues)
    .delete(deleteSavedVenues);

module.exports = router;