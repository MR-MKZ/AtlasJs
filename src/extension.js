import axios, { isAxiosError } from "axios";
import { promises as fsPromises } from "fs";

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

export class AtlasFileReader {
  constructor() {}

  async getRegions() {
    try {
      const data = await fsPromises.readFile("./assets/regions.json", "utf8");
      return JSON.parse(data);
    } catch (err) {
      console.error("Error reading JSON file:", err);
      return;
    }
  }

  async getRegionById(regId) {}

  async getRegionByName(regName) {}
}
