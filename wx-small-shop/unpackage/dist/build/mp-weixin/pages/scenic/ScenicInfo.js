(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/scenic/ScenicInfo"],{"07f2":function(t,n,e){"use strict";var i=e("47a2"),o=e.n(i);o.a},"22c1":function(t,n,e){"use strict";e.r(n);var i=e("3699"),o=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(n,t,function(){return i[t]})}(c);n["default"]=o.a},"2d4e":function(t,n,e){"use strict";e.r(n);var i=e("f6f5"),o=e("22c1");for(var c in o)"default"!==c&&function(t){e.d(n,t,function(){return o[t]})}(c);e("07f2");var r=e("2877"),u=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"5da942f6",null);n["default"]=u.exports},3699:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return e.e("componets/uni/uni-segmented-control").then(e.bind(null,"a6e7"))},o={name:"ScenicInfo",props:{selected:{type:String,default:"scenicInfoForIntro"}},components:{uniSegementControl:i},data:function(){return{mSelected:this.selected?this.selected:"scenicInfoForIntro",info:null,content:null,remarks:null,images:null,tags:null,detail:"",items:["景区须知","景区详情"],mCurrent:0}},computed:{title:function(){return"scenicInfoForIntro"===this.mSelected?"景区须知":"景区详情"}},watch:{info:function(t,n){var e=this;t instanceof Array&&(this.remarks=[],t.forEach(function(t){"景区须知"===t.title?(e.content=t.value,e.content=e.content.replace('src="/','src="https://www.liuyiqinzi.com/')):"景区详情"===t.title?e.detail=t.value:"景区图片"===t.title?(e.images=t.value,e.remarks.push(t)):e.remarks.push(t)}))}},methods:{showLine:function(t){return"string"===typeof t.value},itemClick:function(t){this.mCurrent=t},getData:function(){var t=this;this.$http(this.$urlPath.scenicNotesUrl,{s_id:this.$routeParams.scenicId},"",function(n){t.info=n.data},function(n,e){t.$toast(e)})}},onLoad:function(){this.getData()}};n.default=o},"47a2":function(t,n,e){},f6f5:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})}},[["2b56","common/runtime","common/vendor"]]]);