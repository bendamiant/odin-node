const { getAllUsernames, searchUsernames } = require('../db/queries');

exports.indexGet = async (req, res, next) => {
    const { search } = req.query;
    let usernames;
    try {
        if (search) {
            usernames = await searchUsernames(search);
        } else {
            usernames = await getAllUsernames();
        }
    } catch(err) {
        next(err);
    }
    res.render('index', {usernames: usernames.map(user => user.username)});
}