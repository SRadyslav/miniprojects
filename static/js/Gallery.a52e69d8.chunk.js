"use strict";(self.webpackChunkminiProjects=self.webpackChunkminiProjects||[]).push([[249],{842:function(e,n,c){c.r(n),c.d(n,{default:function(){return m}});var s=c(982),t=c(885),a=c(791),i=c(184),l=function(e){var n=e.name,c=e.images;return(0,i.jsxs)("div",{className:"collection",children:[(0,i.jsx)("img",{className:"collection__big",src:c[0],alt:"Item"}),(0,i.jsxs)("div",{className:"collection__bottom",children:[(0,i.jsx)("img",{className:"collection__mini",src:c[1],alt:"Item"}),(0,i.jsx)("img",{className:"collection__mini",src:c[2],alt:"Item"}),(0,i.jsx)("img",{className:"collection__mini",src:c[3],alt:"Item"})]}),(0,i.jsx)("h4",{children:n})]})},o=function(){return(0,i.jsxs)("div",{className:"collection",children:[(0,i.jsx)("img",{style:{width:"250px"},className:"collection__big skeleton"}),(0,i.jsxs)("div",{className:"collection__bottom",children:[(0,i.jsx)("img",{className:"collection__mini skeleton"}),(0,i.jsx)("img",{className:"collection__mini skeleton"}),(0,i.jsx)("img",{className:"collection__mini skeleton"})]}),(0,i.jsx)("h4",{className:"skeleton_text",children:"lorem"})]})},r=[{name:"\u0412\u0441\u0435"},{name:"\u041c\u043e\u0440\u0435"},{name:"\u0413\u043e\u0440\u044b"},{name:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430"},{name:"\u0413\u043e\u0440\u043e\u0434\u0430"}];var m=function(){var e=a.useState(!0),n=(0,t.Z)(e,2),c=n[0],m=n[1],u=a.useState(0),h=(0,t.Z)(u,2),d=h[0],j=h[1],x=a.useState(0),f=(0,t.Z)(x,2),N=f[0],_=f[1],p=a.useState([]),g=(0,t.Z)(p,2),v=g[0],k=g[1],b=a.useState(""),w=(0,t.Z)(b,2),C=w[0],Z=w[1];return a.useEffect((function(){m(!0);var e=N?"category=".concat(N):"";fetch("https://634bdb48317dc96a308c1d66.mockapi.io/photoGallery?page=".concat(d+1,"&limit=3&").concat(e)).then((function(e){return e.json()})).then((function(e){k(e),console.log(e)})).catch((function(e){console.warn(e),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0444\u043e\u0442\u043e")})).finally((function(){m(!1)}))}),[N,d]),(0,i.jsxs)("div",{className:"App",children:[(0,i.jsx)("h1",{children:"\u041c\u043e\u044f \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439"}),(0,i.jsxs)("div",{className:"top",children:[(0,i.jsx)("ul",{className:"tags",children:r.map((function(e,n){return(0,i.jsx)("li",{className:N===n?"active":"",onClick:function(){_(n),j(0)},children:e.name},e.name)}))}),(0,i.jsx)("input",{className:"search-input",placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e",value:C,onChange:function(e){return Z(e.target.value)}})]}),(0,i.jsx)("div",{className:"content",children:c?(0,s.Z)(new Array(3)).map((function(e,n){return(0,i.jsx)(o,{},n)})):v.filter((function(e){return e.name.toLowerCase().includes(C.toLocaleLowerCase())})).map((function(e){return(0,i.jsx)(l,{name:e.name,images:e.photos},e.id)}))}),(0,i.jsx)("ul",{className:"pagination",children:(0,s.Z)(new Array(0!==N?3:5)).map((function(e,n){return(0,i.jsx)("li",{className:d===n?"active":"",onClick:function(){j(n)},children:n+1},n)}))})]})}}}]);
//# sourceMappingURL=Gallery.a52e69d8.chunk.js.map