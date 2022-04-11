const knex = require('../middleware/knex');

const SPOTS_TABLE = 'parking_spot';
const EVENTS_TABLE = 'parking_lot'

const stadiumAllocation = async (stadiumID) => {
    const query = knex(EVENTS_TABLE).where({ stadiumID });
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

module.exports = {
    stadiumAllocation,
    lotAllocation,
    avalAllocation
}