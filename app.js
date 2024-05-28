require("dotenv").config();
const express = require("express");
const app = express();
const Port = process.env.PORT || 8001

const cookieParser = require("cookie-parser");
const path = require("path");

const dbConnection = require("./config/mongoose-connection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);


app.listen(Port, () => {
    console.log(`Server is working ${Port}`);
});