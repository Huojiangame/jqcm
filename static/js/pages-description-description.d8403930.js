(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-description-description"],{1488:function(e,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("08bf"),s={data:function(){return{activeName:"0",desc:{contact:"",summary:{},normalVersion:{price:"",features:[],description:""},fullVersion:{price:"",features:[],description:""},vipVersion:{price:"",features:[],description:""},superVipVersion:{price:"",features:[],description:""}}}},onLoad:function(){this.handleGetDescription()},methods:{handleGetDescription:function(){var e=this;(0,n.getDescription)().then((function(t){e.desc=t}))}}};t.default=s},"1cd5":function(e,t,i){var n=i("7a13");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=i("4f06").default;s("2aaa3a44",n,!0,{sourceMap:!1,shadowMode:!1})},"674b":function(e,t,i){"use strict";i.r(t);var n=i("1488"),s=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=s.a},"7a13":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".uni-collapse-cell--open[data-v-283e5e80]{background-color:#fff}.collapse-content[data-v-283e5e80]{padding:%?10?% %?30?%;-webkit-user-select:text;user-select:text}.item-name[data-v-283e5e80]{padding-bottom:%?20?%}.item-wrap[data-v-283e5e80]{color:#969799;padding-bottom:%?20?%}",""]),e.exports=t},"7e76":function(e,t,i){"use strict";i.r(t);var n=i("d02c"),s=i("674b");for(var a in s)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return s[e]}))}(a);i("9b80");var r=i("f0c5"),c=Object(r["a"])(s["default"],n["b"],n["c"],!1,null,"283e5e80",null,!1,n["a"],void 0);t["default"]=c.exports},"9b80":function(e,t,i){"use strict";var n=i("1cd5"),s=i.n(n);s.a},d02c:function(e,t,i){"use strict";i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var n={uniCollapse:i("512e").default,uniCollapseItem:i("0792").default},s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("uni-collapse",{attrs:{accordion:"true"}},[i("uni-collapse-item",{attrs:{title:"辅助说明",open:!0}},[i("v-uni-view",{staticClass:"collapse-content"},e._l(e.desc.summary,(function(t){return i("v-uni-view",{key:t,staticClass:"item-wrap"},[e._v(e._s(t))])})),1)],1),i("uni-collapse-item",{attrs:{title:"普通版说明"}},[i("v-uni-view",{staticClass:"collapse-content"},[i("v-uni-view",{staticClass:"item-name"},[e._v("价格：")]),i("v-uni-view",{staticClass:"item-wrap"},[e._v(e._s(e.desc.normalVersion.price))]),i("v-uni-view",{staticClass:"item-name"},[e._v("功能：")]),e._l(e.desc.normalVersion.features,(function(t){return i("v-uni-view",{key:t,staticClass:"item-wrap"},[e._v(e._s(t))])})),e.desc.normalVersion.description?i("v-uni-view",[i("v-uni-view",{staticClass:"item-name"},[e._v("说明：")]),e._l(e.desc.normalVersion.description,(function(t){return i("v-uni-view",{key:t,staticClass:"item-wrap"},[e._v(e._s(t))])}))],2):e._e()],2)],1),i("uni-collapse-item",{attrs:{title:"VIP版说明"}},[i("v-uni-view",{staticClass:"collapse-content"},[i("v-uni-view",{staticClass:"item-name"},[e._v("价格：")]),i("v-uni-view",{staticClass:"item-wrap"},[e._v(e._s(e.desc.vipVersion.price))]),i("v-uni-view",{staticClass:"item-name"},[e._v("功能：")]),e._l(e.desc.vipVersion.features,(function(t){return i("v-uni-view",{key:t,staticClass:"item-wrap"},[e._v(e._s(t))])})),e.desc.vipVersion.description?i("v-uni-view",[i("v-uni-view",{staticClass:"item-name"},[e._v("说明：")]),e._l(e.desc.vipVersion.description,(function(t){return i("v-uni-view",{key:t,staticClass:"item-wrap"},[e._v(e._s(t))])}))],2):e._e()],2)],1)],1)],1)},a=[]}}]);