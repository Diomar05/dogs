const cleanDogs = (dog) => {
    return {
        id: dog.id,
        imagen: dog.reference_image_id || "",
        name: dog.name || "",
        height: dog.height.imperial || "",
        weight: dog.weight.imperial || "",
        years: dog.life_span || "",
        temperaments: dog.temperament
    };
}

module.exports = cleanDogs;


