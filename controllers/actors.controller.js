const Actor = require("../models/Actor.model");

module.exports.actorsController = {
  getAllActor: async (req, res) => {
    try {
      const actors = await Actor.find();
      return res.json(actors);
    } catch (e) {
      console.log(e);
      res.json({ error: "Ошибка запроса" });
    }
  },
  addActor: async (req, res) => {
    try {
      const actor = await Actor.create({
        name: req.body.name,
      });
      return res.json({ message: "Актер создан", actor });
    } catch (e) {
      console.log(e);
      res.json({ error: "Ошибка запроса" });
    }
  },
};
