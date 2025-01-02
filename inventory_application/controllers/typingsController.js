const db = require('../db/queries');

async function getAllTypings(req, res, next) {
    try {
        const typingList = await db.getTypings();
        res.render('typing_list', { typingList });
    } catch (err) {
        next(err);
    }
}

async function getSpeciesByTyping(req, res, next) {
    const { type_id } = req.params;
    try {
        const speciesList = await db.getSpeciesByTyping(type_id);
        res.render('species_list', { speciesList });
    } catch (err) {
        next(err);
    }
}

async function getPokemonByTyping(req, res, next) {
    const { type_id } = req.params;
    try {
        const pokemonList = await db.getPokemonByTyping(type_id);
        res.render('pokemon_list', { pokemonList });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getAllTypings,
    getSpeciesByTyping,
    getPokemonByTyping,
}