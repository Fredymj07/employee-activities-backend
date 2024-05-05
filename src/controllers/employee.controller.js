/* Importaciones internas */
const { pool } = require('../db/connection');


/**
 * Función que permite obtener todos los registros de la tabla Employee
 * @param {rows} res Filas de la tabla creada en la base de datos
 */
const getEmployees = async(req, res) => {
    try{
        const response = await pool.query('SELECT * FROM employee');
        res.status(200).json(response.rows);
    } catch(error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

/**
 * Función que permite obtener un empleado registrado en la tabla Employee por medio de su ID
 * @param {id} req 
 * @param {rows} res 
 */
const getEmployeeById = async(req, res) => {
    try{
        const response = await pool.query('SELECT * FROM employee WHERE id = $1', [req.params.id]);
        res.status(200).json(response.rows);
    } catch(error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

/**
 * Función que permite crear empleados en la tabla Employee
 * @param {body} req 
 * @param {name, email} res 
 */
const createEmployee = async(req, res) => {
    try{
        const { name, address, phone, email, position } = req.body;
        const response = await pool.query('INSERT INTO employee (name, address, phone, email, position) VALUES ($1, $2, $3, $4, $5)', [name, address, phone, email, position]);
        res.json({
            message: 'Employee added successfully!',
            body: {
                employee: {name, address, phone, email, position}
            },
            status: 201
        });
    } catch(error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

/**
 * Función que permite actualizar un empleado en la tabla Empleado por medio de su ID
 * @param {id, name, address, phone, email, position} req 
 * @param {} res 
 */
const updateEmployee = async(req, res) => {
    try{
        const { name, address, phone, email, position } = req.body;
        const response = await pool.query('UPDATE employee SET name = $1, address = $2, phone = $3, email = $4, position = $5 WHERE id = $6', [name, address, phone, email, position, req.params.id]);
    res.json({
        message: 'User updated successfully!',
        body: {
            employee: {name, address, phone, email, position}
        },
        status: 201
    });
    } catch(error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

/**
 * Función que permite eliminar usuarios de la tabla USERS
 * @param {id} req 
 * @param {*} res 
 */
const deleteEmployee = async(req, res) => {
    try{
        const response = await pool.query('DELETE FROM employee WHERE id = $1', [req.params.id]);
        res.status(200).json(`User ${req.params.id} deleted successfully!`);
    } catch(error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports = {
    getEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
};