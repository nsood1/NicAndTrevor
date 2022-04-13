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
    const query = req.query;
    let result; 

    try {

        if (query.stadium_id, query.lot_id, query.is_available) {
            result = await Spots.andOrAllocation(query.stadium_id, query.lot_id, query.is_available);
        } else if (query.stadium_id, query.lot_id) {
            result = await Spots.filterStadiumLot(query.stadium_ID, query.lot_id);
        } else if (query.stadium_id) { 
            result = await Spots.stadiumAllocation(query.stadium_id);
        } else if (query.lot_id) {
            result = await Spots.lotAllocation(query.lot_id);
        } else if (query.is_available) {
            result = await Spots.avalAllocation(query.is_available);
        } res.status(200).json(result); 

    } catch (err) {
        res.status(401).json({ message: 'Failed Query' });
    }
    next();
})

module.exports = router;
