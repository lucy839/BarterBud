const router = require("express").Router();
const userController = require("../controllers/usersController")


// router.route("/users")
// .get(userController.findAll)
// .post(userController.create)

// router.route("/user/:id")
// .get(userController.findById)
// .delete(userController.remove)

router.route("/upload")
.post(uploadController.create)

module.exports = router;