const knex = require('../middleware/knex');

const ALLOCATION_TABLE = 'vehicle';

// Finds Allocation of Vehicle
const allocationData = async (license) => {
    const query = knex(ALLOCATION_TABLE).where({ license });
    console.log('Search Query:', query.toString());
    const result = await query;
    return result;
}

// Creates New Vehicle With Allocation (Spot Number)
const createVehicle = async (license, spot_num) => {
    const query = knex(ALLOCATION_TABLE).insert({ license, spot_num });
    console.log('Insert Query:', query.toString());
    const result = await query;
    return result;
};

// Updates Vehicle With New Allocation (Spot Number)
const updateVehicle = async (license, spot_num) => {
    const query = knex(ALLOCATION_TABLE).where({ license }).update({ spot_num });
    console.log('Update Query:', query.toString());
    const result = await query;
    return result;
};

// Deletes Allocation Number (Spot Number)
const deleteVehicle = async(spot_num) => {
    const query = knex(ALLOCATION_TABLE).del().where({ spot_num });
    console.log('Delete Query:', query.toString());
    const result = await query;
    return result;
}

// Ay Look Its CRUD
module.exports = {
    allocationData,
    createVehicle,
    updateVehicle,
    deleteVehicle
};
