(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/orderinfo/components/OrderDetail"],{"162a":function(e,t,n){"use strict";var r=n("693e"),a=n.n(r);a.a},5632:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){return n.e("componets/TicketRemark").then(n.bind(null,"8fec"))},a={name:"orderDetail",props:{detail:Object},components:{TicketRemark:r},data:function(){return{shopName:{title:"下单店铺",value:this.detail.shop_name},tradeNo:{title:"订单编号",value:this.detail.ord_id}}},computed:{orderLog:function(){var e=[];return this.detail.order_log.forEach(function(t){e.push({title:t.type,value:t.ctime})}),e}}};t.default=a},"693e":function(e,t,n){},"7b39":function(e,t,n){"use strict";n.r(t);var r=n("a024"),a=n("bc5e");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("162a");var u=n("2877"),i=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,"5a32d81c",null);t["default"]=i.exports},a024:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})},bc5e:function(e,t,n){"use strict";n.r(t);var r=n("5632"),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/order/orderinfo/components/OrderDetail-create-component',
    {
        'pages/order/orderinfo/components/OrderDetail-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7b39"))
        })
    },
    [['pages/order/orderinfo/components/OrderDetail-create-component']]
]);                
