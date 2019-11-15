(function(e){function t(t){for(var n,o,s=t[0],c=t[1],l=t[2],u=0,h=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(h.length)h.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,s=1;s<a.length;s++){var c=a[s];0!==i[c]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},i={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0790":function(e,t,a){},1517:function(e,t,a){},"2f91":function(e,t,a){"use strict";var n=a("f706"),i=a.n(n);i.a},"303d":function(e,t,a){},3419:function(e,t,a){"use strict";var n=a("86e3"),i=a.n(n);i.a},"3fb5":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("8e6e"),a("28a5");var n=a("bd86"),i=(a("7f7f"),a("5df3"),a("4f7f"),a("75fc")),r=(a("96cf"),a("3b8d")),o=(a("456d"),a("ac6a"),a("cadf"),a("551c"),a("f751"),a("097d"),a("a026")),s=(a("3fb5"),a("6107"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("modal",{attrs:{title:"Select media"},on:{close:function(t){return e.$emit("close")}}},[a("media-facets",{attrs:{folders:e.folders,facets:e.facets},on:{change:e.handleFacetsChange}}),e.loading?a("i",{staticClass:"ng-icon ng-spinner"}):a("media-galery",{attrs:{media:e.media,canLoadMore:e.canLoadMore,selectedMediaId:e.selectedMediaId},on:{loadMore:e.handleLoadMore,"media-selected":function(t){return e.$emit("media-selected",t)}}})],1)}),c=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mediaFacets"},[a("ul",{staticClass:"tabs"},[a("li",{class:{active:e.isType(e.TYPE_IMAGE)}},[a("span",{on:{click:function(t){return e.handleTypeChange(e.TYPE_IMAGE)}}},[e._v("Image and documents")])]),a("li",{class:{active:e.isType(e.TYPE_VIDEO)}},[a("span",{on:{click:function(t){return e.handleTypeChange(e.TYPE_VIDEO)}}},[e._v("Video")])])]),a("div",{staticClass:"body"},[a("div",{staticClass:"form-field"},[a("label",{attrs:{for:"folder"}},[e._v("Select Folder")]),a("v-select",{attrs:{options:e.folders,label:"name",reduce:function(e){return e.id},placeholder:"All"},on:{input:e.handleFolderChange},model:{value:e.selectedFolder,callback:function(t){e.selectedFolder=t},expression:"selectedFolder"}})],1),a("div",{staticClass:"search-wrapper"},[a("span",{staticClass:"search-label"},[e._v("Search")]),a("div",{staticClass:"search"},[a("ul",{staticClass:"searchType"},[a("li",{class:{active:e.isSearch(e.SEARCH_NAME)}},[a("span",{on:{click:function(t){return e.handleSearchChange(e.SEARCH_NAME)}}},[e._v("Name")])]),a("li",{class:{active:e.isSearch(e.SEARCH_TAG)}},[a("span",{on:{click:function(t){return e.handleSearchChange(e.SEARCH_TAG)}}},[e._v("Tag")])])]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{type:"text",placeholder:"Search by "+e.searchName},domProps:{value:e.query},on:{keyup:e.handleQueryChange,input:function(t){t.target.composing||(e.query=t.target.value)}}})])])])])},d=[],u="image",h="video",f="name",p="tag",m="all",v=a("4a7a"),g=a.n(v),b={name:"MediaFacets",props:["folders","facets"],data:function(){return{TYPE_IMAGE:u,TYPE_VIDEO:h,SEARCH_NAME:f,SEARCH_TAG:p,FOLDER_ALL:m,selectedFolder:this.facets.folder,query:this.facets.query}},computed:{searchName:function(){return this.facets.searchType===f?"name":"tag"}},methods:{handleSearchChange:function(e){this.$emit("change",{searchType:e})},handleTypeChange:function(e){this.$emit("change",{mediaType:e})},isType:function(e){return this.facets.mediaType===e},isSearch:function(e){return this.facets.searchType===e},handleFolderChange:function(e){this.$emit("change",{folder:this.selectedFolder})},handleQueryChange:function(){this.$emit("change",{query:this.query})}},components:{"v-select":g.a}},y=b,C=(a("cd8a"),a("2877")),w=Object(C["a"])(y,l,d,!1,null,"3823d3fe",null),_=w.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mediaGalery"},[a("div",{staticClass:"items"},[e.media.length?e._e():a("div",[e._v("Folder is empty. Upload media from your local storage.")]),e._l(e.media,(function(t){return a("div",{key:t.id,staticClass:"media",class:{selected:t.resourceId===e.selectedMediaId}},["image"===t.type?a("div",[a("img",{staticClass:"img",attrs:{src:t.url,alt:t.filename}}),a("Label",{staticClass:"filename"},[e._v(e._s(t.filename))]),a("div",{staticClass:"size-description"},[e._v(e._s(t.width)+" x "+e._s(t.height))])],1):a("div",[a("span",{staticClass:"video-icon"}),a("Label",{staticClass:"filename"},[e._v(e._s(t.filename))]),a("div",{staticClass:"size-description"},[e._v(e._s(t.width)+" x "+e._s(t.height))])],1),a("button",{staticClass:"btn btn-blue select-btn",attrs:{type:"button"},on:{click:function(a){return e.$emit("media-selected",t)}}},[e._v("Select")])])}))],2),e.canLoadMore?a("div",{staticClass:"load-more-wrapper"},[a("button",{staticClass:"btn btn-blue",attrs:{type:"button"},on:{click:function(t){return e.$emit("loadMore")}}},[e._v("Load more")])]):e._e()])},S=[],V={name:"MediaGalery",props:["media","canLoadMore","onLoadMore","selectedMediaId"]},j=V,M=(a("e359"),Object(C["a"])(j,O,S,!1,null,"4c0c11ba",null)),k=M.exports,x=a("01c8"),I=function(e){var t=[];for(var a in e)t.push(encodeURIComponent(a)+"="+encodeURIComponent(e[a]));return t.join("&")},P=function(e){return e[0].toUpperCase()+e.slice(1)},A=function(e){var t=e.split("-"),a=Object(x["a"])(t),n=a[0],r=a.slice(1);return[n].concat(Object(i["a"])(r.map(P))).join("")},E=function(e,t){var a=Math.pow(10,t);return parseFloat(Math.round(e*a)/a).toFixed(t)},T={B:"KB",KB:"MB",MB:"GB",GB:"TB"},F=function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"B",n=T[a];return!n||t<1024?"".concat(E(t,2)," ").concat(a):e(t/1024,n)},$=a("b012"),z=a.n($),R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"overlay"},[a("div",{staticClass:"media-modal"},[a("div",{staticClass:"title"},[e._v("\n      "+e._s(e.title)+"\n      "),a("span",{staticClass:"close",on:{click:e.close}},[e._v("×")])]),a("div",{staticClass:"body"},[e._t("default")],2)])])},L=[],Q={name:"Modal",props:["title"],methods:{close:function(){this.$emit("close")}}},N=Q,D=(a("e13a"),Object(C["a"])(N,R,L,!1,null,"752e6c16",null)),B=D.exports;function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function G(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(a,!0).forEach((function(t){Object(n["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var U=25,H={name:"MediaModal",props:["folders","selectedMediaId","paths"],components:{"media-facets":_,"media-galery":k,modal:B},data:function(){return{media:[],canLoadMore:!1,nextCursor:null,loading:!0,facets:{folder:"",searchType:f,mediaType:u,query:""}}},methods:{debouncedLoad:z()((function(e){this.load(e)}),500),load:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,a,n,i,r,o,s=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:{patch:!1},a=t.patch,this.loading=!0,this.abortController&&this.abortController.abort(),this.abortController=new AbortController,n={limit:U,offset:a?this.media.length:0,q:this.facets.query,mediatype:this.facets.mediaType,folder:this.facets.folder||m,search_type:this.facets.searchType,next_cursor:a?this.nextCursor:null},i="".concat(this.paths.browse,"?").concat(I(n)),e.prev=6,e.next=9,fetch(i,{signal:this.abortController.signal});case 9:return r=e.sent,e.next=12,r.json();case 12:o=e.sent,this.media=a?this.media.concat(o.hits):o.hits,this.canLoadMore=o.load_more,this.nextCursor=o.next_cursor,this.loading=!1,e.next=23;break;case 19:if(e.prev=19,e.t0=e["catch"](6),20===e.t0.code){e.next=23;break}throw e.t0;case 23:case"end":return e.stop()}}),e,this,[[6,19]])})));function t(){return e.apply(this,arguments)}return t}(),handleLoadMore:function(){this.debouncedLoad({patch:!0})},handleFacetsChange:function(e){this.facets=G({},this.facets,{},e),this.debouncedLoad()}},mounted:function(){this.load()}},Y=H,W=(a("3419"),Object(C["a"])(Y,s,c,!1,null,"1b289a28",null)),J=W.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("modal",{attrs:{title:"Upload image"},on:{close:function(t){return e.$emit("close")}}},[e.loading?a("i",{staticClass:"ng-icon ng-spinner"}):a("div",[a("label",{attrs:{for:"folder"}},[e._v("Select Folder")]),a("select-folder",{attrs:{folders:e.folders},on:{change:e.handleFolderChange}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newName,expression:"newName"}],attrs:{type:"text"},domProps:{value:e.newName},on:{input:function(t){t.target.composing||(e.newName=t.target.value)}}}),a("button",{attrs:{disabled:""===e.newName,type:"button"},on:{click:e.handleSaveClick}},[e._v("Save")])],1)])},X=[],Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-field"},[a("v-select",{attrs:{options:e.foldersWithNew,label:"name",reduce:function(e){return e.id},placeholder:"/"},on:{input:e.handleFolderChanged},scopedSlots:e._u([{key:"search",fn:function(t){return["checkbox"===t.attributes.type?a("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.folderSearchQuery,expression:"folderSearchQuery"}],staticClass:"vs__search",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.folderSearchQuery)?e._i(e.folderSearchQuery,null)>-1:e.folderSearchQuery},on:{change:function(t){var a=e.folderSearchQuery,n=t.target,i=!!n.checked;if(Array.isArray(a)){var r=null,o=e._i(a,r);n.checked?o<0&&(e.folderSearchQuery=a.concat([r])):o>-1&&(e.folderSearchQuery=a.slice(0,o).concat(a.slice(o+1)))}else e.folderSearchQuery=i}}},"input",t.attributes,!1),t.events)):"radio"===t.attributes.type?a("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.folderSearchQuery,expression:"folderSearchQuery"}],staticClass:"vs__search",attrs:{type:"radio"},domProps:{checked:e._q(e.folderSearchQuery,null)},on:{change:function(t){e.folderSearchQuery=null}}},"input",t.attributes,!1),t.events)):a("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.folderSearchQuery,expression:"folderSearchQuery"}],staticClass:"vs__search",attrs:{type:t.attributes.type},domProps:{value:e.folderSearchQuery},on:{input:function(t){t.target.composing||(e.folderSearchQuery=t.target.value)}}},"input",t.attributes,!1),t.events))]}},{key:"option",fn:function(t){return[t.new?a("div",[e._v("\n        "+e._s(t.name)+"\n        "),a("button",{attrs:{type:"button"}},[e._v("Create new")])]):t.added?a("div",[e._v(e._s(t.name)+" (new)")]):a("div",[e._v(e._s(t.name))])]}}]),model:{value:e.folder,callback:function(t){e.folder=t},expression:"folder"}})],1)},ee=[],te=(a("7514"),{name:"SelectFolder",props:["folders","selectedFolder"],data:function(){return{folderSearchQuery:"",addedFolders:[],folder:this.selectedFolder}},computed:{foldersWithNew:function(){var e=this,t=[].concat(Object(i["a"])(this.folders),Object(i["a"])(this.addedFolders));return 0===this.folderSearchQuery.length?t:t.find((function(t){return t.name===e.folderSearchQuery}))?t:[{name:this.folderSearchQuery,id:this.folderSearchQuery,new:!0}].concat(Object(i["a"])(t))}},methods:{handleFolderChanged:function(e){this.folderSearchQuery="";var t=[].concat(Object(i["a"])(this.folders),Object(i["a"])(this.addedFolders));t.find((function(t){return t.name===e}))||this.addedFolders.push({id:e,name:e,added:!0}),this.$emit("change",this.folder)}},components:{"v-select":g.a}}),ae=te,ne=(a("e624"),Object(C["a"])(ae,Z,ee,!1,null,"e0caddfc",null)),ie=ne.exports,re={name:"UploadModal",props:["folders","loading","name"],data:function(){return{selectedFolder:"",newName:this.name}},components:{"select-folder":ie,modal:B},methods:{handleFolderChange:function(e){this.selectedFolder=e},handleSaveClick:function(){var e=this.newName;this.selectedFolder&&(e="".concat(this.selectedFolder,"/").concat(this.newName)),this.$emit("save",e)}}},oe=re,se=Object(C["a"])(oe,K,X,!1,null,"39c1a599",null),ce=se.exports,le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("modal",{attrs:{title:"Crop"},on:{close:function(t){return e.$emit("close")}}},[a("crop-sizes",{attrs:{availableVariations:e.availableVariations,allVariationValues:e.allVariationValues,imageSize:e.imageSize,selectedVariation:e.selectedVariation},on:{selected:e.handleVariationSelected,addedVariations:e.handleAddedVariations,removedVariation:e.handleRemovedVariation}}),e._l(e.availableVariations,(function(t,n){return a("div",{key:n,staticClass:"crop-container"},[n===e.selectedVariation?a("crop",{attrs:{value:e.allVariationValues[n],src:e.selectedImage.url,variation:e.availableVariations[n],imageSize:e.imageSize},on:{change:function(t){return e.handleVariationValueChange(n,t)}}}):e._e()],1)})),a("div",{staticClass:"action-strip"},[a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:e.handleCancelClicked}},[e._v("Cancel")]),a("button",{staticClass:"btn btn-blue",attrs:{type:"button"},on:{click:e.handleSaveClicked}},[e._v("Save sizes")])])],2)},de=[],ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sidebar-crop"},[a("div",{staticClass:"buttons"},[e.addingVariations?e._e():a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:e.handleAddCropSize}},[e._v("Add crop size")]),e.addingVariations?a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:e.handleCancel}},[e._v("Cancel")]):e._e(),e.addingVariations?a("button",{staticClass:"btn crop-btn-add",attrs:{type:"button"},on:{click:e.handleAdd}},[e._v("Add")]):e._e()]),e.addingVariations?a("div",{staticClass:"unselectedVariations"},e._l(e.unselectedVariations,(function(t){return a("div",{key:t},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newSelection,expression:"newSelection"}],attrs:{type:"checkbox",id:t},domProps:{value:t,checked:Array.isArray(e.newSelection)?e._i(e.newSelection,t)>-1:e.newSelection},on:{change:function(a){var n=e.newSelection,i=a.target,r=!!i.checked;if(Array.isArray(n)){var o=t,s=e._i(n,o);i.checked?s<0&&(e.newSelection=n.concat([o])):s>-1&&(e.newSelection=n.slice(0,s).concat(n.slice(s+1)))}else e.newSelection=r}}}),a("label",{attrs:{for:t}},[a("span",[e._v(e._s(t))]),a("span",[e._v(e._s(e.formattedSize(t)))])])])})),0):e._e(),a("div",{staticClass:"selectedVariations"},[a("ul",e._l(e.selectedVariations,(function(t){return a("li",{key:t,class:{set:!!e.allVariationValues[t],selected:e.selectedVariation===t,disabled:!e.isVariationSelectable(t)},on:{click:function(a){return e.handleVariationClicked(t)}}},[a("span",[e._v(e._s(t))]),a("span",[e._v(e._s(e.formattedSize(t)))]),e.addingVariations?e._e():a("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),a.stopPropagation(),e.removeItem(t)}}},[e._v("remove")])])})),0)])])},he=[],fe=a("768b"),pe={name:"CropSizes",props:["availableVariations","allVariationValues","imageSize","selectedVariation"],data:function(){return{newSelection:[],addingVariations:!1}},computed:{unselectedVariations:function(){var e=Object.keys(this.availableVariations),t=Object.keys(this.allVariationValues);return e.difference(t)},selectedVariations:function(){return Object.getOwnPropertyNames(this.allVariationValues)}},methods:{handleAddCropSize:function(){this.addingVariations=!0},handleCancel:function(){this.addingVariations=!1,this.newSelection=[]},handleAdd:function(){this.$emit("addedVariations",this.newSelection),this.newSelection=[],this.addingVariations=!1},removeItem:function(e){this.$emit("removedVariation",e)},formattedSize:function(e){return"".concat(this.availableVariations[e][0]," x ").concat(this.availableVariations[e][1])},isVariationSelectable:function(e){if(this.addingVariations)return!1;var t=Object(fe["a"])(this.availableVariations[e],2),a=t[0],n=t[1];return this.imageSize.width>=a&&this.imageSize.height>=n},handleVariationClicked:function(e){this.isVariationSelectable(e)&&this.$emit("selected",e)}}},me=pe,ve=(a("dc48"),Object(C["a"])(me,ue,he,!1,null,"395763d6",null)),ge=ve.exports,be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"crop"},[a("div",{staticClass:"cropper",style:e.cropperStyle},[a("img",{ref:"image",attrs:{src:e.src}}),a("div",{ref:"buttons",staticClass:"buttons",style:e.applyButtonStyle},[a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:e.handleReset}},[e._v("Reset")]),a("button",{staticClass:"btn btn-blue",attrs:{type:"button"},on:{click:e.handleApply}},[e._v("Apply")])])]),a("h4",[e._v("Preview")]),a("div",{ref:"preview",staticClass:"preview"})])},ye=[],Ce=a("5435"),we={name:"Crop",props:["value","variation","src","imageSize"],mounted:function(){this.setCropper()},beforeDestroy:function(){this.destroyCropper()},data:function(){return{crop:{},cropper:null}},methods:{setCropper:function(){var e=this.value||{},t=e.x,a=e.y,n=e.w,i=e.h,r={x:t,y:a,width:n,height:i},o=Object(fe["a"])(this.variation,2),s=o[0],c=o[1],l=s>0&&c>0?s/c:void 0;this.destroyCropper(),this.cropper=new Ce["a"](this.$refs.image,{viewMode:2,dragMode:"none",autoCrop:!0,data:r,aspectRatio:l,guides:!0,movable:!1,rotatable:!1,zoomable:!1,scalable:!0,minCropBoxWidth:s,minCropBoxHeight:c,crop:this.handleCrop,preview:this.$refs.preview}),this.cropper.setData(r)},handleCrop:function(e){this.crop=this.cropper.getData(!0)},destroyCropper:function(){this.cropper&&this.cropper.destroy()},handleReset:function(){this.cropper.reset()},handleApply:function(){var e=this.cropper.getData(!0),t=e.x,a=e.y,n=e.width,i=e.height;this.$emit("change",{x:t,y:a,w:n,h:i})}},computed:{applyButtonStyle:function(){var e=this.crop,t=e.x,a=e.y,n=e.width,i=e.height,r=this.$refs.buttons?this.$refs.buttons.clientWidth:0;return{top:"".concat(a+i+10,"px"),left:"".concat(t+n-r,"px")}},cropperStyle:function(){return{height:"".concat(this.imageSize.height,"px"),width:"".concat(this.imageSize.width,"px")}}}},_e=we,Oe=(a("2f91"),Object(C["a"])(_e,be,ye,!1,null,"7739581e",null)),Se=Oe.exports,Ve=function(e){return function(t){return Object.keys(t).reduce((function(a,n){return e(t[n],n)&&(a[n]=t[n]),a}),{})}},je=function(e){return function(t){return!e(t)}},Me=function(e){return function(t){return e===t}},ke=function(e){return!!e},xe=je(Me(void 0));function Ie(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Pe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ie(a,!0).forEach((function(t){Object(n["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ie(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Ae={name:"CropModal",props:["availableVariations","selectedImage"],components:{modal:B,"crop-sizes":ge,crop:Se},data:function(){return{selectedVariation:null,newVariationValues:{}}},computed:{allVariationValues:function(){return Ve(xe)(Pe({},this.selectedImage.variations,{},this.newVariationValues))},imageSize:function(){return{height:this.selectedImage.height,width:this.selectedImage.width}}},methods:{handleVariationSelected:function(e){this.selectedVariation=e},handleAddedVariations:function(e){this.newVariationValues=Pe({},this.newVariationValues,{},e.reduce((function(e,t){return e[t]=null,e}),{}))},handleRemovedVariation:function(e){this.newVariationValues=Pe({},this.newVariationValues,Object(n["a"])({},e,void 0))},handleVariationValueChange:function(e,t){this.newVariationValues=Pe({},this.newVariationValues,Object(n["a"])({},e,t))},handleCancelClicked:function(){this.newVariationValues={},this.$emit("close")},handleSaveClicked:function(){this.$emit("change",Pe({},this.newVariationValues)),this.newVariationValues={},this.$emit("close")}}},Ee=Ae,Te=(a("dd22"),Object(C["a"])(Ee,le,de,!1,null,"e51e63ea",null)),Fe=Te.exports,$e={bind:function(e,t,a){var n=A(t.arg);a.context[n]=t.value}};a("b39d");function ze(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Re(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ze(a,!0).forEach((function(t){Object(n["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ze(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}o["a"].config.productionTip=!1;var Le=function(){document.querySelectorAll(".ngremotemedia-type").forEach((function(e,t){window["remoteMedia".concat(t)]=new o["a"]({el:e,directives:{init:$e},data:{RemoteMediaSelectedImage:RemoteMediaSelectedImage,RemoteMediaConfig:RemoteMediaConfig,folders:[],mediaModalOpen:!1,cropModalOpen:!1,uploadModalOpen:!1,uploadModalLoading:!1,selectedImage:{id:"",name:"",type:"image",url:"",alternateText:"",tags:[],size:"",variations:{},height:0,width:0},config:{paths:{},availableVariations:{}},allTags:[]},computed:{nonImagePreviewClass:function(){return"video"===this.selectedImage.type?"ng-video":"ng-book"},formattedSize:function(){return F(this.selectedImage.size)},stringifiedVariations:function(){return JSON.stringify(Ve(ke)(this.selectedImage.variations))},isCroppable:function(){return!!this.selectedImage.id&&"image"===this.selectedImage.type&&Object.keys(this.config.availableVariations).length>0}},components:{"media-modal":J,"v-select":g.a,"crop-modal":Fe,"upload-modal":ce},methods:{fetchFolders:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.config.paths.folders);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.folders=a;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleBrowseMediaClicked:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.mediaModalOpen=!0,this.fetchFolders();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleCropClicked:function(){this.cropModalOpen=!0},handleMediaModalClose:function(){this.mediaModalOpen=!1},handleCropModalClose:function(){this.cropModalOpen=!1},handleUploadModalClose:function(){this.uploadModalOpen=!1},handleTagsInput:function(e){this.allTags=Object(i["a"])(new Set([].concat(Object(i["a"])(this.allTags),Object(i["a"])(e))))},handleMediaSelected:function(e){this.selectedImage={id:e.resourceId,name:e.filename,type:e.type,url:e.url,alternateText:"",tags:e.tags,size:e.filesize,variations:{},height:e.height,width:e.width},this.mediaModalOpen=!1},handleRemoveMediaClicked:function(){this.selectedImage={id:"",name:"",type:"image",url:"",alternateText:"",tags:[],size:0,variations:{},height:0,width:0}},handleFileInputChange:function(e){this.uploadModalOpen=!0,this.uploadModalLoading=!0,this.fetchFolders();var t=e.target.files.item(0);if(t)if(this.selectedImage={id:t.name,name:t.name,type:this.getFileType(t),url:"",alternateText:"",tags:[],size:t.size,variations:{},height:0,width:0},"image"===this.selectedImage.type){var a=new FileReader;a.addEventListener("load",function(){this.$refs.image.onload=function(){this.selectedImage.width=this.$refs.image.naturalWidth,this.selectedImage.height=this.$refs.image.naturalHeight,this.uploadModalLoading=!1}.bind(this),this.selectedImage.url=a.result}.bind(this),!1),a.readAsDataURL(t)}else this.uploadModalLoading=!1},handleVariationCropChange:function(e){this.selectedImage=Re({},this.selectedImage,{variations:Re({},this.selectedImage.variations,{},e)})},handleUploadModalSave:function(e){this.selectedImage=Re({},this.selectedImage,{name:e,id:e}),this.uploadModalOpen=!1},getFileType:function(e){var t=e.type.split("/")[0];return"video"!==t&&"image"!==t?"other":t}},mounted:function(){this.allTags=Object(i["a"])(this.selectedImage.tags)}})}))};"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?Le():document.addEventListener("DOMContentLoaded",Le)},"84d8":function(e,t,a){},"86e3":function(e,t,a){},b39d:function(e,t){Array.prototype.difference||(Array.prototype.difference=function(e){return this.filter((function(t){return e.indexOf(t)<0}))})},c5fc:function(e,t,a){},cd8a:function(e,t,a){"use strict";var n=a("1517"),i=a.n(n);i.a},dc48:function(e,t,a){"use strict";var n=a("0790"),i=a.n(n);i.a},dd22:function(e,t,a){"use strict";var n=a("c5fc"),i=a.n(n);i.a},e13a:function(e,t,a){"use strict";var n=a("ff68"),i=a.n(n);i.a},e359:function(e,t,a){"use strict";var n=a("303d"),i=a.n(n);i.a},e624:function(e,t,a){"use strict";var n=a("84d8"),i=a.n(n);i.a},f706:function(e,t,a){},ff68:function(e,t,a){}});
//# sourceMappingURL=app.js.map