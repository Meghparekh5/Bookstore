const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 8080;

app.set("view engine", "ejs");

app.use(express.urlencoded());

app.use(express.json());

app.use(express.static("public"));

app.use("/uploads", express.static("uploads"));

mongoose
  .connect("mongodb://parekhmegh155_db_user:Meghport11@ac-dgvdc7z-shard-00-00.6avmod0.mongodb.net:27017,ac-dgvdc7z-shard-00-01.6avmod0.mongodb.net:27017,ac-dgvdc7z-shard-00-02.6avmod0.mongodb.net:27017/?ssl=true&replicaSet=atlas-qbs3rt-shard-0&authSource=admin&appName=bookStore")
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/", require("./routes/Routers"));

app.listen(port, () => {
  console.log(`Server Running On Port ${port}`);
});