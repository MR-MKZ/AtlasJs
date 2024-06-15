import {
  getAllCountries,
  getAllRegions,
  getSubRegions,
  getCountryStates,
} from "../dist/index.cjs";
import { AtlasFileReader } from "../src/extension.js";

// import { getCountryStates } from "../src/index.js";

// getAllCountries().then((country) => console.log(country))

getCountryStates("ir", "irs", "isr", true)
  .then((states) => {
    console.log(states);
  })
  .catch((error) => {
    console.log(error);
  });
