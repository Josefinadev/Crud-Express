const db = require('../config/db');

exports.index = (req, res) => {

    const sql = `
        SELECT lecciones.*, cursos.nombre AS curso
        FROM lecciones
        INNER JOIN cursos
        ON lecciones.id_curso = cursos.id_curso
    `;

    db.query(sql, (err, results) => {

        if(err){
            console.log(err);
        } else {

            res.render('lecciones/index', {
                lecciones: results
            });

        }

    });

};

exports.create = (req, res) => {

    db.query('SELECT * FROM cursos', (err, cursos) => {

        if(err){
            console.log(err);
        } else {

            res.render('lecciones/create', {
                cursos: cursos
            });

        }

    });

};

exports.store = (req, res) => {

    const { titulo, video_url, id_curso } = req.body;

    if(!titulo || !id_curso){
        return res.send('Campos obligatorios');
    }

    const sql = `
        INSERT INTO lecciones(titulo, video_url, id_curso)
        VALUES(?, ?, ?)
    `;

    db.query(
        sql,
        [titulo, video_url, id_curso],
        (err, result) => {

            if(err){
                console.log(err);
            } else {
                res.redirect('/lecciones');
            }

        }
    );

};
exports.edit = (req, res) => {

    const id = req.params.id;

    db.query(
        'SELECT * FROM lecciones WHERE id_leccion = ?',
        [id],
        (err, leccion) => {

            if(err){
                console.log(err);
            } else {

                db.query(
                    'SELECT * FROM cursos',
                    (err, cursos) => {

                        res.render('lecciones/edit', {
                            leccion: leccion[0],
                            cursos: cursos
                        });

                    }
                );

            }

        }
    );

};

exports.update = (req, res) => {

    const id = req.params.id;

    const { titulo, video_url, id_curso } = req.body;

    const sql = `
        UPDATE lecciones
        SET titulo = ?, video_url = ?, id_curso = ?
        WHERE id_leccion = ?
    `;

    db.query(
        sql,
        [titulo, video_url, id_curso, id],
        (err, result) => {

            if(err){
                console.log(err);
            } else {
                res.redirect('/lecciones');
            }

        }
    );

};

exports.delete = (req, res) => {

    const id = req.params.id;

    db.query(
        'DELETE FROM lecciones WHERE id_leccion = ?',
        [id],
        (err, result) => {

            if(err){
                console.log(err);
            } else {
                res.redirect('/lecciones');
            }

        }
    );

};