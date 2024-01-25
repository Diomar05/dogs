const Router = require('express')

// !Importar todos los handlers
const dogs = require('../handlers/dogsHandlers')

dogsRouter = Router();

// !Ruta para buscar todos los videojuegos
dogsRouter.get("/", dogs.allDogs);

// !Ruta para buscar un videojuego por id
dogsRouter.get("/:id", dogs.idDogs);

// !Ruta para agregar un videojuego
dogsRouter.post("/", dogs.addDogs);

module.exports = dogsRouter;