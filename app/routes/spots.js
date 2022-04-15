const express = require('express');
const Spots = require('../models/spots');
const Employee = require('../models/employee');

const router = express.Router();

// If Token, Get Username (User = Token)
router.get('/session', async (req, res, next)  => {
    try {
        const user = req.user;
        process.stdout.write("Parameters: ");
        console.log(user);
        const result = await Employee.findByUserName(user.username);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(401).json({ message: 'Bad Token' });
    }
})

// If Token, Find Spots (Query Parameters)
router.get('/spots', async (req, res, next) => {
    const query = req.query;
    process.stdout.write("Parameters: ");
    console.log(query);
    let result; 

    try {

        // Should Be 8 Queries (One For Each Combination)
        if (query.stadium_id && query.lot_id && query.is_available) {
            result = await Spots.stadiumLotAvailableQuery(query.stadium_id, query.lot_id, query.is_available);
        } 
        else if (query.stadium_id && query.lot_id) {
            result = await Spots.stadiumLotQuery(query.stadium_id, query.lot_id);
        } 
        else if (query.stadium_id && query.is_available) {
            result = await Spots.stadiumAvailableQuery(query.stadium_id, query.is_available);
        } 
        else if (query.lot_id && query.is_available) {
            result = await Spots.lotAvailableQuery(query.lot_id, query.is_available);
        } 
        else if (query.stadium_id) { 
            result = await Spots.stadiumQuery(query.stadium_id);
        }
        else if (query.lot_id) {
            result = await Spots.lotQuery(query.lot_id);
        } 
        else if (query.is_available) {
            result = await Spots.availableQuery(query.is_available);
        } 
        else { result = await Spots.noQuery(); }
        
        return res.status(200).json(result); 
    } catch (err) {
        return res.status(401).json({ message: 'Could Not Execute Query' });
    }
    next();
})

module.exports = router;
