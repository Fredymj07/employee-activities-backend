/* Importaciones externas */
const { Router } = require('express');
const router = Router();

/* Importaciones internas */
const { getEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee } = require('../controllers/employee.controller');

router.get('/api/v1/employees', getEmployees)
router.get('/api/v1/:id', getEmployeeById)
router.post('/api/v1/employee', createEmployee)
router.put('/api/v1/:id', updateEmployee)
router.delete('/api/v1/:id', deleteEmployee);

module.exports = router;