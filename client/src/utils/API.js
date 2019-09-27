import axios from "axios";

export default {
  // upload products
  upload: function(userData) {
    console.log(userData);
    return axios.post("/api/upload", userData);
  },
  //display all products
  display: function(){
    return axios.get("/api/upload");
  },
  // get my products        
  tradeRequest: function(user){
    console.log(user)
    return axios.get("/api/upload/"+user);
  },
  // after trade is requested
  requestTrade: function(products){
    console.log(products);
    return axios.post("/api/trade",products)
  },
  // get requested product info
  getRequest: function(user){
    return axios.get("/api/uploaded/"+user);
  },
  // get user info of product
  findUser: function(user){
    console.log(user)
    return axios.get("/api/user/"+user)
  },
  // trade products
  traded:function(products){
    console.log(products);
    return axios.post("/api/traded",products)
  },
  // switch users
  switchUser:function(users){
    console.log(users)
    return axios.post("/api/user",users)
  },
  // check number of uploads
  check:function(){
    return axios.get("/api/user")
  }
};