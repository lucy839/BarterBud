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
    return axios.get("/api/upload/"+user);
  }
  // get scores
//   updateScore: function(username) {
//     console.log("in APU")
//     return axios.post("/api/scores", username);
//   }
};