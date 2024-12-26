const { insertUsername } = require('../db/queries');
exports.newGet = (req, res) => {
    res.render('new_form');
};

exports.newPost = async (req, res) => {
    const { username } = req.body;
    await insertUsername(username);
    res.redirect('/');
};