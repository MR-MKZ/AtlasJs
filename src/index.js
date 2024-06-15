import {AtlasFileReader} from "./extension.js";
import {raiseError} from "./AtlasError.js";

const atlasFileReader = new AtlasFileReader();

/**
 * This function returns and object that contains list of all regions.
 *
 * @returns {Promise<object>} A Promise that resolves to an array of regions.
 */
export async function getAllRegions() {
    return await atlasFileReader.getRegions();
}

/**
 * This function return subregions of a region.
 *
 * @param {string} region region name to get subregions.
 * @returns {Promise<object>} A Promise that resolves to an array of subregions of entered region.
 */
export async function getSubRegions(region) {
    if (region && region !== "") {
        const foundRegion = await atlasFileReader.getRegionByName(region);
        if (foundRegion !== undefined) {
            let regionId = foundRegion.id;
            return await atlasFileReader.getSubRegion(regionId);
        }
    } else {
        raiseError("region name is required!", "MISSING_REQUIRED_VALUE")
    }
}

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
    return await atlasFileReader.getCountries(
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
        return await atlasFileReader.getStates(
            country,
            iso3,
            iso2,
            geolocation
        );
    } else {
        raiseError("country name, iso3 or iso2 is missing, at least one of them is required!", "MISSING_REQUIRED_VALUE")
    }
}
