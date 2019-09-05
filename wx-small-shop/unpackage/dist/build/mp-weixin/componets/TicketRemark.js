(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["componets/TicketRemark"],{"10a1":function(t,e,n){},"25ca":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"ticketRemark",props:{remark:Object},data:function(){return{specialList:["适用人群:","退款规则:"]}},computed:{value:function(){if(!this.remark)return"暂无";for(var t in this.remark)if("title"!==t)return this.remark[t]}}};e.default=r},"8fec":function(t,e,n){"use strict";n.r(e);var r=n("db72"),a=n("a9b8");for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);n("c465");var i=n("2877"),c=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,"6b2f4482",null);e["default"]=c.exports},a9b8:function(t,e,n){"use strict";n.r(e);var r=n("25ca"),a=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e["default"]=a.a},c465:function(t,e,n){"use strict";var r=n("10a1"),a=n.n(r);a.a},db72:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.specialList.includes(t.remark.title));t.$mp.data=Object.assign({},{$root:{g0:n}})},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'componets/TicketRemark-create-component',
    {
        'componets/TicketRemark-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8fec"))
        })
    },
    [['componets/TicketRemark-create-component']]
]);                
