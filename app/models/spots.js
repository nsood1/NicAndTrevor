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
    const query = knex(SPOTS_TABLE).where({ stadium_id }).union({ lot_id });
    const result = await query;
    return result;
} 

const andOrAllocation = async(stadium_id, lot_id, is_available) => {
    const query = knex(SPOTS_TABLE).where({ stadium_id }).union({ lot_id }).union({ is_available });
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