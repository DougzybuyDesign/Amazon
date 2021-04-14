import axios from "axios";
const instance = axios.create({
  baseURL: "https://us-central-challenge-4b2b2.cloudfunction.net/api"
  // THE API(Cloud function) URL"http://localhost:5001/challenge-4b2b2/us-central1/api"
});

export default instance;
