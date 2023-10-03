const express = require("express");
const app = express();
const Port = process.env.PORT || 3000
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes/routes"));
app.use(require('./db/db'));
const WatchModel = require("./db/db");


app.listen(Port, () => {
    console.log('server is runing');
});