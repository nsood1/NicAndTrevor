const jwt = require('jsonwebtoken');
const Employees = require('../models/employee');

const accessTokenSecret = 'mysupercoolsecret';

const authenticateEmployee = async (name, password) => {
    const employees = await Employees.authenticateEmployee(name, password);
    if (employees === null) {
        return employees;
    }
    const employee = await Student.findByName(name);
    console.log('Students', students);
    const accessToken = jwt.sign({ ...students[0], claims: ['student'] }, accessTokenSecret);

    return accessToken;
    
}

module.exports = {
    authenticateEmployee
};