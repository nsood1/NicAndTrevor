const knex = require('../middleware/knex');

const SPOTS_TABLE = 'parking_spot';
const LOT_TABLE = 'parking_lot';


const stadiumAllocation = async (stadium_id) => {
    const query = knex(LOT_TABLE).where({ stadium_id });
    const result = await query;
    return result;
}

const lotAllocation = async (lot_id) => {
    const query = knex(SPOTS_TABLE).where({ lot_id });
    const result = await query;
    return result;
}

const avalAllocation = async (is_available) => {
    const query = knex(SPOTS_TABLE).where({ is_available });
    const result = await query;
    return result;
}

const filterStadiumLot = async (stadium_id, lot_id) => {
    //Option 1
    const query = knex(LOT_TABLE).where({ stadium_id }).join(SPOTS_TABLE).where({lot_id});

    //Option 2
    const query = knex(SPOTS_TABLE).join('parking_lot', 'parking_lot.stadium_id', 'parking_spot.lot_id' ).where({stadium_id, lot_id})
   
    const result = await query;
    return result;
} 

const andOrAllocation = async(stadium_id, lot_id, is_available) => {
    //option 1
    const query = knex(LOT_TABLE).where({ stadium_id }).join(SPOTS_TABLE).where({lot_id, is_available});

    //option 2
    const query = knex(SPOTS_TABLE).join('parking_lot', 'parking_lot.stadium_id', 'parking_spot.lot_id' ).where({stadium_id, lot_id, is_available})

    const result = await query;
    return result;
}

module.exports = {
    stadiumAllocation,
    lotAllocation,
    avalAllocation,
    filterStadiumLot,
    andOrAllocation
}