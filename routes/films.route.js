const { Router } = require("express");
const { filmsController } = require("../controllers/films.controller");

const router = Router();

router.get("/", filmsController.getAllFilms);
router.get("/:id/actors", filmsController.getActorsFilm);
router.get("/actor/:actorId", filmsController.getFilmsByActor);
router.post("/", filmsController.addFilm);

module.exports = router;
