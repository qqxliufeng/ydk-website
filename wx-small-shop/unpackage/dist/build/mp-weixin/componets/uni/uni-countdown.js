(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["componets/uni/uni-countdown"],{"0ea5":function(t,e,n){"use strict";var o=n("6822"),r=n.n(o);r.a},"1a3e":function(t,e,n){"use strict";n.r(e);var o=n("9f0f"),r=n("fc9d");for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);n("0ea5");var i=n("2877"),a=Object(i["a"])(r["default"],o["a"],o["b"],!1,null,null,null);e["default"]=a.exports},"3bbf":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"uni-countdown",props:{showDay:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},backgroundColor:{type:String,default:"transparent"},borderColor:{type:String,default:"transparent"},color:{type:String,value:"#000000"},splitorColor:{type:String,default:"#000000"},fontSize:{type:String,default:"28rpx"},dayFontSize:{type:String,default:"20rpx"},day:{type:Number,default:0},hour:{type:Number,default:0},minute:{type:Number,default:0},second:{type:Number,default:0}},data:function(){return{timer:null,d:"00",h:"00",i:"00",s:"00",leftTime:0,seconds:0}},created:function(t){var e=this;this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.countDown(),this.timer=setInterval(function(){e.seconds--,e.seconds<0?e.timeUp():e.countDown()},1e3)},beforeDestroy:function(){clearInterval(this.timer)},methods:{toSeconds:function(t,e,n,o){return 60*t*60*24+60*e*60+60*n+o},timeUp:function(){clearInterval(this.timer),this.$emit("timeup")},countDown:function(){var t=this.seconds,e=0,n=0,o=0,r=0;t>0?(e=Math.floor(t/86400),n=Math.floor(t/3600)-24*e,o=Math.floor(t/60)-24*e*60-60*n,r=Math.floor(t)-24*e*60*60-60*n*60-60*o):this.timeUp(),e<10&&(e="0"+e),n<10&&(n="0"+n),o<10&&(o="0"+o),r<10&&(r="0"+r),this.d=e,this.h=n,this.i=o,this.s=r}}};e.default=o},6822:function(t,e,n){},"9f0f":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r})},fc9d:function(t,e,n){"use strict";n.r(e);var o=n("3bbf"),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'componets/uni/uni-countdown-create-component',
    {
        'componets/uni/uni-countdown-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1a3e"))
        })
    },
    [['componets/uni/uni-countdown-create-component']]
]);                
