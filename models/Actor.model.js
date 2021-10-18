const { Schema, model } = require("mongoose");

const actorSchema = Schema({
  name: String,
});

const Actor = model("Actor", actorSchema);

module.exports = Actor;
