const {getAllMessages, getMessageById} = require('../db/queries');
const CustomNotFoundError = require('../errors/CustomNotFoundError');

const getGetMessageById = async (req, res, next) => {
  const { messageId } = req.params;
  try {
    const messages = await getMessageById(Number(messageId));
    if (!messages) {
      throw new CustomNotFoundError('Could not find message with that id.');
    }
    res.render('detail', {message: messages[0]});
  } catch(err) {
    next(err);
  }
}

const getGetAllMessages = async (req, res, next) => {
  try {
    const messages = await getAllMessages();
    if (!messages) {
      throw new CustomNotFoundError('Could not find any messages');
    }
    res.render('messages', {messages: messages});
  } catch(err) {
    next(err);
  }
}



module.exports = {getGetMessageById, getGetAllMessages}