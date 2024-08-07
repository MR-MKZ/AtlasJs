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
export function getAllRegions(): Promise<object>;
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
export function getSubRegions(region: string): Promise<object>;
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
export function getAllCountries({ currency, dialCode, native, nationality, region, subregion, translations, timezones, geolocation, emojies, domain }: {
    currency?: boolean;
    dialCode?: boolean;
    native?: boolean;
    nationality?: boolean;
    region?: boolean;
    subregion?: boolean;
    translations?: boolean;
    timezones?: boolean;
    geolocation?: boolean;
    emojis?: boolean;
    domain?: boolean;
}): Promise<object>;
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
export function getCountryStates({ country, iso3, iso2, geolocation }: {
    country: string;
    iso3: string;
    iso2: string;
    geolocation?: boolean;
}): Promise<object>;
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
export function getStateCities({ country, state, geolocation }: {
    country: string;
    state: string;
    geolocation?: boolean;
}): Promise<object>;
