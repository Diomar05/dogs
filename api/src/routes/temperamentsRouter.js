const { Router } = require('express');
const temperament = require('../handlers/temperamentsHandlers');

temperamentsRouter = Router();

// ! Ruta para obtener todos los generos
temperamentsRouter.get("/", temperament.allTemperaments);


module.exports = temperamentsRouter;