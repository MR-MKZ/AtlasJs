import axios, { isAxiosError } from "axios";

export function sendRequest(url, data = "{}", method = "get", headers = {}) {
  let config = {
    method: method,
    maxBodyLength: Infinity,
    url: url,
    headers: headers,
    data: data,
  };

  return axios
    .request(config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return {
        error: true,
        msg: error,
      };
    });
}
