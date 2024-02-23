const { Dogs, Temperament } = require('../db')

const getAddDogs = async (dogsData) => {
    // Obtengo los datos necesarios para crear el perrito
    const {  imagen, name, height, weight, years, temperament } = dogsData

    //console.log(dogsData);

    // Valido de que los datos que necesito esten
  if (
    !imagen || !name || !height || !weight || !years || !temperament
    ) {
    throw new Error("Faltan datos");
  }
  //Verificar que el perrito no exista
  const existingDogs = await Dogs.findOne({ where: { name: name }});
  console.log(existingDogs);

  if (existingDogs) {
    return "El Perrito ya existe";
  } else {
    // Si el Perrito no existe, lo creo
    const newDog = await Dogs.create({
        imagen, name, height, weight, years, temperament,
    });

    // Agrego el temperamento al perrito
    const temperamentsFound = await Temperament.findAll({
        where: { temperament: temperament },
      });
  
      await newDog.addTemperaments(temperamentsFound);
      console.log(newDog);
      return newDog;
}
}

module.exports = getAddDogs;
