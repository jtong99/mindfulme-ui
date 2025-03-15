import axios from "axios";

export const signup = (payload) => {
  const url = "http://134.199.151.237:9999/api/auth/signup";
  return axios.post(url, payload);
};

export const signin = (payload) => {
  const url = "http://134.199.151.237:9999/api/auth/signin";
  return axios.post(url, payload);
};

export const checkins = (payload) => {
  const url = "http://134.199.151.237:9999/api/checkins";
  return axios.post(url, payload);
};
