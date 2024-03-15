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
    deleteProfileDetails,
    getSavedEvents,
    addSavedEvents,
    updateSavedEvents,
    deleteSavedEvents
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
    .delete(deleteProfileDetails);

router.route('/events/saved')
    .get(getSavedEvents)
    .post(addSavedEvents)
    .put(updateSavedEvents)
    .delete(deleteSavedEvents);

module.exports = router;