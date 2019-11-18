import axios from "axios";
import ENV from "./environment";

axios.defaults.baseURL = ENV.BACKEND_HOST;

export default {
  readTimer() {
    return axios.get("/timer/");
  },
  createTimer(data) {
    return axios.post("/timer/", data);
  },
  updateTimer(id) {
    return axios.update(+"/timer/" + String(id));
  },
  deleteTimer(id) {
    return axios.delete("/timer/" + String(id));
  }
};
