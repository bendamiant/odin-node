const { deleteAllUsernames } = require('../db/queries');

exports.deleteAll = async (req, res, next) => {
    await deleteAllUsernames();
    res.redirect('/');
}