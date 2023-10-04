const express = require("express");
const app = express();
const Port = process.env.PORT || 3000
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes/routes"));
app.use(require('./db/db'));
app.use(require('./db/userShema'));
const WatchModel = require("./db/db");
const UserModel = require('./db/userShema');

app.listen(Port, () => {
    console.log('server is runing');
});