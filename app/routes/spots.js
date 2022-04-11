const express = require('express');
const EmployeeController = require('../controllers/spots');
const router = express.Router();



router.GET('/', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);

        if (body.stadium_ID){
            const result = await EmployeeController.statdiumAllocation(body.stadium_ID);
        }

        if (body.lot_id){
            const result = await EmployeeController.lotAllocation(body.lot_id);
        }

        if (body.is_available){
            const result = await EmployeeController.avalAllocation(body.is_available);
        }
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new employee:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
})