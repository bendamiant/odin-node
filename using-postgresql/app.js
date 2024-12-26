const express = require("express");
require('dotenv').config()
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const deleteRouter = require("./routes/deleteRouter");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use('/', indexRouter);
app.use('/new', newRouter);
app.use('/delete', deleteRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));