import{s as O,n as E}from"../chunks/scheduler.kxxSm4ns.js";import{S as T,i as G,g as y,s as b,e as D,F as I,h as w,f as _,c as C,k as B,z as g,a as d,d as q,t as A,A as S,m as k,r as H,j as J,n as v,u as M,v as j,o as F,w as x}from"../chunks/index.mQ04AhJc.js";import{a as L,P as K}from"../chunks/Pagination.4WQnVKXj.js";import{p as z,c as N}from"../chunks/config.NB1STINV.js";function Q(l){let e,r="Oops!",m,o,i="Sorry, no posts to show here.",p,a,h="Back to blog";return{c(){e=y("h1"),e.textContent=r,m=b(),o=y("p"),o.textContent=i,p=b(),a=y("a"),a.textContent=h,this.h()},l(n){e=w(n,"H1",{"data-svelte-h":!0}),S(e)!=="svelte-1u3vn74"&&(e.textContent=r),m=C(n),o=w(n,"P",{"data-svelte-h":!0}),S(o)!=="svelte-gl524b"&&(o.textContent=i),p=C(n),a=w(n,"A",{href:!0,"data-svelte-h":!0}),S(a)!=="svelte-1qcn6gf"&&(a.textContent=h),this.h()},h(){B(a,"href","/blog")},m(n,c){d(n,e,c),d(n,m,c),d(n,o,c),d(n,p,c),d(n,a,c)},p:E,i:E,o:E,d(n){n&&(_(e),_(m),_(o),_(p),_(a))}}}function R(l){let e,r,m,o,i,p,a,h,n,c,s,u,$,P;return n=new L({props:{currentPage:l[2],totalPosts:l[3]}}),s=new K({props:{posts:l[4]}}),$=new L({props:{currentPage:l[2],totalPosts:l[3]}}),{c(){e=y("h1"),r=k("Posts "),m=k(l[1]),o=k("–"),i=k(l[0]),p=k(" of "),a=k(l[3]),h=b(),H(n.$$.fragment),c=b(),H(s.$$.fragment),u=b(),H($.$$.fragment)},l(t){e=w(t,"H1",{});var f=J(e);r=v(f,"Posts "),m=v(f,l[1]),o=v(f,"–"),i=v(f,l[0]),p=v(f," of "),a=v(f,l[3]),f.forEach(_),h=C(t),M(n.$$.fragment,t),c=C(t),M(s.$$.fragment,t),u=C(t),M($.$$.fragment,t)},m(t,f){d(t,e,f),g(e,r),g(e,m),g(e,o),g(e,i),g(e,p),g(e,a),d(t,h,f),j(n,t,f),d(t,c,f),j(s,t,f),d(t,u,f),j($,t,f),P=!0},p(t,f){(!P||f&2)&&F(m,t[1]),(!P||f&1)&&F(i,t[0])},i(t){P||(q(n.$$.fragment,t),q(s.$$.fragment,t),q($.$$.fragment,t),P=!0)},o(t){A(n.$$.fragment,t),A(s.$$.fragment,t),A($.$$.fragment,t),P=!1},d(t){t&&(_(e),_(h),_(c),_(u)),x(n,t),x(s,t),x($,t)}}}function U(l){let e,r,m,o,i,p,a;document.title=e="Blog - page "+l[2];const h=[R,Q],n=[];function c(s,u){return s[4].length?0:1}return o=c(l),i=n[o]=h[o](l),{c(){r=y("meta"),m=b(),i.c(),p=D(),this.h()},l(s){const u=I("svelte-19tq2vo",document.head);r=w(u,"META",{"data-key":!0,name:!0,content:!0}),u.forEach(_),m=C(s),i.l(s),p=D(),this.h()},h(){B(r,"data-key","description"),B(r,"name","description"),B(r,"content",N)},m(s,u){g(document.head,r),d(s,m,u),n[o].m(s,u),d(s,p,u),a=!0},p(s,[u]){(!a||u&4)&&e!==(e="Blog - page "+s[2])&&(document.title=e),i.p(s,u)},i(s){a||(q(i),a=!0)},o(s){A(i),a=!1},d(s){s&&(_(m),_(p)),_(r),n[o].d(s)}}}function V(l,e,r){let m,o,{data:i}=e;const{page:p,totalPosts:a,posts:h}=i;return l.$$set=n=>{"data"in n&&r(5,i=n.data)},r(1,m=p*z-(z-1)||1),r(0,o=Math.min(p*z,a)),[o,m,p,a,h,i]}class tt extends T{constructor(e){super(),G(this,e,V,U,O,{data:5})}}export{tt as component};
