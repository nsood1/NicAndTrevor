const EMPLOYEE_TABLE = 'employee';

const createNewEmployee = async (name, password) => {
    console.log('Raw password:', password);
    const salt = await bcrypt.genSalt(10);
    console.log('Password salt', salt);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log('Hashed password', hashedPassword);

    const query = knex(EMPLOYEE_TABLE).insert({ name, password: hashedPassword });
    console.log('Raw query for createNewEmployee:', query.toString());
    const result = await query;

    return result;
};

const findByName = async (name) => {
    const query = knex(EMPLOYEE_TABLE).where({ name });
    const result = await query;
    return result;
}

const authenticateEmployee = async (name, password) => {
    const employees = await findByName(name);
    console.log('Results of employees query', employees);
    if (employees.length === 0) {
        console.error(`No employees with name: ${name}`);
        return null;
    }
    const employee = employees[0];
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
        delete employee.password;
        return employee;
    }
    return null;
}


module.exports = {
    createNewEmployee,
    findByName,
    authenticateEmployee
};