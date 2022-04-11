const express = require('express');
const Employee = require('../models/allocation');

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
        const result = await req.models.Employee.allocationData(body.spot_num, body.license);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed :( ', err);
        res.status(500).json({ message: err.toString() }); 
    }

    next();
})

router.put('/', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.Employee.createNewVechicle(body.license, body.type, body.spot_num, body.lot_id);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed :( ', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
})

router.delete('/', async(req, res, next)=> {
    try{

    } catch(err){

    }
})

module.exports = router;
