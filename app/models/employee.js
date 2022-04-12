const knex = require('../middleware/knex');
const bcrypt = require('bcrypt');

const EMPLOYEE_TABLE = 'employee';

const createNewEmployee = async (username, password) => {

    // if (!username || !password) {
    //     return {
    //         success: false,
    //         message: 'Username and Password Required'
    //     }
    // }

    // Hash Password with Bcrypt
    console.log('Raw password:', password);
    const salt = await bcrypt.genSalt(10);
    console.log('Password salt', salt);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log('Hashed password', hashedPassword);

    // Create New Employee With UserName, Password
    const query = knex(EMPLOYEE_TABLE).insert({ username, password: hashedPassword });
    console.log('Raw query for createNewEmployee:', query.toString());
    const result = await query;
    // result['success'];
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