(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{133:function(e,t,n){"use strict";n.r(t);var r=n(30),c=n(0),a=n.n(c),i=n(57),o=n.n(i),u=n(38),l=n(26),s=n(29),d=n(68),p=n(9),b=n(7),f={user:null,error:null};var O=n(104),m={hidden:!0,cartItems:[]};var h={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5}]};var j={collections:{},isLoading:!1,error:null};var S=n(97),g={key:"cart",storage:n.n(S).a,whitelist:["cartReducer"]},v=Object(s.c)({userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.a.SIGNIN_SUCCESS:return Object(p.a)(Object(p.a)({},e),{},{user:t.payload});case b.a.SIGN_OUT_SUCCESS:return Object(p.a)(Object(p.a)({},e),{},{user:null,error:null});case b.a.SIGNIN_FAILURE:case b.a.SIGN_OUT_FAILURE:case b.a.SIGN_UP_FAILURE:return Object(p.a)(Object(p.a)({},e),{},{error:t.payload});default:return e}},cartReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.a.TOGGLE_CART_DROP_DOWN:return Object(p.a)(Object(p.a)({},e),{},{hidden:!e.hidden});case b.a.ADD_CART_ITEM:var n=e.cartItems.find((function(e){return e.id===t.payload.id}));return n?Object(p.a)(Object(p.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.id===n.id?Object(p.a)(Object(p.a)({},e),{},{quantity:e.quantity+1}):e}))}):Object(p.a)(Object(p.a)({},e),{},{cartItems:[].concat(Object(O.a)(e.cartItems),[Object(p.a)(Object(p.a)({},t.payload),{},{quantity:1})])});case b.a.SUBTRACT_CART_ITEM:var r=e.cartItems.find((function(e){return e.id===t.payload.id}));return r&&r.quantity-1?Object(p.a)(Object(p.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.id===r.id?Object(p.a)(Object(p.a)({},e),{},{quantity:e.quantity-1}):e}))}):Object(p.a)(Object(p.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case b.a.REMOVE_CART_ITEM:return Object(p.a)(Object(p.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case b.a.CLEAR_CART:return Object(p.a)(Object(p.a)({},e),{},{cartItems:[]});default:return e}},directoryReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;return t.type,e},shopReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.a.FETCH_SHOP_DATA_START:return Object(p.a)(Object(p.a)({},e),{},{isLoading:!0});case b.a.FETCH_SHOP_DATA_SUCCESS:return Object(p.a)(Object(p.a)({},e),{},{collections:t.payload,isLoading:!1});case b.a.FETCH_SHOP_DATA_ERROR:return Object(p.a)(Object(p.a)({},e),{},{error:t.payload});default:return e}}}),_=Object(d.a)(g,v),E=(n(117),n(105)),y=n(8),T=n.n(y),I=n(17),x=n(18),C=n(73),w=n(54),A=n.n(w);n(121),n(123);A.a.initializeApp({apiKey:"AIzaSyAQ2H9iCDzSqK3jY7-L99aSKrxwTdTfX14",authDomain:"crwn-clothing-app-c6844.firebaseapp.com",projectId:"crwn-clothing-app-c6844",storageBucket:"crwn-clothing-app-c6844.appspot.com",messagingSenderId:"851926238812",appId:"1:851926238812:web:82992d7b704604d1244899",measurementId:"G-QNE54NE6B9"});var R=A.a.auth(),N=A.a.firestore(),U=new A.a.auth.GoogleAuthProvider;function k(e,t){return G.apply(this,arguments)}function G(){return(G=Object(C.a)(T.a.mark((function e(t,n){var r,c,a,i,o,u,l;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=t.displayName,c=t.email,a=N.collection("users").doc(t.uid),e.next=6,a.get();case 6:if(i=e.sent,o=i.exists,u=i.id,l=new Date,o){e.next=19;break}return e.prev=11,e.next=14,a.set(Object(p.a)({id:u,displayName:r,email:c,createdAt:l},n));case 14:e.next=19;break;case 16:throw e.prev=16,e.t0=e.catch(11),new Error("unhandled creating user profile with ".concat(e.t0.message));case 19:return e.abrupt("return",a);case 20:case"end":return e.stop()}}),e,null,[[11,16]])})))).apply(this,arguments)}function P(){return D.apply(this,arguments)}function D(){return(D=Object(C.a)(T.a.mark((function e(){var t,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={},n=N.collection("collections"),e.next=5,n.get();case 5:return e.sent.forEach((function(e){var n=e.data();t[n.title.toLowerCase()]=n})),e.abrupt("return",t);case 10:e.prev=10,e.t0=e.catch(0),console.log("error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}U.setCustomParameters({prompt:"select_account"});var H=T.a.mark(F),L=T.a.mark(M);function F(){var e;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P();case 3:return e=t.sent,t.next=6,Object(I.b)(Object(x.e)(e));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(I.b)(Object(x.d)(t.t0));case 12:case"end":return t.stop()}}),H,null,[[0,8]])}function M(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.c)(b.a.FETCH_SHOP_DATA_START,F);case 2:case"end":return e.stop()}}),L)}var z=T.a.mark(ne),q=T.a.mark(re),B=T.a.mark(ce),W=T.a.mark(ae),V=T.a.mark(ie),K=T.a.mark(oe),Q=T.a.mark(ue),X=T.a.mark(le),$=T.a.mark(se),J=T.a.mark(de),Y=T.a.mark(pe),Z=T.a.mark(be),ee=T.a.mark(fe),te=T.a.mark(Oe);function ne(e){var t,n;return T.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,k(e);case 3:return t=r.sent,r.next=6,t.get();case 6:return n=r.sent,r.next=9,Object(I.b)(Object(x.j)(Object(p.a)({id:n.id},n.data())));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(0),r.next=15,Object(I.b)(Object(x.h)(r.t0.message));case 15:case"end":return r.stop()}}),z,null,[[0,11]])}function re(){var e,t;return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,R.signInWithPopup(U);case 3:return e=n.sent,t=e.user,n.next=7,ne(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(I.b)(Object(x.h)(n.t0.message));case 13:case"end":return n.stop()}}),q,null,[[0,9]])}function ce(e){var t,n,r,c,a;return T.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,r=t.password,i.prev=1,i.next=4,R.signInWithEmailAndPassword(n,r);case 4:return c=i.sent,a=c.user,i.next=8,ne(a);case 8:i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(I.b)(Object(x.h)(i.t0.message));case 14:case"end":return i.stop()}}),B,null,[[1,10]])}function ae(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.c)(b.a.SIGNIN_GOOGLE_START,re);case 2:case"end":return e.stop()}}),W)}function ie(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.c)(b.a.SIGNIN_EMAIL_AND_PASSWORD_START,ce);case 2:case"end":return e.stop()}}),V)}function oe(){var e;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e,t){var n=R.onAuthStateChanged((function(t){n(),e(t)}),t)}));case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,ne(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(I.b)(Object(x.h)(t.t0.message));case 14:case"end":return t.stop()}}),K,null,[[0,10]])}function ue(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.c)(b.a.CHECK_SESSION_USER,oe);case 2:case"end":return e.stop()}}),Q)}function le(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.signOut();case 3:return e.next=5,Object(I.b)(Object(x.m)());case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(I.b)(Object(x.k)(e.t0));case 11:case"end":return e.stop()}}),X,null,[[0,7]])}function se(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.c)(b.a.SIGN_OUT_START,le);case 2:case"end":return e.stop()}}),$)}function de(e){var t,n,r,c,a;return T.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,r=t.password,i.prev=1,i.next=4,R.createUserWithEmailAndPassword(n,r);case 4:return c=i.sent,a=c.user,i.next=8,Object(I.b)(Object(x.p)({user:a}));case 8:i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(I.b)(Object(x.n)());case 14:case"end":return i.stop()}}),J,null,[[1,10]])}function pe(e){var t;return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload.user,n.next=3,ne(t);case 3:case"end":return n.stop()}}),Y)}function be(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.c)(b.a.SIGN_UP_SUCCESS,pe);case 2:case"end":return e.stop()}}),Z)}function fe(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.c)(b.a.SIGN_UP_START,de);case 2:case"end":return e.stop()}}),ee)}function Oe(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.a)([ae(),ie(),ue(),se(),fe(),be()]);case 2:case"end":return e.stop()}}),te)}var me=T.a.mark(je),he=T.a.mark(Se);function je(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.b)(Object(x.c)());case 2:case"end":return e.stop()}}),me)}function Se(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.c)(b.a.SIGN_OUT_SUCCESS,je);case 2:case"end":return e.stop()}}),he)}var ge=T.a.mark(ve);function ve(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.a)([M(),Oe(),Se()]);case 2:case"end":return e.stop()}}),ge)}var _e=Object(E.a)(),Ee=[_e];var ye=Object(s.e)(_,s.a.apply(void 0,Ee));_e.run(ve);var Te=Object(d.b)(ye),Ie=n(98),xe=n(34),Ce=n(79),we=n(25),Ae=n(5);function Re(){return(Re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ne(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var Ue=c.createElement("desc",null,"Created with Sketch."),ke=c.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},c.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},c.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},c.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),c.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))));function Ge(e,t){var n=e.title,r=e.titleId,a=Ne(e,["title","titleId"]);return c.createElement("svg",Re({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":r},a),void 0===n?c.createElement("title",{id:r},"Group"):n?c.createElement("title",{id:r},n):null,Ue,ke)}var Pe=c.forwardRef(Ge);n.p;function De(){return(De=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function He(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var Le=c.createElement("g",null),Fe=c.createElement("g",null),Me=c.createElement("g",null),ze=c.createElement("g",null),qe=c.createElement("g",null),Be=c.createElement("g",null),We=c.createElement("g",null),Ve=c.createElement("g",null),Ke=c.createElement("g",null),Qe=c.createElement("g",null),Xe=c.createElement("g",null),$e=c.createElement("g",null),Je=c.createElement("g",null),Ye=c.createElement("g",null),Ze=c.createElement("g",null);function et(e,t){var n=e.title,r=e.titleId,a=He(e,["title","titleId"]);return c.createElement("svg",De({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,c.createElement("g",null,c.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),c.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),c.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Le,Fe,Me,ze,qe,Be,We,Ve,Ke,Qe,Xe,$e,Je,Ye,Ze)}var tt=c.forwardRef(et);n.p;function nt(e){var t=e.toggle,n=Object(l.c)((function(e){return e.cartReducer})).cartItems.reduce((function(e,t){return e+t.quantity}),0);return Object(Ae.b)("li",{css:{display:"flex",justifyContent:"center",alignItems:"flex-end",position:"relative","&:hover":{cursor:"pointer"}},onClick:t,children:[Object(Ae.a)(tt,{css:{width:"1.5rem",height:"1.5rem"}}),Object(Ae.a)("span",{css:{position:"absolute",fontSize:"0.7rem"},children:n})]})}var rt=n(48),ct=n(55),at=n(11),it=n(21);function ot(e){e.id;var t=e.name,n=e.imageUrl,r=e.quantity,c=e.price;return Object(Ae.b)("div",{css:{display:"grid",gridTemplateColumns:"30% 1fr",gridGap:"1rem",height:"5rem",marginBottom:"1rem",alignItems:"center"},children:[Object(Ae.a)("div",{css:{backgroundImage:"url(".concat(n,")"),height:"100%",backgroundPosition:"center",backgroundSize:"cover"}}),Object(Ae.b)("div",{children:[Object(Ae.a)("div",{children:t}),Object(Ae.b)("span",{children:[r," x $",c]})]})]})}function ut(){var e=Object(l.c)((function(e){return e.cartReducer})).cartItems,t=Object(l.b)(),n=Object(at.h)();return Object(Ae.b)("div",{css:{height:"19.75rem",width:"15rem",position:"absolute",top:"4.5rem",border:"solid 1px ".concat(it.f),background:it.a,display:"flex",flexDirection:"column",alignItems:"center",padding:"1rem 0",right:0,zIndex:99},children:[Object(Ae.a)("div",{css:{height:"90%",width:"85%",marginBottom:"1rem",overflow:"auto"},children:e.length?e.map((function(e){return Object(rt.a)(ot,Object(p.a)(Object(p.a)({},e),{},{key:"cart-item-".concat(e.id)}))})):Object(Ae.a)("div",{css:{textAlign:"center",marginTop:"2.5rem",fontSize:"1.15rem"},children:"Your cart is empty"})}),Object(Ae.a)(ct.a,{variant:"primary",onClick:function(){n("checkout"),t(Object(x.r)())},css:{width:"85%",border:"solid 1px ".concat(it.f),"&:hover":{opacity:.9,background:it.a,color:it.f}},children:"GO TO CHECKOUT"})]})}ot=c.memo(ot);var lt=n(41);function st(){var e,t=Object(l.c)((function(e){return e})),n=t.userReducer.user,r=t.cartReducer.hidden,c=Object(l.b)();return Object(Ae.b)("header",{css:Object(we.a)({height:"5rem",display:"flex",justifyContent:"space-between",alignItems:"center",paddingLeft:"2rem",paddingRight:"0.5rem",position:"relative"},lt.c,{paddingLeft:"0"}),children:[Object(Ae.a)(u.b,{to:"/..",children:Object(Ae.a)(Pe,{})}),Object(Ae.a)("nav",{children:Object(Ae.b)("ul",{css:(e={display:"grid",alignItems:"center",gridTemplateColumns:"repeat(4, auto)",gridGap:"1.75rem",listStyle:"none","li > a":{textDecoration:"none",color:it.f}},Object(we.a)(e,lt.c,{gridGap:"1.5rem"}),Object(we.a)(e,lt.a,{gridGap:"0.5rem"}),e),children:[Object(Ae.a)("li",{children:Object(Ae.a)(u.b,{to:"/shop",children:"SHOP"})}),Object(Ae.a)("li",{children:Object(Ae.a)(u.b,{to:"/shop",children:"CONTACT"})}),Object(Ae.a)("li",{children:n?Object(Ae.a)("div",{css:{"&:hover":{cursor:"pointer"}},onClick:function(){return c(Object(x.l)())},children:"SIGN OUT"}):Object(Ae.a)(u.b,{to:"/signin",children:"SINGIN"})}),Object(Ae.a)(nt,{toggle:function(){return c(Object(x.r)())}})]})}),r?null:Object(Ae.a)(ut,{})]})}var dt=n(101),pt=n(102),bt=n(106),ft=n(103),Ot=function(e){Object(bt.a)(n,e);var t=Object(ft.a)(n);function n(){var e;Object(dt.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={hasError:!1},e}return Object(pt.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log("has an error detect from ErrorBoundary Component",e)}},{key:"render",value:function(){return this.state.hasError?Object(Ae.a)("div",{css:{height:"100vh",color:"red",fontSize:"2rem",display:"flex",justifyContent:"center",alignItems:"center"},children:"Something went wrong!"}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(c.Component),mt=c.lazy((function(){return n.e(4).then(n.bind(null,137))})),ht=c.lazy((function(){return n.e(5).then(n.bind(null,136))})),jt=c.lazy((function(){return n.e(3).then(n.bind(null,139))})),St=c.lazy((function(){return n.e(6).then(n.bind(null,138))}));var gt=function(){var e=Object(l.c)((function(e){return e.userReducer})).user,t=Object(l.b)();return c.useEffect((function(){t(Object(x.b)())}),[t]),Object(Ae.b)("div",{css:Object(we.a)({height:"100vh",fontFamily:"Open Sans Condensed",padding:".5rem 2.5rem"},lt.c,{padding:".5rem"}),children:[Object(Ae.a)(st,{}),Object(Ae.a)("main",{children:Object(Ae.a)(c.Suspense,{fallback:Object(Ae.a)(ct.c,{}),children:Object(Ae.a)(Ot,{children:Object(Ae.b)(at.d,{children:[Object(Ae.a)(at.b,{path:"/",element:Object(Ae.a)(mt,{})}),Object(Ae.a)(at.b,{path:"/shop/*",element:Object(Ae.a)(ht,{})}),Object(Ae.a)(at.b,{path:"/checkout",element:Object(Ae.a)(jt,{})}),Object(Ae.a)(at.b,{path:"/signin",children:e?Object(Ae.a)(at.a,{to:"/"}):Object(Ae.a)(St,{})})]})})})})]})};o.a.render(Object(r.jsx)(xe.ApolloProvider,{client:Ce.c,children:Object(r.jsx)(l.a,{store:ye,children:Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(u.a,{children:Object(r.jsx)(Ie.a,{persistor:Te,children:Object(r.jsx)(gt,{})})})})})}),document.getElementById("root"))},18:function(e,t,n){"use strict";n.d(t,"r",(function(){return c})),n.d(t,"a",(function(){return a})),n.d(t,"q",(function(){return i})),n.d(t,"f",(function(){return o})),n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"i",(function(){return s})),n.d(t,"g",(function(){return d})),n.d(t,"j",(function(){return p})),n.d(t,"h",(function(){return b})),n.d(t,"b",(function(){return f})),n.d(t,"l",(function(){return O})),n.d(t,"m",(function(){return m})),n.d(t,"k",(function(){return h})),n.d(t,"c",(function(){return v})),n.d(t,"o",(function(){return j})),n.d(t,"p",(function(){return S})),n.d(t,"n",(function(){return g}));var r=n(7);function c(){return{type:r.a.TOGGLE_CART_DROP_DOWN}}function a(e){return{type:r.a.ADD_CART_ITEM,payload:e}}function i(e){return{type:r.a.SUBTRACT_CART_ITEM,payload:e}}function o(e){return{type:r.a.REMOVE_CART_ITEM,payload:e}}function u(e){return{type:r.a.FETCH_SHOP_DATA_SUCCESS,payload:e}}function l(e){return{type:r.a.FETCH_SHOP_DATA_ERROR,payload:e}}function s(){return{type:r.a.SIGNIN_GOOGLE_START}}function d(e){return{type:r.a.SIGNIN_EMAIL_AND_PASSWORD_START,payload:e}}function p(e){return{type:r.a.SIGNIN_SUCCESS,payload:e}}function b(e){return{type:r.a.SIGNIN_FAILURE,payload:e}}function f(){return{type:r.a.CHECK_SESSION_USER}}function O(){return{type:r.a.SIGN_OUT_START}}function m(){return{type:r.a.SIGN_OUT_SUCCESS}}function h(){return{type:r.a.SIGN_OUT_FAILURE}}function j(e){return{type:r.a.SIGN_UP_START,payload:e}}function S(e){return{type:r.a.SIGN_UP_SUCCESS,payload:e}}function g(){return{type:r.a.SIGN_UP_FAILURE}}function v(){return{type:r.a.CLEAR_CART}}},21:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"f",(function(){return c})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return u}));var r="white",c="#000000",a="grey",i="red",o="#6f7077",u="#4285f4"},41:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return a}));var r="@media (min-width: 320px) and (max-width: 368px)",c="@media (max-width: 991px)",a="@media (min-width: 992px) and (max-width: 1199px)"},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return m}));var r=n(9),c=n(78),a=n(25),i=n(5),o=n(48),u=n(69),l=n(21),s=n(41),d={primary:{color:l.a,background:l.f},secondary:{color:l.f,background:l.a},google:{color:l.a,background:l.b}},p=u.a.button(Object(a.a)({padding:"15px 25px",minHeight:"3.125rem",lineHeight:1,border:"none","&:hover":{cursor:"pointer"}},s.c,{borderRadius:"3px",fontSize:"0.7rem",minHeight:"2.125rem"}),(function(e){var t=e.variant;return d[void 0===t?"primary":t]})),b=u.a.input({padding:"1em",paddingLeft:"0",border:"none",color:"".concat(l.c),borderBottom:"solid 1px ".concat(l.d),margin:"1rem 0","&:focus":{outline:"none"}}),f=Object(o.b)({from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}}),O=u.a.div({height:"50px",width:"50px",borderRadius:"50%",border:"3px solid rgba(195, 195, 195, 0.6)",borderTopColor:"#636767",animation:"".concat(f," 1s linear infinite")});function m(){return Object(i.a)("div",{css:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(i.a)(O,{})})}function h(e){var t=e.label,n=e.name,o=e.id,u=Object(c.a)(e,["label","name","id"]);return Object(i.b)("div",{className:"form-input-".concat(n),css:{display:"flex",flexDirection:"column",marginTop:"1em",position:"relative",color:"".concat(l.c)},children:[Object(i.a)(b,Object(r.a)(Object(r.a)({},u),{},{name:n,id:o,placeholder:" ",required:!0,css:Object(a.a)({":not(:placeholder-shown)":Object(a.a)({},"~ label",{fontSize:"0.8rem",top:"3px"}),":focus":Object(a.a)({},"~ label",{top:"3px",fontSize:"0.8rem",transition:"all 0.2s linear"}),":valid":Object(a.a)({},"~ label",{fontSize:"0.8rem",top:"3px"})},"~ label",{pointerEvents:"none",transition:"all 0.2s linear"})})),Object(i.a)("label",{htmlFor:n,className:"label-".concat(n),css:{position:"absolute",top:"30px"},children:t})]})}},7:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={SET_CURRENT_USER:"SET_CURRENT_USER",TOGGLE_CART_DROP_DOWN:"TOGGLE_CART_DROP_DOWN",ADD_CART_ITEM:"ADD_CART_ITEM",REMOVE_CART_ITEM:"REMOVE_CART_ITEM",SUBTRACT_CART_ITEM:"SUBTRACT_CART_ITEM",FETCH_SHOP_DATA_START:"FETCH_SHOP_DATA_START",FETCH_SHOP_DATA_ERROR:"FETCH_SHOP_DATA_ERROR",FETCH_SHOP_DATA_SUCCESS:"FETCH_SHOP_DATA_SUCCESS",SIGNIN_GOOGLE_START:"SIGNIN_GOOGLE_START",SIGNIN_EMAIL_AND_PASSWORD_START:"SIGNIN_EMAIL_AND_PASSWORD_START",SIGNIN_SUCCESS:"SIGNIN_SUCCESS",SIGNIN_FAILURE:"SIGNIN_FAILURE",CHECK_SESSION_USER:"CHECK_SESSION_USER",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",CLEAR_CART:"CLEAR_CART",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"}},79:function(e,t,n){"use strict";n.d(t,"c",(function(){return b})),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return O}));var r=n(50),c=n(34);function a(){var e=Object(r.a)(["\n  query getCollectionsByTitle($title: String!) {\n    getCollectionsByTitle(title: $title) {\n      id\n      title\n      items {\n        id\n        name\n        price\n        imageUrl\n      }\n    }\n  }\n"]);return a=function(){return e},e}function i(){var e=Object(r.a)(["\n  query {\n    collections {\n      id\n      title\n      items {\n        id\n        name\n        price\n        imageUrl\n      }\n    }\n  }\n"]);return i=function(){return e},e}function o(){var e=Object(r.a)(["\n  query cartItems {\n    cartItems @client\n  }\n"]);return o=function(){return e},e}function u(){var e=Object(r.a)(["\n  query cartHidden {\n    hidden @client\n  }\n"]);return u=function(){return e},e}function l(){var e=Object(r.a)(["\n  extend type Query {\n    hidden: Boolean!\n    cartItems: [ID!]!\n  }\n"]);return l=function(){return e},e}var s=Object(c.gql)(l()),d=Object(c.makeVar)(!0),p=Object(c.makeVar)([]),b=new c.ApolloClient({uri:"https://crwn-clothing.com/",fetchOptions:{mode:"no-cors"},cache:new c.InMemoryCache({typePolicies:{Query:{fields:{hidden:{read:function(){return d()}},cartItems:{read:function(){return p()}}}}}}),typeDefs:s}),f=(Object(c.gql)(u()),Object(c.gql)(o()),Object(c.gql)(i())),O=Object(c.gql)(a())}},[[133,1,2]]]);
//# sourceMappingURL=main.42e8d3d7.chunk.js.map