const Upload = require('../db/models/upload')
const User = require("../db/models/user")
module.exports = {
  // get this user's email
  findAll: function (req, res) {
    User
      .find({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // update status to process
  findByProduct: function (req, res) {
    let filter = { _id: req.body[1] }
    let from = req.body[0][0]
    let filter2 = { _id: req.body[0][0] }
    let from2 = req.body[1]
    Upload
      .findOneAndUpdate(filter, { status: "process", requestFrom: from })
      .then(dbModel => console.log(dbModel))
      .catch(err => res.status(422).json(err));
    Upload.findOneAndUpdate(filter2, { status: "process", requestFrom: from2 })
      .then(dbModel1 => console.log(dbModel1))
      .catch(err => res.status(422).json(err));
  },

  // get product info
  findById: function (req, res) {
    Upload
      .find({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

  },

  // trade products
  tradeByProduct: function (req, res) {
    let filter = { _id: req.body[1] }
    let filter2 = { _id: req.body[0] }

    Upload
      .findOneAndUpdate(filter, { status: "traded"})
      .then(dbModel => console.log(dbModel))
      .catch(err => res.status(422).json(err));
    Upload.findOneAndUpdate(filter2, { status: "traded" })
      .then(dbModel1 => res.json(dbModel1))
      .catch(err => res.status(422).json(err));
  },

  // switch user
  switchUser: function (req, res) {
    let user1 = { user: req.body[0] };
    let user2 = { user: req.body[1] };
    Upload.findOneAndUpdate(user1, { user: req.body[1], requestFrom: ""  })
      .then(dbModel => console.log(dbModel))
      .catch(err => res.status(422).json(err));
    Upload.findOneAndUpdate(user2, { user: req.body[0], requestFrom: "" })
      .then(dbModel1 => res.json(dbModel1))
      .catch(err => res.status(422).json(err));
  },

  // get product of user
  findByUser: function (req, res) {
    Upload
      .find({ user: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // upload product
  create: function (req, res) {
    Upload
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // diplay all products
  display: function (req, res) {
    Upload
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};