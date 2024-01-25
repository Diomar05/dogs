const { getAllBreeds } = require('../controllers/5_AllBreeds');

exports.allBreeds = async(req, res) => {
    try {
        const response = await getAllBreeds()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
