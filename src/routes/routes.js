import express from 'express';
import {employeeRouter}  from './employee.router.js';

export function routerApiEmployee(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('employee', employeeRouter);
}