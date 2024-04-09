import { Router } from 'express';

export const loginController = Router();

loginController.get('/login',(req, res) => {
    res.json({ message: 'Soy el path correspondiente a login consultado desde el servidor...' });
});