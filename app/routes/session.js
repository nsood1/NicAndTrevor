const express = require('express');
const EmployeeController = require('../controllers/employee');
const Employee = require('../models/employee');

/**
 * https://expressjs.com/en/guide/routing.html#express-router
 * A router is a special Express object that can be used to define how to route and manage
 * requests. We configure a router here to handle a few routes specific to students
 */

const router = express.Router();

// Create Account
router.post('/account', async (req, res, next) => {
    try {
        const body = req.body;
        result = await Employee.createNewEmployee(body.username, body.password);
         if (result.success) {
            result = await Employee.findByUserName(body.username);
            return res.status(201).json(result[0]); } 
         else { return res.status(400).json(result); }
    } catch (err) {
        return res.status(400).json({ message: 'Duplicate Entry' });
    }
    next();
})

// Get Session Token
router.post('/session', async (req, res, next) => {
    try {
        const body = req.body;
        const result = await EmployeeController.authenticateEmployee(body.username, body.password);
        return res.status(201).json(result);
    } catch (err) {
        return res.status(401).json({ message: 'Body Does Not Match Existing Credentials' });
    }
    next();
})

module.exports = router;
