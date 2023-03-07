(function(){"use strict";var e={1216:function(e,n,t){var o=t(9963),i=t(6252),r=t(3577);const l={id:"app"},a={class:"surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static"},s=(0,i._)("img",{src:"/custom_logo.PNG",alt:"Image",height:"50",class:"mr-0 lg:mr-5"},null,-1),c=(0,i._)("i",{class:"pi pi-bars text-4xl"},null,-1),u=[c],d={class:"list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer"},p=(0,i._)("span",null,"Home",-1),g={key:0},m={key:1},f={class:"flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0"},h={key:0},b={key:1},v={class:"surface-ground px-2 py-2 md:px-6 lg:px-8 align-items-center justify-content-center"};function w(e,n,t,c,w,k){const y=(0,i.up)("router-link"),Z=(0,i.up)("LocaleChanger"),O=(0,i.up)("Button"),x=(0,i.up)("router-view"),C=(0,i.Q2)("ripple");return(0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",a,[s,(0,i.wy)(((0,i.wg)(),(0,i.iD)("a",{class:"cursor-pointer block text-700 mt-1 p-ripple",onClick:n[0]||(n[0]=e=>w.isOpen=!w.isOpen)},u)),[[C]]),(0,i._)("div",{class:(0,r.C_)([{hidden:w.isOpen},"close_open_menu align-items-center flex-grow-1 justify-content-between lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-4 shadow-2 lg:shadow-none"])},[(0,i._)("ul",d,[(0,i._)("li",null,[(0,i.Wm)(y,{to:"/",class:"navigation-style flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple",onClick:n[1]||(n[1]=e=>w.isOpen=!w.isOpen)},{default:(0,i.w5)((()=>[p])),_:1})]),k.showAdminBoard?((0,i.wg)(),(0,i.iD)("li",g,[(0,i.Wm)(y,{to:"/admin",class:"navigation-style flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple",onClick:n[2]||(n[2]=e=>w.isOpen=!w.isOpen)},{default:(0,i.w5)((()=>[(0,i.Uk)("Admin Board ")])),_:1})])):(0,i.kq)("",!0),k.showModeratorBoard?((0,i.wg)(),(0,i.iD)("li",m,[(0,i.Wm)(y,{to:"/mod",class:"navigation-style flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple",onClick:n[3]||(n[3]=e=>w.isOpen=!w.isOpen)},{default:(0,i.w5)((()=>[(0,i.Uk)("Platform ")])),_:1})])):(0,i.kq)("",!0),(0,i._)("li",null,[k.currentUser?((0,i.wg)(),(0,i.j4)(y,{key:0,to:"/user",class:"navigation-style flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple",onClick:n[4]||(n[4]=e=>w.isOpen=!w.isOpen)},{default:(0,i.w5)((()=>[(0,i.Uk)("User ")])),_:1})):(0,i.kq)("",!0)]),(0,i._)("div",null,[(0,i.Wm)(Z)])]),(0,i._)("div",f,[k.currentUser?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",h,[(0,i.Wm)(O,{label:"Login",onClick:n[5]||(n[5]=e=>{w.isOpen=!w.isOpen,this.$router.push("/login")}),role:"link",class:"p-button-text font-bold"}),(0,i.Wm)(O,{label:"Register",onClick:n[6]||(n[6]=e=>{w.isOpen=!w.isOpen,this.$router.push("/register")}),class:"ml-3 font-bold"})])),k.currentUser?((0,i.wg)(),(0,i.iD)("div",b,[(0,i.Wm)(O,{label:k.currentUser.username,onClick:n[7]||(n[7]=e=>{w.isOpen=!w.isOpen,this.$router.push("/profile")}),role:"link",class:"p-button-text font-bold"},null,8,["label"]),(0,i.Wm)(O,{label:"Log out",onClick:[n[8]||(n[8]=e=>w.isOpen=!w.isOpen),(0,o.iM)(k.logOut,["prevent"])],href:"",class:"ml-3 font-bold"},null,8,["onClick"])])):(0,i.kq)("",!0)])],2)]),(0,i._)("div",v,[(0,i.Wm)(x)])])}function k(e,n,t,o,r,l){const a=(0,i.up)("Dropdown");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(a,{modelValue:r.selectedValue,"onUpdate:modelValue":n[0]||(n[0]=e=>r.selectedValue=e),options:r.options,optionLabel:"label",placeholder:r.selectedLanguage.value,onChange:n[1]||(n[1]=e=>l.changeLanguage(r.selectedValue))},null,8,["modelValue","options","placeholder"])])}var y={data(){return{options:[{label:"English",value:"en",image:"https://icons.iconarchive.com/icons/wikipedia/flags/1024/SE-Sweden-Flag-icon.png"},{label:"lietuvių",value:"lt",image:"https://icons.iconarchive.com/icons/wikipedia/flags/1024/SE-Sweden-Flag-icon.png"},{label:"Germany",value:"de",image:"https://icons.iconarchive.com/icons/wikipedia/flags/1024/SE-Sweden-Flag-icon.png"}],selectedValue:JSON.parse(localStorage.getItem("language"))||{label:"English",value:"en",image:"https://icons.iconarchive.com/icons/wikipedia/flags/1024/SE-Sweden-Flag-icon.png"},selectedLanguage:""}},created(){this.selectedValue=JSON.parse(localStorage.getItem("language"))||{label:"English",value:"en",image:"https://icons.iconarchive.com/icons/wikipedia/flags/1024/SE-Sweden-Flag-icon.png"},this.$i18n.locale=this.selectedValue.value},watch:{selectedValue(e){localStorage.setItem("language",JSON.stringify(e))}},methods:{changeLanguage(e){this.selectedLanguage=e,this.$i18n.locale=this.selectedLanguage.value}}},Z=t(3744);const O=(0,Z.Z)(y,[["render",k]]);var x=O,C={components:{LocaleChanger:x},data(){return{isOpen:!0,loading:!1}},computed:{currentUser(){return this.$store.state.auth.user},showAdminBoard(){return!(!this.currentUser||!this.currentUser["roles"])&&this.currentUser["roles"].includes("ROLE_ADMIN")},showModeratorBoard(){return!(!this.currentUser||!this.currentUser["roles"])&&this.currentUser["roles"].includes("ROLE_MODERATOR")}},methods:{logOut(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}}};const _=(0,Z.Z)(C,[["render",w]]);var S=_,D=t(2201);const E=()=>t.e(349).then(t.bind(t,2349)),V=()=>t.e(662).then(t.bind(t,3662)),j=()=>t.e(714).then(t.bind(t,714)),B=()=>t.e(270).then(t.bind(t,4270)),I=()=>t.e(475).then(t.bind(t,1475)),P=()=>Promise.all([t.e(322),t.e(153)]).then(t.bind(t,7153)),T=()=>Promise.all([t.e(322),t.e(239)]).then(t.bind(t,1239)),A=[{path:"/",name:"home",component:I},{path:"/login",component:P},{path:"/register",component:T},{path:"/profile",name:"profile",component:E},{path:"/admin",name:"admin",component:V},{path:"/mod",name:"moderator",component:j},{path:"/user",name:"user",component:B}],L=(0,D.p7)({history:(0,D.PO)(),routes:A});var N=L,U=t(3907),W=t(8945);const F="https://erasmusapi-production.up.railway.app/";class M{login(e){return W.Z.post(F+"login",{username:e.username,password:e.password}).then((e=>(e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data)))}logout(){localStorage.removeItem("user")}register(e){return W.Z.post(F+"register",{username:e.username,email:e.email,password:e.password,is_active:!1,role:"admin"})}}var R=new M;const q=JSON.parse(localStorage.getItem("user")),$=q?{status:{loggedIn:!0},user:q}:{status:{loggedIn:!1},user:null},J={namespaced:!0,state:$,actions:{login({commit:e},n){return R.login(n).then((n=>(e("loginSuccess",n),Promise.resolve(n))),(n=>(e("loginFailure"),Promise.reject(n))))},logout({commit:e}){R.logout(),e("logout")},register({commit:e},n){return R.register(n).then((n=>(e("registerSuccess"),Promise.resolve(n.data))),(n=>(e("registerFailure"),Promise.reject(n))))}},mutations:{loginSuccess(e,n){e.status.loggedIn=!0,e.user=n},loginFailure(e){e.status.loggedIn=!1,e.user=null},logout(e){e.status.loggedIn=!1,e.user=null},registerSuccess(e){e.status.loggedIn=!1},registerFailure(e){e.status.loggedIn=!1}}},z=(0,U.MT)({modules:{auth:J}});var G=z,K=t(9150),Q=t(5475),H=t(7615),Y=t(5466),X=t(396),ee=t(5714),ne=t(5011),te=t(6262),oe=t(4325),ie=t(8223),re=t(1095),le=t(5876),ae=t(171),se=t(3609),ce=t(3242),ue=t(6635),de=t(9506),pe=t(8427),ge=t(5247),me=t(9755),fe=t(7077),he=t(1238),be=t(7593),ve=t(380),we=t(3781),ke=t(6663),ye=t(6076),Ze=t(8076),Oe=t(7791),xe=t(2124),Ce=t(9572),_e=t(4902),Se=t(161),De=t(8832),Ee=t(7967),Ve=t(4019),je=t(6060),Be=t(4005),Ie=t(1109),Pe=t(392),Te=t(240),Ae=t(3236),Le=t(445),Ne=t(9151),Ue=t(1958),We=t(2797),Fe=t(7915),Me=t(3915),Re=t(2394);const qe={class:"block-section"},$e={class:"block-header"},Je={class:"block-title"},ze={key:0,class:"badge-free"},Ge={key:1,class:"badge-new"},Ke={class:"block-actions"},Qe=(0,i._)("span",null,"Preview",-1),He=[Qe],Ye=["tabindex"],Xe={key:0,class:"pi pi-lock"},en=(0,i._)("span",null,"Code",-1),nn=["tabindex"],tn=(0,i._)("i",{class:"pi pi-copy"},null,-1),on=[tn],rn={class:"block-content"},ln={key:1};function an(e,n,t,o,l,a){const s=(0,i.Q2)("tooltip"),c=(0,i.Q2)("code");return(0,i.wg)(),(0,i.iD)("div",qe,[(0,i._)("div",$e,[(0,i._)("span",Je,[(0,i._)("span",null,(0,r.zw)(t.header),1),t.free?((0,i.wg)(),(0,i.iD)("span",ze,"Free")):(0,i.kq)("",!0),t.recent?((0,i.wg)(),(0,i.iD)("span",Ge,"New")):(0,i.kq)("",!0)]),(0,i._)("div",Ke,[(0,i._)("a",{tabindex:"0",class:(0,r.C_)({"block-action-active":l.blockView===l.BlockView.PREVIEW}),onClick:n[0]||(n[0]=e=>a.activateView(e,l.BlockView.PREVIEW))},He,2),(0,i._)("a",{tabindex:a.codeDisabled?null:"0",class:(0,r.C_)({"block-action-active":l.blockView===l.BlockView.CODE,"block-action-disabled":a.codeDisabled}),onClick:n[1]||(n[1]=e=>a.activateView(e,l.BlockView.CODE))},[a.codeDisabled?((0,i.wg)(),(0,i.iD)("i",Xe)):(0,i.kq)("",!0),en],10,Ye),(0,i.wy)(((0,i.wg)(),(0,i.iD)("a",{tabindex:a.codeDisabled?null:"0",class:(0,r.C_)(["block-action-copy",{"block-action-disabled":a.codeDisabled}]),onClick:n[2]||(n[2]=e=>a.copyCode(e))},on,10,nn)),[[s,{value:"Copied to clipboard",disabled:a.codeDisabled},void 0,{focus:!0,bottom:!0}]])])]),(0,i._)("div",rn,[l.blockView==l.BlockView.PREVIEW?((0,i.wg)(),(0,i.iD)("div",{key:0,class:(0,r.C_)(t.containerClass),style:(0,r.j5)(t.previewStyle)},[(0,i.WI)(e.$slots,"default")],6)):(0,i.kq)("",!0),l.blockView!==l.BlockView.CODE||a.codeDisabled?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",ln,[(0,i.wy)(((0,i.wg)(),(0,i.iD)("pre",null,[(0,i._)("code",null,(0,r.zw)(t.code)+"\n\n",1)])),[[c]])]))])])}var sn={props:{header:{type:String,default:null},code:null,recent:{type:Boolean,default:!1},free:{type:Boolean,default:!1},containerClass:null,previewStyle:null},data(){return{BlockView:{PREVIEW:0,CODE:1},blockView:0}},computed:{codeDisabled(){return!this.free}},methods:{activateView(e,n){this.codeDisabled||(this.blockView=n),e.preventDefault()},async copyCode(e){this.codeDisabled||await navigator.clipboard.writeText(this.code),e.preventDefault()}}};const cn=(0,Z.Z)(sn,[["render",an]]);var un=cn,dn=JSON.parse('{"message":{"welcome":"Welcome to Your Vue.js App","descr":"For a guide and recipes on how to configure / customize this project, check out the {0}.","doc":"vue-cli documentation","end":"have fun!"}}'),pn=JSON.parse('{"message":{"welcome":"Willkommen zu Deiner Vue.js App","descr":"Eine Anleitung und Rezepte für das Konfigurieren / Anpassen dieses Projekts findest du in der {0}.","doc":"vue-cli Dokumentation","end":"habe Spass!"}}');const gn=(0,K.o)({locale:"en",fallbackLocale:"en",messages:{en:dn,de:pn}}),mn=(0,o.ri)(S);mn.use(Q.Z),mn.component("Column",ge.Z),mn.component("Row",fe.Z),mn.component("ColumnGroup",me.Z),mn.component("DataTable",pe.Z),mn.component("Accordion",H.Z),mn.component("AccordionTab",Y.Z),mn.component("Avatar",X.Z),mn.component("AvatarGroup",ee.Z),mn.component("Badge",te.Z),mn.component("Button",oe.Z),mn.component("Calendar",ie.Z),mn.component("Carousel",re.Z),mn.component("Checkbox",le.Z),mn.component("Chip",ae.Z),mn.component("Dialog",se.Z),mn.component("Divider",ce.Z),mn.component("Dropdown",ue.Z),mn.component("FileUpload",de.Z),mn.component("Galleria",he.Z),mn.component("InlineMessage",be.Z),mn.component("InputMask",ve.Z),mn.component("InputNumber",we.Z),mn.component("InputSwitch",ke.Z),mn.component("InputText",ye.Z),mn.component("Knob",Ze.Z),mn.component("Menu",Oe.Z),mn.component("Message",xe.Z),mn.component("MultiSelect",Ce.Z),mn.component("Password",_e.Z),mn.component("ProgressBar",Se.Z),mn.component("RadioButton",De.Z),mn.component("Rating",Ee.Z),mn.component("Sidebar",je.Z),mn.component("SelectButton",Ie.Z),mn.component("Slider",Be.Z),mn.component("TabMenu",Te.Z),mn.component("TabPanel",Ae.Z),mn.component("TabView",Le.Z),mn.component("Tag",Ne.Z),mn.component("Textarea",Ue.Z),mn.component("ToggleButton",We.Z),mn.component("Toast",Me.Z),mn.component("BlockViewer",un),mn.use(Q.Z,{ripple:!0}),mn.use(Re.Z),mn.directive("badge",ne.Z),mn.directive("tooltip",Fe.Z),mn.directive("ripple",Ve.Z),mn.directive("styleclass",Pe.Z),mn.config.productionTip=!1,mn.use(U.ZP),mn.use(N),mn.use(G),mn.use(gn),mn.mount("#app")}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={id:o,loaded:!1,exports:{}};return e[o](r,r.exports,t),r.loaded=!0,r.exports}t.m=e,function(){var e=[];t.O=function(n,o,i,r){if(!o){var l=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],r=e[u][2];for(var a=!0,s=0;s<o.length;s++)(!1&r||l>=r)&&Object.keys(t.O).every((function(e){return t.O[e](o[s])}))?o.splice(s--,1):(a=!1,r<l&&(l=r));if(a){e.splice(u--,1);var c=i();void 0!==c&&(n=c)}}return n}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,i,r]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{153:"923d89f3",239:"0ae1c132",270:"cb904957",322:"43de9417",349:"143d0821",475:"ae75837b",662:"efb693f4",714:"13750ed7"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{153:"30af48fd",239:"147d8b52",714:"8defc0f6"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="vue-3-authentication-jwt:";t.l=function(o,i,r,l){if(e[o])e[o].push(i);else{var a,s;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==n+r){a=d;break}}a||(s=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+r),a.src=o),e[o]=[i];var p=function(n,t){a.onerror=a.onload=null,clearTimeout(g);var i=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((function(e){return e(t)})),n)return n(t)},g=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),s&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,o,i){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var l=function(t){if(r.onerror=r.onload=null,"load"===t.type)o();else{var l=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=l,s.request=a,r.parentNode.removeChild(r),i(s)}};return r.onerror=r.onload=l,r.href=n,t?t.parentNode.insertBefore(r,t.nextSibling):document.head.appendChild(r),r},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var i=t[o],r=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===e||r===n))return i}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){i=l[o],r=i.getAttribute("data-href");if(r===e||r===n)return i}},o=function(o){return new Promise((function(i,r){var l=t.miniCssF(o),a=t.p+l;if(n(l,a))return i();e(o,a,null,i,r)}))},i={143:0};t.f.miniCss=function(e,n){var t={153:1,239:1,714:1};i[e]?n.push(i[e]):0!==i[e]&&t[e]&&n.push(i[e]=o(e).then((function(){i[e]=0}),(function(n){throw delete i[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,o){var i=t.o(e,n)?e[n]:void 0;if(0!==i)if(i)o.push(i[2]);else{var r=new Promise((function(t,o){i=e[n]=[t,o]}));o.push(i[2]=r);var l=t.p+t.u(n),a=new Error,s=function(o){if(t.o(e,n)&&(i=e[n],0!==i&&(e[n]=void 0),i)){var r=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.src;a.message="Loading chunk "+n+" failed.\n("+r+": "+l+")",a.name="ChunkLoadError",a.type=r,a.request=l,i[1](a)}};t.l(l,s,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var i,r,l=o[0],a=o[1],s=o[2],c=0;if(l.some((function(n){return 0!==e[n]}))){for(i in a)t.o(a,i)&&(t.m[i]=a[i]);if(s)var u=s(t)}for(n&&n(o);c<l.length;c++)r=l[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(u)},o=self["webpackChunkvue_3_authentication_jwt"]=self["webpackChunkvue_3_authentication_jwt"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(1216)}));o=t.O(o)})();
//# sourceMappingURL=app.8444a336.js.map