(function(e){function t(t){for(var n,c,i=t[0],s=t[1],l=t[2],u=0,f=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var s=a[i];0!==r[s]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},o=[];function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=s;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"19ea":function(e,t,a){},"3fb5":function(e,t,a){},4914:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("5df3"),a("4f7f");var n=a("75fc"),r=(a("96cf"),a("3b8d")),o=(a("ac6a"),a("cadf"),a("551c"),a("f751"),a("097d"),a("a026")),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"overlay"},[a("div",{staticClass:"media-modal"},[a("div",{staticClass:"title"},[e._v("\n      Select media\n      "),a("span",{staticClass:"close",on:{click:e.close}},[e._v("×")])]),a("div",{staticClass:"body"},[a("media-facets",{attrs:{folders:e.folders,facets:e.facets},on:{change:e.handleFacetsChange}}),a("media-galery",{attrs:{media:e.media,canLoadMore:e.canLoadMore},on:{loadMore:e.handleLoadMore}})],1)])])},i=[],s=(a("8e6e"),a("456d"),a("bd86")),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mediaFacets"},[a("ul",{staticClass:"tabs"},[a("li",{class:{active:e.isType(e.TYPE_IMAGE)}},[a("span",{on:{click:function(t){return e.handleTypeChange(e.TYPE_IMAGE)}}},[e._v("Image and documents")])]),a("li",{class:{active:e.isType(e.TYPE_VIDEO)}},[a("span",{on:{click:function(t){return e.handleTypeChange(e.TYPE_VIDEO)}}},[e._v("Video")])])]),a("div",{staticClass:"body"},[a("div",{staticClass:"form-field"},[a("label",{attrs:{for:"folder"}},[e._v("Select Folder")]),a("v-select",{attrs:{options:e.foldersWithNew,label:"name",reduce:function(e){return e.id},placeholder:"showing all files"},on:{input:e.handleFolderChange},scopedSlots:e._u([{key:"search",fn:function(t){return["checkbox"===t.attributes.type?a("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.folderSearchQuery,expression:"folderSearchQuery"}],staticClass:"vs__search",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.folderSearchQuery)?e._i(e.folderSearchQuery,null)>-1:e.folderSearchQuery},on:{change:function(t){var a=e.folderSearchQuery,n=t.target,r=!!n.checked;if(Array.isArray(a)){var o=null,c=e._i(a,o);n.checked?c<0&&(e.folderSearchQuery=a.concat([o])):c>-1&&(e.folderSearchQuery=a.slice(0,c).concat(a.slice(c+1)))}else e.folderSearchQuery=r}}},"input",t.attributes,!1),t.events)):"radio"===t.attributes.type?a("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.folderSearchQuery,expression:"folderSearchQuery"}],staticClass:"vs__search",attrs:{type:"radio"},domProps:{checked:e._q(e.folderSearchQuery,null)},on:{change:function(t){e.folderSearchQuery=null}}},"input",t.attributes,!1),t.events)):a("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.folderSearchQuery,expression:"folderSearchQuery"}],staticClass:"vs__search",attrs:{type:t.attributes.type},domProps:{value:e.folderSearchQuery},on:{input:function(t){t.target.composing||(e.folderSearchQuery=t.target.value)}}},"input",t.attributes,!1),t.events))]}},{key:"option",fn:function(t){return[t.new?a("div",[e._v("\n            "+e._s(t.name)+"\n            "),a("button",[e._v("Create new")])]):t.added?a("div",[e._v(e._s(t.name)+" (new)")]):a("div",[e._v(e._s(t.name))])]}}]),model:{value:e.selectedFolder,callback:function(t){e.selectedFolder=t},expression:"selectedFolder"}})],1),a("div",{staticClass:"search"},[a("ul",{staticClass:"searchType"},[a("li",{class:{active:e.isSearch(e.SEARCH_NAME)}},[a("span",{on:{click:function(t){return e.handleSearchChange(e.SEARCH_NAME)}}},[e._v("Name")])]),a("li",{class:{active:e.isSearch(e.SEARCH_TAG)}},[a("span",{on:{click:function(t){return e.handleSearchChange(e.SEARCH_TAG)}}},[e._v("Tag")])])]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{type:"text",placeholder:"Search by "+e.searchName},domProps:{value:e.query},on:{keyup:e.handleQueryChange,input:function(t){t.target.composing||(e.query=t.target.value)}}})])])])},d=[],u=(a("7f7f"),a("7514"),"image"),f="video",h="name",p="tag",m="all",v=a("4a7a"),y=a.n(v),g={name:"MediaFacets",props:["folders","facets"],data:function(){return{TYPE_IMAGE:u,TYPE_VIDEO:f,SEARCH_NAME:h,SEARCH_TAG:p,FOLDER_ALL:m,selectedFolder:this.facets.folder,folderSearchQuery:"",query:this.facets.query,addedFolders:[]}},computed:{searchName:function(){return this.facets.searchType===h?"name":"tag"},foldersWithNew:function(){var e=this,t=[].concat(Object(n["a"])(this.folders),Object(n["a"])(this.addedFolders));return 0===this.folderSearchQuery.length?t:t.find((function(t){return t.name===e.folderSearchQuery}))?t:[{name:this.folderSearchQuery,id:this.folderSearchQuery,new:!0}].concat(Object(n["a"])(t))}},methods:{handleSearchChange:function(e){this.$emit("change",{searchType:e})},handleTypeChange:function(e){this.$emit("change",{mediaType:e})},isType:function(e){return this.facets.mediaType===e},isSearch:function(e){return this.facets.searchType===e},handleFolderChange:function(e){this.folderSearchQuery="",this.addedFolders.push({id:e,name:e,added:!0}),this.$emit("change",{folder:this.selectedFolder})},handleQueryChange:function(){this.$emit("change",{query:this.query})}},components:{"v-select":y.a}},b=g,_=(a("b1b8"),a("2877")),S=Object(_["a"])(b,l,d,!1,null,"42143427",null),O=S.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mediaGalery"},[a("div",{staticClass:"items"},e._l(e.media,(function(t){return a("div",{key:t.id,staticClass:"media"},["image"===t.type?a("div",[a("img",{attrs:{src:t.url,alt:t.filename}}),a("Label",[e._v(e._s(t.filename))]),a("div",[e._v(e._s(t.width)+" x "+e._s(t.height))])],1):a("div",[a("i",{staticClass:"ng-icon ng-video"}),a("Label",[e._v(e._s(t.filename))]),a("div",[e._v(e._s(t.width)+" x "+e._s(t.height))])],1)])})),0),e.canLoadMore?a("button",{on:{click:function(t){return e.$emit("loadMore")}}},[e._v("Load more")]):e._e()])},w=[],j={name:"MediaGalery",props:["media","canLoadMore","onLoadMore"]},T=j,M=(a("7cf0"),Object(_["a"])(T,C,w,!1,null,"fd0f6532",null)),E=M.exports,x=(a("28a5"),a("01c8")),k=function(e){var t=[];for(var a in e)t.push(encodeURIComponent(a)+"="+encodeURIComponent(e[a]));return t.join("&")},P=function(e){return e[0].toUpperCase()+e.slice(1)},Q=function(e){var t=e.split("-"),a=Object(x["a"])(t),r=a[0],o=a.slice(1);return[r].concat(Object(n["a"])(o.map(P))).join("")},A=a("b012"),L=a.n(A);function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(a,!0).forEach((function(t){Object(s["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var R=25,q={name:"MediaModal",props:["folders"],components:{"media-facets":O,"media-galery":E},data:function(){return{media:[],canLoadMore:!1,facets:{folder:"",searchType:h,mediaType:u,query:""}}},methods:{close:function(){this.$emit("close")},debouncedLoad:L()((function(e){this.load(e)}),500),load:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,a,n,r,o,c,i=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:{patch:!1},a=t.patch,this.abortController&&this.abortController.abort(),this.abortController=new AbortController,n={limit:R,offset:a?this.media.length:0,q:this.facets.query,mediatype:this.facets.mediaType,folder:this.facets.folder||m,search_type:this.facets.searchType},r="/ngadminui/ngremotemedia/browse?".concat(k(n)),e.prev=5,e.next=8,fetch(r,{signal:this.abortController.signal});case 8:return o=e.sent,e.next=11,o.json();case 11:c=e.sent,this.media=a?this.media.concat(c.hits):c.hits,this.canLoadMore=c.load_more,e.next=20;break;case 16:if(e.prev=16,e.t0=e["catch"](5),20===e.t0.code){e.next=20;break}throw e.t0;case 20:case"end":return e.stop()}}),e,this,[[5,16]])})));function t(){return e.apply(this,arguments)}return t}(),handleLoadMore:function(){this.debouncedLoad({patch:!0})},handleFacetsChange:function(e){this.facets=I({},this.facets,{},e),this.debouncedLoad()}},mounted:function(){this.load()}},N=q,D=(a("9ebf"),Object(_["a"])(N,c,i,!1,null,"78fc8104",null)),$=D.exports,G=(a("3fb5"),{bind:function(e,t,a){var n=Q(t.arg);a.context[n]=t.value}});o["a"].config.productionTip=!1;var H=function(){console.log("loaded"),document.querySelectorAll(".ngremotemedia-type").forEach((function(e,t){window["remoteMedia".concat(t)]=new o["a"]({el:e,directives:{init:G},data:{RemoteMediaSelectedImage:RemoteMediaSelectedImage,folders:[],modalOpen:!1,selectedImage:{tags:[]},allTags:[]},computed:{nonImagePreviewClass:function(){return"video"===this.selectedImage.type?"ng-video":"ng-book"}},components:{"media-modal":$,"v-select":y.a},methods:{browseMedia:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("/ngadminui/ngremotemedia/folders");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.folders=a,this.modalOpen=!0;case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleModalClose:function(){this.modalOpen=!1},handleTagsInput:function(e){this.allTags=Object(n["a"])(new Set([].concat(Object(n["a"])(this.allTags),Object(n["a"])(e))))}},mounted:function(){this.allTags=Object(n["a"])(this.selectedImage.tags)}})}))};"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?H():document.addEventListener("DOMContentLoaded",H)},"7cf0":function(e,t,a){"use strict";var n=a("19ea"),r=a.n(n);r.a},"9ebf":function(e,t,a){"use strict";var n=a("4914"),r=a.n(n);r.a},b1b8:function(e,t,a){"use strict";var n=a("e5fa"),r=a.n(n);r.a},e5fa:function(e,t,a){}});
//# sourceMappingURL=app.js.map