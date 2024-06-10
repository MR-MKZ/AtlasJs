import axios from "axios";

/**
 * This function fetches data from an API and returns an array of countries.
 *
 * @param {boolean} flag - Need flag of country or not.
 * @param {boolean} currency - Need currency of country or not.
 * @param {boolean} dialCode - Need dial code of country or not.
 * @returns {Promise<Object>} A Promise that resolves to an array of countries fetched from the API.
 */
export function getAllCountries(flag, currency, dialCode) {
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

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: url,
    headers: {},
  };

  return axios
    .request(config)
    .then((response) => {
      if (moreInfo.length == 0) {
        for (let country of response.data.data) {
          countries.push(country["name"]);
        }
        return countries;
      } else {
        return response.data.data;
      }
    })
    .catch((error) => {
      return [error];
    });
}