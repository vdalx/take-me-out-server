require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');

const PORT = process.env.PORT || 5050;
const { CORS_ORIGIN } = process.env;

app.use(cors({ CORS_ORIGIN }));
app.use(express.json());

app.use('/users', userRoutes);
app.use('/events', eventRoutes);

app.get('/', (req, res) => {
    return res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})