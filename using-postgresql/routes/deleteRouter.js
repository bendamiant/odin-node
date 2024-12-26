const { Router } = require('express');
const { deleteAll } = require('../controllers/deleteController');

const deleteRouter = Router();

deleteRouter.get('/', deleteAll);

module.exports = deleteRouter;