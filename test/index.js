import { getAllCountries, getAllCapitals, getAllRegions } from "../dist/index.cjs";
import { AtlasFileReader } from "../src/extension.js";
// import { getAllRegions } from "../src/index.js";

getAllRegions().then((regions) => {
  console.log(regions);
})