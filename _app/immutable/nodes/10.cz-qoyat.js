import{s as L,n as E}from"../chunks/scheduler.kxxSm4ns.js";import{S as O,i as T,g as C,s as v,e as z,F as G,h as w,f as _,c as y,k as x,z as d,a as g,d as B,t as A,A as S,m as k,r as q,j as I,n as b,u as H,v as M,o as D,w as j}from"../chunks/index.mQ04AhJc.js";import{a as F,P as J}from"../chunks/Pagination.4WQnVKXj.js";import{c as K}from"../chunks/config.NB1STINV.js";function N(l){let e,f="Oops!",m,o,r="Sorry, no posts to show here.",p,n,h="Back to blog";return{c(){e=C("h1"),e.textContent=f,m=v(),o=C("p"),o.textContent=r,p=v(),n=C("a"),n.textContent=h,this.h()},l(s){e=w(s,"H1",{"data-svelte-h":!0}),S(e)!=="svelte-1u3vn74"&&(e.textContent=f),m=y(s),o=w(s,"P",{"data-svelte-h":!0}),S(o)!=="svelte-gl524b"&&(o.textContent=r),p=y(s),n=w(s,"A",{href:!0,"data-svelte-h":!0}),S(n)!=="svelte-1qcn6gf"&&(n.textContent=h),this.h()},h(){x(n,"href","/blog")},m(s,c){g(s,e,c),g(s,m,c),g(s,o,c),g(s,p,c),g(s,n,c)},p:E,i:E,o:E,d(s){s&&(_(e),_(m),_(o),_(p),_(n))}}}function Q(l){let e,f,m,o,r,p,n,h,s,c,a,u,$,P;return s=new F({props:{currentPage:l[2],totalPosts:l[3]}}),a=new J({props:{posts:l[4]}}),$=new F({props:{currentPage:l[2],totalPosts:l[3]}}),{c(){e=C("h1"),f=k("Posts "),m=k(l[1]),o=k("–"),r=k(l[0]),p=k(" of "),n=k(l[3]),h=v(),q(s.$$.fragment),c=v(),q(a.$$.fragment),u=v(),q($.$$.fragment)},l(t){e=w(t,"H1",{});var i=I(e);f=b(i,"Posts "),m=b(i,l[1]),o=b(i,"–"),r=b(i,l[0]),p=b(i," of "),n=b(i,l[3]),i.forEach(_),h=y(t),H(s.$$.fragment,t),c=y(t),H(a.$$.fragment,t),u=y(t),H($.$$.fragment,t)},m(t,i){g(t,e,i),d(e,f),d(e,m),d(e,o),d(e,r),d(e,p),d(e,n),g(t,h,i),M(s,t,i),g(t,c,i),M(a,t,i),g(t,u,i),M($,t,i),P=!0},p(t,i){(!P||i&2)&&D(m,t[1]),(!P||i&1)&&D(r,t[0])},i(t){P||(B(s.$$.fragment,t),B(a.$$.fragment,t),B($.$$.fragment,t),P=!0)},o(t){A(s.$$.fragment,t),A(a.$$.fragment,t),A($.$$.fragment,t),P=!1},d(t){t&&(_(e),_(h),_(c),_(u)),j(s,t),j(a,t),j($,t)}}}function R(l){let e,f,m,o,r,p,n;document.title=e="Blog category - page "+l[2];const h=[Q,N],s=[];function c(a,u){return a[4].length?0:1}return o=c(l),r=s[o]=h[o](l),{c(){f=C("meta"),m=v(),r.c(),p=z(),this.h()},l(a){const u=G("svelte-1336hm3",document.head);f=w(u,"META",{"data-key":!0,name:!0}),u.forEach(_),m=y(a),r.l(a),p=z(),this.h()},h(){x(f,"data-key","description"),x(f,"name",K)},m(a,u){d(document.head,f),g(a,m,u),s[o].m(a,u),g(a,p,u),n=!0},p(a,[u]){(!n||u&4)&&e!==(e="Blog category - page "+a[2])&&(document.title=e),r.p(a,u)},i(a){n||(B(r),n=!0)},o(a){A(r),n=!1},d(a){a&&(_(m),_(p)),_(f),s[o].d(a)}}}function U(l,e,f){let m,o,{data:r}=e;const{page:p,totalPosts:n,posts:h}=r;return l.$$set=s=>{"data"in s&&f(5,r=s.data)},f(1,m=p*postsPerPage-(postsPerPage-1)||1),f(0,o=Math.min(p*postsPerPage,n)),[o,m,p,n,h,r]}class Z extends O{constructor(e){super(),T(this,e,U,R,L,{data:5})}}export{Z as component};
