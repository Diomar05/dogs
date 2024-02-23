const { Dogs, Temperament } = require('../db')
const { YOUR_API_KEY } = process.env;
const axios = require("axios");
const cleanDogs = require('../utils/index')
const { Op } = require('sequelize');

const URL = `https://api.thedogapi.com/v1/breeds/?key=${YOUR_API_KEY}`;

const getNameDogs = async (name) => {
    // !Realizo Consulta api
//const dogsApi = await axios.get(`${URL}/search=${name}`);
const dogsApi = (await axios.get(`${URL}`)).data;

// !Realizo consulta base de Datos Local
// const dogsDB = await Dogs.findAll({where: {name: {[Op.iLike]:`%${name}%`}}, include: Temperaments});
   const dogsDB = await Dogs.findAll({where: {name: {[Op.iLike]:`${name}%`}}, include: Temperament})

 // Combinar los resultados de ambas consultas
 const dogs = dogsApi.concat(dogsDB);

if(!name) {
    return dogs
}else {
    const dog = await dogs.filter(d => d.name.toLowerCase().includes(name.toLowerCase()))
    // Limpiar los resultados
 const dogsClean = dog.map((dog) => cleanDogs(dog));

 // Retornar los resultados
 return dogsClean.slice(0, 15);
}



}

module.exports = getNameDogs;
