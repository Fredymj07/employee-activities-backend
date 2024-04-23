import { Employee, EmployeeSchema } from './employee.model.js';

export function setupModels(sequelize) {
    Employee.init(EmployeeSchema, Employee.config(sequelize));
}