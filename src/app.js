import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
const app = express();
import { testConection } from './libs/sequelize.js';
import { routerApiEmployee } from './routes/routes.js';
import { loginController } from './controllers/Login.controller.js';
import { homeController } from './controllers/Home.controller.js';
import { newActivityController } from './controllers/NewActivity.controller.js';
import { activityDetailController } from './controllers/ActivityDetail.controller.js';
import { userProfileController } from './controllers/UserProfile.controller.js';

/* Settigns */
(async () => {
    await testConection();
})();

app.set('port', process.env.PORT || 3000);

/* Middelwares */
app.use((req, res, next) => {
    console.log(`${req.url} -${req.method}`);
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

/* Routes */
routerApiEmployee(app);
app.use(loginController);
app.use(homeController);
app.use(newActivityController);
app.use(activityDetailController);
app.use(userProfileController);

app.get("/api", (req, res) => {
    res.json({ message: 'Hola desde el servidor de Nodejs!!!' });
  });

/* Start the server */
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
});