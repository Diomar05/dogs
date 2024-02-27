const getAllDogs = require('../controllers/1_AllDogs')
const getIdDogs = require('../controllers/2_IdDogs');
const getAddDogs = require('../controllers/4_AddDogs');

exports.allDogs = async (req, res) => {
    try {
        const response = await getAllDogs()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

exports.idDogs = async (req, res) => {

    const { id } = req.params;

    const source = isNaN(id) ? "bdd" : "api";
    try {
        const response = await getIdDogs(id, source)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

exports.addDogs = async (req, res) => {
    const {  imagen, name, height_min, height_max, weight_min, weight_max, years, temperament } = req.body
    const dogsData = {  imagen, name, height_min, height_max, weight_min, weight_max, years, temperament }
   
    try {
        const response = await getAddDogs(dogsData)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }    
};