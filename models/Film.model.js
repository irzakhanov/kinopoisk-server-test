const { Schema, model } = require("mongoose");

const filmSchema = Schema({
  name: String,
  director: String,
  actors: [{ type: Schema.Types.ObjectId, ref: "Actor" }],
});

const Film = model("Film", filmSchema);

module.exports = Film;
