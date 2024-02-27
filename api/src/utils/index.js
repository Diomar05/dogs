const cleanDogs = (dog) => {
    return {
        // id: dog.id,
        // imagen: dog.reference_image_id || "",
        // name: dog.name || "",
        // height: dog.height.imperial || "",
        // weight: dog.weight.imperial || "",
        // years: dog.life_span || "",
        // temperaments: dog.temperament

        id: dog.id,
        imagen: dog.reference_image_id ? `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg` : '../../../client/src/assets/default.jpg' || "",
        name: dog.name || "",
        height_min: parseInt(dog.height.metric.slice(0, 2).trim()) || "",
        height_max: parseInt(dog.height.metric.slice(4).trim()) || "",
        weight_min: parseInt(dog.weight.metric.slice(0, 2).trim()) || "",
        weight_max: parseInt(dog.weight.metric.slice(4).trim()) || "",
        years: dog.life_span || "",
        temperament: dog.temperament
    };
}

module.exports = cleanDogs;


