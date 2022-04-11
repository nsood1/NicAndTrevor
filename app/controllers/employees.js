const jwt = require('jsonwebtoken');
const Employee = require('../models/employees');

const accessTokenSecret = 'mysupercoolsecret';

const authenticateEmployee = async (name, password) => {
    const employee = await Employee.authenticateEmployee(name, password);
    if (employee === null) {
        return employee;
    }
    const authEmployee = await Employee.findByName(name);
    console.log('Employees', authEmployee);
    const accessToken = jwt.sign({ ...authEmployee[0], claims: ['employee'] }, accessTokenSecret);
    return accessToken;
}

module.exports = {
    authenticateEmployee
};