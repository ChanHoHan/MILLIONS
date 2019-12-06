import axios from "axios";
import ENV from "./environment";

axios.defaults.baseURL = "http://172.30.1.53:8000";

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
