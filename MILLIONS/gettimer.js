import axios from "axios";
import ENV from "./environment";

<<<<<<< HEAD
axios.defaults.baseURL = ENV.BACKEND_HOST;
=======
axios.defaults.baseURL = ENV.LOCAL_IP;
>>>>>>> a4b881ec83dbd0a2eb9c7e6e4ad3bfce339ad891

export default {
  // 모든 글 불러오기
  getAllTimers() {
    return axios.get("/timer/");
  },
  //타이머 생성하기
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
