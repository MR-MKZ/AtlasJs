/**
 * This function returns and object that contains list of all regions.
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
 *
 */
export function getAllRegions(): Promise<object>;
/**
 * This function return subregions of a region.
 *
 * @param {string} region region name to get subregions.
 * @returns {Promise<object>} A Promise that resolves to an array of subregions of entered region.
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
 * This function gives you list of countries with some special information.
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
 * @returns {Promise<object>} A Promise that resolves to an array of countries with some special information if you want.
 *
 * @example
 * // Returns list of all countries.
 * getAllCountries().then((countries) => {
 *   console.log(countries);
 * }).catch((error) => {
 *   console.log(error);
 * })
 *
 */
export function getAllCountries(currency: boolean, dialCode: boolean, native: boolean, nationality: boolean, region: boolean, subregion: boolean, translations: boolean, timezones: boolean, geolocation: boolean, emojies: boolean, domain: boolean): Promise<object>;
/**
 * This function gives you states of a country.
 *
 * @param {string} country country name to get states
 * @param {string} iso3 country iso3 to get states
 * @param {string} iso2 country iso2 to get states
 * @param {boolean} geolocation do you want geolocation of each country state?
 * @returns {Promise<object>} A Promise that resolves to an array of country states with some special information if you want.
 *
 * @example
 * // Returns list of states for Iran.
 * getCountryStates("iran", "", "", true).then((states) => {
 *   console.log(states);
 * }).catch((error) => {
 *   console.log(error);
 * })
 *
 * getCountryStates("", "IRN", "", true).then((states) => {
 *   console.log(states);
 * }).catch((error) => {
 *   console.log(error);
 * })
 *
 * getCountryStates("", "", "IR", true).then((states) => {
 *   console.log(states);
 * }).catch((error) => {
 *   console.log(error);
 * })
 *
 * // Returns INPUT_TYPE_ERR error.
 * getCountryStates(12, "", "", true).then((states) => {
 *   console.log(states);
 * }).catch((error) => {
 *   console.log(error);
 * })
 *
 * // Returns MISSING_REQUIRED_VALUE error.
 * getCountryStates("", "", "", true).then((states) => {
 *   console.log(states);
 * }).catch((error) => {
 *   console.log(error);
 * })
 */
export function getCountryStates(country: string, iso3: string, iso2: string, geolocation: boolean): Promise<object>;
/**
 * This function gives you cities of a state.
 *
 * @param {string} country country name
 * @param {string} state state name to get cities
 * @param {boolean} geolocation do you want geolocation of each state city?
 * @returns {Promise<object>} A Promise that resolves to an array of state cities with some special information if you want.
 *
 * @example
 * // Returns list of cities for Razavi Khorasan state of Iran.
 * getStateCities("iran", "razavi khorasan", true).then((cities) => {
 *   console.log(cities);
 * }).catch((error) => {
 *   console.log(error);
 * })
 *
 * // Returns INPUT_TYPE_ERR error.
 * getStateCities(12, "", true).then((cities) => {
 *   console.log(cities);
 * }).catch((error) => {
 *   console.log(error);
 * })
 *
 * // Returns MISSING_REQUIRED_VALUE error.
 * getStateCities("", "", true).then((cities) => {
 *   console.log(cities);
 * }).catch((error) => {
 *   console.log(error);
 * })
 */
export function getStateCities(country: string, state: string, geolocation: boolean): Promise<object>;
