(this["webpackJsonpshopping-cart-demo"]=this["webpackJsonpshopping-cart-demo"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),r=c(6),s=c.n(r),d=(c(13),c(7)),j=c(2),a=c(8),o=(c(14),c(0)),u=function(e){var t=e.count;return Object(o.jsxs)("header",{className:"flex",children:[Object(o.jsx)("h1",{children:"shopping cart demo"}),Object(o.jsxs)("div",{children:["Cart: ",t]})]})},h=function(){return Object(o.jsx)("footer",{children:Object(o.jsx)("p",{children:"Copyright \xa9 by bakaHao 2021"})})},b=function(e){var t=e.products,c=e.addItem;return Object(o.jsx)("div",{className:"product",children:t.map((function(e){return Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("img",{src:e.image,alt:""}),Object(o.jsx)("h3",{children:e.name}),Object(o.jsxs)("p",{className:"price",children:["Price: ",e.price]}),Object(o.jsx)("button",{className:"btn",onClick:function(){return c(e)},children:"Add to cart"})]},e.id)}))})},l=function(e){var t=e.cartItem,c=e.addItem,n=e.removeItem,i=t.reduce((function(e,t){return e+t.price*t.qty}),0),r=i>=1e5?0:3e4,s=i+r,d=function(e){return e.toLocaleString("it-IT",{style:"currency",currency:"VND"})};return Object(o.jsxs)("div",{className:"basket",children:[Object(o.jsx)("h3",{children:"Cart item"}),Object(o.jsx)("hr",{}),0===t.length&&Object(o.jsx)("p",{children:"No item show"}),t.map((function(e){return Object(o.jsxs)("div",{className:"item",children:[Object(o.jsxs)("div",{children:[d(e.price)," x ",e.qty," ",e.name]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:function(){return c(e)},children:"+"}),Object(o.jsx)("button",{onClick:function(){return n(e)},children:"-"})]})]},e.id)})),0!==t.length&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"item",children:[Object(o.jsx)("div",{children:"Th\xe0nh ti\u1ec1n"}),Object(o.jsx)("div",{children:d(i)})]}),Object(o.jsxs)("div",{className:"item",children:[Object(o.jsx)("div",{children:"Ship"}),Object(o.jsx)("div",{children:d(r)})]}),Object(o.jsxs)("div",{className:"item",children:[Object(o.jsx)("div",{children:"T\u1ed7ng ti\u1ec1n"}),Object(o.jsx)("div",{children:d(s)})]})]})]})},m={products:[{id:1,name:"B\xe1nh d\u1eeba n\u01b0\u1edbng",price:2e4,image:"https://picsum.photos/id/1/200/200"},{id:2,name:"B\xe1nh d\u1eeba xo\xe1y",price:25e3,image:"https://picsum.photos/id/2/200/200"},{id:3,name:"B\xe1nh d\u1eeba n\u1ea5u",price:3e4,image:"https://picsum.photos/id/3/200/200"}]};var O=function(){var e=m.products,t=Object(n.useState)([]),c=Object(a.a)(t,2),i=c[0],r=c[1],s=function(e){var t=i.find((function(t){return t.id===e.id}));r(t?i.map((function(c){return c.id===e.id?Object(j.a)(Object(j.a)({},t),{},{qty:t.qty+1}):c})):[].concat(Object(d.a)(i),[Object(j.a)(Object(j.a)({},e),{},{qty:1})]))};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(u,{count:i.length}),Object(o.jsxs)("main",{children:[Object(o.jsx)(b,{products:e,addItem:s}),Object(o.jsx)(l,{cartItem:i,addItem:s,removeItem:function(e){var t=i.find((function(t){return t.id===e.id}));1===t.qty?r(i.filter((function(t){return t.id!==e.id}))):r(i.map((function(c){return c.id===e.id?Object(j.a)(Object(j.a)({},t),{},{qty:t.qty-1}):c})))}})]}),Object(o.jsx)(h,{})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.126fb878.chunk.js.map