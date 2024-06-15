/**
 * This function returns and object that contains list of all regions.
 *
 * @returns {Promise<object>} A Promise that resolves to an array of regions.
 */
export function getAllRegions(): Promise<object>;
/**
 * This function return subregions of a region.
 *
 * @param {string} region region name to get subregions.
 * @returns {Promise<object>} A Promise that resolves to an array of subregions of entered region.
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
 */
export function getAllCountries(currency: boolean, dialCode: boolean, native: boolean, nationality: boolean, region: boolean, subregion: boolean, translations: boolean, timezones: boolean, geolocation: boolean, emojies: boolean, domain: boolean): Promise<object>;
/**
 * This function gives you states of a country.
 *
 * @param {string} country country name to get states
 * @param {string} iso3 country iso3 to get states
 * @param {string} iso2 country iso2 to get states
 * @param {boolean} geolocation do you want geolocation of each country state?
 * @returns {Promise<object>} A Promise that resolves to an array of country states with some special informations if you want.
 */
export function getCountryStates(country: string, iso3: string, iso2: string, geolocation: boolean): Promise<object>;
