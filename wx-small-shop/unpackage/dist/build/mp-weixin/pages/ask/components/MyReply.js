(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ask/components/MyReply"],{"1a4a":function(t,n,e){"use strict";e.r(n);var a=e("4158"),u=e("6eb0");for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);e("b0a4");var s=e("2877"),r=Object(s["a"])(u["default"],a["a"],a["b"],!1,null,"2a9d5aaa",null);n["default"]=r.exports},4158:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u})},"4ed2":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=u(e("5a05"));function u(t){return t&&t.__esModule?t:{default:t}}var i={name:"reply",mixins:[a.default],methods:{getData:function(){var n=this;this.$http(this.$urlPath.myAnswerUrl,{page:this.page.num},null,function(t){n.loadSuccess(t.data)},function(t,e){n.loadFail()},function(){t.stopPullDownRefresh()})},startMessageInfo:function(t){this.$router.push({name:"leaveMessageInfo",query:{s_id:t.ask.sid,aid:t.a_id}})},onRefresh:function(){this.getData()}}};n.default=i}).call(this,e("543d")["default"])},"6eb0":function(t,n,e){"use strict";e.r(n);var a=e("4ed2"),u=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=u.a},"98c9":function(t,n,e){},b0a4:function(t,n,e){"use strict";var a=e("98c9"),u=e.n(a);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/ask/components/MyReply-create-component',
    {
        'pages/ask/components/MyReply-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1a4a"))
        })
    },
    [['pages/ask/components/MyReply-create-component']]
]);                
