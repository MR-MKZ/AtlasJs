import { getAllCountries, getAllCapitals } from "../dist/index.cjs";

(async () => {
  let data = await getAllCountries();
  console.log(data);

  data = await getAllCapitals();
  console.log(data);
})();
