const knex = require('../database/knex');
const SESSION_TABLE = employee;

const findByName = async (name) => {
    const query = knex(SESSION_TABLE).where({ email });
    const result = await query;
    return result;
}

module.exports = {
    findByName
};