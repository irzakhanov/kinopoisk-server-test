const { Router } = require("express");
const { reviewsController } = require("../controllers/reviews.controller");

const router = Router();

router.get("/", reviewsController.getAllReviews);
router.get("/user/:userId", reviewsController.getReviewsUser);
router.get("/film/:filmId", reviewsController.getReviewsFilm);
router.post("/user/:userId/film/:filmId", reviewsController.addReview);

module.exports = router;
