const knex = require('../middleware/knex');

const VEHICLE_TABLE = 'vehicle';

// Creates New Vehicle With Allocation (Spot Number)
const createVehicle = async (license, spot_num) => {
    const query = knex(VEHICLE_TABLE).insert({ license, spot_num });
    const result = await query;
    return result;
};

// Finds Allocation of Vehicle (License Identifier)
const requestVehicle = async (license) => {
    const query = knex(VEHICLE_TABLE).where({ license });
    const result = await query;
    return result;
}

// Finds Allocation of Vehicle (Spot Identifier)
const requestSpot = async (spot_num) => {
    const query = knex(VEHICLE_TABLE).where({ spot_num });
    const result = await query;
    return result;
}

// Updates Vehicle With New Allocation (Spot Number)
const updateVehicle = async (license, spot_num) => {
    const query = knex(VEHICLE_TABLE).where({ license }).update({ spot_num });
    const result = await query;
    return result;
};

// Deletes (Nullifies) Allocation Number (Spot Number)
// Code To Delete Vehicle Entirely, Not Intended!
// const query = knex(VEHICLE_TABLE).where({ spot_num }).del();
const deleteVehicle = async(spot_num) => {
    const query = knex(VEHICLE_TABLE).where({ spot_num }).update({ spot_num: null });
    result = await query;
    return result;
}

// Ayy Look Its CRUD
module.exports = {
    createVehicle,
    requestVehicle,
    requestSpot,
    updateVehicle,
    deleteVehicle
};
