const { Router } = require('express');
const breeds = require('');

breedsRouter = Router();

// ! Ruta para obtener todos los generos
breedsRouter.get("/", breeds.allBreeds);


module.exports = breedsRouter;