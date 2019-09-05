(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/scenic/components/ScenicDetailHeader"],{1230:function(t,n,e){"use strict";e.r(n);var i=e("7683"),o=e("9f35");for(var c in o)"default"!==c&&function(t){e.d(n,t,function(){return o[t]})}(c);e("5218");var u=e("2877"),r=Object(u["a"])(o["default"],i["a"],i["b"],!1,null,"6e2fe6db",null);n["default"]=r.exports},5218:function(t,n,e){"use strict";var i=e("8529"),o=e.n(i);o.a},7683:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})},8529:function(t,n,e){},"9f35":function(t,n,e){"use strict";e.r(n);var i=e("f818"),o=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(n,t,function(){return i[t]})}(c);n["default"]=o.a},f818:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return e.e("componets/uni/rate/uni-icon").then(e.bind(null,"3114"))},o={name:"scenicDetailHeader",props:{scenicInfo:Object,isFavorites:Number,scrollTop:0},components:{uniIcon:i},data:function(){return{opacityStyle:{opacity:0}}},computed:{tempInfo:function(){return this.scenicInfo},favorites:function(){return 1===this.isFavorites}},watch:{scrollTop:function(t,n){if(t>1){var e=Number(20/t).toFixed(2);e=Math.min(1,e),this.opacityStyle.opacity=1-e}0===t&&(this.opacityStyle.opacity=0)}},methods:{collection:function(){this.$emit("collection")}}};n.default=o}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/scenic/components/ScenicDetailHeader-create-component',
    {
        'pages/scenic/components/ScenicDetailHeader-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1230"))
        })
    },
    [['pages/scenic/components/ScenicDetailHeader-create-component']]
]);                
