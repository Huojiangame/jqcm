(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-test-index"],{"134c":function(t,e,n){"use strict";n.r(e);var a=n("7f98"),o=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=o.a},"2f76":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".content[data-v-7106dafc]{display:flex;flex-direction:column;align-items:center;justify-content:center}.logo[data-v-7106dafc]{height:%?200?%;width:%?200?%;margin-top:%?200?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.text-area[data-v-7106dafc]{display:flex;justify-content:center}.title[data-v-7106dafc]{font-size:%?36?%;color:#8f8f94}",""]),t.exports=e},3729:function(t,e,n){"use strict";var a=n("d2cd"),o=n.n(a);o.a},"5be5":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"content"},[e("v-uni-image",{staticClass:"logo",attrs:{src:"/static/logo.png"}}),e("v-uni-view",{staticClass:"text-area"},[e("v-uni-text",{staticClass:"title"},[this._v(this._s(this.title))])],1)],1)},o=[]},"7f98":function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("c7eb")),r=a(n("1da1")),i=n("9ae6"),c={data:function(){return{title:"Hello"}},onLoad:function(){this.handleGetRoleInfo()},methods:{handleGetRoleInfo:function(){var t=this;return(0,r.default)((0,o.default)().mark((function e(){var n,a,r;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n={userid:35887505,server_id:28},a={"access-token":"xxxfff-111-333"},e.next=5,(0,i.getRoleInfo)(n,a);case 5:r=e.sent,t.title=r,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}};e.default=c},"9ae6":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.getAction=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.http.get(t,{params:e,header:n})},e.getActionNoProxy=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return o.http.get(t,{params:e,header:n})},e.getRoleInfo=function(t,e){return a.http.get("/ljxz/get_role_info_t.php",{params:t,header:e})},e.postAction=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;return a.http.post(t,e,{dest:o,header:n})},e.postActionNoProxy=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return o.http.post(t,e,{header:n})},e.postFormAction=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;return a.httpForm.post(t,e,{dest:o,header:n})},e.postFormActionNoProxy=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return o.httpForm.post(t,e,{header:n})};var a=n("35ba"),o=n("3abe")},d2cd:function(t,e,n){var a=n("2f76");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("4f06").default;o("31084990",a,!0,{sourceMap:!1,shadowMode:!1})},eff4:function(t,e,n){"use strict";n.r(e);var a=n("5be5"),o=n("134c");for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("3729");var i=n("f0c5"),c=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,"7106dafc",null,!1,a["a"],void 0);e["default"]=c.exports}}]);