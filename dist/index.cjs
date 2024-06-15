require("axios");var e=require("fs");function r(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,o=Array(r);n<r;n++)o[n]=e[n];return o}function n(e,n){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(o)return(o=o.call(e)).next.bind(o);if(Array.isArray(e)||(o=function(e,n){if(e){if("string"==typeof e)return r(e,n);var o={}.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?r(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){o&&(e=o);var t=0;return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,r){try{var n=e()}catch(e){return r(e)}return n&&n.then?n.then(void 0,r):n}function t(e,r){try{var n=e()}catch(e){return r(e)}return n&&n.then?n.then(void 0,r):n}var i=new(/*#__PURE__*/function(){function r(){}var t=r.prototype;return t.getRegions=function(){try{return Promise.resolve(o(function(){return Promise.resolve(e.promises.readFile("./assets/regions.json","utf8")).then(JSON.parse)},function(e){console.error("Error reading JSON file:",e)}))}catch(e){return Promise.reject(e)}},t.getRegionByName=function(r){try{return Promise.resolve(o(function(){if(isNaN(Number(r)))return Promise.resolve(e.promises.readFile("./assets/regions.json","utf8")).then(function(e){for(var o,t=n(JSON.parse(e));!(o=t()).done;){var i=o.value;if(i.name.toLowerCase()===r.toLowerCase())return i}console.error("Region "+r+" not found")});console.error("Error finding region: region name can not be Number or Boolean")},function(e){console.error("Error reading JSON file:",e)}))}catch(e){return Promise.reject(e)}},t.getSubRegion=function(r){try{var t=[];return Promise.resolve(o(function(){return Promise.resolve(e.promises.readFile("./assets/subregions.json","utf8")).then(function(e){for(var o,i=n(JSON.parse(e));!(o=i()).done;){var s=o.value;s.region_id==r&&t.push(s)}if(0!=t.length)return t;console.error("Subregion with region id "+r+" not found")})},function(e){console.error("Error reading JSON file:",e)}))}catch(e){return Promise.reject(e)}},t.getCountries=function(r,t,i,s,u,a,l,c,f,g,m){try{return Promise.resolve(o(function(){var o=[];return Promise.resolve(e.promises.readFile("./assets/countries_states_cities.json","utf8")).then(function(e){for(var d,v=n(JSON.parse(e));!(d=v()).done;){var y=d.value,h={};h.id=y.id,h.name=y.name,h.iso2=y.iso2,h.iso3=y.iso3,h.capital=y.capital,t&&(h.phone_code=y.phone_code),r&&(h.currency=y.currency,h.currency_name=y.currency_name,h.currency_symbol=y.currency_symbol),m&&(h.domain=y.tld),i&&(h.native=y.native),s&&(h.nationality=y.nationality),u&&(h.region=y.region,h.region_id=y.region_id),a&&(h.subregion=y.subregion,h.subregion_id=y.subregion_id),l&&(h.translations=y.translations),c&&(h.timezones=y.timezones),f&&(h.latitude=y.latitude,h.longitude=y.longitude),g&&(h.emoji=y.emoji,h.emojiU=y.emojiU),o.push(h)}return o})},function(e){console.error("Error getting countries:",e)}))}catch(e){return Promise.reject(e)}},t.getStates=function(r,t,i,s){try{return Promise.resolve(o(function(){if(null!=r&&null!=r&&isNaN(Number(r))||null!=t&&null!=t&&isNaN(Number(t))||null!=i&&null!=i&&isNaN(Number(i))){var o=[];return Promise.resolve(e.promises.readFile("./assets/countries_states_cities.json","utf8")).then(function(e){for(var u,a=n(JSON.parse(e));!(u=a()).done;){var l=u.value;if(null!=r&&null!=r&&l.name.toLowerCase()==r.toLowerCase()||null!=t&&null!=t&&l.iso3.toLowerCase()==t.toLowerCase()||null!=i&&null!=i&&l.iso2.toLowerCase()==i.toLowerCase())for(var c,f=n(l.states);!(c=f()).done;){var g=c.value,m={};m.id=g.id,m.name=g.name,m.state_code=g.state_code,s&&(m.latitude=g.latitude,m.longitude=g.longitude),o.push(m)}}if(0!=o.length)return o;console.error("Country "+r+" not found")})}console.error("Error getting country state: country name can not be Number or Boolean")},function(e){console.error("Error getting country states:",e)}))}catch(e){return Promise.reject(e)}},r}());exports.getAllCountries=function(e,r,n,o,s,u,a,l,c,f,g){try{return Promise.resolve(t(function(){return Promise.resolve(i.getCountries(e,r,n,o,s,u,a,l,c,f,g)).then(function(e){if(null!=e)return e})},function(e){console.error("Error requesting countries: ",e)}))}catch(e){return Promise.reject(e)}},exports.getAllRegions=function(){try{return Promise.resolve(t(function(){return Promise.resolve(i.getRegions())},function(e){console.error("Error requesting regions: ",e)}))}catch(e){return Promise.reject(e)}},exports.getCountryStates=function(e,r,n,o){try{return Promise.resolve(function(){if(e&&""!=e||r&&""!=r||n&&""!=n)return t(function(){return null!=e&&null!=e&&(e=e.toString()),null!=r&&null!=r&&(r=r.toString()),null!=n&&null!=n&&(n=n.toString()),Promise.resolve(i.getStates(e,r,n,o)).then(function(e){if(null!=e)return e})},function(e){console.error("Error requesting country states: ",e)});console.error("Error requesting country states: country name is required! please enter country name, iso3 or iso2")}())}catch(e){return Promise.reject(e)}},exports.getSubRegions=function(e){try{return Promise.resolve(function(){if(e&&""!==e)return t(function(){return Promise.resolve(i.getRegionByName(e)).then(function(e){return function(){if(null!=e)return Promise.resolve(i.getSubRegion(e.id)).then(function(e){if(null!=e)return e})}()})},function(e){console.error("Error requesting subregions: ",e)});console.error("Error requesting subregions: region name is required!")}())}catch(e){return Promise.reject(e)}};
//# sourceMappingURL=index.cjs.map
