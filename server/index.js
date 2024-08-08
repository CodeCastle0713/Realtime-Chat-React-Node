const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

dotenv.config({ path: "./config.env" });
require("./db/conn");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const authenticateMiddleware = require("./middlewares/authenticate");
const authController = require("./controllers/auth");
const messageController = require("./controllers/message");

app.get("/checkToken", authenticateMiddleware.checkToken);
app.post("/clearToken", authenticateMiddleware.clearToken);

app.post("/login", authController.logIn);
app.post("/register", authController.register);
app.get("/getAllUser", authController.getAllUser);

app.post("/saveMessage", messageController.saveMessage);
app.post("/getAllMessage", messageController.getMessage);

app.listen(5000, () => console.log("Server ready"));
