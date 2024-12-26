const {createMessage} = require('../db/queries');
const CustomCannotCreateError = require ('../errors/CustomCannotCreateError');

const postCreateMessage = async (req, res, next) => {
  try {
    const author = req.body.author;
    const text = req.body.message;
    await createMessage(author, text);
    res.redirect('/messages');
  } catch(err) {
    next(err);
  }
}

module.exports = { postCreateMessage };