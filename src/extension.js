// import axios from "axios";
import { promises as fsPromises } from "fs";
import { raiseError } from "./AtlasError.js";
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// export function sendRequest(url, data = "{}", method = "get", headers = {}) {
//   let config = {
//     method: method,
//     maxBodyLength: Infinity,
//     url: url,
//     headers: headers,
//     data: data,
//   };

//   return axios
//     .request(config)
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       return {
//         error: true,
//         msg: error,
//       };
//     });
// }

function getFilePath(filename) {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, '..', 'assets', filename);
    return filePath;
  } catch (error) {
    console.error('Error reading file:', error);
  }
}

export class AtlasFileReader {
  constructor() {}

  async getRegions() {
    const data = await fsPromises.readFile(getFilePath("regions.json"), "utf8");
    return JSON.parse(data);
  }

  async getRegionByName(regName) {
    if (isNaN(Number(regName))) {
      const data = await fsPromises.readFile(getFilePath("regions.json"), "utf8");
      for (const region of JSON.parse(data)) {
        if (region.name.toLowerCase() === regName.toLowerCase()) {
          return region;
        }
      }
      raiseError(`region ${regName} not found`, "RESULT_NOT_FOUND");
    } else {
      raiseError("region name must be string", "INPUT_TYPE_ERR");
    }
  }

  async getSubRegion(regionId) {
    let subregions = [];
    const data = await fsPromises.readFile(getFilePath("subregions.json"), "utf8");
    for (const subregion of JSON.parse(data)) {
      if (subregion["region_id"] == regionId) {
        subregions.push(subregion);
      }
    }
    if (subregions.length === 0) {
      raiseError(
        `Subregion with region id ${regionId} not found`,
        "RESULT_NOT_FOUND"
      );
    } else {
      return subregions;
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
    let countries = [];
    const data = await fsPromises.readFile(
      getFilePath("countries_states_cities.json"),
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
  }

  async getStates(countryName, iso3, iso2, geolocation) {
    if (
      (countryName !== undefined &&
        countryName != null &&
        isNaN(Number(countryName))) ||
      (iso3 !== undefined && isNaN(Number(iso3))) ||
      (iso2 !== undefined && isNaN(Number(iso2)))
    ) {
      let states = [];
      const data = await fsPromises.readFile(
        getFilePath("countries_states_cities.json"),
        "utf8"
      );
      for (const country of JSON.parse(data)) {
        if (
          (countryName !== undefined &&
            countryName != null &&
            country["name"].toLowerCase() === countryName.toLowerCase()) ||
          (iso3 !== undefined &&
            country["iso3"].toLowerCase() === iso3.toLowerCase()) ||
          (iso2 !== undefined &&
            country["iso2"].toLowerCase() === iso2.toLowerCase())
        ) {
          for (const state of country["states"]) {
            let statesObj = {};
            statesObj["id"] = state["id"];
            statesObj["name"] = state["name"];
            statesObj["state_code"] = state["state_code"];
            if (geolocation) {
              statesObj["latitude"] = state["latitude"];
              statesObj["longitude"] = state["longitude"];
            }
            states.push(statesObj);
          }
        }
      }
      if (states.length === 0) {
        raiseError(`Country ${countryName} not found`, "RESULT_NOT_FOUND", {
          country_name: "check entered country name: " + countryName,
          iso3: "check entered iso3: " + iso3,
          iso2: "check entered iso2: " + iso2,
        });
      } else {
        return states;
      }
    } else {
      raiseError("region name must be string", "INPUT_TYPE_ERR");
    }
  }

  async getCities(countryName, stateName, geolocation) {
    let cities = [];
    if (isNaN(Number(countryName)) && isNaN(Number(stateName))) {
      const data = await fsPromises.readFile(
        getFilePath("countries_states_cities.json"),
        "utf8"
      );
      let foundCountry = false;
      let foundState = false;
      for (const country of JSON.parse(data)) {
        if (country["name"].toLowerCase() === countryName.toLowerCase()) {
          foundCountry = true;
          for (const state of country["states"]) {
            if (state["name"].toLowerCase() === stateName.toLowerCase()) {
              foundState = true;
              for (const city of state["cities"]) {
                let cityObj = {};
                cityObj["id"] = city["id"];
                cityObj["name"] = city["name"];
                if (geolocation) {
                  cityObj["latitude"] = city["latitude"];
                  cityObj["longitude"] = city["longitude"];
                }
                cities.push(cityObj);
              }
            }
          }
        }
      }
      if (cities.length > 0) {
        return cities;
      } else {
        if (foundCountry) {
          if (foundState) {
            raiseError(`There is no city for ${countryName},${stateName}`, "RESULT_NOT_FOUND");
          } else {
            raiseError(`State ${stateName} not found`, "RESULT_NOT_FOUND", {
              state: "check entered state name: " + stateName,
            });
          }
        } else {
          raiseError(`Country ${countryName} not found`, "RESULT_NOT_FOUND", {
            country: "check entered country name: " + countryName,
          });
        }
      }
    } else {
      raiseError(
        "country name and state name must be string",
        "INPUT_TYPE_ERR"
      );
    }
  }
}
