const Router = require('express')

// !Importar todos los handlers
const dogs = require('../handlers/dogsNameHandlers')

dogsRouter = Router();

// !Ruta para buscar un videojuego por nombre
dogsRouter.get("/", dogs.nameDogs);

module.exports = dogsRouter;