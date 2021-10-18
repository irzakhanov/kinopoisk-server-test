const Review = require("../models/Review.model");

module.exports.reviewsController = {
  getAllReviews: async (req, res) => {
    try {
      const reviews = await Review.find().populate("user").populate("film");
      return res.json(reviews);
    } catch (e) {
      console.log(e);
      res.json({ error: "Ошибка запроса" });
    }
  },
  getReviewsUser: async (req, res) => {
    try {
      const reviews = await Review.find({ user: req.params.userId })
        .populate("user")
        .populate("film");
      return res.json(reviews);
    } catch (e) {
      console.log(e);
      res.json({ error: "Ошибка запроса" });
    }
  },
  getReviewsFilm: async (req, res) => {
    try {
      const reviews = await Review.find({ film: req.params.filmId })
        .populate("user")
        .populate("film");
      return res.json(reviews);
    } catch (e) {
      console.log(e);
      res.json({ error: "Ошибка запроса" });
    }
  },
  addReview: async (req, res) => {
    try {
      const review = await Review.create({
        text: req.body.text,
        user: req.params.userId,
        film: req.params.filmId,
      });
      return res.json({ message: "рецензия добавлена", review });
    } catch (e) {
      console.log(e);
      res.json({ error: "Ошибка запроса" });
    }
  },
};
