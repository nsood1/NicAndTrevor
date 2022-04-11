const knex = require('../middleware/knex');

const SPOTS_TABLE = 'parking_spot';
const EVENTS_TABLE = 'parking_lot'

const statdiumAllocation = async (staduiumID) => {
    const query = knex(EVENTS_TABLE).where({ staduiumID });
    const result = await query;
    return result;
}

const lotAllocation = async (lot_id) => {
    const query = knex(SPOTS_TABLE).where({ lot_id });
    const result = await query;
    return result;
}

const avalAllocation = async (is_available) => {
    const query = knex(SPOTS_TABLE).where({ is_available = true });
    const result = await query;
    return result;
}

module.exports = {
    statdiumAllocation,
    lotAllocation,
    avalAllocation
}