const { Dogs, Temperament } = require("../db");

const getAddDogs = async (dogsData) => {
//   // Obtengo los datos necesarios para crear el perrito
  const {
    imagen,
    name,
    height_min,
    height_max,
    weight_min,
    weight_max,
    years,
    temperament,
  } = dogsData;

  //console.log(dogsData);

  // Valido de que los datos que necesito esten
  if (
    !imagen ||
    !name ||
    !height_min | !height_max ||
    !weight_min ||
    !weight_max ||
    !years ||
    !temperament
  ) {
    throw new Error("Faltan datos");
  }
  //Verificar que el perrito no exista
  const existingDogs = await Dogs.findOne({ where: { name: name } });
  console.log(existingDogs);

  if (existingDogs) {
    return "El Perrito ya existe";
  } else {
    // Si el Perrito no existe, lo creo
    const newDog = await Dogs.create({
      imagen: imagen || 'https://dog.ceo/api/breeds/image/random',
      name: name,
      height_min: parseInt(height_min),
      height_max: parseInt(height_max),
      weight_min: parseInt(weight_min),
      weight_max: parseInt(weight_max),
      years: years ,
    });

    // Agrego el temperamento al perrito
    const temperamentFound = await Temperament.findAll({
      where: { temperament },
    });

    await newDog.addTemperament(temperamentFound);
    console.log(newDog);
    return newDog;

  
  }
};


module.exports = getAddDogs;
