(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/scenic/components/ScenicDetailInfo"],{1403:function(n,t,e){"use strict";var c=e("ad01"),a=e.n(c);a.a},7465:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=function(){return e.e("componets/uni/uni-tag").then(e.bind(null,"78a6"))},a={name:"scenicDetailInfo",props:{scenicInfo:Object},components:{Tag:c},methods:{startScenicInfo:function(){n.navigateTo({url:this.$mRouter.scenicInfo({scenicId:this.$parent.$routeParams.scenicId})})},delHtmlTag:function(n){return n?n.replace(/<[^>]+>/g,""):""},callPhone:function(){n.makePhoneCall({phoneNumber:this.scenicInfo.tel})}}};t.default=a}).call(this,e("543d")["default"])},"81a9":function(n,t,e){"use strict";e.r(t);var c=e("7465"),a=e.n(c);for(var o in c)"default"!==o&&function(n){e.d(t,n,function(){return c[n]})}(o);t["default"]=a.a},ad01:function(n,t,e){},cfb3:function(n,t,e){"use strict";e.r(t);var c=e("d19b"),a=e("81a9");for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);e("1403");var i=e("2877"),u=Object(i["a"])(a["default"],c["a"],c["b"],!1,null,"95f16406",null);t["default"]=u.exports},d19b:function(n,t,e){"use strict";var c=function(){var n=this,t=n.$createElement,e=(n._self._c,n.delHtmlTag(n.scenicInfo.brief));n.$mp.data=Object.assign({},{$root:{m0:e}})},a=[];e.d(t,"a",function(){return c}),e.d(t,"b",function(){return a})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/scenic/components/ScenicDetailInfo-create-component',
    {
        'pages/scenic/components/ScenicDetailInfo-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("cfb3"))
        })
    },
    [['pages/scenic/components/ScenicDetailInfo-create-component']]
]);                
