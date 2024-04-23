import express from 'express';
import { get, getById, create, update, _delete } from '../controllers/employee.controller.js';
export const employeeRouter = express.Router();

employeeRouter
    .get('/', get)
    .get('/:id', getById)
    .post('/', create)
    .put('/:id', update)
    .delete('/:id', _delete);