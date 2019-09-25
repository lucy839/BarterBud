const Upload = require('../db/models/upload')
const User = require("../db/models/user")
module.exports = {
  findAll: function(req, res) {
    console.log("Find all")

    User
      .find({_id:req.params.id})
      // .sort({ score: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByProduct: function (req, res) {

    console.log("here"  )
    console.log(req.body[0])
    console.log(req.body[1])
    let filter = { _id: req.body[1] }
    let from = req.body[0][0]
    let filter2 = { _id: req.body[0][0] }
    console.log(filter2)
    let from2 = req.body[1]
// console.log(from2)
    Upload
      .findOneAndUpdate(filter, { status: "process", requestFrom: from })
      .then(dbModel => console.log(dbModel))
      // .then(Upload.findOneAndUpdate(filter2, { status: "process", requestFrom: from2 }))
      // .then(dbModel1 => console.log(dbModel1))
    // Upload.findOneAndUpdate(filter2, { status: "process", requestFrom: from2 })
    //   .then(dbModel => console.log(dbModel))
      .catch(err => res.status(422).json(err));
      Upload.findOneAndUpdate(filter2, { status: "process", requestFrom: from2 })
      .then(dbModel1 => console.log(dbModel1))
    // Upload.findOneAndUpdate(filter2, { status: "process", requestFrom: from2 })
    //   .then(dbModel => console.log(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // finByProduct2:function(req,res){
  //   let filter2 = { _id: req.body[0][0] }
  //   let from2 = req.body[1]
  //   Upload.findOneAndUpdate(filter2, { status: "process", requestFrom: from2 }).then(dbModel => console.log(dbModel))
  //   // Upload.findOneAndUpdate(filter2, { status: "process", requestFrom: from2 })
  //   //   .then(dbModel => console.log(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  findById: function (req, res) {
    console.log("Find id")
    console.log(req.params)
    Upload
      .find({_id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  
  },
  tradeByProduct: function (req, res) {
    console.log("here"  )
    console.log(req.body[0])
    console.log(req.body[1])
    let filter = { _id: req.body[1] }
    let from = req.body[0]
    let filter2 = { _id: req.body[0]}
    console.log(filter2)
    let from2 = req.body[1]
 
    // *******user change needs to be workedon
// console.log(from2)
    Upload
      .findOneAndUpdate(filter, { status: "traded", requestFrom:"" })
      .then(dbModel => console.log(dbModel))
      // .then(Upload.findOneAndUpdate(filter2, { status: "process", requestFrom: from2 }))
      // .then(dbModel1 => console.log(dbModel1))
    // Upload.findOneAndUpdate(filter2, { status: "process", requestFrom: from2 })
    //   .then(dbModel => console.log(dbModel))
      .catch(err => res.status(422).json(err));
      Upload.findOneAndUpdate(filter2, { status: "traded",requestFrom:""  })
      .then(dbModel1 => res.json(dbModel1))
    // Upload.findOneAndUpdate(filter2, { status: "process", requestFrom: from2 })
    //   .then(dbModel => console.log(dbModel))
      .catch(err => res.status(422).json(err));
     
  },
  switchUser:function(req,res){
    let user1 ={user:req.body[0]};
    let user2 = {user:req.body[1]};
    let to = req.body[1];
    let to2 = req.body[0];
    console.log(user1, user2)
 Upload.findOneAndUpdate(user1, {user: req.body[1]})
      .then(dbModel =>console.log(dbModel))
      .catch(err=> res.status(422).json(err));
      Upload.findOneAndUpdate(user2, {user: req.body[0]})
      .then(dbModel1 => res.json(dbModel1))
      .catch(err=> res.status(422).json(err));
  },
  findByUser: function (req, res) {
    console.log("Find id")
    console.log(req.params)
    Upload
      .find({ user: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("inside create")
    console.log(req.body)
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
  // ,
  // update: function(req, res) {
  //   console.log("inside update")
  //   console.log(req.params, req.body)
  //   User
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   console.log("inside remove")
  //   console.log(req.params)
  //   User
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // updateScore: function(req,res){
  //   console.log("in controller")
  //   console.log(Object.keys(req.body)[0]);
  //   let username = Object.keys(req.body)[0];
  //   User
  //   .find({"local.username": username})
  //     // .findOneAndUpdate({username:req.params.id}, )
  //     .then(response =>{
  //           //  console.log(response[0].__v);
  //       let score = parseInt(response[0].score)+1;
  //       User.updateOne({"local.username": username},{$set: {
  //         score : score
  //       }}).then(result=>console.log(result));    
  //     })


  // }
};