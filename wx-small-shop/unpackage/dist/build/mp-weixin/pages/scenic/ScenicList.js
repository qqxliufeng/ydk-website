(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/scenic/ScenicList"],{"28b0":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return c})},2972:function(t,n,e){"use strict";e.r(n);var i=e("28b0"),c=e("4311");for(var a in c)"default"!==a&&function(t){e.d(n,t,function(){return c[t]})}(a);e("e3c5");var u=e("2877"),s=Object(u["a"])(c["default"],i["a"],i["b"],!1,null,"073ccbd3",null);n["default"]=s.exports},4311:function(t,n,e){"use strict";e.r(n);var i=e("fdeb"),c=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=c.a},a12e:function(t,n,e){},e3c5:function(t,n,e){"use strict";var i=e("a12e"),c=e.n(i);c.a},fdeb:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=c(e("5a05"));function c(t){return t&&t.__esModule?t:{default:t}}var a=function(){return e.e("pages/scenic/components/ScenicListHeader").then(e.bind(null,"7d29"))},u=function(){return e.e("pages/scenic/components/ScenicListType").then(e.bind(null,"1fb9"))},s=function(){return e.e("componets/ScenicListItem").then(e.bind(null,"82ac"))},o={name:"scenicList",mixins:[i.default],components:{ScenicHeader:a,ScenicType:u,ScenicListItem:s},data:function(){return{tags:null,tempTag:null}},methods:{getData:function(){var n=this,e=this.tempTag?this.tempTag.id:"";this.$http(this.$urlPath.categoryIndex,{cate_id:this.$routeParams.categoryId,page:this.page.num,identity:this.$ids.identity,store_id:this.$ids.storeId,label_id:e},null,function(t){n.tags||(n.tags=t.data.label,n.tags.unshift({id:0,name:"全部"})),n.loadSuccess(t.data.scenic)},function(t,e){n.loadFail()},function(){t.stopPullDownRefresh()})},tagsClick:function(n){this.tempTag=n,t.startPullDownRefresh()}},onLoad:function(){t.startPullDownRefresh()}};n.default=o}).call(this,e("543d")["default"])}},[["37ee","common/runtime","common/vendor"]]]);