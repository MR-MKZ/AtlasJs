import {
  getAllCountries,
  getAllRegions,
  getSubRegions,
  getCountryStates,
  getStateCities
} from "../dist/index.cjs";

// Returns list of all regions.
// getAllRegions().then((regions) => {
//   console.log(regions);
// }).catch((error) => {
//   console.log(error);
// })

// ----------------------------------------------------------------------------

// Returns list of subregions for Asia region.
// getSubRegions("Asia").then((subregions) => {
//   console.log(subregions);
// }).catch((error) => {
//   console.log(error);
// })

// Returns INPUT_TYPE_ERR error.
// getSubRegions(12).then((subregions) => {
//   console.log(subregions);
// }).catch((error) => {
//   console.log(error);
// })

// Returns MISSING_REQUIRED_VALUE error.
// getSubRegions().then((subregions) => {
//   console.log(subregions);
// }).catch((error) => {
//   console.log(error);
// })

// ----------------------------------------------------------------------------

// Returns list of all countries.
// getAllCountries().then((countries) => {
//   console.log(countries);
// }).catch((error) => {
//   console.log(error);
// })

// ----------------------------------------------------------------------------

// Returns list of states for Iran.
// getCountryStates({"iran", "", "", true}).then((states) => {
//   console.log(states);
// }).catch((error) => {
//   console.log(error);
// })

// getCountryStates({"", "IRN", "", true}).then((states) => {
//   console.log(states);
// }).catch((error) => {
//   console.log(error);
// })

// getCountryStates({"", "", "IR", true}).then((states) => {
//   console.log(states);
// }).catch((error) => {
//   console.log(error);
// })

// Returns INPUT_TYPE_ERR error.
// getCountryStates({12, "", "", true}).then((states) => {
//   console.log(states);
// }).catch((error) => {
//   console.log(error);
// })

// Returns MISSING_REQUIRED_VALUE error.
// getCountryStates({"", "", "", true}).then((states) => {
//   console.log(states);
// }).catch((error) => {
//   console.log(error);
// })

// ----------------------------------------------------------------------------

// Returns list of cities for Razavi Khorasan state of Iran.
// getStateCities({"iran", "razavi khorasan", true}).then((cities) => {
//   console.log(cities);
// }).catch((error) => {
//   console.log(error);
// })

// Returns INPUT_TYPE_ERR error.
// getStateCities({12, "", true}).then((cities) => {
//   console.log(cities);
// }).catch((error) => {
//   console.log(error);
// })

// Returns MISSING_REQUIRED_VALUE error.
// getStateCities({"", "", true}).then((cities) => {
//   console.log(cities);
// }).catch((error) => {
//   console.log(error);
// })