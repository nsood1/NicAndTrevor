const express = require('express');
const EmployeeController = require('../controllers/employee');

/**
 * https://expressjs.com/en/guide/routing.html#express-router
 * A router is a special Express object that can be used to define how to route and manage
 * requests. We configure a router here to handle a few routes specific to students
 */

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        const body = req.body;
        const result = await EmployeeController.authenticateEmployee(body.name, body.password);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new employee:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
})


router.get('/', async (req, res, next)  => {
    try {
        const employee = req.employee;
        const result = await Employee.findByName(employee.name);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current employee:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

module.exports = router;
