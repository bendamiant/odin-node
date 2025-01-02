const db = require('../db/queries');

async function getAllPokemon(req, res, next) {
    try {
        const pokemonList = await db.getAllPokemon();
        res.render('pokemon_list', { pokemonList });
    } catch (err) {
        next(err);
    }
}

async function getPokemonById(req, res, next) {
    const { pokemon_id } = req.params;
    try {
        const pokemon = await db.getPokemonById(pokemon_id);
        res.render('pokemon_detail', { pokemon: pokemon[0] });
    } catch (err) {
        next(err);
    }
}

async function deletePokemonById(req, res, next) {
    const { pokemon_id } = req.params;
    try {
         await db.deletePokemonById(pokemon_id);
        res.redirect('/pokemon');
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getAllPokemon,
    getPokemonById,
    deletePokemonById,
}