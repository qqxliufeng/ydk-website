(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/scenic/components/ActivityTicketBottom"],{"307f":function(t,n,e){"use strict";e.r(n);var i=e("b718"),o=e("5bc4");for(var c in o)"default"!==c&&function(t){e.d(n,t,function(){return o[t]})}(c);e("dfa3");var s=e("2877"),u=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,"8855fc10",null);n["default"]=u.exports},"37e7":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return e.e("componets/uni/rate/uni-icon").then(e.bind(null,"3114"))},o={name:"activityTicketBottom",props:{assist:Object,isFavorites:Number,isShow:{type:Boolean,default:!0}},components:{uniIcon:i},data:function(){return{collectionState:this.isFavorites}},watch:{isFavorites:function(t,n){this.collectionState=t}},computed:{buttonName:function(){return this.$userInfo.isLogin()&&this.assist&&1===this.assist.join.status?"立即购买":"邀请好友"}},methods:{collection:function(){this.$emit("collection")},seeOtherGoods:function(){this.$emit("seeOtherGoods")},invoteFriend:function(){this.$emit("invoteFriend")}}};n.default=o},"5bc4":function(t,n,e){"use strict";e.r(n);var i=e("37e7"),o=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(n,t,function(){return i[t]})}(c);n["default"]=o.a},"67eb":function(t,n,e){},b718:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})},dfa3:function(t,n,e){"use strict";var i=e("67eb"),o=e.n(i);o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/scenic/components/ActivityTicketBottom-create-component',
    {
        'pages/scenic/components/ActivityTicketBottom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("307f"))
        })
    },
    [['pages/scenic/components/ActivityTicketBottom-create-component']]
]);                
