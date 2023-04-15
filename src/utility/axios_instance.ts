// First we need to import axios.js
import axios from "axios";
// Next we make an 'instance' of it
const instance = axios.create({
  // .. where we make our configurations
  // baseURL:
  //   "https://fpypi5l77cgrzxqopx5jois7xm0rsuxo.lambda-url.us-east-1.on.aws/",
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:8004",
});

// Where you would set stuff like your 'Authorization' header, etc ...

// Also add/ configure interceptors && all the other cool stuff

export default instance;
