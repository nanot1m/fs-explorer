(this["webpackJsonpfs-explorer"]=this["webpackJsonpfs-explorer"]||[]).push([[0],{84:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(67),s=n.n(a),i=(n(84),n(18)),u=n.n(i),o=n(30),j=n(31),b=n(2),l=n(50),p=n(107),f=n(118),x=n(116),d=n(110),h=n(111),O=n(112),m=n(113),k=n(117),v=n(114),y=n(29),w=n(68);function g(){return(g=Object(j.a)(u.a.mark((function e(t){var n,r,c,a,s,i,o,j;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],r=!0,c=!1,e.prev=3,s=Object(w.a)(t.values());case 5:return e.next=7,s.next();case 7:return i=e.sent,r=i.done,e.next=11,i.value;case 11:if(o=e.sent,r){e.next=18;break}j=o,n.push(j);case 15:r=!0,e.next=5;break;case 18:e.next=24;break;case 20:e.prev=20,e.t0=e.catch(3),c=!0,a=e.t0;case 24:if(e.prev=24,e.prev=25,r||null==s.return){e.next=29;break}return e.next=29,s.return();case 29:if(e.prev=29,!c){e.next=32;break}throw a;case 32:return e.finish(29);case 33:return e.finish(24);case 34:return e.abrupt("return",n);case 35:case"end":return e.stop()}}),e,null,[[3,20,24,34],[25,,29,33]])})))).apply(this,arguments)}var I=n(5),C=function(e,t){return e.kind===t.kind?e.name.toLowerCase()>t.name.toLowerCase()?1:-1:"directory"===e.kind?-1:1},P=Object(r.memo)((function e(t){var n=t.handle,c=t.initialIsExpanded,a=Object(r.useState)(Array()),s=Object(b.a)(a,2),i=s[0],u=s[1],o=Object(p.a)({isOpen:c}),j=o.isOpen,l=o.onToggle;return Object(r.useEffect)((function(){var e=!1;return"directory"===n.kind&&function(e){return g.apply(this,arguments)}(n).then((function(t){e||u(t)})),function(){e=!0}}),[n]),Object(I.jsxs)(f.b,{mt:1,children:["directory"===n.kind?Object(I.jsx)(x.a,{variant:"outline",onClick:l,leftIcon:Object(I.jsx)(y.c,{}),size:"xs",children:n.name}):Object(I.jsx)(x.a,{variant:"outline",leftIcon:Object(I.jsx)(y.b,{}),size:"xs",children:n.name}),j&&Object(I.jsx)(f.a,{ml:6,spacing:1,children:i.length>0?i.slice().sort(C).map((function(t){return Object(I.jsx)(e,{handle:t},t.name)})):Object(I.jsx)(d.a,{fontSize:"xs",color:"gray.500",children:"empty"})})]})}));function S(e,t){return E.apply(this,arguments)}function E(){return(E=Object(j.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={mode:n?"readwrite":"read"},e.next=3,t.queryPermission(r);case 3:if(e.t0=e.sent,"granted"!==e.t0){e.next=6;break}return e.abrupt("return",!0);case 6:return e.next=8,t.requestPermission(r);case 8:if(e.t1=e.sent,"granted"!==e.t1){e.next=11;break}return e.abrupt("return",!0);case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z="recentProjects";var F=function(){var e=Object(r.useState)(Array()),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(),s=Object(b.a)(a,2),i=s[0],p=s[1];function d(e){return w.apply(this,arguments)}function w(){return(w=Object(j.a)(u.a.mark((function e(t){var n,r,a,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(t),e.next=3,Object(l.a)(z);case 3:if(n=e.sent,r=[t],!n){e.next=26;break}a=Object(o.a)(n),e.prev=7,a.s();case 9:if((s=a.n()).done){e.next=18;break}return i=s.value,e.next=13,i.isSameEntry(t);case 13:if(!e.sent){e.next=15;break}return e.abrupt("continue",16);case 15:r.push(i);case 16:e.next=9;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(7),a.e(e.t0);case 23:return e.prev=23,a.f(),e.finish(23);case 26:return e.next=28,Object(l.b)(z,r);case 28:c(r);case 29:case"end":return e.stop()}}),e,null,[[7,20,23,26]])})))).apply(this,arguments)}function g(){window.showDirectoryPicker().then(d)}return Object(r.useEffect)((function(){Object(l.a)(z).then((function(e){c(null!==e&&void 0!==e?e:[])}),console.error)}),[]),i?Object(I.jsxs)(h.a,{py:10,children:[Object(I.jsx)(x.a,{leftIcon:Object(I.jsx)(y.d,{}),onClick:g,children:"Open project"}),Object(I.jsxs)(v.a,{children:[Object(I.jsx)(v.b,{as:x.a,rightIcon:Object(I.jsx)(y.a,{}),ml:4,children:"Recent projects"}),Object(I.jsx)(v.d,{children:n.map((function(e){return Object(I.jsx)(v.c,{onClick:function(){return C(e)},children:e.name},e.name)}))})]}),Object(I.jsx)(f.a,{my:4,children:Object(I.jsx)(P,{handle:i,initialIsExpanded:!0})})]}):Object(I.jsxs)(h.a,{py:10,children:[Object(I.jsx)(x.a,{leftIcon:Object(I.jsx)(y.d,{}),onClick:g,children:"Open project"}),Object(I.jsx)(O.a,{my:4}),Object(I.jsx)(m.a,{size:"md",mb:2,children:"Recent Projects"}),Object(I.jsx)(k.a,{isInline:!0,children:n.map((function(e){return Object(I.jsx)(x.a,{leftIcon:Object(I.jsx)(y.c,{}),onClick:function(){C(e)},children:e.name},e.name)}))})]});function C(e){return E.apply(this,arguments)}function E(){return(E=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t,!0);case 2:e.sent&&d(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,119)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))},T=n(115);s.a.render(Object(I.jsx)(c.a.StrictMode,{children:Object(I.jsx)(T.a,{children:Object(I.jsx)(F,{})})}),document.getElementById("root")),L()}},[[91,1,2]]]);
//# sourceMappingURL=main.73222436.chunk.js.map