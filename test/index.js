import {
  getAllCountries,
  getAllCapitals,
  getAllRegions,
  getSubRegions
} from "../dist/index.cjs";
import { AtlasFileReader } from "../src/extension.js";

// import { getSubRegions } from "../src/index.js";

// getAllRegions().then((regions) => console.log(regions))

getAllCountries(true, true, true, true, true, true, true, true, true, true, true).then((countries) => {
  console.log(countries);
});