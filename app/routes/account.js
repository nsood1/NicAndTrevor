const express = require('express');
const Employee = require('../models/employee');

/**
 * https://expressjs.com/en/guide/routing.html#express-router
 * A router is a special Express object that can be used to define how to route and manage
 * requests. We configure a router here to handle a few routes specific to students
 */

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await Employee.createNewEmployee(body.name, body.password);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new employee:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

module.exports = router;

