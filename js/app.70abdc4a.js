(function(t){function e(e){for(var o,s,a=e[0],c=e[1],l=e[2],p=0,f=[];p<a.length;p++)s=a[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},i=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/website/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1004:function(t,e,n){},"33cf":function(t,e,n){"use strict";n("7e17")},3979:function(t,e,n){"use strict";n("b446")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.online?t._e():n("div",{staticClass:"status"},[n("p",[t._v("You are currently offline.")])]),n("nav",["Home"!==this.$route.name?n("img",{attrs:{src:"https://www.volvocars.com/static/shared/images/volvo-wordmark-black.svg",alt:"Logo",width:"200"}}):t._e()]),n("router-view")],1)},i=[],s=(n("d3b7"),n("96cf"),n("1da1")),a={name:"App",data:function(){return{online:!0}},created:function(){var t=this;this.getOnlineStatus().then((function(e){t.status="Online"===e,console.log(e?"Online":"Offline")}))},methods:{getOnlineStatus:function(){return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!navigator.onLine){t.next=2;break}return t.abrupt("return",fetch(location.origin+"/website",{method:"HEAD"}).then((function(){return!0})).catch((function(){return!1})));case 2:return t.abrupt("return",new Promise((function(t){return t(!1)})));case 3:case"end":return t.stop()}}),t)})))()}}},c=a,l=n("2877"),u=Object(l["a"])(c,r,i,!1,null,null,null),p=u.exports,f=n("9483");Object(f["a"])("".concat("/website/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var h=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"mt-5"},[n("b-card",{staticStyle:{"max-width":"25rem"},attrs:{title:"Volvo Cars","img-src":"https://www.bildepot.se/wp-content/uploads/2020/07/Volvo_originalservice_q1_2021.jpg","img-alt":"Image","img-top":""}},[n("b-card-text",{staticStyle:{"font-size":"1rem","margin-bottom":"1rem"}},[t._v(" Build your Volvo exactly the way you want it. Discover new car models from Volvo and design it in the configurator. ")]),n("router-link",{attrs:{to:"/car/"}},[n("b-button",{attrs:{variant:"primary"}},[t._v("Build Car")])],1)],1)],1)},m=[],g=n("1bbb"),v=n("205f"),b={components:{BContainer:g["a"],BCard:v["a"]}},_=b,w=Object(l["a"])(_,d,m,!1,null,null,null),x=w.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("Preview",{attrs:{cars:t.cars,position:t.position}}),n("Options",{attrs:{cars:t.cars,position:t.position}})],1)},O=[],y=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return-1!==t.position?n("div",{staticClass:"preview"},[n("BIconChevronLeft",{attrs:{"font-scale":"1.5"},on:{click:t.previousAngle}}),n("img",{staticClass:"car",attrs:{src:t.previewImage,alt:"Car"}}),n("BIconChevronRight",{attrs:{"font-scale":"1.5"},on:{click:t.nextAngle}})],1):n("div",{staticClass:"preview preview-text"},[n("h1",[t._v("Build your own car")]),n("p",[t._v("Select a car model to start")])])}),$=[],S=(n("a9e3"),n("7386")),k={name:"Preview",components:{BIconChevronLeft:S["gh"],BIconChevronRight:S["hh"]},computed:{previewImage:function(){return this.firstBuild+this.$store.state.defaultColor+"/"+this.$store.state.defaultWheels+"/"+this.secondBuild+"?angle="+this.angle},firstBuild:function(){return this.cars[this.position].exterior.img_build_one},secondBuild:function(){return this.cars[this.position].exterior.img_build_two},angle:function(){return this.$store.state.carAngle}},props:{cars:Array,position:Number},methods:{previousAngle:function(){this.$store.commit("previousAngle")},nextAngle:function(){this.$store.commit("nextAngle")}}},j=k,A=(n("fe7e"),Object(l["a"])(j,y,$,!1,null,"f30c823e",null)),B=A.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"options"},[0===t.currentStep?n("Models",{attrs:{cars:this.cars,position:this.position}}):1===t.currentStep?n("Exterior",{attrs:{exteriorOptions:t.getExterior}}):2===t.currentStep?n("Wheels",{attrs:{exteriorOptions:t.getExterior}}):3===t.currentStep?n("div",{staticClass:"completed"},[n("BIconCheck2Circle",{attrs:{"font-scale":"3"}}),n("p",[t._v("Looking Good")])],1):t._e()],1)},P=[],W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.cars,(function(e){return n("li",{key:e.model},[n("router-link",{attrs:{to:"/car/"+e.model}},[n("img",{attrs:{src:e.exterior.img_list,alt:"Car"}}),n("span",[t._v(t._s(e.model))])])],1)})),0)},I=[],N={name:"Models",props:{cars:Array,position:Number}},M=N,D=(n("cb7f"),Object(l["a"])(M,W,I,!1,null,"28b99709",null)),L=D.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.exteriorOptions.colors?n("ul",[n("li",{staticClass:"controls prev"},[n("router-link",{attrs:{to:"/car/"}},[t._v("Prev")])],1),t._l(t.exteriorOptions.colors.solid,(function(e){return n("li",{key:e.number,on:{click:function(n){return t.changeColor(e.number)}}},[n("div",{staticClass:"color",attrs:{id:"C"+e.number}}),n("p",[t._v(t._s(e.name)),n("br"),n("span",[t._v("Solid")])])])})),t._l(t.exteriorOptions.colors.metallic,(function(e){return n("li",{key:e.number,on:{click:function(n){return t.changeColor(e.number)}}},[n("div",{staticClass:"color",attrs:{id:"C"+e.number}}),n("p",[t._v(t._s(e.name)),n("br"),n("span",[t._v("Metallic")])])])})),n("li",{staticClass:"controls next",on:{click:t.nextStep}},[t._v("Next")])],2):n("ul",[n("p",[t._v("No Colors")])])},V=[],z={name:"Exterior",props:{exteriorOptions:Object},methods:{changeColor:function(t){this.$store.commit("changeColor",t)},nextStep:function(){this.$store.commit("changeStep",2)}}},H=z,T=(n("b911"),Object(l["a"])(H,R,V,!1,null,"3174a6ce",null)),q=T.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.exteriorOptions.wheels?n("ul",[n("li",{staticClass:"controls prev",on:{click:t.prevStep}},[t._v("Prev")]),t._l(t.exteriorOptions.wheels,(function(e){return n("li",{key:e.number,on:{click:function(n){return t.changeWheels(e.number)}}},[n("img",{attrs:{src:e.image,alt:"Wheels",width:"60"}}),n("p",[t._v(t._s(e.name)),n("br")])])})),n("li",{staticClass:"controls next",on:{click:t.nextStep}},[t._v("Complete")])],2):n("ul",[n("p",[t._v("No Wheels")])])},J=[],G={name:"Wheels",props:{exteriorOptions:Object},methods:{changeWheels:function(t){this.$store.commit("changeWheels",t)},prevStep:function(){this.$store.commit("changeStep",1)},nextStep:function(){this.$store.commit("changeStep",3)}}},Y=G,K=(n("3979"),Object(l["a"])(Y,F,J,!1,null,"36547867",null)),Q=K.exports,U={name:"Options",components:{Models:L,Exterior:q,Wheels:Q,BIconCheck2Circle:S["Ig"]},computed:{currentStep:function(){return this.$store.state.step},getExterior:function(){return-1!==this.position?this.$store.state.data[this.position].exterior:{}}},props:{cars:Array,position:Number}},X=U,Z=(n("33cf"),Object(l["a"])(X,E,P,!1,null,null,null)),tt=Z.exports,et={name:"Customize",components:{Preview:B,Options:tt},created:function(){this.$store.dispatch("getData"),void 0!==this.$route.params.name&&(this.$store.commit("changePosition",-1),this.$store.commit("changeStep",1))},computed:{cars:function(){return this.$store.state.data},position:function(){return this.$store.state.position}},methods:{getSelected:function(){this.selectedCar=this.$route.params.name}},watch:{$route:function(t,e){this.getSelected(),"/car/"===e.path||t.path==="/car/"+this.selectedCar?(this.$store.dispatch("getData"),this.$store.commit("changeStep",1)):(this.$store.commit("changePosition",-1),this.$store.commit("changeStep",0))}}},nt=et,ot=Object(l["a"])(nt,C,O,!1,null,null,null),rt=ot.exports;o["default"].use(h["a"]);var it=[{path:"/",name:"Home",component:x},{path:"/car/:name?",name:"Customize",component:rt}],st=new h["a"]({routes:it}),at=st,ct=n("2f62"),lt=n("bc3a"),ut=n.n(lt),pt=n("2106"),ft=n.n(pt);o["default"].use(ft.a,ut.a),o["default"].use(ct["a"]);var ht=new ct["a"].Store({state:{data:null,defaultColor:null,defaultWheels:null,position:-1,carAngle:1,step:0},mutations:{addData:function(t,e){t.data=e;for(var n=0;n<e.length;n++)e[n].model===at.currentRoute.params.name&&(t.position=n,t.defaultColor=e[n].exterior.colors.solid[0].number,t.defaultWheels=e[n].exterior.wheels[0].number)},changePosition:function(t,e){t.position=e},previousAngle:function(t){t.carAngle>1&&t.carAngle--},nextAngle:function(t){t.carAngle<7&&t.carAngle++},changeStep:function(t,e){t.step=e},changeColor:function(t,e){t.defaultColor=e},changeWheels:function(t,e){t.defaultWheels=e}},actions:{getData:function(t){o["default"].axios.get("https://leos0.github.io/website/json/data.json").then((function(e){t.commit("addData",e.data)}))}},modules:{}}),dt=n("5f5b"),mt=n("b1e0");n("abe2");o["default"].config.productionTip=!1,o["default"].use(dt["a"]),o["default"].use(mt["a"]),new o["default"]({router:at,store:ht,render:function(t){return t(p)}}).$mount("#app")},"7e17":function(t,e,n){},abe2:function(t,e,n){},b446:function(t,e,n){},b911:function(t,e,n){"use strict";n("e76e")},cb7f:function(t,e,n){"use strict";n("f250")},e76e:function(t,e,n){},f250:function(t,e,n){},fe7e:function(t,e,n){"use strict";n("1004")}});
//# sourceMappingURL=app.70abdc4a.js.map