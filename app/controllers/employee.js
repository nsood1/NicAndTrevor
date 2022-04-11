const jwt = require('jsonwebtoken');
const Employee = require('../models/employee');

const accessTokenSecret = 'mysupercoolsecret';

const authenticateEmployee = async (username, password) => {
    const employees = await Employee.authenticateEmployee(username, password);
    if (employees === null) {
        return employees;
    }
    const employee = await Employee.findByUserName(username);
    console.log('Employees', employee);
    const accessToken = jwt.sign({ ...employee[0], claims: ['employee'] }, accessTokenSecret);

    return accessToken;
    
}

module.exports = {
    authenticateEmployee
};