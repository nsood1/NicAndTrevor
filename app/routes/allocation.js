const express = require('express');
const Allocation = require('../models/allocation');

/**
 * https://expressjs.com/en/guide/routing.html#express-router
 * A router is a special Express object that can be used to define how to route and manage
 * requests. We configure a router here to handle a few routes specific to students
 */

const router = express.Router();

// Accepts License, Spot_Num
// -> Creates Vehicle if Doesn't Exist
// -> Updates Existing Vehicle
// If Neither, Throw Exception
router.post('/', async (req, res, next) => {
    const body = req.body;
    try {
        result = await Allocation.createVehicle(body.license, body.spot_num);
        result = await Allocation.allocationData(body.license);
        return res.status(201).json(result[0]);
    } catch (err) {
        try {
            result = await Allocation.updateVehicle(body.license, body.spot_num);
            result = await Allocation.allocationData(body.license);
            return res.status(201).json(result[0]); 
        } catch (err) {
            return res.status(401).json({ message: 'Missing License/Spot Number' });
        }
    }
    next();
})

router.put('/', async (req, res, next) => {
    try {
        const body = req.body;
        const result = await Allocation.updateVechicle(body.license, body.spot_num);
        return res.status(201).json(result);
    } catch (err) {
        console.error('Could Not Update Spot:', err);
        return res.status(401).json({ message: err.toString() });
    }
    next();
})

router.delete('/', async(req, res, next) => {
    try{
        const body = req.query;
        const result = await Employee.deleteVec(body.spot_num);
        result.delete;
        return res.status(201).json(result);
    } catch(err){
        console.error('Could Not Delete Spot:', err);
        return res.status(401).json({ message: err.toString() });
    }
    next();
})

module.exports = router;
