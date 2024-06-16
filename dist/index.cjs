var e=require("fs"),r=require("path"),t=require("url");function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e,r){if(e){if("string"==typeof e)return n(e,r);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function u(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(u=function(){return!!e})()}function s(e,r){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},s(e,r)}function a(e){var r="function"==typeof Map?new Map:void 0;return a=function(e){if(null===e||!function(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(r){return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,t)}function t(){return function(e,r,t){if(u())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,r);var o=new(e.bind.apply(e,n));return t&&s(o,t.prototype),o}(e,arguments,i(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),s(t,e)},a(e)}var c=/*#__PURE__*/function(e){function r(r,t,n,o){var i;return(i=e.call(this,r)||this).name="AtlasError -> "+t,n&&(i.tips=n),o&&(i.data=o),i}var t,n;return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,s(t,n),r}(/*#__PURE__*/a(Error));function l(e,r,t,n){throw new c(e,r,t,n)}function f(e){try{var n=t.fileURLToPath("undefined"==typeof document?new(require("url").URL)("file:"+n).href:document.currentScript&&document.currentScript.src||new URL("index.cjs",document.baseURI).href),o=r.dirname(n);return r.join(o,"..","assets",e)}catch(e){console.error("Error reading file:",e)}}var m=new(/*#__PURE__*/function(){function r(){}var t=r.prototype;return t.getRegions=function(){try{return Promise.resolve(e.promises.readFile(f("regions.json"),"utf8")).then(JSON.parse)}catch(e){return Promise.reject(e)}},t.getRegionByName=function(r){try{return Promise.resolve(function(){if(isNaN(Number(r)))return Promise.resolve(e.promises.readFile(f("regions.json"),"utf8")).then(function(e){for(var t,n=o(JSON.parse(e));!(t=n()).done;){var i=t.value;if(i.name.toLowerCase()===r.toLowerCase())return i}l("region "+r+" not found","RESULT_NOT_FOUND")});l("region name must be string","INPUT_TYPE_ERR")}())}catch(e){return Promise.reject(e)}},t.getSubRegion=function(r){try{var t=[];return Promise.resolve(e.promises.readFile(f("subregions.json"),"utf8")).then(function(e){for(var n,i=o(JSON.parse(e));!(n=i()).done;){var u=n.value;u.region_id==r&&t.push(u)}if(0!==t.length)return t;l("Subregion with region id "+r+" not found","RESULT_NOT_FOUND")})}catch(e){return Promise.reject(e)}},t.getCountries=function(r,t,n,i,u,s,a,c,l,m,d){try{var v=[];return Promise.resolve(e.promises.readFile(f("countries_states_cities.json"),"utf8")).then(function(e){for(var f,p=o(JSON.parse(e));!(f=p()).done;){var g=f.value,y={};y.id=g.id,y.name=g.name,y.iso2=g.iso2,y.iso3=g.iso3,y.capital=g.capital,t&&(y.phone_code=g.phone_code),r&&(y.currency=g.currency,y.currency_name=g.currency_name,y.currency_symbol=g.currency_symbol),d&&(y.domain=g.tld),n&&(y.native=g.native),i&&(y.nationality=g.nationality),u&&(y.region=g.region,y.region_id=g.region_id),s&&(y.subregion=g.subregion,y.subregion_id=g.subregion_id),a&&(y.translations=g.translations),c&&(y.timezones=g.timezones),l&&(y.latitude=g.latitude,y.longitude=g.longitude),m&&(y.emoji=g.emoji,y.emojiU=g.emojiU),v.push(y)}return v})}catch(e){return Promise.reject(e)}},t.getStates=function(r,t,n,i){try{return Promise.resolve(function(){if(void 0!==r&&null!=r&&isNaN(Number(r))||void 0!==t&&isNaN(Number(t))||void 0!==n&&isNaN(Number(n))){var u=[];return Promise.resolve(e.promises.readFile(f("countries_states_cities.json"),"utf8")).then(function(e){for(var s,a=o(JSON.parse(e));!(s=a()).done;){var c=s.value;if(void 0!==r&&null!=r&&c.name.toLowerCase()===r.toLowerCase()||void 0!==t&&c.iso3.toLowerCase()===t.toLowerCase()||void 0!==n&&c.iso2.toLowerCase()===n.toLowerCase())for(var f,m=o(c.states);!(f=m()).done;){var d=f.value,v={};v.id=d.id,v.name=d.name,v.state_code=d.state_code,i&&(v.latitude=d.latitude,v.longitude=d.longitude),u.push(v)}}if(0!==u.length)return u;l("Country "+r+" not found","RESULT_NOT_FOUND",{country_name:"check entered country name: "+r,iso3:"check entered iso3: "+t,iso2:"check entered iso2: "+n})})}l("region name must be string","INPUT_TYPE_ERR")}())}catch(e){return Promise.reject(e)}},t.getCities=function(r,t,n){try{var i=[];return Promise.resolve(function(){if(isNaN(Number(r))&&isNaN(Number(t)))return Promise.resolve(e.promises.readFile(f("countries_states_cities.json"),"utf8")).then(function(e){for(var u,s=!1,a=!1,c=o(JSON.parse(e));!(u=c()).done;){var f=u.value;if(f.name.toLowerCase()===r.toLowerCase()){s=!0;for(var m,d=o(f.states);!(m=d()).done;){var v=m.value;if(v.name.toLowerCase()===t.toLowerCase()){a=!0;for(var p,g=o(v.cities);!(p=g()).done;){var y=p.value,h={};h.id=y.id,h.name=y.name,n&&(h.latitude=y.latitude,h.longitude=y.longitude),i.push(h)}}}}}if(i.length>0)return i;s?a?l("There is no city for "+r+","+t,"RESULT_NOT_FOUND"):l("State "+t+" not found","RESULT_NOT_FOUND",{state:"check entered state name: "+t}):l("Country "+r+" not found","RESULT_NOT_FOUND",{country:"check entered country name: "+r})});l("country name and state name must be string","INPUT_TYPE_ERR")}())}catch(e){return Promise.reject(e)}},r}());exports.getAllCountries=function(e,r,t,n,o,i,u,s,a,c,l){try{return Promise.resolve(m.getCountries(e,r,t,n,o,i,u,s,a,c,l))}catch(e){return Promise.reject(e)}},exports.getAllRegions=function(){try{return Promise.resolve(m.getRegions())}catch(e){return Promise.reject(e)}},exports.getCountryStates=function(e,r,t,n){try{return Promise.resolve(function(){if(e&&""!==e||r&&""!==r||t&&""!==t)return null!=e&&null!=e&&(e=e.toString()),null!=r&&void 0!==r&&(r=r.toString()),null!=t&&null!=t&&(t=t.toString()),Promise.resolve(m.getStates(e,r,t,n));l("country name, iso3 or iso2 is missing, at least one of them is required!","MISSING_REQUIRED_VALUE")}())}catch(e){return Promise.reject(e)}},exports.getStateCities=function(e,r,t){try{return Promise.resolve(function(){if(e&&void 0!==e&&""!==e)return function(){if(r&&void 0!==r&&""!==r)return isNaN(e)||(e=e.toString()),isNaN(r)||(r=r.toString()),Promise.resolve(m.getCities(e,r,t));l("state name is required!","MISSING_REQUIRED_VALUE")}();l("country name is required!","MISSING_REQUIRED_VALUE")}())}catch(e){return Promise.reject(e)}},exports.getSubRegions=function(e){try{return Promise.resolve(function(){if(e&&void 0!==e&&""!==e)return Promise.resolve(m.getRegionByName(e)).then(function(e){return function(){if(void 0!==e)return Promise.resolve(m.getSubRegion(e.id))}()});l("region name is required!","MISSING_REQUIRED_VALUE")}())}catch(e){return Promise.reject(e)}};
//# sourceMappingURL=index.cjs.map
