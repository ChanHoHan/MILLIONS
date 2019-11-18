import axios from "axios";
import ENV from "./environment";

axios.defaults.baseURL = ENV.LOCAL_IP;

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
