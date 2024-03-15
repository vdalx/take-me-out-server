const jwt = require('jsonwebtoken');
require('dotenv').config();
const { JWT_KEY } = process.env;

const authorize = (req, res, next) => {
    let token = null;

    if(req.headers.authorization) {
        token = req.headers.authorization.split(" ").pop();
    }
    if(token) {
        jwt.verify(token, JWT_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).send('Authorization required for this endpoint 1')
            } else {
                req.userId = decoded.userId;
                next();
            }
        })
    } else {
        return res.status(401).send('Authorization required for this endpoint 2')
    }
}

module.exports = { authorize }