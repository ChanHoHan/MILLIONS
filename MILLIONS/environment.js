import config from "./config.json";

const ENV_MAP = {
  development: {
    LOCAL_IP: "http://192.168.1.38:8000"
  },
  staging: {},
  production: {}
};

export default ENV_MAP[config.REACT_NATIVE_ENV] || ENV_MAP.development;
