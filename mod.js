// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,i,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,s=parseInt(i,10),!isFinite(s)){if(!t(i))throw new Error("invalid integer. Value: "+i);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(i=(-s).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=s.toString(r),s||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var c=Math.abs,p=String.prototype.toLowerCase,l=String.prototype.toUpperCase,u=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,d=/^(\d+)e/,w=/\.0$/,v=/\.0*e/,b=/(\..*[^0])0*e/;function m(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":c(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=u.call(i,b,"$1e"),i=u.call(i,v,"e"),i=u.call(i,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=u.call(i,f,"e+0$1"),i=u.call(i,g,"e-0$1"),e.alternate&&(i=u.call(i,h,"$1."),i=u.call(i,d,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===l.call(e.specifier)?l.call(i):p.call(i)}function y(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,E=isNaN,k=Array.isArray;function x(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function j(e){var r,t,i,a,o,c,p,l,u,f,g,h,d;if(!k(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",p=1,l=0;l<e.length;l++)if(i=e[l],"string"==typeof i)c+=i;else{if(r=void 0!==i.precision,!(i=x(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(a=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,E(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,E(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!E(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=E(o)?String(i.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(f=i.arg,g=i.width,h=i.padRight,d=void 0,(d=g-f.length)<0?f:f=h?f+y(d):y(d)+f)),c+=i.arg||"",p+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,t,i,n;for(t=[],n=0,i=S.exec(e);i;)(r=e.slice(n,S.lastIndex-i[0].length)).length&&t.push(r),t.push(F(i)),n=S.lastIndex,i=S.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function $(e){var r,t;if("string"!=typeof e)throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[V(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return j.apply(null,r)}var I,T=Object.prototype,C=T.toString,R=T.__defineGetter__,A=T.__defineSetter__,O=T.__lookupGetter__,P=T.__lookupSetter__;function Z(e,r){return"column-major"===r?function(e){var r,t,i;for(r=[],t=1,i=0;i<e.length;i++)r.push(t),t*=e[i];return r}(e):function(e){var r,t,i,n;for(r=e.length,t=[],n=0;n<r;n++)t.push(0);for(i=1,n=r-1;n>=0;n--)t[n]=i,i*=e[n];return t}(e)}I=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(O.call(e,r)||P.call(e,r)?(i=e.__proto__,e.__proto__=T,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&R&&R.call(e,r,t.get),o&&A&&A.call(e,r,t.set),e},I(Z,"assign",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t){return"column-major"===r?function(e,r){var t,i;for(t=1,i=0;i<e.length;i++)r[i]=t,t*=e[i];return r}(e,t):function(e,r){var t,i;for(t=1,i=e.length-1;i>=0;i--)r[i]=t,t*=e[i];return r}(e,t)}});var G="row-major";function W(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}function L(e,r){var t,i,n,a;if(t=function(e){var r=e.ndims;return"number"==typeof r?r:e.shape.length}(e),0===t)throw new TypeError(W("1mhF7",t));if(a=t-1,-1===(i=(n=r)<0?(n+=a+1)<0?-1:n:n>a?-1:n))throw new RangeError(W("1mhF8",t,r));return function(e,r){var t,i,n;return"object"!=typeof(n=e.strides)||null===n?0===(i=e.shape).length?[0]:("string"!=typeof(t=e.order)&&(t=G),Z(i,t)):r?function(e){var r,t,i;for(t=e.length,r=[],i=0;i<t;i++)r.push(e[i]);return r}(n):n}(e,!1)[i]}export{L as default};
//# sourceMappingURL=mod.js.map
