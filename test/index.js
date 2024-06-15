import {
  getAllCountries,
  getAllRegions,
  getSubRegions,
  getCountryStates
} from "../dist/index.cjs";
import { AtlasFileReader } from "../src/extension.js";

// import { getCountryStates } from "../src/index.js";

// getAllCountries().then((country) => console.log(country))

getCountryStates("iran", "irn", "ir", true).then((states) => {
  console.log(states);
});