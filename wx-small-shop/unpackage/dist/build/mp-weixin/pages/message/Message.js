(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/message/Message"],{"020a":function(e,t,n){"use strict";n.r(t);var a=n("4e7f"),u=n("7ce9");for(var s in u)"default"!==s&&function(e){n.d(t,e,function(){return u[e]})}(s);n("99ac");var o=n("2877"),i=Object(o["a"])(u["default"],a["a"],a["b"],!1,null,"675cfda2",null);t["default"]=i.exports},"4e7f":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return u})},"7b24":function(e,t,n){},"7ce9":function(e,t,n){"use strict";n.r(t);var a=n("fe2d"),u=n.n(a);for(var s in a)"default"!==s&&function(e){n.d(t,e,function(){return a[e]})}(s);t["default"]=u.a},"99ac":function(e,t,n){"use strict";var a=n("7b24"),u=n.n(a);u.a},fe2d:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n("5a05"));function u(e){return e&&e.__esModule?e:{default:e}}var s={name:"message",mixins:[a.default],methods:{getData:function(){var t=this;this.$http(this.$urlPath.messageList,{page:this.page.num},null,function(e){t.loadSuccess(e.data)},function(e,n){t.loadError()},function(){e.stopPullDownRefresh()})},itemClick:function(e){e.is_read=!0,this.$push("/pages/message/MessageInfo?mid="+e.id)}},onLoad:function(){e.startPullDownRefresh()}};t.default=s}).call(this,n("543d")["default"])}},[["9147","common/runtime","common/vendor"]]]);