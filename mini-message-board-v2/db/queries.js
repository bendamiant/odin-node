const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query('SELECT * FROM messages');
    return rows;
}

async function createMessage(author, text) {
    await pool.query(
        'INSERT INTO messages (text, author, added) VALUES ($1, $2, $3)',
        [text, author, new Date()]
    )
}
async function getMessageById(id) {
    const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [id]);
    return rows;
}

module.exports = {
    getAllMessages,
    createMessage,
    getMessageById
}