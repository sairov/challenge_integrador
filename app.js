const express = require('express');
const app = express();
const methodOverride = require('method-override');
require('dotenv').config();

/* Import de la rutas */

const mainRoutes = require('./src/router/mainRoutes');
const shopRoutes = require('./src/router/shopRoutes');
const adminRoutes = require('./src/router/adminRoutes');
const { notFoundPage } = require('./src/utils/errorHandlers');

const PORT = process.env.PORT || 3000;

/* Define carpeta de archivos estáticos */

app.use(express.static('public'));


/* Configuración del Template Engine - EJS */

app.set('view engine', 'ejs');
app.set('views', './src/views');

/* Parsea los datos recibidos por POST */

app.use(express.urlencoded());
app.use(express.json());

/* Override para habilitar métodos PUT y DELETE */
app.use(methodOverride('_method'));

/* Rutas de la aplicación */

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);

app.use(notFoundPage);

app.listen(PORT, () => console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`))
