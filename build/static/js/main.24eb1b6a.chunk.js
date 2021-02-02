(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},,,,,,,,function(e,t,c){},function(e,t,c){},,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),i=c.n(a),r=c(13),l=c.n(r),s=(c(20),c(14)),o=c(6),j=c(3),u=(c(21),function(e){var t=e.children;return Object(n.jsx)("div",{className:"wrapper",children:t})}),b=function(e){var t=e.children,c=e.type;switch(c){case"h1":return Object(n.jsx)("h1",{className:"title title--".concat(c),children:t});case"h2":return Object(n.jsx)("h2",{className:"title title--".concat(c),children:t});case"h3":return Object(n.jsx)("h3",{className:"title title--".concat(c),children:t});case"h4":return Object(n.jsx)("h4",{className:"title title--".concat(c),children:t});case"h5":return Object(n.jsx)("h5",{className:"title title--".concat(c),children:t});case"h6":return Object(n.jsx)("h6",{className:"title title--".concat(c),children:t});default:return null}},d=function(e){var t=e.children,c=e.align,a=e.isLight,i=e.isAccent;return Object(n.jsx)("p",{className:"text".concat(c?" text--".concat(c):"").concat(a&&!i?" text--light":"").concat(i&&!a?" text--accent":""),children:t})},O=c(4),h=c(5),m=(c(27),function(e){var t=e.name,c=e.className,a=function(){switch(t){case"cross":return Object(n.jsx)(O.a,{icon:h.g});case"circle":return Object(n.jsx)(O.a,{icon:h.c});case"repeat":return Object(n.jsx)(O.a,{icon:h.f});case"play":return Object(n.jsx)(O.a,{icon:h.d});case"check":return Object(n.jsx)(O.a,{icon:h.a});case"close":return Object(n.jsx)(O.a,{icon:h.g});case"next":return Object(n.jsx)(O.a,{icon:h.b});case"smile":default:return Object(n.jsx)(O.a,{icon:h.e})}};return e.isInline?Object(n.jsx)("span",{className:"icon".concat(c?" ".concat(c):""),"aria-hidden":"true",children:a()}):Object(n.jsx)("div",{className:"icon".concat(c?" ".concat(c):""),"aria-hidden":"true",children:a()})}),x=function(e){var t=e.index,c=e.value,a=e.onClick,i=e.disabled;return Object(n.jsxs)("button",{onClick:function(){return a(t)},className:"cell".concat(i?" cell--disabled":""),children:[Object(n.jsx)("span",{className:"cell__index",children:t}),"X"===c&&Object(n.jsx)(m,{name:"cross",className:"cell__icon cell__icon--cross"}),"0"===c&&Object(n.jsx)(m,{name:"circle",className:"cell__icon cell__icon--circle"})]})},f=(c(12),function(e){var t=e.children,c=e.isActive;return Object(n.jsx)("div",{className:"container".concat(c?" container--active":""),children:t})}),v=function(e){var t=e.children,c=e.hasTitle;return Object(n.jsx)("div",{className:"container-content".concat(c?" container-content--has-title":""),children:t})},p=function(e){var t=e.onClick,c=e.position,a=e.label,i=e.icon;return Object(n.jsx)("div",{className:"container-control container-control--".concat(c),children:Object(n.jsxs)("button",{className:"container-button",onClick:t,children:[Object(n.jsx)(m,{className:"container-button__icon",name:i,isInline:!0}),Object(n.jsx)("span",{className:"container-button__label",children:a})]})})},y=function(e){var t=e.children;return Object(n.jsx)("div",{className:"container-title",children:Object(n.jsx)(b,{type:"h1",children:t})})},g=(c(28),function(e){var t=e.step,c=e.winner,a=e.draw,i=e.cells,r=e.clickCell,l=e.tryAgain,s=e.restartGame,o=e.move,j=e.isGameStarted,u=function(e,t){var i=e===t?"":t,l=!(!c&&!a||e!==t);return Object(n.jsx)(x,{index:e,value:i,onClick:function(){return r(e)},disabled:l},e)};return 2===t||3===t?Object(n.jsxs)(f,{children:[Object(n.jsx)(y,{children:"Tic Tac Toe"}),Object(n.jsxs)(v,{hasTitle:!0,children:[(!c||!a)&&Object(n.jsxs)(d,{align:"center",isAccent:!0,children:["Move: ",o]}),Object(n.jsx)("div",{className:"board",children:function(e){for(var t=[],c=0;c<e.length;c++)t.push(u(c,e[c]));return t}(i)})]}),Object(n.jsx)(p,{onClick:s,position:"right",label:"Restart game",icon:"close"}),(!c||!a||j)&&Object(n.jsx)(p,{onClick:l,position:"bottom",label:"Try again",icon:"repeat"})]}):null}),N=(c(29),function(e){var t=e.name,c=e.label,a=e.onChange,i=e.activeState,r=e.value,l=e.id,s=e.className;return Object(n.jsxs)("div",{className:"radio-button".concat(i===r?" radio-button--active":"").concat(s?" radio-button--".concat(s):""),children:[Object(n.jsx)("input",{type:"radio",name:t,id:l,value:r,className:"radio-button__input",onChange:function(e){return a(e)}}),Object(n.jsxs)("label",{className:"radio__label",htmlFor:"singleMode",children:[i===r&&Object(n.jsx)(m,{name:"check",className:"radio-button__icon"})," ",c]})]})}),k=function(e){var t=e.step,c=e.mode,a=e.changeMode,i=e.selectMode;return 0===t?Object(n.jsxs)(f,{isActive:c,children:[Object(n.jsx)(y,{children:"Mode"}),Object(n.jsxs)(v,{hasTitle:!0,children:[Object(n.jsx)(d,{align:"center",children:"Select game mode:"}),Object(n.jsx)(N,{label:"Single",onChange:function(e){return a(e)},activeState:c,value:"single",id:"singleMode",name:"mode",className:"block"}),Object(n.jsx)(N,{label:"With friend",onChange:function(e){return a(e)},activeState:c,value:"friend",id:"friendMode",name:"mode",className:"block"})]}),c&&Object(n.jsx)(p,{onClick:i,position:"bottom",label:"Select mode",icon:"next"})]}):null},_=function(e){var t=e.step,c=e.firstPlayer,a=e.mode,i=e.selectPlayer,r=e.changePlayer;return 1===t?Object(n.jsxs)(f,{isActive:c,children:[Object(n.jsx)(y,{children:"Side"}),Object(n.jsxs)(v,{hasTitle:!0,children:[Object(n.jsxs)(d,{align:"center",children:["single"===a?"Pick your side":"Choose first move",":"]}),Object(n.jsx)(N,{label:"X",onChange:function(e){return r(e)},activeState:c,value:"X",id:"playerX",name:"player"}),Object(n.jsx)(N,{label:"O",onChange:function(e){return r(e)},activeState:c,value:"0",id:"playerO",name:"player"})]}),c&&Object(n.jsx)(p,{onClick:i,position:"bottom",label:"Select side",icon:"next"})]}):null},S=(c(30),function(e){var t=e.children,c=e.onClick,a=e.type;return Object(n.jsx)("button",{className:"button".concat(a?" button--".concat(a):""),onClick:c,children:t})}),C=function(e){var t=e.children;return Object(n.jsx)("div",{className:"message__title",children:t})},w=function(e){var t=e.children;return Object(n.jsx)("div",{className:"message__content",children:t})},A=(c(31),function(e){var t=e.type,c=e.title,a=e.content;return Object(n.jsxs)("div",{className:"message".concat(t?" message--".concat(t):""),children:[Object(n.jsx)(C,{children:c}),a&&Object(n.jsx)(w,{children:a})]})}),M=function(e){var t=e.winner,c=e.draw,a=e.step,i=e.restartGame,r=e.tryAgain,l=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(S,{onClick:i,type:"primary",children:"Restart"}),Object(n.jsx)(S,{onClick:r,type:"secondary",children:"Try again"})]})};return 3===a?Object(n.jsx)(A,{type:t?"success":c?"info":"error",title:t?"Wow, ".concat(t," win!"):c?"Yay, it's draw":"",content:Object(n.jsx)(l,{})}):null},T=(c(32),function(){var e=Object(a.useState)(Array.from(Array(9).keys())),t=Object(j.a)(e,2),c=t[0],i=t[1],r=Object(a.useState)(null),l=Object(j.a)(r,2),b=l[0],d=l[1],O=Object(a.useState)(null),h=Object(j.a)(O,2),m=h[0],x=h[1],f=Object(a.useState)(null),v=Object(j.a)(f,2),p=v[0],y=v[1],N=Object(a.useState)(null),S=Object(j.a)(N,2),C=S[0],w=S[1],A=Object(a.useState)(null),T=Object(j.a)(A,2),P=T[0],G=T[1],X=Object(a.useState)(0),E=Object(j.a)(X,2),I=E[0],F=E[1],J=Object(a.useState)(!1),R=Object(j.a)(J,2),W=R[0],B=R[1],L=Object(a.useState)({mode:null,player:null}),Y=Object(j.a)(L,2),q=Y[0],z=Y[1],D=Object(a.useState)(!1),H=Object(j.a)(D,2),K=H[0],Q=H[1];Object(a.useEffect)((function(){U(m),U(p),V()}),[P,c]);var U=function(e){(c[0]===e&&c[1]===e&&c[2]===e||c[3]===e&&c[4]===e&&c[5]===e||c[6]===e&&c[7]===e&&c[8]===e||c[0]===e&&c[3]===e&&c[6]===e||c[1]===e&&c[4]===e&&c[7]===e||c[2]===e&&c[5]===e&&c[8]===e||c[0]===e&&c[4]===e&&c[8]===e||c[2]===e&&c[4]===e&&c[6]===e)&&(console.log(e," is win!"),w(e),F(3))},V=function(){var e=!1;c.map((function(t,c){t===c&&(e=!0)})),e||(console.log("its draw"),B(!0),F(3))},Z=function(){return Math.floor(9*Math.random())+0},$=function(e){var t=!0;return c.map((function(c,n){e===n&&c!==n&&(t=!1)})),t},ee=function(e){if(Q(!0),null===C&&!W){var t=Object(s.a)(c);if("friend"===b)e===t[e]?(t[e]=P,i(t),P===m&&G(p),P===p&&G(m)):console.log("whoops cell already clicked");else if(U(m),U(p),P===p&&(U(m),U(p)),P===m)if(e===t[e])G(p),t[e]=P,i(t),t[function(){var e=Z();for(console.log("random cell: ",e);!1===$(e);)e=Z();return console.log("do new move at "+e+" by "+p),e}()]=p,G(m)}},te=function(){w(null),x(null),y(null),d(null),B(!1),i(Array.from(Array(9).keys())),F(0)},ce=function(){w(null),B(!1),i(Array.from(Array(9).keys())),F(2),G(m),Q(!1)};return Object(n.jsxs)(u,{children:[!1,Object(n.jsx)(k,{step:I,mode:b,isModeEmpty:q.mode,selectMode:function(){b?(q.mode&&z(Object(o.a)(Object(o.a)({},q),{},{mode:!1})),F(1)):z(Object(o.a)(Object(o.a)({},q),{},{mode:!0}))},changeMode:function(e){d(e.target.value)}}),Object(n.jsx)(_,{step:I,firstPlayer:m,isPlayerEmpty:q.player,mode:b,selectPlayer:function(){m?(q.player&&z(Object(o.a)(Object(o.a)({},q),{},{player:!1})),G(m),F(2)):z(Object(o.a)(Object(o.a)({},q),{},{player:!0}))},changePlayer:function(e){return x((t=e).target.value),void("X"===t.target.value?y("0"):"0"===t.target.value&&y("X"));var t}}),Object(n.jsx)(g,{step:I,cells:c,clickCell:function(e){return ee(e)},restartGame:te,tryAgain:ce,winner:C,draw:W,move:P,isGameStarted:K}),Object(n.jsx)(M,{step:I,winner:C,draw:W,restartGame:te,tryAgain:ce})]})}),P=(c(33),function(){return Object(n.jsx)(T,{})});l.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(P,{})}),document.getElementById("app"))}],[[34,1,2]]]);
//# sourceMappingURL=main.24eb1b6a.chunk.js.map