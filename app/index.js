const express = require('express');
const bodyParser = require('body-parser');

// Import any route handlers here
const employeeRoutes = require('./routes/account');
const sessionRoutes = require('./routes/session');
const allocationRoutes = require('./routes/allocation');
const spotsRoutes = require('./routes/spots')

// Import any middleware here
const { upConnection, downConnection, requestLogs } = require('./middleware/connect');
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

app.use('/session', sessionRoutes);
app.use('/account', employeeRoutes);
app.use('/allocation', allocationRoutes)
app.use('/spots', spotsRoutes);

// App Configured, Listen for Requests
app.listen(port, () => {
    console.log(`This app is listening on port ${port}`);
});
