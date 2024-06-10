import { getAllCountries } from "../dist/index.cjs";

(async () => {
    const data = await getAllCountries()
    console.log(data);
})()