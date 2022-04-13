const express = require('express');
const Allocation = require('../models/allocation');

/**
 * https://expressjs.com/en/guide/routing.html#express-router
 * A router is a special Express object that can be used to define how to route and manage
 * requests. We configure a router here to handle a few routes specific to students
 */

const router = express.Router();

// Accepts License, Spot_Num
// -> Null Existing Spot_Num
// -> Creates Vehicle if Doesn't Exist
// -> Updates Existing Vehicle
// If None, Throw Exception
router.post('/', async (req, res, next) => {
    const body = req.body;

    // Null Other Object (If Exists)
    result = await Allocation.requestSpot(body.spot_num);
    if (Object.keys(result).length != 0) {
        result = await Allocation.deleteVehicle(body.spot_num); }

    try {
        result = await Allocation.createVehicle(body.license, body.spot_num);
        result = await Allocation.requestVehicle(body.license);
        return res.status(201).json(result[0]);
    } catch (err) {
        try {
            result = await Allocation.updateVehicle(body.license, body.spot_num);
            result = await Allocation.requestVehicle(body.license);
            return res.status(201).json(result[0]); 
        } catch (err) {
            return res.status(401).json({ message: 'Missing License / Spot Number' });
        }
    }
    next();
})

// Accepts License, Spot_Num
// -> Null Existing Spot_Num
// -> Creates Vehicle if Doesn't Exist
// -> Updates Existing Vehicle
// If None, Throw Exception
router.put('/:spot_num?', async (req, res, next) => {
    const body = req.body;
    const params = req.params;

    // Null Other Object (Extra Error Handling For Param)
    try {
        result = await Allocation.requestSpot(params.spot_num);
        if (Object.keys(result).length != 0) {
            result = await Allocation.deleteVehicle(params.spot_num); }
    } catch (err) { return res.status(401).json({ message: 'Missing Spot Number' }); }

    try {
        result = await Allocation.createVehicle(body.license, params.spot_num);
        result = await Allocation.requestVehicle(body.license);
        return res.status(200).json(result[0]);
    } catch (err) {
        try {
            result = await Allocation.updateVehicle(body.license, params.spot_num);
            result = await Allocation.requestVehicle(body.license);
            return res.status(200).json(result[0]); 
        } catch (err) {
            return res.status(401).json({ message: 'Missing License Number' });
        }
    }
    next();
})

// Delete Spot Number (Make Null, Doesn't Delete Vehicle)
// Note: In Our Implementation, Allocation Spot Is Inside
// Vehicle Table, So We Set Spot_Num To Null Instead!
router.delete('/:spot_num?', async(req, res, next) => {
    try{
        const params = req.params;

        // Check If Spot Not Allocated, Throw Exception If
        result = await Allocation.requestSpot(params.spot_num);
        if (Object.keys(result).length == 0) {
            return res.status(401).json({ message: 'Unallocated Spot Number' }); }

        result = await Allocation.deleteVehicle(params.spot_num);
        return res.status(204).json(result);
    } catch (err) {
        return res.status(401).json({ message: 'Missing Spot Number' });
    }
    next();
})

module.exports = router;
