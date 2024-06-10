/**
 * This function fetches data from an API and returns an array of countries.
 *
 * @param {boolean} flag - Need flag of country or not.
 * @param {boolean} currency - Need currency of country or not.
 * @param {boolean} dialCode - Need dial code of country or not.
 * @returns {Promise<Object>} A Promise that resolves to an array of countries fetched from the API.
 */
export function getAllCountries(flag: boolean, currency: boolean, dialCode: boolean): Promise<any>;
