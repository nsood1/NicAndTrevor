const knex = require('../middleware/knex');

const SPOTS_TABLE = 'parking_spot';
const LOTS_TABLE = 'parking_lot';

// Query: 'select * from `parking_spot`'
const noQuery = async () => {
    const query = knex(SPOTS_TABLE);
    const result = await query;
    return result;
}

// Query: 'select * from `parking_spot` inner join `parking_lot` on `parking_spot`.`lot_id` = `parking_lot`.`id` where `stadium_id` = ?'
const stadiumQuery = async (s_id) => {
    const query = knex(SPOTS_TABLE).join(LOTS_TABLE, 'parking_spot.lot_id', '=', 'parking_lot.id').where({ stadium_id: s_id });
    const result = await query;
    return result;
}

// Query: 'select * from `parking_spot` where `lot_id` = ?'
const lotQuery = async (l_id) => {
    const query = knex(SPOTS_TABLE).where({ lot_id: l_id });
    const result = await query;
    return result;
}

// Query: 'select * from `parking_spot` where `is_available` = ?'
const availableQuery = async (a_is) => {
    const query = knex(SPOTS_TABLE).where({ is_available: a_is });
    const result = await query;
    return result;
}

// Query: 'select * from `parking_spot` inner join `parking_lot` on `parking_spot`.`lot_id` = `parking_lot`.`id` where `stadium_id` = ? and `lot_id` = ?'
const stadiumLotQuery = async (s_id, l_id) => {
    const query = knex(SPOTS_TABLE).join(LOTS_TABLE, 'parking_spot.lot_id', '=', 'parking_lot.id').where({ stadium_id: s_id, lot_id: l_id });
    const result = await query;
    return result;
} 

// Query: 'select * from `parking_spot` inner join `parking_lot` on `parking_spot`.`lot_id` = `parking_lot`.`id` where `stadium_id` = ? and `is_available` = ?'
const stadiumAvailableQuery = async (s_id, a_is) => {
    const query = knex(SPOTS_TABLE).join(LOTS_TABLE, 'parking_spot.lot_id', '=', 'parking_lot.id').where({ stadium_id: s_id, is_available: a_is });
    const result = await query;
    return result;
} 

// Query: 'select * from `parking_spot` where `lot_id` = ? and `is_available` = ?'
const lotAvailableQuery = async (l_id, a_is) => {
    const query = knex(SPOTS_TABLE).where({ lot_id: l_id, is_available: a_is });
    const result = await query;
    return result;
} 

// Query: 'select * from `parking_spot` inner join `parking_lot` on `parking_spot`.`lot_id` = `parking_lot`.`id` where `stadium_id` = ? and `lot_id` = ? and `is_available` = ?'
const stadiumLotAvailableQuery = async(s_id, l_id, a_is) => {
    const query = knex(SPOTS_TABLE).join(LOTS_TABLE, 'parking_spot.lot_id', '=', 'parking_lot.id').where({ stadium_id: s_id, lot_id: l_id, is_available: a_is });
    const result = await query;
    return result;
}

// Power Set of A Set Of 3 = 8!
module.exports = {
    noQuery,
    stadiumQuery,
    lotQuery,
    availableQuery,
    stadiumLotQuery,
    stadiumAvailableQuery,
    lotAvailableQuery,
    stadiumLotAvailableQuery
}
