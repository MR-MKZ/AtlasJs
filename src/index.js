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
 * This function gives you states of a country.
 *
 * @param {string} country country name to get states
 * @param {string} iso3 country iso3 to get states
 * @param {string} iso2 country iso2 to get states
 * @param {boolean} geolocation do you want geolocation of each country state?
 * @returns {Promise<object>} A Promise that resolves to an array of country states with some special informations if you want.
 */
export async function getCountryStates(country, iso3, iso2, geolocation) {
  if (
    (country && country != "") ||
    (iso3 && iso3 != "") ||
    (iso2 && iso2 != "")
  ) {
    try {
      if (country != null && country != undefined) {
        country = country.toString();
      }
      if (iso3 != null && iso3 != undefined) {
        iso3 = iso3.toString();
      }
      if (iso2 != null && iso2 != undefined) {
        iso2 = iso2.toString();
      }
      const states = await atlasFileReader.getStates(
        country,
        iso3,
        iso2,
        geolocation
      );
      if (states != undefined) {
        return states;
      } else {
        return;
      }
    } catch (error) {
      console.error("Error requesting country states: ", error);
    }
  } else {
    console.error(
      "Error requesting country states: country name is required! please enter country name, iso3 or iso2"
    );
    return;
  }
}
