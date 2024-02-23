const { Dogs, Temperament } = require('../db')
const { YOUR_API_KEY } = process.env;
const axios = require("axios");
const cleanDogs = require ('../utils/index')

// const getIdDogs = async (id, source) => {

//     // Creo una condicional para obtener el ID de la API
//     if (source === "api") {
//         const apiDogs = await axios.get(`https://api.thedogapi.com/v1/breeds/${id}?key=${YOUR_API_KEY}`);
//         const dog = cleanDogs(apiDogs.data);
//         return dog;
//         } else {

//        // en caso de no encontrar el ID en la api busco los datos en la BDD
//         const dbDogs = await Dogs.findByPk(id, { include: {
//             model: Temperaments,
//             attributes: ["temperament"],
//             through: {
//                 attributes: [],
//             },
//         }, 
//     });
//         return dbDogs;
//     } 
// }

// module.exports = getIdDogs;

const getIdDogs = async (id, source) => {

    // Si la fuente es la API externa
    if (source.toLowerCase() === 'api') {
      const apiDogs = await axios.get(`https://api.thedogapi.com/v1/breeds/${id}?key=${YOUR_API_KEY}`);
      const dog = cleanDogs(apiDogs.data);
      return dog;
    } else if (source.toLowerCase() === 'bdd') {
      // Si la fuente es la base de datos local
      const dbDogs = await Dogs.findByPk(id, {
        include: {
          model: Temperament,
          attributes: ['temperament'],
          through:{
            attributes: [],
          },
        },
      }
      );
      return dbDogs; 
 
    } 

  
};

module.exports = getIdDogs;