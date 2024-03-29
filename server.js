import express from "express"
import path from "path";
import mongoose from "mongoose";
import cors from "cors";
import products from './routes/products.js';
import users from './routes/users.js';
import contact from './routes/contact.js';
import dotenv from "dotenv"

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

dotenv.config()

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));

app.use(cors());

// app.get("/", (req,res) => {
//   res.send("Hello World")
// })
app.use("/products", products);
app.use("/users", users);
app.use("/contact", contact);

// Function to serve all static files
// inside public directory.
app.use(express.static('public'));  
app.use('/images', express.static('images')); 


if (process.env.NODE_ENV === "production") {
  // Set static folder path
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api running");
  });
}

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`Server running on Port: http://localhost:${PORT}`)))
  .catch(error => console.log(`${error} did not connect`));
