const User = require("../models/User.model");

module.exports.usersController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (e) {
      console.log(e);
      res.json({ error: "Ошибка запроса" });
    }
  },
  addUser: async (req, res) => {
    try {
      const user = await User.create({
        name: req.body.name,
      });
      return res.json({ message: "Пользователь создан", user });
    } catch (e) {
      console.log(e);
      res.json({ error: "Ошибка запроса" });
    }
  },
};
