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
  upload: function(userData) {
    console.log(userData);
    return axios.post("/api/upload", userData);
  },
  // get scores
//   updateScore: function(username) {
//     console.log("in APU")
//     return axios.post("/api/scores", username);
//   }
};