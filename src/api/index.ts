import axios from "axios";

const CancelToken = axios.CancelToken;
export let cancelSource: any;

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

instance.interceptors.request.use((config) => {
  if (config.method === "get") {
    cancelSource = CancelToken.source();
    config.cancelToken = cancelSource.token;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => console.error("Something went wrong:", error)
);

export function getUsersRequest() {
  return instance.get("?results=50");
}
