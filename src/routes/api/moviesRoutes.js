const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/moviesController');

//Create movie
router.post('/api/movies/create', moviesController.create);
//Delete movie
router.delete('/api/movies/delete/:id', moviesController.destroy);

module.exports = router;