
# AtlasJs library by Mr.MKZ

Atlas is a library that gives you region, subregion, country, state and city names with some special information if you want.

![NPM Downloads](https://img.shields.io/npm/d18m/%40mr-mkz%2Fatlas)

[Report Bugs](https://github.com/Mr-MKZ/AtlasJs/issues) |
[Home Page](https://github.com/Mr-MKZ/AtlasJs#readme)


## Installation

Install AtlasJs libary with npm

```bash
  npm install @mr-mkz/atlas
```
    
## API Reference

#### Get all regions

```javascript
  getAllRegions()
```

This function returns an object that contains list of all regions.

#### Get subregions

```javascript
  getSubRegions()
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `region`      | `string` | **Required**. name of region to get subregions |

This function return subregions of a region.

#### Get all countries

```javascript
  getAllCountries()
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `currency`      | `boolean` | do you want currency of country? |
| `dialCode`      | `boolean` | do you want dial code of country? |
| `native`      | `boolean` | do you want native of country? |
| `nationality`      | `boolean` | do you want nationality of country? |
| `region`      | `boolean` | do you want region of country? |
| `subregion`      | `boolean` | do you want subregion of country? |
| `translations`      | `boolean` | do you want translations of country? |
| `timezones`      | `boolean` | do you want timezones of country? |
| `geolocation`      | `boolean` | do you want geolocation of country? |
| `emojies`      | `boolean` | do you want emojies of country? |
| `domain`      | `boolean` | do you want domain of country? |

This function gives you list of countries with some special information.

#### Get states of a country

```javascript
  getCountryStates()
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `country`      | `string` | **Required**. country name |
| `iso3`      | `string` | **Required**. country iso3 |
| `iso2`      | `string` | **Required**. country iso2 |
| `geolocation`      | `boolean` | do you want geolocation of each country state? |

Tip: **country name**, **iso3** or **iso2**, at least one of them is **required**!

This function gives you states of a country.

#### Get cities of a state

```javascript
  getStateCities()
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `country`      | `string` | **Required**. country name |
| `state`      | `string` | **Required**. state name to get cities |
| `geolocation`      | `boolean` | do you want geolocation of each country state? |

This function gives you cities of a state.
## Usage/Examples

```javascript
import {
  getAllCountries,
  getAllRegions,
  getSubRegions,
  getCountryStates,
  getStateCities
} from "@mr-mkz/atlas";

// Returns list of all regions.
getAllRegions().then((regions) => {
  console.log(regions);
}).catch((error) => {
  console.log(error);
})

// Returns list of subregions for Asia region.
getSubRegions("Asia").then((subregions) => {
  console.log(subregions);
}).catch((error) => {
  console.log(error);
})

// Returns list of all countries.
getAllCountries().then((countries) => {
  console.log(countries);
}).catch((error) => {
  console.log(error);
})

// Returns list of states for Iran.
getCountryStates("iran", "", "", true).then((states) => {
  console.log(states);
}).catch((error) => {
  console.log(error);
})

getCountryStates("", "IRN", "", true).then((states) => {
  console.log(states);
}).catch((error) => {
  console.log(error);
})

getCountryStates("", "", "IR", true).then((states) => {
  console.log(states);
}).catch((error) => {
  console.log(error);
})

// Returns list of cities for Razavi Khorasan state of Iran.
getStateCities("iran", "razavi khorasan", true).then((cities) => {
  console.log(cities);
}).catch((error) => {
  console.log(error);
})
```


## Authors

- [@Mr.MKZ](https://www.github.com/Mr-MKZ)

