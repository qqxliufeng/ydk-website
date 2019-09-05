(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ask/components/MyQuestion"],{"287d":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u})},6780:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=u(e("5a05"));function u(t){return t&&t.__esModule?t:{default:t}}var i={name:"question",mixins:[a.default],methods:{getData:function(){var n=this;this.$http(this.$urlPath.myAskUrl,{page:this.page.num},null,function(t){n.loadSuccess(t.data)},function(t,e){n.loadFail()},function(){t.stopPullDownRefresh()})},startMessageInfo:function(t){this.$router.push({name:"leaveMessageInfo",query:{s_id:t.sid,aid:t.aid}})},onRefresh:function(){this.getData()}}};n.default=i}).call(this,e("543d")["default"])},"706d":function(t,n,e){"use strict";var a=e("7232"),u=e.n(a);u.a},7232:function(t,n,e){},"7f06":function(t,n,e){"use strict";e.r(n);var a=e("287d"),u=e("ee59");for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);e("706d");var s=e("2877"),o=Object(s["a"])(u["default"],a["a"],a["b"],!1,null,"a3d3e7dc",null);n["default"]=o.exports},ee59:function(t,n,e){"use strict";e.r(n);var a=e("6780"),u=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/ask/components/MyQuestion-create-component',
    {
        'pages/ask/components/MyQuestion-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7f06"))
        })
    },
    [['pages/ask/components/MyQuestion-create-component']]
]);                
