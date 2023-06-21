const express = require('express');
const app = express();

/* Import de la rutas */

const mainRoutes = require('./src/router/mainRoutes');
const shopRoutes = require('./src/router/shopRoutes');
const adminRoutes = require('./src/router/adminRoutes');
const { notFoundPage } = require('./src/utils/errorHandlers');

const PORT = 4000;

/* Define carpeta de archivos estáticos */

app.use(express.static('public'));

/* Parsea los datos recibidos por POST */

app.use(express.urlencoded());
app.use(express.json());

/* Rutas de la aplicación */

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);

app.use(notFoundPage);

app.listen(PORT, () => console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`))
