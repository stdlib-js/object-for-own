// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function s(s,n,o){var i,l,d,m;if("object"!=typeof s||null===s)throw new TypeError(e("null3L",s));if(!r(n))throw new TypeError(e("null2H",n));for(l=(i=t(s)).length,m=0;m<l;m++)if(d=i[m],!1===n.call(o,s[d],d,s))return s;return s}export{s as default};
//# sourceMappingURL=index.mjs.map
