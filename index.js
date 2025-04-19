const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoutes = require("./routes/product.routes.js");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://darshantp:mtvNwgV2yK7Egrw@backenddb.uewxjso.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to MongoDB successfully");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => console.log(err));

// Routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Product API");
});