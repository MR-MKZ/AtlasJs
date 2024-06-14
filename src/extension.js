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
      if (isNaN(Number(regName))) {
        const data = await fsPromises.readFile("./assets/regions.json", "utf8");
        for (const region of JSON.parse(data)) {
          if (region.name.toLowerCase() === regName.toLowerCase()) {
            return region;
          }
        }
        console.error(`Region ${regName} not found`);
        return;
      } else {
        console.error("Error finding region: region name can not be Number");
        return;
      }
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

  async getCountries(
    currency,
    dialCode,
    native,
    nationality,
    region,
    subregion,
    translations,
    timezones,
    geolocation,
    emojies,
    domain
  ) {
    try {
      let countries = [];
      const data = await fsPromises.readFile(
        "./assets/countries_states_cities.json",
        "utf8"
      );
      for (const country of JSON.parse(data)) {
        let countryObj = {};
        countryObj["id"] = country["id"];
        countryObj["name"] = country["name"];
        countryObj["iso2"] = country["iso2"];
        countryObj["iso3"] = country["iso3"];
        countryObj["capital"] = country["capital"];
        if (dialCode) countryObj["phone_code"] = country["phone_code"];
        if (currency) {
          countryObj["currency"] = country["currency"];
          countryObj["currency_name"] = country["currency_name"];
          countryObj["currency_symbol"] = country["currency_symbol"];
        }
        if (domain) countryObj["domain"] = country["tld"];
        if (native) countryObj["native"] = country["native"];
        if (nationality) countryObj["nationality"] = country["nationality"];
        if (region) {
          countryObj["region"] = country["region"];
          countryObj["region_id"] = country["region_id"];
        }
        if (subregion) {
          countryObj["subregion"] = country["subregion"];
          countryObj["subregion_id"] = country["subregion_id"];
        }
        if (translations) countryObj["translations"] = country["translations"];

        if (timezones) countryObj["timezones"] = country["timezones"];

        if (geolocation) {
          countryObj["latitude"] = country["latitude"];
          countryObj["longitude"] = country["longitude"];
        }

        if (emojies) {
          countryObj["emoji"] = country["emoji"];
          countryObj["emojiU"] = country["emojiU"];
        }
        countries.push(countryObj);
      }
      return countries;
    } catch (err) {
      console.error("Error getting countries:", err);
      return;
    }
  }
}
