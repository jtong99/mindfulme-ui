import axios from "axios";

export const signup = (payload) => {
  const url = "http://api/auth/signup";
  return axios.post(url, payload);
};

export const signin = (payload) => {
  const url = "http://api/auth/signin";
  return axios.post(url, payload);
};

export const checkins = (payload) => {
  const url = "http://api/checkins";
  return axios.post(url, payload);
};
