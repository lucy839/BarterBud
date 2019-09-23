const router = require("express").Router();
const uploadController = require("../controllers/uploadController")


// router.route("/users")
// .get(userController.findAll)
// .post(userController.create)

router.route("/upload/:id")
.get(uploadController.findById)


router.route("/upload")
.get(uploadController.display)
.post(uploadController.create)
router.route("/trade")
.post(uploadController.findByProduct)

module.exports = router;