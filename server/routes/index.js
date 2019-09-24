const router = require("express").Router();
const uploadController = require("../controllers/uploadController")


router.route("/user/:id")
.get(uploadController.findAll)
// .post(userController.create)

router.route("/upload/:id")
.get(uploadController.findByUser)
router.route("/uploaded/:id")
.get(uploadController.findById)

router.route("/upload")
.get(uploadController.display)
.post(uploadController.create)
router.route("/trade")
.post(uploadController.findByProduct)
// .post(uploadController.finByProduct2)

module.exports = router;