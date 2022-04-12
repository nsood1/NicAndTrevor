const express = require('express');
const bodyParser = require('body-parser');

// Import Route Handlers Here
const sessionRoutes = require('./routes/session');
const spotsRoutes = require('./routes/spots')
const allocationRoutes = require('./routes/allocation');

// Import Middleware Here
const { authenticateJWT, authenticateWithClaims } = require('./middleware/auth');

// Port 3000 Since SQL Runs 3306
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Add Health Route. Note Argument: next
app.get('/health', (request, response, next) => {
    const responseBody = { status: 'up', port };
    response.json(responseBody);
    next();
});

app.use(sessionRoutes);
app.use(authenticateJWT, spotsRoutes);
app.use('/allocation', authenticateJWT, allocationRoutes)

// App Configured, Listen for Requests
app.listen(port, () => {
    console.log(`This app is listening on port ${port}`);
});
