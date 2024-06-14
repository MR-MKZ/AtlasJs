import axios, { isAxiosError } from "axios";
import { sendRequest, AtlasFileReader } from "./extension.js";

const atlasFileReader = new AtlasFileReader();

/**
 * This function returns and object that contains list of all regions.
 *
 * @returns {Promise<object>} A Promise that resolves to an array of regions.
 */
export async function getAllRegions() {
  try {
    const regions = await atlasFileReader.getRegions();
    return regions;
  } catch (error) {
    console.error("Error requesting regions: ", error);
    return;
  }
}

/**
 * This function return subregions of a region.
 *
 * @param {string} region region name to get subregions.
 * @returns {Promise<object>} A Promise that resolves to an array of subregions of entered region.
 */
export async function getSubRegions(region) {
  if (region && region !== "") {
    try {
      const findedRegion = await atlasFileReader.getRegionByName(region);
      if (findedRegion != undefined) {
        let regionId = findedRegion.id;
        const subregion = await atlasFileReader.getSubRegion(regionId);
        if (subregion != undefined) {
          return subregion;
        } else {
          return;
        }
      }
    } catch (error) {
      console.error("Error requesting subregions: ", error);
      return;
    }
  } else {
    console.error("Error requesting subregions: region name is required!");
    return;
  }
}

/**
 * This function gives you list of countries with some special informations.
 * 
 * @param {boolean} currency do you want currency of country?
 * @param {boolean} dialCode do you want dial code of country?
 * @param {boolean} native do you want native of country?
 * @param {boolean} nationality do you want nationality of country?
 * @param {boolean} region do you want region of country?
 * @param {boolean} subregion do you want subregion of country?
 * @param {boolean} translations do you want translations of country?
 * @param {boolean} timezones do you want timezones of country?
 * @param {boolean} geolocation do you want geolocation of country?
 * @param {boolean} emojies do you want emojies of country?
 * @param {boolean} domain do you want domain of country?
 * @returns {Promise<object>} A Promise that resolves to an array of countries with some special informations if you want.
 */
export async function getAllCountries(
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
    const countries = await atlasFileReader.getCountries(
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
    );
    if (countries != undefined) {
      return countries;
    } else {
      return;
    }
  } catch (error) {
    console.error("Error requesting countries: ", error);
  }
}

/**
 * This function returns an array of country name and capitals.
 *
 * @param {string} country Country name if you want to get capital of a specific country
 * @returns {Promise<object>} A promise that resolves to an array of country name, country capital and iso2&3
 */
export async function getAllCapitals(country) {
  if (country && country !== "") {
    let data = JSON.stringify({
      country: country,
    });
    let headers = {
      "Content-Type": "application/json",
    };
    let url = "https://countriesnow.space/api/v0.1/countries/capital";

    const response = await sendRequest(url, data, "post", headers);

    if (!response.error) {
      return response.data;
    } else {
      if (
        isAxiosError(response.msg) &&
        response.msg.response &&
        response.msg.response.status == 404
      ) {
        return {
          error: true,
          msg: `Country ${country} is not exist!`,
        };
      }
    }
  } else {
    let url = "https://countriesnow.space/api/v0.1/countries/capital";

    const response = await sendRequest(url);

    if (!response.error) {
      return response.data;
    } else {
      return {
        error: true,
        msg: response.msg,
      };
    }
  }
}
