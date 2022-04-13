const knex = require('../middleware/knex');
const bcrypt = require('bcrypt');

const EMPLOYEE_TABLE = 'employee';

// Create Employee, Do Checks
const createNewEmployee = async (username, password) => {

    // Need Username
    if (!username) {
        return {
            success: false,
            message: 'Username Required'
        }
    }

    // Need Password
    if (!password) {
        return {
            success: false,
            message: 'Password Required'
        }
    }

    // Hash Password with Bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create New Employee With UserName, Password
    const query = knex(EMPLOYEE_TABLE).insert({ username, password: hashedPassword });
    result = await query;
    result['success'] = true;
    return result;

};

const findByUserName = async (username) => {
    const query = knex(EMPLOYEE_TABLE).where({ username });
    const result = await query;
    return result;
}

const authenticateEmployee = async (username, password) => {
    const employees = await findByUserName(username);
    console.log('Results of employee query', employees);
    if (employees.length === 0) {
        console.error(`No employees with username: ${username}`);
        return null;
    }
    const employee = employees[0];
    const validPassword = await bcrypt.compare(password, employee.password);
    if (validPassword) {
        delete employee.password;
        return employee;
    }
    return null;
}

module.exports = {
    createNewEmployee,
    findByUserName,
    authenticateEmployee
};