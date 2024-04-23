import { Model, DataTypes } from 'sequelize';

const EMPLOYEE_TABLE = 'employee';

export class Employee extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: EMPLOYEE_TABLE,
            modelName: 'Employee',
            timestamps: true
        }
    }
}

export const EmployeeSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name'
    },
    address: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'address'
    },
    phone: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'phone'
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'email'
    },
    position: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'position'
    }
}