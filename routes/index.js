const { Router } = require("express");

const router = Router();

router.use("/users", require("./users.route"));
router.use("/films", require("./films.route"));
router.use("/reviews", require("./reviews.route"));
router.use("/actors", require("./actors.route"));

module.exports = router;
