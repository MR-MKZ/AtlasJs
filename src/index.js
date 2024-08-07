import { AtlasFileReader } from "./extension.js";
import { raiseError } from "./AtlasError.js";

const atlasFileReader = new AtlasFileReader();

/**
 * Returns a list of all regions.
 *
 * @returns {Promise<object>} A Promise that resolves to an array of regions.
 *
 * @example
 * // Returns list of all regions.
 * getAllRegions().then((regions) => {
 *   console.log(regions);
 * }).catch((error) => {
 *   console.log(error);
 * })
 */
export async function getAllRegions() {
  return await atlasFileReader.getRegions();
}

/**
 * Returns subregions of a region.
 *
 * @param {string} region - The name of the region to get subregions for.
 * @returns {Promise<object>} A Promise that resolves to an array of subregions of the entered region.
 *
 * @example
 * // Returns list of subregions for Asia region.
 * getSubRegions("Asia").then((subregions) => {
 *   console.log(subregions);
 * }).catch((error) => {
 *   console.log(error);
 * })
 *
 * // Returns INPUT_TYPE_ERR error.
 * getSubRegions(12).then((subregions) => {
 *   console.log(subregions);
 * }).catch((error) => {
 *   console.log(error);
 * })
 *
 * // Returns MISSING_REQUIRED_VALUE error.
 * getSubRegions().then((subregions) => {
 *   console.log(subregions);
 * }).catch((error) => {
 *   console.log(error);
 * })
 */
export async function getSubRegions(region) {
  if (region && region !== undefined && region !== "") {
    const foundRegion = await atlasFileReader.getRegionByName(region);
    if (foundRegion !== undefined) {
      let regionId = foundRegion.id;
      return await atlasFileReader.getSubRegion(regionId);
    }
  } else {
    raiseError("region name is required!", "MISSING_REQUIRED_VALUE");
  }
}

/**
 * Returns a list of countries with optional additional information.
 *
 * @param {object} options - Options for the countries to retrieve.
 * @param {boolean} [options.currency] - Whether to include currency information.
 * @param {boolean} [options.dialCode] - Whether to include dial code information.
 * @param {boolean} [options.native] - Whether to include native information.
 * @param {boolean} [options.nationality] - Whether to include nationality information.
 * @param {boolean} [options.region] - Whether to include region information.
 * @param {boolean} [options.subregion] - Whether to include subregion information.
 * @param {boolean} [options.translations] - Whether to include translations information.
 * @param {boolean} [options.timezones] - Whether to include timezones information.
 * @param {boolean} [options.geolocation] - Whether to include geolocation information.
 * @param {boolean} [options.emojis] - Whether to include emojis information.
 * @param {boolean} [options.domain] - Whether to include domain information.
 * @returns {Promise<object>} A Promise that resolves to an array of countries with the requested information.
 *
 * @example
 * // Returns list of all countries.
 * getAllCountries().then((countries) => {
 *   console.log(countries);
 * }).catch((error) => {
 *   console.log(error);
 * })
 */
export async function getAllCountries({
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
}) {
  return await atlasFileReader.getCountries({
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
  });
}

/**
 * This function gives you states of a country.
 *
 * @param {object} options - An object containing the country information
 * @param {string} options.country - Country name to get states
 * @param {string} options.iso3 - Country ISO3 to get states
 * @param {string} options.iso2 - Country ISO2 to get states
 * @param {boolean} [options.geolocation] - Do you want geolocation of each country state?
 * @returns {Promise<object>} A Promise that resolves to an array of country states with some special information if you want.
 *
 * @example
 * // Returns list of states for Iran.
 * getCountryStates({ country: "iran", geolocation: true }).then((states) => {
 *   console.log(states);
 * }).catch((error) => {
 *   console.log(error);
 * })
 *
 * // Returns list of states for IRN ISO3.
 * getCountryStates({ iso3: "IRN", geolocation: true }).then((states) => {
 *   console.log(states);
 * }).catch((error) => {
 *   console.log(error);
 * })
 *
 * // Returns list of states for IR ISO2.
 * getCountryStates({ iso2: "IR", geolocation: true }).then((states) => {
 *   console.log(states);
 * }).catch((error) => {
 *   console.log(error);
 * })
 *
 * // Returns INPUT_TYPE_ERR error.
 * getCountryStates({ country: 12, geolocation: true }).then((states) => {
 *   console.log(states);
 * }).catch((error) => {
 *   console.log(error);
 * })
 *
 * // Returns MISSING_REQUIRED_VALUE error.
 * getCountryStates({ geolocation: true }).then((states) => {
 *   console.log(states);
 * }).catch((error) => {
 *   console.log(error);
 * })
 */
export async function getCountryStates({country, iso3, iso2, geolocation}) {
  if (
    (country && country !== "") ||
    (iso3 && iso3 !== "") ||
    (iso2 && iso2 !== "")
  ) {
    if (country != null && country != undefined) {
      country = country.toString();
    }
    if (iso3 != null && iso3 !== undefined) {
      iso3 = iso3.toString();
    }
    if (iso2 != null && iso2 != undefined) {
      iso2 = iso2.toString();
    }
    return await atlasFileReader.getStates({country, iso3, iso2, geolocation});
  } else {
    raiseError(
      "country name, iso3 or iso2 is missing, at least one of them is required!",
      "MISSING_REQUIRED_VALUE"
    );
  }
}

/**
 * This function gives you cities of a state.
 *
 * @param {object} options - An object containing the state information
 * @param {string} options.country - Country name
 * @param {string} options.state - State name to get cities
 * @param {boolean} [options.geolocation] - Do you want geolocation of each state city?
 * @returns {Promise<object>} A Promise that resolves to an array of state cities with some special information if you want.
 *
 * @example
 * // Returns list of cities for Razavi Khorasan state of Iran.
 * getStateCities({ country: "iran", state: "razavi khorasan", geolocation: true }).then((cities) => {
 *   console.log(cities);
 * }).catch((error) => {
 *   console.log(error);
 * })
 *
 * // Returns INPUT_TYPE_ERR error.
 * getStateCities({ country: 12, state: "", geolocation: true }).then((cities) => {
 *   console.log(cities);
 * }).catch((error) => {
 *   console.log(error);
 * })
 *
 * // Returns MISSING_REQUIRED_VALUE error.
 * getStateCities({ country: "", state: "", geolocation: true }).then((cities) => {
 *   console.log(cities);
 * }).catch((error) => {
 *   console.log(error);
 * })
 */
export async function getStateCities({country, state, geolocation}) {
  if (country && country !== undefined && country !== "") {
    if (state && state !== undefined && state !== "") {
      if (!isNaN(country)) country = country.toString();
      if (!isNaN(state)) state = state.toString();

      return await atlasFileReader.getCities({country, state, geolocation});
    } else {
      raiseError("state name is required!", "MISSING_REQUIRED_VALUE");
    }
  } else {
    raiseError("country name is required!", "MISSING_REQUIRED_VALUE");
  }
}
