(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),l=a.n(o),c=(a(9),a(1)),s=(a(10),a(11),1e3),i=s/3,m=s/2,u=s/8;var d=[{name:"SBK",color:"#04794e",link:"getsbk.com",years:["2018","2020"],description:"Smarkets is a betting exchange that offers the best odds with lowest commision. At Smarkets, I contributed directly to building a competitive online sportsbook application from its early stages to having thousands of users.",bulletPoints:["Use React Native to build a cross-platform mobile application to deliver key features with top-notch animations for a perfect UI/UX.","Use Django to implement necessary database models and corresponding API endpoints for the app.","Setup a backend app using Flask for the geofence microservice.","Maintain the good performance by writing efficient functions and components.","Write unit and automation tests on all platforms to avoid crashes. Apply fast bug fixing based on the crashlytic report."]},{name:"Food Stories",color:"#4184a0",link:"food-stories.com",years:["2018"],description:"A CRUD full stack web to share cooking recipes, built with Ruby on Rails and React/Redux.",bulletPoints:["Implemented user authentication using BCrypt to create login session without storing actual passwords.","Designed project as a single-page web app to only re-render components when making API calls to the backend.","Launched AWS as a cloud image storage and Heroku for web hosting.","Utilized JQuery and vanilla JavaScript to improve interactive UX/UI."]},{name:"Data Block",color:"#3C887E",link:"food-stories.com",years:["2018"],description:"A data game built solely on Javascript with D3.js",bulletPoints:["Utilized D3.js to create falling circles with sizes based on actual data numbers.","Applied Physics Laws to make collision, gravity, spring force and built methods for vector math and force calculation.","Implemented basic game knowledge with frame loop, position update, player control input, sound, instruction and score.","Designed a behavior for the in-game character to have it always move into the closest falling circle."]},{name:"Emotion Diary",color:"#ad5050",link:"food-stories.com",years:["2018"],description:"A cross-platform mobile app which keeps track of users\u2019 emotions everyday, built with React Native and Firebase.",bulletPoints:["Implemented authentication and real-time database using Google\u2019s Firebase cloud services.","Utilized React Native components to design a friendly and smooth UI/UX.","Implemented data visualization by creating interactive graphs with transitioning effects and touchable tooltips."]}],p=function(e){var t=e.setPageTwoVisible,a=e.hoverProjectIdx,o=e.setHoverProjectIdx,l=Object(n.useState)(!1),p=Object(c.a)(l,2),f=p[0],g=p[1],v=Object(n.useState)(!1),h=Object(c.a)(v,2),b=h[0],y=h[1],E=function(){y(!0);var e=document.getElementsByClassName("project-number")[0],t=document.getElementsByClassName("project-year-dash")[0],a=document.getElementsByClassName("project-year");e.setAttribute("class","project-number slide-left"),t.setAttribute("class","project-year-dash slide-left reduce-width");for(var n=0;n<a.length;n++)n%2===0?a[n].setAttribute("class","project-year slide-up"):a[n].setAttribute("class","project-year slide-down")};return Object(n.useEffect)((function(){var e=document.getElementsByClassName("pane"),t=!0,a=!1,n=void 0;try{for(var r,o=e[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var l=r.value,c=l.getAttribute("class");l.setAttribute("class",c.replace("pane-hidden",""))}}catch(v){a=!0,n=v}finally{try{t||null==o.return||o.return()}finally{if(a)throw n}}var d=document.getElementsByClassName("projects-title")[0];setTimeout((function(){d.setAttribute("class",d.getAttribute("class").replace("project-hidden",""))}),s);for(var p=document.getElementsByClassName("project"),f=function(e){var t=p[e];setTimeout((function(){var e=t.getAttribute("class");t.setAttribute("class",e.replace("project-hidden",""))}),i+m/p.length*(p.length-e))},g=p.length-1;g>=0;g--)f(g);setTimeout((function(){return E()}),u+s)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"page page-two"},r.a.createElement("div",{className:"pane left-pane pane-hidden",style:a>=0?{backgroundColor:d[a].color}:null},b&&r.a.createElement("div",{className:"left-pane-body"},r.a.createElement("p",{className:"project-number"},"".concat(a+1<10&&"0").concat(a+1)),r.a.createElement("div",{className:"row project-body"},r.a.createElement("div",{className:"project-desc-container"},r.a.createElement("p",{className:"project-header"},d[a].name),r.a.createElement("p",{className:"project-description"},d[a].description),r.a.createElement("div",{className:"project-point-container"},d[a].bulletPoints.map((function(e){return r.a.createElement("p",{className:"project-point",key:e},e)})))),r.a.createElement("div",{className:"project-year-container"},d[a].years.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("div",{className:"year-wrapper"},r.a.createElement("p",{className:"project-year",key:e},e)),0===t&&r.a.createElement("div",{className:"project-year-dash"}))})))))),r.a.createElement("div",{className:"pane mid-pane pane-hidden"}),r.a.createElement("div",{className:"pane right-pane pane-hidden"},r.a.createElement("p",{onClick:function(){var e=document.getElementsByClassName("projects-title")[0];e.setAttribute("class",e.getAttribute("class")+" project-hidden");for(var a=document.getElementsByClassName("project"),n=function(e){var t=a[e];setTimeout((function(){var e=t.getAttribute("class");t.setAttribute("class",e+" project-hidden")}),i+m/a.length*e)},r=0;r<d.length;r++)n(r);var o=document.getElementsByClassName("pane");setTimeout((function(){var e=!0,t=!1,a=void 0;try{for(var n,r=o[Symbol.iterator]();!(e=(n=r.next()).done);e=!0){var l=n.value,c=l.getAttribute("class");l.setAttribute("class",c+" pane-hidden")}}catch(s){t=!0,a=s}finally{try{e||null==r.return||r.return()}finally{if(t)throw a}}}),m),setTimeout((function(){return t(!1)}),m+s)},className:"close",onMouseOver:function(){g(!0)},onMouseLeave:function(){g(!1)},style:f?{color:"#ffffffe5"}:a>=0?{color:d[a].color}:null},"X"),r.a.createElement("p",{className:"projects-title project-hidden"},"PROJECTS"),d.map((function(e,t){return r.a.createElement("div",{key:e.name,className:"project-container",onMouseOver:function(){var e;(e=t)!==a&&(y(!1),o(e),setTimeout((function(){return E()}),u))},style:t===a?{backgroundColor:"#aeafaf41"}:null},r.a.createElement("div",{className:"dash",style:t===a?{backgroundColor:d[t].color,width:"3%"}:null}),r.a.createElement("p",{className:"project project-hidden",style:t===a?{color:d[t].color}:null},e.name))})))))};function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var v=r.a.createElement("g",null),h=r.a.createElement("g",null),b=r.a.createElement("g",null),y=r.a.createElement("g",null),E=r.a.createElement("g",null),j=r.a.createElement("g",null),w=r.a.createElement("g",null),N=r.a.createElement("g",null),k=r.a.createElement("g",null),A=r.a.createElement("g",null),O=r.a.createElement("g",null),C=r.a.createElement("g",null),P=r.a.createElement("g",null),x=r.a.createElement("g",null),I=r.a.createElement("g",null),S=function(e){var t=e.svgRef,a=e.title,n=g(e,["svgRef","title"]);return r.a.createElement("svg",f({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 31.479 31.479",style:{enableBackground:"new 0 0 31.479 31.479"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("path",{style:{fill:"#1E201D"},d:"M26.485,21.206c0.429-0.444,0.429-1.143,0-1.587c-0.444-0.429-1.159-0.429-1.587,0l-8.047,8.047 V1.111C16.851,0.492,16.359,0,15.74,0c-0.619,0-1.127,0.492-1.127,1.111v26.555l-8.031-8.047c-0.444-0.429-1.143-0.429-1.587,0 c-0.429,0.444-0.429,1.143,0,1.587l9.952,9.952c0.429,0.429,1.143,0.429,1.587,0L26.485,21.206z"}),v,h,b,y,E,j,w,N,k,A,O,C,P,x,I)},B=r.a.forwardRef((function(e,t){return r.a.createElement(S,f({svgRef:t},e))}));a.p;var R=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(0),s=Object(c.a)(l,2),i=s[0],m=s[1];return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"page page-one"},r.a.createElement("div",null,r.a.createElement("div",{className:"avatar"}),r.a.createElement("div",{className:"intro"},r.a.createElement("p",null,"Hello,"),r.a.createElement("p",null,"I'm ",r.a.createElement("span",null,"Tan Loc"),","),r.a.createElement("p",null,"a software engineer."))),r.a.createElement(B,{className:"down-arrow",onClick:function(){o(!0)}})),a&&r.a.createElement(p,{setPageTwoVisible:o,hoverProjectIdx:i,setHoverProjectIdx:m}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.dfe1b442.chunk.js.map