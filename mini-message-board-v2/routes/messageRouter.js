const { Router } = require('express');
const messages = require('../db');
const {getGetMessageById, getGetAllMessages} = require('../controllers/messageController');

const messageRouter = Router();

messageRouter.get("/",getGetAllMessages);

messageRouter.get("/:messageId", getGetMessageById);

module.exports = messageRouter;