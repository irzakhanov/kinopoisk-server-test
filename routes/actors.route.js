const { Router } = require("express");
const { actorsController } = require("../controllers/actors.controller");

const router = Router();

router.get("/", actorsController.getAllActor);
router.post("/", actorsController.addActor);

module.exports = router;
