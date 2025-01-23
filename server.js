const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Example Route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// API Route
app.get('/api/data', (req, res) => {
    res.json({ message: 'This is your backend data!' });
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
