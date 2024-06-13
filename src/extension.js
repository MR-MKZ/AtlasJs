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

  async getRegionByName(regName) {
    try {
      const data = await fsPromises.readFile("./assets/regions.json", "utf8");
      for (const region of JSON.parse(data)) {
        if (region.name.toLowerCase() === regName.toLowerCase()) {
          return region;
        }
      }
      console.error(`Region ${regName} not found`);
      return;
    } catch (err) {
      console.error("Error reading JSON file:", err);
      return;
    }
  }

  async getSubRegion(regionId) {
    let subregions = [];
    try {
      const data = await fsPromises.readFile(
        "./assets/subregions.json",
        "utf8"
      );
      for (const subregion of JSON.parse(data)) {
        if (subregion["region_id"] == regionId) {
          subregions.push(subregion);
        }
      }
      if (subregions.length == 0) {
        console.error(`Subregion with region id ${regionId} not found`);
        return;
      } else {
        return subregions;
      }
    } catch (err) {
      console.error("Error reading JSON file:", err);
      return;
    }
  }
}
