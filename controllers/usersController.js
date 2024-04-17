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

    knex('users').insert(userObject).then(data => {
        return res.status(201).json(true)
    }).catch(err => {
        return res.status(500).send('Sever error encountered.');
    })
}

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

}

exports.deleteUser = (req, res) => {

};

exports.getProfileDetails = (req, res) => {

}

exports.addProfileDetails = (req, res) => {

}

exports.updateProfileDetails = (req, res) => {
    
}

exports.getSavedEvents = (req, res) => {

}

exports.addSavedEvents = (req, res) => {

}

exports.updateSavedEvents = (req, res) => {
    
}

exports.deleteSavedEvents = (req, res) => {
    
}