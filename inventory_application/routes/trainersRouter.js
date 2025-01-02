const { Router } = require('express');
const trainersRouter = Router();
const trainersController = require('../controllers/trainersController');

trainersRouter.get('/', trainersController.getAllTrainers);
trainersRouter.get('/:trainer_id', trainersController.getTrainerById);
trainersRouter.delete('/:trainer_id', trainersController.deleteTrainerById);



module.exports = trainersRouter;