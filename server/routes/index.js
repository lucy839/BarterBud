const router = require("express").Router();
const uploadController = require("../controllers/uploadController")


// router.route("/users")
// .get(userController.findAll)
// .post(userController.create)

// router.route("/user/:id")
// .get(userController.findById)
// .delete(userController.remove)

router.route("/upload")
.get(uploadController.display)
.post(uploadController.create)

module.exports = router;