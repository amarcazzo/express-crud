const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://express:crud@localhost:27017/express-crud-app", {
  useNewUrlParser: true
});

// Middelware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("common"));

// Routes
app.use("/api/products", require("./routes/api/products"));

// Static site
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening server on port ${PORT}`));
