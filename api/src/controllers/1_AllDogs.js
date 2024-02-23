const { Dogs, Temperament } = require("../db");
const { YOUR_API_KEY } = process.env;
const axios = require("axios");

const URL = `https://api.thedogapi.com/v1/breeds/?key=${YOUR_API_KEY}`;

// const getAllDogs = async() => {
    
//     const response = await axios.get(URL, {
//         headers: {
//             'x-api-key': YOUR_API_KEY,
//         },
//     });

//     const data = response.data;

//     const dogs = data.map((dog) => ({

//         imagen: dog.reference_image_id || "",
//         name: dog.name || "",
//         height: dog.height || "",
//         weight: dog.weight || "",
//         years: dog.life_span || "",
//         temperaments: (dog.temperaments || []).map((t) => ({ name: t.name })),

//     }));

//     const dogsDB = await Dogs.findAll({
//         include: {
//             model: Temperaments,
//             attributes: ["name"],
//             through: {
//                 attributes: [],
//             },
//         },
//     });
//     return [...dogsDB, ...dogs];
// }
// module.exports = getAllDogs;

const getAllDogs = async() => {
    
    const response = await axios.get(URL);

    const data = response.data;

    const dogs = data.map((dog) => ({

        imagen: dog.reference_image_id ? `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg` : '../../../client/src/assets/default.jpg' || "",
        name: dog.name || "",
        height: dog.height.imperial || "",
        weight: dog.weight.imperial || "",
        years: dog.life_span || "",
        temperament: dog.temperament

    }));

    const dogsDB = await Dogs.findAll({
        include: {
            model: Temperament,
            attributes: ["temperament"],
            through: {
                attributes: [],
            },
        },
    });
    return [...dogsDB, ...dogs];
}
module.exports = getAllDogs;