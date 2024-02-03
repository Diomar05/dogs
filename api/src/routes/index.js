const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const dogs = require('./dogsRouter');
const dogsname = require('./dogsNameRouter');
const temperaments = require('./temperamentsRouter');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs', dogs);
router.use('/dogsname', dogsname);
router.use('/temperaments', temperaments);


module.exports = router;
