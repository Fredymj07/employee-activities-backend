/* Importaciones externas */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

/* Importaciones internas */
const app = express();
const { pool } = require('./db/connection');
const { router } = require('./routes/routes');

/* Settigns */
(async () => {
    await pool;
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
app.use(require('./routes/routes'));

app.get("/api/v1", (req, res) => {
    res.json({ message: 'Hola desde el servidor de Nodejs!!!' });
  });

/* Start the server */
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
});