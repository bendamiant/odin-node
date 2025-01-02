const pool = require("./pool");

async function getAllTrainers() {
    const { rows } = await pool.query(
        'SELECT * FROM trainers'
    );
    return rows;
}

async function getTrainerById(trainer_id) {
    const { rows } = await pool.query(
        'SELECT * FROM trainers WHERE id = $1',
        [trainer_id]
    );
    return rows;
}

async function deleteTrainerById(trainer_id) {
    await pool.query(
        'DELETE FROM trainers WHERE id = $1',
        [trainer_id]
    )
}

async function getTypings() {
    const { rows } = await pool.query(
        'SELECT * FROM typings'
    );
    return rows;
}

async function getSpeciesByTyping(typing_id) {
    const { rows } = await pool.query(
        'SELECT s.id AS species_id, s.name AS species_name FROM species s FULL OUTER JOIN typings ta ON s.type1 = ta.id FULL OUTER JOIN typings tb ON s.type2 = tb.id WHERE s.type1 = $1 OR s.type2 = $1',
        [typing_id]
    );
    return rows;
}

async function getPokemonByTyping(typing_id) {
    const { rows } = await pool.query(
        'SELECT * FROM pokemon p JOIN species s ON p.species_id = s.id FULL OUTER JOIN typings ta ON s.type1 = ta.id FULL OUTER JOIN typings tb ON s.type2 = tb.id WHERE s.type1 = $1 OR s.type2 = $1',
        [typing_id]
    );
    return rows;
}

async function getPokemonByTrainer(trainer_id) {
    const { rows } = await pool.query('SELECT nickname, p.id AS pokemon_id, p.species_id AS species_id FROM pokemon p JOIN trainers t ON p.trainer_id = t.id WHERE t.id = $1', [trainer_id]);
    return rows;
}

async function getAllPokemon() {
    const { rows } = await pool.query(
        'SELECT * FROM pokemon'
    );
    return rows;
}

async function getPokemonById(pokemon_id) {
    const { rows } = await pool.query(
        'SELECT * FROM pokemon WHERE id = $1',
        [pokemon_id]
    );
    return rows;
}

async function deletePokemonById(pokemon_id) {
    await pool.query(
        'DELETE FROM pokemon WHERE id = $1',
        [pokemon_id]
    );
}

module.exports = {
    getAllTrainers,
    getTrainerById,
    deleteTrainerById,
    getTypings,
    getSpeciesByTyping,
    getPokemonByTyping,
    getAllPokemon,
    getPokemonById,
    getPokemonByTrainer,
    deletePokemonById,
}