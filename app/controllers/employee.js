const jwt = require('jsonwebtoken');
const Employee = require('../models/employee');

const accessTokenSecret = 'mysupercoolsecret';

const authenticateEmployee = async (name, password) => {
    const employees = await Employee.authenticateEmployee(name, password);
    if (employees === null) {
        return employees;
    }
    const employee = await Employee.findByName(name);
    console.log('Employees', employee);
    const accessToken = jwt.sign({ ...employee[0], claims: ['employee'] }, accessTokenSecret);

    return accessToken;
    
}

module.exports = {
    authenticateEmployee
};