import axios from "axios";

export default {
  // Gets all users
//   getUsers: function() {
//     return axios.get("/api/users");
//   },
//   // Gets the user with the given id
//   getUser: function(id) {
//     return axios.get("/api/users/" + id);
//   },
//   // Deletes the user with the given id
//   deleteUser: function(id) {
//     return axios.delete("/api/users/" + id);
//   },
  // Saves user to the database

  // upload products
  upload: function(userData) {
    console.log(userData);
    return axios.post("/api/upload", userData);
  },
  //display all products
  display: function(){
    return axios.get("/api/upload");
  },
  tradeRequest: function(user){
    console.log(user)
    return axios.get("/api/upload/"+user);
  },
  // after trade is requested..
  requestTrade: function(products){
    console.log(products);
    return axios.post("/api/trade",products)
  },
  getRequest: function(user){
    return axios.get("/api/uploaded/"+user);
  },
  findUser: function(user){
    console.log(user)
    return axios.get("/api/user/"+user)
  },
  traded:function(products){
    console.log(products);
    return axios.post("/api/traded",products)
  },
  switchUser:function(users){
    console.log(users)
    return axios.post("/api/user",users)
  }
  // get scores
//   updateScore: function(username) {
//     console.log("in APU")
//     return axios.post("/api/scores", username);
//   }
};