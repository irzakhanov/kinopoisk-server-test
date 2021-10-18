const { Schema, model } = require("mongoose");

const reviewSchema = Schema({
  text: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  film: {
    type: Schema.Types.ObjectId,
    ref: "Film",
  },
});

const Review = model("Review", reviewSchema);

module.exports = Review;
