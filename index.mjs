// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-normalize-index@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ndims@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function i(i,d){var t,m;if(0===(t=n(i)))throw new TypeError(s("invalid argument. First argument must be an ndarray having one or more dimensions. Number of dimensions: %d.",t));if(-1===(m=e(d,t-1)))throw new RangeError(s("invalid argument. Dimension index exceeds the number of dimensions. Number of dimensions: %d. Value: `%d`.",t,d));return r(i,!1)[m]}export{i as default};
//# sourceMappingURL=index.mjs.map