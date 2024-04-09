import { Router } from 'express';

export const homeController = Router();

homeController.get('/home',(req, res) => {
    res.json({ message: 'Soy el path correspondiente a home consultado desde el servidor...' });
});