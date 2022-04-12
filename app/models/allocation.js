const knex = require('../middleware/knex');

const ALLOCATION_TABLE = 'vehicle';

const allocationData = async (spot_num, license) => {
    const query = knex(ALLOCATION_TABLE).where({ spot_num, license });
    const result = await query;
    return result;
}


const createNewVechicle = async (license, type, spot_num, lot_id) => {
    console.log('Licesnse:', license);
    console.log('type', type);
    console.log('spot_num', spot_num);
    console.log('lot_id', lot_id);


    const query = knex(ALLOCATION_TABLE).insert({ license, type, spot_num, lot_id });
    console.log('Raw query for insert a new vechicle:', query.toString());
    const result = await query;

    return result;
};

const deleteVec = async(allocation_id) => {
    console.log('allocation_id' , allocation_id);
    const query = knex(ALLOCATION_TABLE).del().where({allocation_id});
    const result = await query;
    return result;
}


module.exports = {
    allocationData,
    createNewVechicle,
    deleteVec
};