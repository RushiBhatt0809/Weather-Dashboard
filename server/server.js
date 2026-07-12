require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

const API_KEY = process.env.OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

//CUrrent Weather route
app.get('/api/weather', async (req, res) => {
    const { city } = req.query;
    if (!city) return res.status(400).json({ error: "City is required!" });

    try {
        const response = await axios.get(`${BASE_URL}/weather`, {
            params: { q: city, appid: API_KEY, units: 'metric' }
        });
        res.json(response.data);
    } catch (err) {
        if (err.response?.status === 404) {
            return res.status(404).json({ error: "City  not found." });
        }
        res.status(500).json({ error: "Something went wrong." });
    }
});

//5-day forecast route
app.get('/api/forecast', async (req, res) => {
    const { city } = req.query;
    if (!city) return res.status(400).json({ error: "City is required!" });

    try {
        const response = await axios.get(`${BASE_URL}/forecast`, {
            params: { q: city, appid: API_KEY, units: 'metric' }
        });
        res.json(response.data);
    } catch (err) {
        if (err.response?.status === 404) {
            return res.status(404).json({ error: "City  not found." });
        }
        res.status(500).json({ error: "Something went wrong." });
    }
});


const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log(`Server is running on ${port}`);

});