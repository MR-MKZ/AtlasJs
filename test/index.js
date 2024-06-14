import {
  getAllCountries,
  getAllCapitals,
  getAllRegions,
  getSubRegions
} from "../dist/index.cjs";
import { AtlasFileReader } from "../src/extension.js";

// import { getSubRegions } from "../src/index.js";

// getAllRegions().then((regions) => console.log(regions))

getSubRegions("europe").then((regions) => {
  console.log(regions);
});