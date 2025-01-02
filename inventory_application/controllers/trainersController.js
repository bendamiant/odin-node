const db = require('../db/queries');

async function getAllTrainers(req, res, next) {
    try {
        const trainers = await db.getAllTrainers();
        res.render('trainer_list', { trainers });
    } catch (err) {
        next(err);
    }
}

async function getTrainerById(req, res, next) {
    const { trainer_id } = req.params;
    try {
        const trainer = await db.getTrainerById(trainer_id);
        const pokemonList = await db.getPokemonByTrainer(trainer_id);
        if (trainer) {
            res.render('trainer_detail', { trainer: trainer[0], pokemonList});
        } else {
            throw new Error();
        }
    } catch (err) {
        next(err);
    }
}

async function deleteTrainerById(req, res, next) {
    const { trainer_id } = req.params;
    try {
        await db.deleteTrainerById(trainer_id);
        res.redirect('/trainers');
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getAllTrainers,
    getTrainerById,
    deleteTrainerById,
}