/** External Modules **/
const express = require("express");
const cors = require('cors');

/** Internal modules **/
const parcelaController = require("./Controllers/parcelaController");
const clienteController = require("./Controllers/ClienteController");
const emprestimoController = require("./Controllers/emprestimoController");
const authController = require("./Controllers/authController");
const userController = require("./Controllers/userController");

/** Express setup **/
const app = express();
app.use(cors());
app.use(express.json());

/** Express routing **/
app.use("/", parcelaController);
app.use("/", clienteController);
app.use("/", emprestimoController);
app.use("/", authController);
app.use("/", userController);

/** Server deployment **/
app.listen(process.env.PORT || 5000, () => console.log(process.env.DATABASE_POSTGRESQL_URL));

