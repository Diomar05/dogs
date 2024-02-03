const { Temperaments } = require("../db");
const axios = require("axios");

const { YOUR_API_KEY } = process.env;

const URL = `https://api.thedogapi.com/v1/breeds/?key=${YOUR_API_KEY}`;

exports.getAllTemperaments = async () => {

  const count = await Temperaments.count();
  
  if (count === 0) {
  
    const response = await axios.get(URL);
  
    const data = response.data;

    // Extraer solo los nombres de los temperamentos
    const uniqueTemperaments = data
      .map((breed) => breed.temperament)
      .filter((temperament, index, self) => self.indexOf(temperament) === index)
      .join(",")
      .split(",")
      .map((temperament) => temperament.trim())
      .filter((temperament, index, self) => self.indexOf(temperament) === index)

      .map((temperament) => ({ temperament: temperament }));

    console.log(uniqueTemperaments);

    return Temperaments.bulkCreate(uniqueTemperaments);
    

  } else {
    const temperaments = await Temperaments.findAll();
    //console.log(temperaments);
    return temperaments;
  }
};

/////////////////////////////////////////

// exports.getAllTemperaments = async () => {
//     const count = await Temperaments.count();

//     if (count === 0) {
//         try {
//             const response = await axios.get(URL, {
//                 headers: {
//                     'x-api-key': YOUR_API_KEY,
//                 },
//             });

//             const data = response.data;

//             // Extraer solo los nombres de los temperamentos
//             const uniqueTemperaments = data.map((t) => ({ name: t.name }));
//             return Temperaments.bulkCreate(uniqueTemperaments);
//         } catch (error) {
//             console.error('Error fetching data from The Dog API:', error.message);
//             throw error;
//         }
//     } else {
//         const temperaments = await Temperaments.findAll();
//         console.log(temperaments);
//         return temperaments;
//     }
// };

// exports.getAllTemperaments = async () => {
//     const count = await Temperaments.count();

//     if (count === 0) {

//             const response = await axios.get(URL, {
//                 headers: {
//                     'x-api-key': YOUR_API_KEY,
//                 },
//             });

//             const data = response.data;

//             // Extraer solo los nombres de los temperamentos
//             const uniqueTemperaments = data.map((t) => ({ name: t.name }));
//             return Temperaments.bulkCreate(uniqueTemperaments);

//     } else {
//         const temperaments = await Temperaments.findAll();
//         console.log(temperaments);
//         return temperaments;
//     }
// };

// exports.getAllTemperaments = async () => {
//     const count = await Temperaments.count();

//     if (count === 0) {

//             const response = await axios.get(URL, {
//                 headers: {
//                     'x-api-key': YOUR_API_KEY,
//                 },
//             });

//             const data = response.data;

//             // Extraer solo los nombres de los temperamentos
//             const uniqueTemperaments = data.map((t) => ({ temperament: t.temperament }));
//             return Temperaments.bulkCreate(uniqueTemperaments);

//     } else {
//         const temperaments = await Temperaments.findAll();
//         console.log(temperaments);
//         return temperaments;
//     }
// }

// exports.getAllTemperaments = async () => {
//     const response = await axios.get(URL);
//     const data = response.data;

//    // Extract solo nombre de temperament
//    const uniqueTemperaments = data
//    .map((dog) => dog.temperaments)
//    .filter((temperament) => temperament)
//    .join(',')
//    .split(',')
//    .map((temperament) => temperament.trim()) // Trim whitespace from temperament names
//    .filter((temperament, index, self) => self.indexOf(temperament) === index) // Get unique temperament names

//  .map((temperament) => ({ temperament: temperament }));
//  return Temperaments.bulkCreate(uniqueTemperaments)
// }
