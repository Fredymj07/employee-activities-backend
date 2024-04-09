import { Router } from 'express';

export const newActivityController = Router();

newActivityController.get('/new-activity',(req, res) => {
    res.json({ message: 'Soy el path correspondiente a newActivity consultado desde el servidor...' });
});