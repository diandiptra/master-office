import axios from "axios";

const APIUrl = "http://localhost:8000/";

const axiosBase = axios.create({
  namespaced: true,
  baseURL: APIUrl,
});

const getAPI = axios.create({
  namespaced: true,
  baseURL: APIUrl,
});

axiosBase.interceptors.response.use(undefined, function(err) {
  if (!err.response) {
    alert("Cannot conect to backend service!");
  }
  return Promise.reject(err);
});

export { axiosBase, getAPI };
