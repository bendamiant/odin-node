const { Router } = require('express');
const typingsRouter = Router();
const typingsController = require('../controllers/typingsController');

typingsRouter.get('/', typingsController.getAllTypings);
typingsRouter.get('/:type_id/species', typingsController.getSpeciesByTyping);
typingsRouter.get('/:type_id/pokemon', typingsController.getPokemonByTyping);




module.exports = typingsRouter;