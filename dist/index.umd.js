!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("axios")):"function"==typeof define&&define.amd?define(["exports","axios"],t):t((r||self).atlas={},r.axios)}(this,function(r,t){function e(r){return r&&"object"==typeof r&&"default"in r?r:{default:r}}var n=/*#__PURE__*/e(t);function o(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=Array(t);e<t;e++)n[e]=r[e];return n}function i(r,t,e,o){return void 0===t&&(t="{}"),void 0===e&&(e="get"),void 0===o&&(o={}),n.default.request({method:e,maxBodyLength:Infinity,url:r,headers:o,data:t}).then(function(r){return r.data}).catch(function(r){return{error:!0,msg:r}})}r.getAllCapitals=function(r){try{return Promise.resolve(function(){if(r&&""!==r){var e=JSON.stringify({country:r});return Promise.resolve(i("https://countriesnow.space/api/v0.1/countries/capital",e,"post",{"Content-Type":"application/json"})).then(function(e){return e.error?t.isAxiosError(e.msg)&&e.msg.response&&404==e.msg.response.status?{error:!0,msg:"Country "+r+" is not exist!"}:void 0:e.data})}return Promise.resolve(i("https://countriesnow.space/api/v0.1/countries/capital")).then(function(r){return r.error?{error:!0,msg:r.msg}:r.data})}())}catch(r){return Promise.reject(r)}},r.getAllCountries=function(r,t,e){try{var n=[],a=[];r&&n.push("flag"),t&&n.push("currency"),e&&n.push("dialCode");var s=n.length>0?"https://countriesnow.space/api/v0.1/countries/info?returns="+n.join(","):"https://countriesnow.space/api/v0.1/countries/positions";return Promise.resolve(i(s)).then(function(r){if(r.error)return{error:!0,msg:r.msg};if(0==n.length){for(var t,e=function(r,t){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(e)return(e=e.call(r)).next.bind(e);if(Array.isArray(r)||(e=function(r,t){if(r){if("string"==typeof r)return o(r,t);var e={}.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(r,t):void 0}}(r))){e&&(r=e);var n=0;return function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(r.data);!(t=e()).done;)a.push(t.value.name);return a}return r.data})}catch(r){return Promise.reject(r)}}});
//# sourceMappingURL=index.umd.js.map
