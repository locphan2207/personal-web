(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/avatar.e36b085c.png"},function(e,t,a){e.exports=a.p+"static/media/sbk.e40e380a.png"},function(e,t,a){e.exports=a.p+"static/media/food.ba701ce5.png"},function(e,t,a){e.exports=a.p+"static/media/data-block.a2b46e1c.png"},function(e,t,a){e.exports=a.p+"static/media/emotion.b81e093e.png"},function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),s=(a(17),a(1)),i=a(2),o=(a(18),a(19),function(e){var t=function(){var e=document.getElementById("cursor");e.style.animation="cursor-shadow 5s linear ".concat(window.screen.width>767?"infinite":""),e.style.width="50rem",e.style.height="50rem",e.style.borderRadius="25rem"},a=function(){var e=document.getElementById("cursor");e.style.animation="",e.style.width="",e.style.height="",e.style.borderRadius=""};return r.a.Children.toArray(e.children).map((function(e){return r.a.createElement(e.type,Object.assign({onMouseEnter:t,onMouseLeave:a,ref:e.ref,key:e.key},e.props),e.props.children)}))});var u={HOME_PAGE:"HOME",WORK_PAGE:"WORK",SKILLS_PAGE:"SKILLS",ABOUT_PAGE:"ABOUT"},m=[u.HOME_PAGE,u.WORK_PAGE,u.SKILLS_PAGE,u.ABOUT_PAGE],f=function(e,t){return m.findIndex((function(t){return t===e}))>m.findIndex((function(e){return e===t}))},d=function(e,t,a){if(!t)return a[e];var n=[],r=!0,c=!1,l=void 0;try{for(var s,i=m[Symbol.iterator]();!(r=(s=i.next()).done);r=!0){var o=s.value;if(o===e||o===t){if(n.length)return n.push("".concat(a[o],"px")),n.length>0?"calc(".concat(n.join(" + "),")"):n[0];n.push("".concat(a[o],"px"),"20rem")}else n.length&&n.push("".concat(a[o],"px"),"20rem")}}catch(u){c=!0,l=u}finally{try{r||null==i.return||i.return()}finally{if(c)throw l}}return"calc(".concat(n.join(" + "),")")},p=function(e,t){var a=[],n=!0,r=!1,c=void 0;try{for(var l,s=m[Symbol.iterator]();!(n=(l=s.next()).done);n=!0){var i=l.value;if(e===i)return a.length?"calc(".concat(a.join(" + "),")"):"0px";a.push("".concat(t[i],"px"),"20rem")}}catch(o){r=!0,c=o}finally{try{n||null==s.return||s.return()}finally{if(r)throw c}}},g=function(e){var t=e.pageVisible,a=e.switchPage,c=Object(n.useRef)({}),l=Object(n.useRef)(null),i=Object(n.useState)({}),u=Object(s.a)(i,2),g=u[0],E=u[1];return Object(n.useEffect)((function(){var e=d(t,l.current,c.current);E({height:e,transform:f(t,l.current)?"translateY(".concat(p(l.current,c.current),")"):"translateY(".concat(p(t,c.current),")")}),setTimeout((function(){return E({height:c.current[t],transform:"translateY(".concat(p(t,c.current),")")})}),300),l.current=t}),[t]),r.a.createElement("div",{className:"nav-bar"},r.a.createElement("div",{className:"left-bar",style:g}),r.a.createElement("div",{className:"nav-names"},m.map((function(e){return r.a.createElement(o,{key:e},r.a.createElement("h5",{ref:function(t){t&&(c.current[e]=t.offsetHeight)},onClick:function(){return function(e){e!==t&&a(e)}(e)}},e))}))))};a(20);var E=function(e){var t=e.pageVisible;return r.a.createElement("div",{className:"page-numbers"},m.map((function(e,a){return r.a.createElement("h5",{key:e,style:t===e?{color:"#9e5d24",fontSize:"40rem"}:null},"0".concat(a+1))})))},h=(a(21),a(7)),b=a.n(h);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var k=r.a.createElement("path",{id:"Polygon_1","data-name":"Polygon 1",d:"M10.5,0,21,18H0Z",transform:"translate(21 18) rotate(180)",fill:"#c97328"}),O=function(e){var t=e.svgRef,a=e.title,n=y(e,["svgRef","title"]);return r.a.createElement("svg",v({width:21,height:18,viewBox:"0 0 21 18",ref:t},n),a?r.a.createElement("title",null,a):null,k)},w=r.a.forwardRef((function(e,t){return r.a.createElement(O,v({svgRef:t},e))})),N=(a.p,a(3)),j=a.n(N),A=function(e,t,a){Object(n.useEffect)((function(){j.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=4;break}return n.next=3,j.a.awrap(a());case 3:t(null);case 4:case"end":return n.stop()}}))}),[e,a,t])};var P=function(e){var t=e.isClosing,a=e.setClosingPage,c=e.wheelTrack,l=e.setWheelTrack,s=e.switchPage;A(t,a,(function(){var e=document.getElementsByClassName("layer-1")[0];return document.getElementsByClassName("layer-2")[0].setAttribute("class","layer-2"),setTimeout((function(){return e.setAttribute("class","layer-1")}),100),new Promise((function(e){setTimeout((function(){return e("done")}),500)}))})),Object(n.useEffect)((function(){!function(){var e=document.getElementsByClassName("layer-1")[0],t=document.getElementsByClassName("layer-2")[0],a=document.getElementsByClassName("explore-text")[0],n=document.getElementsByClassName("triangle")[0];t.setAttribute("class","layer-2 right"),setTimeout((function(){return e.setAttribute("class","layer-1 right")}),100),setTimeout((function(){a.setAttribute("class","explore-text")}),500),setTimeout((function(){n.setAttribute("class","triangle")}),700)}()}),[]);var i=c>=1?{color:"#eeb669"}:null,m=c>=2?{backgroundSize:"100% 2rem"}:null,f=3===c?{transform:"translateY(200%)"}:c>=4?{transform:"translateY(400%)"}:null;return r.a.createElement("div",{className:"page-one"},r.a.createElement("div",{className:"intro-container"},r.a.createElement("div",{className:"name-container"},r.a.createElement("h1",null,"Tan Loc"),r.a.createElement("h1",{className:"last-name"},"Phan")),r.a.createElement("p",{className:"greeting"},"Hi there,",r.a.createElement("br",null),"I'm a"," ",r.a.createElement("span",{className:"color-switch",style:i},"software engineer")," ","who loves building"," ",r.a.createElement("span",{className:"underline",style:m},"functional"),","," ",r.a.createElement("span",{className:"underline",style:m},"beautiful")," ","and"," ",r.a.createElement("span",{className:"underline",style:m},"interactive")," ","websites."),r.a.createElement(o,null,r.a.createElement("div",{className:"explore-container",onClick:function(){c<3?l(3):c<4?l(4):s(u.WORK_PAGE)}},r.a.createElement("div",{className:"explore-text hidden-above"},r.a.createElement("p",{style:f},window.screen.width>767?"SCROLL":"TAP ON"),r.a.createElement("p",{style:f},"EXPLORE"),r.a.createElement("p",{style:f},"CONNECT")),r.a.createElement(w,{className:"triangle hidden-below"}))),r.a.createElement("div",{className:"img"},r.a.createElement("div",{className:"gradient"}),r.a.createElement("div",{className:"layer-1"}),r.a.createElement("div",{className:"layer-2"}),r.a.createElement("img",{src:b.a,alt:"face"}))))},x=(a(23),a(8)),T=a.n(x),S=a(9),C=a.n(S),R=a(10),B=a.n(R),_=a(11),G=a.n(_),L=300,W=.3;var M=[{name:"SBK",color:"#187b57",link:"https://getsbk.com",img:T.a,years:["2018","2020"],description:r.a.createElement("p",null,"Contributed directly to building a cross-platform mobile application using ",r.a.createElement("span",null,"React Native")," from the early stages to the app store launch with the increase in user numbers from ",r.a.createElement("span",null,"0 to 9000")),tags:"Fullstack \xb7 Mobile dev"},{name:"Food Stories",color:"#4184a0",link:"http://food-stories.herokuapp.com/#/",img:C.a,years:["2018"],description:r.a.createElement("p",null,"Food Stories is a full-stack web application that is inspired by Kitchen Stories. The project is built entirely on ",r.a.createElement("span",null,"Ruby on Rails")," ","backend and with ",r.a.createElement("span",null,"React-Redux")," frontend"),tags:"Fullstack \xb7 Web app"},Object(i.a)({name:"Data Block",color:"#3C887E",link:"https://locphan2207.github.io/Data-block/",img:B.a,years:["2018"],description:r.a.createElement("p",null,"A game built with ",r.a.createElement("span",null,"JavaScript"),". Players protect a character from being hit by big blocks of data falling down from the sky by controlling the shield using the mouse"),tags:"Fullstack \xb7 Mobile dev"},"tags","Frontend \xb7 Web game"),{name:"Emotion Diary",color:"#ad5050",link:"https://github.com/locphan2207/Emotion-Diary",img:G.a,years:["2018"],description:r.a.createElement("p",null,"A cross-platform mobile app to keep track of users' emotions, built with"," ",r.a.createElement("span",null,"React Native")," and ",r.a.createElement("span",null,"Firebase")),tags:"Fullstack \xb7 Mobile dev"}],I=function(e){var t=e.isClosing,a=e.setClosingPage,c=e.wheelTrack,l=e.setWheelTrack,i=Object(n.useState)(0),u=Object(s.a)(i,2),m=u[0],f=u[1],d=Object(n.useState)(!1),p=Object(s.a)(d,2),g=p[0],E=p[1],h=function(e){if(e!==m){var t=document.getElementsByClassName("layer-1")[0],a=document.getElementsByClassName("layer-2")[0];a.setAttribute("class","layer-2"),setTimeout((function(){return t.setAttribute("class","layer-1")}),100),setTimeout((function(){f(e),E(!1)}),300),setTimeout((function(){E(!0)}),400),setTimeout((function(){a.setAttribute("class","layer-2 right"),setTimeout((function(){return t.setAttribute("class","layer-1 right")}),100)}),500)}};return A(t,a,(function(){for(var e=document.getElementsByClassName("project-title"),t=function(t){var a=e[t];setTimeout((function(){var e=a.getAttribute("class");a.setAttribute("class",e+" hidden-below")}),L/e.length*t)},a=0;a<M.length;a++)t(a);return new Promise((function(e){setTimeout((function(){return e("done")}),L)}))})),Object(n.useEffect)((function(){!function(){for(var e=document.getElementsByClassName("project-title"),t=function(t){var a=e[t];setTimeout((function(){a.setAttribute("class","project-title")}),L/e.length*(e.length-t))},a=e.length-1;a>=0;a--)t(a);E(!0);var n=document.getElementsByClassName("layer-1")[0];document.getElementsByClassName("layer-2")[0].setAttribute("class","layer-2 right"),setTimeout((function(){return n.setAttribute("class","layer-1 right")}),300)}()}),[]),Object(n.useEffect)((function(){(c>=0||c<=3)&&h(c)}),[c]),Object(n.useEffect)((function(){c!==m&&l(m)}),[m]),r.a.createElement("div",{className:"page-two"},r.a.createElement("div",{className:"project-titles"},r.a.createElement("div",{className:"project-img"},r.a.createElement("img",{src:M[m].img,alt:"project"}),r.a.createElement("div",{className:"gradient"}),r.a.createElement("div",{className:"layer-1"}),r.a.createElement("div",{className:"layer-2"})),M.map((function(e,t){return r.a.createElement(o,{key:e.name},r.a.createElement("p",{onMouseDown:function(){return h(t)},className:"project-title hidden-below",style:t===m?{color:"#EEB669",transform:"scale(1.3)"}:null},e.name))}))),r.a.createElement("div",{className:"desc-body"},g&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"project-year-container"},M[m].years.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("div",{className:"year-wrapper"},r.a.createElement("p",{className:"project-year ".concat(t%2===0?"even":"odd"),key:e},e)),0===t&&r.a.createElement("div",{className:"project-year-dash"}))}))),r.a.createElement("div",{className:"project-tags"},M[m].tags.split("").map((function(e,t){return r.a.createElement("span",{key:t,className:"project-tag-char",style:{animationDelay:"".concat(W+.03*t,"s")}},e)}))),r.a.createElement("div",{className:"project-description"},M[m].description),r.a.createElement(o,null,r.a.createElement("a",{className:"more-container",href:M[m].link,target:"_blank"},r.a.createElement("p",null,"more"),r.a.createElement(w,{className:"triangle"}))))))},K=a(4),H=(a(24),function(e){var t=e.text,a=e.className;return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:a},r.a.createElement("text",{id:"javascript",transform:"translate(1 106)",fill:"none",stroke:"#f2f2f2",strokeWidth:"1",fontFamily:"PalatinoLinotype-Bold, Palatino Linotype",fontWeight:"700",letterSpacing:"0.035em"},r.a.createElement("tspan",{x:"0",y:"0"},t)))}),F={languages:["JavaScript","Python","CSS3","HTML5","SQL","Ruby"],frontend:["React","React Native","Redux","Redux Saga","jQuery"],tools:["AWS","Git"],backend:["Flask","Rails","Django","Postgresql","MongoDB"]},D=Object.values(F).reduce((function(e,t){return[].concat(Object(K.a)(e),Object(K.a)(t))}),[]),Y=[0,D.length-1];var U=function(e){var t=e.groupName,a=e.skills,n=e.setSelected,c=e.selected;return r.a.createElement("div",{className:"skill-group"},r.a.createElement("div",{className:"skill-column"},a.map((function(e){return r.a.createElement(o,{key:e},r.a.createElement("p",{onClick:function(){return n(e)},style:c===e?{color:"#f2f2f2"}:null},e))}))),r.a.createElement("div",{className:"vertical-bar"}),r.a.createElement("div",{className:"group-name"},r.a.createElement("p",null,t)))},J=function(e){var t=e.isClosing,a=e.setClosingPage,c=e.wheelTrack,l=e.setWheelTrack,i=Object(n.useState)(!0),o=Object(s.a)(i,2),u=o[0],m=o[1],f=Object(n.useState)(F.languages[0]),d=Object(s.a)(f,2),p=d[0],g=d[1];return A(t,a,(function(){})),Object(n.useEffect)((function(){p!==D[c]&&l(D.findIndex((function(e){return e===p}))),m(!1),setTimeout((function(){return m(!0)}),100)}),[p]),Object(n.useEffect)((function(){c>=0&&c<=18&&g(D[c])}),[c]),r.a.createElement("div",{className:"page-three"},r.a.createElement("div",{className:"skill-group-container"},Object.keys(F).map((function(e,t){return r.a.createElement(U,{key:e,groupName:e,skills:F[e],style:{gridColumn:"".concat(t+1," / span 1"),gridRow:"".concat(t%2+1," / span 1")},selected:p,setSelected:g})}))),u&&r.a.createElement(H,{className:"skill-svg-container",text:p}))};a(25);var V,X=function(e){var t=e.isClosing,a=e.setClosingPage;return e.wheelTrack,A(t,a,(function(){})),Object(n.useEffect)((function(){}),[]),r.a.createElement("div",{className:"page-four"},r.a.createElement("p",null,"I'm excited to connect!"),r.a.createElement("div",{className:"links"},Object.keys(Z).map((function(e){return r.a.createElement(o,{key:e},r.a.createElement("a",{href:Z[e].link,target:"_blank"},Z[e].text))}))))},Z={resume:{text:"Resume",link:"https://drive.google.com/file/d/1H_1wwGCeihMXe8bFbX51B36xL42ZrC45/view?usp=sharing"},email:{text:"Email",link:"mailto:locphan2207@gmail.com"},linkedin:{text:"LinkedIn",link:"https://www.linkedin.com/in/tanloc-phan/"},github:{text:"GitHub",link:"https://github.com/locphan2207"}},z=(V={},Object(i.a)(V,u.HOME_PAGE,[0,4]),Object(i.a)(V,u.WORK_PAGE,[0,3]),Object(i.a)(V,u.SKILLS_PAGE,Y),Object(i.a)(V,u.ABOUT_PAGE,[0,0]),V),Q="MacIntel"===window.navigator.platform?1300:500;var q=function(e){var t=!1;return function(a){t||(t=!0,e(a),setTimeout((function(){return t=!1}),.06))}},$=function(e){var t=document.getElementById("cursor");t&&(t.style.top="".concat(e.pageY,"px"),t.style.left="".concat(e.pageX,"px"))},ee=function(){var e=Object(n.useState)(u.HOME_PAGE),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),i=Object(s.a)(l,2),o=i[0],f=i[1],d=Object(n.useState)(0),p=Object(s.a)(d,2),h=p[0],b=p[1],v=Object(n.useState)(0),y=Object(s.a)(v,2),k=y[0],O=y[1],w=Object(n.useRef)(null),N=Object(n.useRef)(!1),j=function(e){f(a),w.current=e};Object(n.useEffect)((function(){!o&&w.current&&(c(w.current),b(z[w.current][0]))}),[o]);var A=h/z[a][1]*100;return r.a.createElement("div",{className:"scroll-catch",onWheel:function(e){if(!o&&!N.current){O(e.deltaY>0?k+100:k-100);var t=e.deltaY>0?h+1:h-1,n=m.findIndex((function(e){return e===a})),r=m[n+1],c=m[n-1];t>z[a][1]?r&&j(r):t<z[a][0]?c&&j(c):b(t),N.current=!0,setTimeout((function(){return N.current=!1}),Q)}},onMouseMove:q($)},r.a.createElement("div",{className:"App"},window.screen.width>767&&r.a.createElement("div",{className:"left-vertical-bar"},r.a.createElement("p",{style:{transform:"rotateZ(".concat(k,"deg)")}},"scroll")),r.a.createElement("div",{className:"right-vertical-bar"},r.a.createElement("div",{className:"scroll-indicator",style:{height:"".concat(A,"%")}})),r.a.createElement(g,{pageVisible:a,switchPage:j}),window.screen.width>767&&r.a.createElement(E,{pageVisible:a}),a===u.HOME_PAGE&&r.a.createElement(P,{isClosing:o===u.HOME_PAGE,setClosingPage:f,wheelTrack:h,setWheelTrack:b,switchPage:j}),a===u.WORK_PAGE&&r.a.createElement(I,{isClosing:o===u.WORK_PAGE,setClosingPage:f,wheelTrack:h,setWheelTrack:b}),a===u.SKILLS_PAGE&&r.a.createElement(J,{isClosing:o===u.SKILLS_PAGE,setClosingPage:f,wheelTrack:h,setWheelTrack:b}),a===u.ABOUT_PAGE&&r.a.createElement(X,{isClosing:o===u.ABOUT_PAGE,setClosingPage:f,wheelTrack:h})),r.a.createElement("div",{id:"cursor"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[12,1,2]]]);
//# sourceMappingURL=main.1c2d8293.chunk.js.map