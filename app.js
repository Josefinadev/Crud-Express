require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();

const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(uploadsDir));
const cursosRoutes = require('./routes/cursosRoutes');
const leccionesRoutes = require('./routes/leccionesRoutes');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.redirect('/cursos');
});

app.use('/lecciones', leccionesRoutes);
app.use('/cursos', cursosRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});