const Film = require("../models/Film.model");

module.exports.filmsController = {
  getAllFilms: async (req, res) => {
    try {
      const films = await Film.find();
      return res.json(films);
    } catch (e) {
      console.log(e);
      res.json({ error: "Ошибка запроса" });
    }
  },
  getActorsFilm: async (req, res) => {
    try {
      const film = await Film.findById(req.params.id).populate("actors");
      return res.json(film.actors);
    } catch (e) {
      console.log(e);
      res.json({ error: "Ошибка запроса" });
    }
  },
  getFilmsByActor: async (req, res) => {
    try {
      const films = await Film.find();
      const filterFilms = films.filter((item) => item.actors.includes(req.params.actorId));
      return res.json(filterFilms);
    } catch (e) {
      console.log(e);
      res.json({ error: "Ошибка запроса" });
    }
  },
  addFilm: async (req, res) => {
    try {
      const user = await Film.create({
        name: req.body.name,
        director: req.body.director,
        actors: req.body.actors,
      });
      return res.json({ message: "Фильм создан", user });
    } catch (e) {
      console.log(e);
      res.json({ error: "Ошибка запроса" });
    }
  },
};
