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
export function getAllCountries(currency: boolean, dialCode: boolean, native: boolean, nationality: boolean, region: boolean, subregion: boolean, translations: boolean, timezones: boolean, geolocation: boolean, emojies: boolean, domain: boolean): Promise<object>;
/**
 * This function returns an array of country name and capitals.
 *
 * @param {string} country Country name if you want to get capital of a specific country
 * @returns {Promise<object>} A promise that resolves to an array of country name, country capital and iso2&3
 */
export function getAllCapitals(country: string): Promise<object>;
