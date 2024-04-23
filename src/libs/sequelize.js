import { Sequelize } from 'sequelize';
import { config } from '../config/config.js';
import { setupModels } from '../db/models/models.js';

export const testConection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión exitosa.');
    } catch (error) {
        console.log(error);
    }
}
export const sequelize = new Sequelize (
    {
        database: config.dbName,
        username: config.dbUser,
        password: config.dbPassword,
        port: config.dbPort,
        host: config.dbHost,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require:true,
                rejectUnauthorized: false
            }
        }
    }
);

sequelize.sync();
export const models = setupModels(sequelize);