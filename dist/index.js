"use strict";var c=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var v=c(function(y,o){
var f=require('@stdlib/utils-keys/dist'),m=require('@stdlib/assert-is-function/dist'),l=require('@stdlib/error-tools-fmtprodmsg/dist');function g(r,e,a){var n,u,s,i,t;if(typeof r!="object"||r===null)throw new TypeError(l('2pN3L',r));if(!m(e))throw new TypeError(l('2pN2H',e));for(n=f(r),s=n.length,t=0;t<s;t++)if(i=n[t],u=e.call(a,r[i],i,r),u===!1)return r;return r}o.exports=g
});var p=v();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
