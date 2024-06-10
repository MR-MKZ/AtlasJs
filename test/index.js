import { getAllCountries, getAllCapitals } from "../dist/index.cjs";


(async () => {
    const data = await getAllCountries()
    console.log(data);
})()

(async () => {
    const data = await getAllCapitals()
    console.log(data);
})()