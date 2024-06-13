import {
  getAllCountries,
  getAllCapitals,
  getAllRegions,
  getSubRegions
} from "../dist/index.cjs";
import { AtlasFileReader } from "../src/extension.js";

getSubRegions("asia").then((regions) => {
  console.log(regions);
});
