import { Router } from 'express';

export const userProfileController = Router();

userProfileController.get('/user-profile',(req, res) => {
    res.json({ message: 'Soy el path correspondiente a userProfile consultado desde el servidor...' });
});