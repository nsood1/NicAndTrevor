const express = require('express');
const Spots = require('../models/spots');
const Employee = require('../models/employee');

const router = express.Router();

// If Token, Get Username (User = Token)
router.get('/session', async (req, res, next)  => {
    try {
        const user = req.user;
        const result = await Employee.findByUserName(user.username);
        return res.status(200).json(result);
    } catch (err) {
        return res.sendStatus(401).json({ message: 'Bad Token' });
    }
})

// If Token, Find Spots (Query Parameters)
router.get('/spots', async (req, res, next) => {
    try {
        const body = req.query;
        let result; 
        if (body.stadium_ID){
            result = await EmployeeController.stadiumAllocation(body.stadium_ID);
        }

        if (body.lot_id){
            result = await EmployeeController.lotAllocation(body.lot_id);
        }

        if (body.is_available){
            result = await EmployeeController.avalAllocation(body.is_available);
        }
        res.status(200).json(result);
    } catch (err) {
        console.error('Failed to query spots:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
})

module.exports = router;
