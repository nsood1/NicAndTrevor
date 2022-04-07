const express = require('express');
const bodyParser = require('body-parser');

// Port 3000 Since SQL Runs 3306
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Add Health Route. Note Argument: next
app.get('/health', (request, response, next) => {
    const responseBody = { status: 'up', port };
    response.json(responseBody);

    // Continue Through Middleware Chain
    next();

});

// App Configured, Listen for Requests
app.listen(port, () => {
    console.log(`This app is listening on port ${port}`);
});
