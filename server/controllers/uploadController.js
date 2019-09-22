const Upload = require('../db/models/upload')
module.exports = {
    // findAll: function(req, res) {
    //   console.log("Find all")
      
    //   User
    //     .find({})
    //     .sort({ score: -1 })
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // },
    findById: function(req, res) {
      console.log("Find id")
      console.log(req.params)
      Upload
        .find({user: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      console.log("inside create")
      console.log(req.body)
      Upload
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    // diplay all products
    display: function(req, res){
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