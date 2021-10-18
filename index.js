const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const chalk = require("chalk");

const PORT = process.env.PORT || 5000;
const dbUrl = "mongodb+srv://gvardeez95:stalker95@products.yiuz2.mongodb.net/kinopoisk_cump_db";

const app = express();

app.use(express.json());
app.use(cors());
app.use(require("./routes"));

const start = async () => {
  try {
    await mongoose.connect(dbUrl);

    app.listen(PORT, () => {
      console.log("Server started on port", PORT);
    });
  } catch (e) {
    console.log(chalk.bgRedBright.yellowBright("Ошибка сервера или БД", e));
  }
};

start();
