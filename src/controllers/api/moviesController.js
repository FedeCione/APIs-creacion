const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

module.exports = {
    // Create movie
    create: function (req, res) {
        db.Movie.create(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            }
        )
            .then(movie => {
                return res.send(movie)
            })
            .catch(error => res.send(error))
    },

    // Delete movie
    destroy: function (req, res) {
        let movieId = req.params.id;
        db.Movie.findByPk(movieId)
            .then((movie) => {
                let movieDeleted = movie;
                db.Movie.destroy({ where: { id: movieId }, force: true }) // force: true es para asegurar que se ejecute la acción
                    .then(() => {
                        return res.send(movieDeleted)
                    })
                    .catch(error => res.send(error))
            })
    }
}