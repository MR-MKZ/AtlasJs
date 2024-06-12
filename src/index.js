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
    const regions = await atlasFileReader.getRegions()
    return regions
  } catch (error) {
    console.error("Error getting regions: ",error)
    return;
  }
}

/**
 * This function fetches data from an API and returns an array of countries.
 *
 * @param {boolean} flag Need flag of country or not.
 * @param {boolean} currency Need currency of country or not.
 * @param {boolean} dialCode Need dial code of country or not.
 * @returns {Promise<object>} A Promise that resolves to an array of countries fetched from the API.
 */
export async function getAllCountries(flag, currency, dialCode) {
  const moreInfo = [];
  const countries = [];

  flag && moreInfo.push("flag");
  currency && moreInfo.push("currency");
  dialCode && moreInfo.push("dialCode");

  let url =
    moreInfo.length > 0
      ? `https://countriesnow.space/api/v0.1/countries/info?returns=${moreInfo.join(
          ","
        )}`
      : "https://countriesnow.space/api/v0.1/countries/positions";

  const response = await sendRequest(url);

  if (!response.error) {
    if (moreInfo.length == 0) {
      for (let country of response.data) {
        countries.push(country["name"]);
      }
      return countries;
    } else {
      return response.data;
    }
  } else {
    return {
      error: true,
      msg: response.msg,
    };
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
