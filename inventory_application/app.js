const express = require("express");
require('dotenv').config();
const path = require("node:path");
const app = express();

const pokemonRouter = require('./routes/pokemonRouter');
const trainersRouter = require('./routes/trainersRouter');
const typingsRouter = require('./routes/typingsRouter');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res, next) => res.redirect('/trainers'));

app.use('/pokemon', pokemonRouter);
app.use('/trainers', trainersRouter);
app.use('/typings', typingsRouter);

app.use((err, req, res, next) => {
  console.log("hello from error handler!");
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is running at: http://localhost:${PORT}`))