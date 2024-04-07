const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const { Pool } = require('pg');
const routes = require('./routes/routes');
const cors = require('cors');

/* Settigns */
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

const pool  = new Pool ({
    host: 'localhost',
    database: 'dbactivities',
    user: 'devmontana',
    password: '+HomerO0701'
});

pool.connect((error) => {
    if (error) {
        throw error;
    } else {
        console.log('Conexión exitosa con la base de datos...');
    }
});

/* Middelwares */
app.use((req, res, next) => {
    console.log(`${req.url} -${req.method}`);
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

/* Routes */
app.use(routes);

app.get("/api", (req, res) => {
    res.json({ message: 'Hola desde el servidor de Nodejs!!!' });
  });

/* Start the server */
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
});