const express = require('express');
const EmployeeController = require('../models/spots');

const router = express.Router();

router.get('/spots', async (req, res, next) => {
 
    try {
        console.log(body);
        const body = req.query;
        let result; 
        if (body.stadium_ID){
            result = await EmployeeController.stadiumAllocation(body.stadium_ID);
            response.json(result);
        }

        if (body.lot_id){
            result = await EmployeeController.lotAllocation(body.lot_id);
            response.json(result);
        }

        if (body.is_available){
            result = await EmployeeController.avalAllocation(body.is_available);
            response.json(result);
        }
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to query spots:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
})

router.get('/session', async (req, res, next)  => {
    try {
        const token = req.token;
        // const result = await Employee.findByUserName(employee.username);
        console.log(token);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current employee:', err);
        res.sendStatus(500).json({ message: err.toString() });
    }
})

module.exports = router;
