const getNameDogs = require('../controllers/3_NameDogs');

exports.nameDogs = async (req, res) => {
    const { name } = req.query;
    try {
       const dogsName = await getNameDogs(name);
        res.status(200).json(dogsName);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};
