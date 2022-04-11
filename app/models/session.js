const knex = require('../middleware/knex');
const EMPLOYEE_TABLE = 'employee';

const findByName = async (name, password) => {
    const query = knex(EMPLOYEE_TABLE).where({ name });
    const result = await query;
    return result;
}

module.exports = {
    findByName
};