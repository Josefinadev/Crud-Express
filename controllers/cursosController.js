const db = require('../config/db');

exports.index = (req, res) => {

    db.query('SELECT * FROM cursos', (err, results) => {

        if(err){
            console.log(err);
        } else {
            res.render('cursos/index', {
                cursos: results
            });
        }

    });

};

exports.create = (req, res) => {
    res.render('cursos/create');
};

exports.store = (req, res) => {

    const nombre = req.body.nombre;
    const imagen = req.file ? req.file.filename : null;

    if(!nombre){
        return res.send('El nombre es obligatorio');
    }

    db.query(
        'INSERT INTO cursos(nombre, imagen_url) VALUES(?, ?)',
        [nombre, imagen],
        (err, result) => {

            if(err){
                console.log(err);
            } else {
                res.redirect('/cursos');
            }

        }
    );

};
exports.edit = (req, res) => {

    const id = req.params.id;

    db.query(
        'SELECT * FROM cursos WHERE id_curso = ?',
        [id],
        (err, results) => {

            if(err){
                console.log(err);
            } else {

                res.render('cursos/edit', {
                    curso: results[0]
                });

            }

        }
    );

};

exports.update = (req, res) => {

    const id = req.params.id;
    const nombre = req.body.nombre;
    const imagen = req.file ? req.file.filename : null;

    if(!nombre){
        return res.send('El nombre es obligatorio');
    }

    db.query(
        'UPDATE cursos SET nombre = ?, imagen_url = COALESCE(?, imagen_url) WHERE id_curso = ?',
        [nombre, imagen, id],
        (err, result) => {

            if(err){
                console.log(err);
            } else {
                res.redirect('/cursos');
            }

        }
    );

};

exports.delete = (req, res) => {

    const id = req.params.id;

    db.query(
        'DELETE FROM cursos WHERE id_curso = ?',
        [id],
        (err, result) => {

            if(err){
                console.log(err);
            } else {
                res.redirect('/cursos');
            }

        }
    );

};