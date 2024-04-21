require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/usersRoutes');
const eventRoutes = require('./routes/eventsRoutes');
const venueRoutes = require('./routes/venueRoutes');
const contentRoutes = require('./routes/contentRoutes');

const PORT = process.env.PORT || 5050;
const { CORS_ORIGIN } = process.env;

app.use(cors({ CORS_ORIGIN }));
app.use(express.json());

app.use('/users', userRoutes);
app.use('/events', eventRoutes);
app.use('/venues', venueRoutes);
app.use('/content', contentRoutes);

app.get('/', (req, res) => {
    return res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})