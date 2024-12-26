const { Router } = require("express");
const messages = require('../db');
const newRouter = Router();
const { postCreateMessage } = require('../controllers/newController');

newRouter.get('/', (req, res, next) => {
  res.render('form');
});

newRouter.post('/', postCreateMessage);

module.exports = newRouter;