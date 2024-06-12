/**
 * This function returns and object that contains list of all regions.
 *
 * @returns {Promise<object>} A Promise that resolves to an array of regions.
 */
export function getAllRegions(): Promise<object>;
/**
 * This function fetches data from an API and returns an array of countries.
 *
 * @param {boolean} flag Need flag of country or not.
 * @param {boolean} currency Need currency of country or not.
 * @param {boolean} dialCode Need dial code of country or not.
 * @returns {Promise<object>} A Promise that resolves to an array of countries fetched from the API.
 */
export function getAllCountries(flag: boolean, currency: boolean, dialCode: boolean): Promise<object>;
/**
 * This function returns an array of country name and capitals.
 *
 * @param {string} country Country name if you want to get capital of a specific country
 * @returns {Promise<object>} A promise that resolves to an array of country name, country capital and iso2&3
 */
export function getAllCapitals(country: string): Promise<object>;
