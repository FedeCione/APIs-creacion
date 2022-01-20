const db = require('../../database/models');
const sequelize = db.sequelize;


module.exports = {
    'list': (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                return res.status(200).json({
                    genres: genres.length,
                    data: genres,
                    status: 200
                });
            });
    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                return res.status(200).json({
                    data: genre,
                    status: 200
                });
            });
    }

}