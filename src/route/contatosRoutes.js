const express = require("express");
const router = express.Router();
const controller = require("../controller/contatosControllers");

router.get("/", controller.getAll);
router.post("/", controller.postContatos);
router.get("/:name", controller.getByName);
router.put("/:name", controller.putContato);
router.delete("/:name", controller.deleteContato);

module.exports = router;