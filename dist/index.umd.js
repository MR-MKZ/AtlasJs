!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("axios"),require("fs")):"function"==typeof define&&define.amd?define(["exports","axios","fs"],r):r((e||self).atlas={},e.axios,e.fs)}(this,function(e,r,n){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=/*#__PURE__*/t(r);function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=Array(r);n<r;n++)t[n]=e[n];return t}function s(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,r){if(e){if("string"==typeof e)return i(e,r);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var t=0;return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,r){try{var n=e()}catch(e){return r(e)}return n&&n.then?n.then(void 0,r):n}function a(e,r,n,t){return void 0===r&&(r="{}"),void 0===n&&(n="get"),void 0===t&&(t={}),o.default.request({method:n,maxBodyLength:Infinity,url:e,headers:t,data:r}).then(function(e){return e.data}).catch(function(e){return{error:!0,msg:e}})}function c(e,r){try{var n=e()}catch(e){return r(e)}return n&&n.then?n.then(void 0,r):n}var l=new(/*#__PURE__*/function(){function e(){}var r=e.prototype;return r.getRegions=function(){try{return Promise.resolve(u(function(){return Promise.resolve(n.promises.readFile("./assets/regions.json","utf8")).then(JSON.parse)},function(e){console.error("Error reading JSON file:",e)}))}catch(e){return Promise.reject(e)}},r.getRegionByName=function(e){try{return Promise.resolve(u(function(){if(isNaN(Number(e)))return Promise.resolve(n.promises.readFile("./assets/regions.json","utf8")).then(function(r){for(var n,t=s(JSON.parse(r));!(n=t()).done;){var o=n.value;if(o.name.toLowerCase()===e.toLowerCase())return o}console.error("Region "+e+" not found")});console.error("Error finding region: region name can not be Number")},function(e){console.error("Error reading JSON file:",e)}))}catch(e){return Promise.reject(e)}},r.getSubRegion=function(e){try{var r=[];return Promise.resolve(u(function(){return Promise.resolve(n.promises.readFile("./assets/subregions.json","utf8")).then(function(n){for(var t,o=s(JSON.parse(n));!(t=o()).done;){var i=t.value;i.region_id==e&&r.push(i)}if(0!=r.length)return r;console.error("Subregion with region id "+e+" not found")})},function(e){console.error("Error reading JSON file:",e)}))}catch(e){return Promise.reject(e)}},r.getCountries=function(e,r,t,o,i,a,c,l,f,g,m){try{return Promise.resolve(u(function(){var u=[];return Promise.resolve(n.promises.readFile("./assets/countries_states_cities.json","utf8")).then(function(n){for(var d,v=s(JSON.parse(n));!(d=v()).done;){var y=d.value,h={};h.id=y.id,h.name=y.name,h.iso2=y.iso2,h.iso3=y.iso3,h.capital=y.capital,r&&(h.phone_code=y.phone_code),e&&(h.currency=y.currency,h.currency_name=y.currency_name,h.currency_symbol=y.currency_symbol),m&&(h.domain=y.tld),t&&(h.native=y.native),o&&(h.nationality=y.nationality),i&&(h.region=y.region,h.region_id=y.region_id),a&&(h.subregion=y.subregion,h.subregion_id=y.subregion_id),c&&(h.translations=y.translations),l&&(h.timezones=y.timezones),f&&(h.latitude=y.latitude,h.longitude=y.longitude),g&&(h.emoji=y.emoji,h.emojiU=y.emojiU),u.push(h)}return u})},function(e){console.error("Error getting countries:",e)}))}catch(e){return Promise.reject(e)}},e}());e.getAllCapitals=function(e){try{return Promise.resolve(function(){if(e&&""!==e){var n=JSON.stringify({country:e});return Promise.resolve(a("https://countriesnow.space/api/v0.1/countries/capital",n,"post",{"Content-Type":"application/json"})).then(function(n){return n.error?r.isAxiosError(n.msg)&&n.msg.response&&404==n.msg.response.status?{error:!0,msg:"Country "+e+" is not exist!"}:void 0:n.data})}return Promise.resolve(a("https://countriesnow.space/api/v0.1/countries/capital")).then(function(e){return e.error?{error:!0,msg:e.msg}:e.data})}())}catch(e){return Promise.reject(e)}},e.getAllCountries=function(e,r,n,t,o,i,s,u,a,f,g){try{return Promise.resolve(c(function(){return Promise.resolve(l.getCountries(e,r,n,t,o,i,s,u,a,f,g)).then(function(e){if(null!=e)return e})},function(e){console.error("Error requesting countries: ",e)}))}catch(e){return Promise.reject(e)}},e.getAllRegions=function(){try{return Promise.resolve(c(function(){return Promise.resolve(l.getRegions())},function(e){console.error("Error requesting regions: ",e)}))}catch(e){return Promise.reject(e)}},e.getSubRegions=function(e){try{return Promise.resolve(function(){if(e&&""!==e)return c(function(){return Promise.resolve(l.getRegionByName(e)).then(function(e){return function(){if(null!=e)return Promise.resolve(l.getSubRegion(e.id)).then(function(e){if(null!=e)return e})}()})},function(e){console.error("Error requesting subregions: ",e)});console.error("Error requesting subregions: region name is required!")}())}catch(e){return Promise.reject(e)}}});
//# sourceMappingURL=index.umd.js.map
