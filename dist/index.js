"use strict";var t=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var o=t(function(q,s){
var u=require('@stdlib/ndarray-base-normalize-index/dist'),d=require('@stdlib/ndarray-base-ndims/dist'),m=require('@stdlib/ndarray-base-strides/dist'),a=require('@stdlib/error-tools-fmtprodmsg/dist');function v(i,r){var e,n;if(e=d(i),e===0)throw new TypeError(a('nullF7',e));if(n=u(r,e-1),n===-1)throw new RangeError(a('nullF8',e,r));return m(i)[n]}s.exports=v
});var f=o();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
