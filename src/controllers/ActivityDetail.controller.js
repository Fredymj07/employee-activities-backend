import { Router } from 'express';

export const activityDetailController = Router();

activityDetailController.get('/activity-detail',(req, res) => {
    res.json({ message: 'Soy el path correspondiente a activityDetail consultado desde el servidor...' });
});