const router = require("express").Router();
const uploadController = require("../controllers/uploadController");

// find user's email
router.route("/user/:id")
.get(uploadController.findAll);

// switch user
router.route("/user")
.post(uploadController.switchUser)
.get(uploadController.check);

// get product of user
router.route("/upload/:id")
.get(uploadController.findByUser)

// get product info
router.route("/uploaded/:id")
.get(uploadController.findById)

// trade products
router.route("/traded")
.post(uploadController.tradeByProduct)

// diplay all products
router.route("/upload")
.get(uploadController.display)
// upload product
.post(uploadController.create)

// update status to process
router.route("/trade")
.post(uploadController.findByProduct)

module.exports = router;