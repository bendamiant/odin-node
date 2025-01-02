const { Router } = require('express');
const pokemonRouter = Router();
const pokemonController = require('../controllers/pokemonController');

pokemonRouter.get('/', pokemonController.getAllPokemon);
pokemonRouter.get('/:pokemon_id', pokemonController.getPokemonById);
pokemonRouter.delete('/:pokemon_id', pokemonController.deletePokemonById);

module.exports = pokemonRouter;