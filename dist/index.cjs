function t(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=/*#__PURE__*/t(require("axios"));function e(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}exports.getAllCountries=function(t,n,a){var o=[],i=[];t&&o.push("flag"),n&&o.push("currency"),a&&o.push("dialCode");var u=o.length>0?"https://countriesnow.space/api/v0.1/countries/info?returns="+o.join(","):"https://countriesnow.space/api/v0.1/countries/positions";return r.default.request({method:"get",maxBodyLength:Infinity,url:u,headers:{}}).then(function(t){if(0==o.length){for(var r,n=function(t,r){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,r){if(t){if("string"==typeof t)return e(t,r);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}(t))){n&&(t=n);var a=0;return function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(t.data.data);!(r=n()).done;)i.push(r.value.name);return i}return t.data.data}).catch(function(t){return[t]})};
//# sourceMappingURL=index.cjs.map
