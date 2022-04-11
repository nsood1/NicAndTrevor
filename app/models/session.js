const knex = require('../middleware/knex');
const EMPLOYEE_TABLE = 'employee';

const findByUserName = async (username, password) => {
    const query = knex(EMPLOYEE_TABLE).where({ username });
    const result = await query;
    return result;
}

module.exports = {
    findByUserName
};