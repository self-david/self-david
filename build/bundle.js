var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function s(e){e.forEach(t)}function r(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let c,l;function i(e,t,n,s){return e[1]&&s?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](s(t))):n.ctx}function a(e){return null==e?"":e}function u(e,t){e.appendChild(t)}function f(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode&&e.parentNode.removeChild(e)}function $(e){return document.createElement(e)}function p(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function m(e){return document.createTextNode(e)}function h(){return m(" ")}function g(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function v(e){l=e}function x(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach((e=>e.call(this,t)))}const w=[],y=[];let b=[];const k=[],z=Promise.resolve();let _=!1;function E(e){b.push(e)}const M=new Set;let C=0;function A(){if(0!==C)return;const e=l;do{try{for(;C<w.length;){const e=w[C];C++,v(e),H(e.$$)}}catch(e){throw w.length=0,C=0,e}for(v(null),w.length=0,C=0;y.length;)y.pop()();for(let e=0;e<b.length;e+=1){const t=b[e];M.has(t)||(M.add(t),t())}b.length=0}while(w.length);for(;k.length;)k.pop()();_=!1,M.clear(),v(e)}function H(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(E)}}const j=new Set;let L;function I(e,t){e&&e.i&&(j.delete(e),e.i(t))}function N(e,t,n,s){if(e&&e.o){if(j.has(e))return;j.add(e),L.c.push((()=>{j.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}else s&&s()}function T(e){e&&e.c()}function B(e,n,o,c){const{fragment:l,after_update:i}=e.$$;l&&l.m(n,o),c||E((()=>{const n=e.$$.on_mount.map(t).filter(r);e.$$.on_destroy?e.$$.on_destroy.push(...n):s(n),e.$$.on_mount=[]})),i.forEach(E)}function F(e,t){const n=e.$$;null!==n.fragment&&(!function(e){const t=[],n=[];b.forEach((s=>-1===e.indexOf(s)?t.push(s):n.push(s))),n.forEach((e=>e())),b=t}(n.after_update),s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function S(e,t){-1===e.$$.dirty[0]&&(w.push(e),_||(_=!0,z.then(A)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function G(t,r,o,c,i,a,u,f=[-1]){const $=l;v(t);const p=t.$$={fragment:null,ctx:[],props:a,update:e,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||($?$.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:r.target||$.$$.root};u&&u(p.root);let m=!1;if(p.ctx=o?o(t,r.props||{},((e,n,...s)=>{const r=s.length?s[0]:n;return p.ctx&&i(p.ctx[e],p.ctx[e]=r)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](r),m&&S(t,e)),n})):[],p.update(),m=!0,s(p.before_update),p.fragment=!!c&&c(p.ctx),r.target){if(r.hydrate){const e=function(e){return Array.from(e.childNodes)}(r.target);p.fragment&&p.fragment.l(e),e.forEach(d)}else p.fragment&&p.fragment.c();r.intro&&I(t.$$.fragment),B(t,r.target,r.anchor,r.customElement),A()}v($)}class O{$destroy(){F(this,1),this.$destroy=e}$on(t,n){if(!r(n))return e;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const e=s.indexOf(n);-1!==e&&s.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function D(e){let t,n,s,r,o;const c=e[2].default,l=function(e,t,n,s){if(e){const r=i(e,t,n,s);return e[0](r)}}(c,e,e[1],null);return{c(){t=$("button"),l&&l.c(),g(t,"class",n=a(e[0])+" svelte-f263ym")},m(n,c){var i,a,u,d;f(n,t,c),l&&l.m(t,null),s=!0,r||(i=t,a="click",u=e[3],i.addEventListener(a,u,d),o=()=>i.removeEventListener(a,u,d),r=!0)},p(e,[r]){l&&l.p&&(!s||2&r)&&function(e,t,n,s,r,o){if(r){const c=i(t,n,s,o);e.p(c,r)}}(l,c,e,e[1],s?function(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|r[s];return e}return t.dirty|r}return t.dirty}(c,e[1],r,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[1]),null),(!s||1&r&&n!==(n=a(e[0])+" svelte-f263ym"))&&g(t,"class",n)},i(e){s||(I(l,e),s=!0)},o(e){N(l,e),s=!1},d(e){e&&d(t),l&&l.d(e),r=!1,o()}}}function V(e,t,n){let{$$slots:s={},$$scope:r}=t,{size:o="medium"}=t;return e.$$set=e=>{"size"in e&&n(0,o=e.size),"$$scope"in e&&n(1,r=e.$$scope)},[o,r,s,function(t){x.call(this,e,t)}]}class q extends O{constructor(e){super(),G(this,e,V,D,o,{size:0})}}function P(t){let n,s,r,o,c;return{c(){n=p("svg"),s=p("title"),r=m("Mail Icon"),o=p("rect"),c=p("path"),g(o,"width","20"),g(o,"height","16"),g(o,"x","2"),g(o,"y","4"),g(o,"rx","2"),g(c,"d","m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"),g(n,"xmlns","http://www.w3.org/2000/svg"),g(n,"width","16"),g(n,"height","16"),g(n,"viewBox","0 0 24 24"),g(n,"fill","none"),g(n,"stroke","currentColor"),g(n,"stroke-width","2"),g(n,"stroke-linecap","round"),g(n,"stroke-linejoin","round"),g(n,"class","lucide lucide-mail size-4")},m(e,t){f(e,n,t),u(n,s),u(s,r),u(n,o),u(n,c)},p:e,i:e,o:e,d(e){e&&d(n)}}}class U extends O{constructor(e){super(),G(this,e,null,P,o,{})}}function Q(t){let n,s,r,o;return{c(){n=p("svg"),s=p("title"),r=m("LinkedIn"),o=p("path"),g(o,"fill","currentColor"),g(o,"d","M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"),g(n,"height","16"),g(n,"width","16"),g(n,"viewBox","0 0 24 24"),g(n,"xmlns","http://www.w3.org/2000/svg")},m(e,t){f(e,n,t),u(n,s),u(s,r),u(n,o)},p:e,i:e,o:e,d(e){e&&d(n)}}}class X extends O{constructor(e){super(),G(this,e,null,Q,o,{})}}function J(t){let n,s,r,o;return{c(){n=p("svg"),s=p("title"),r=m("GitHub"),o=p("path"),g(o,"fill","currentColor"),g(o,"d","M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"),g(n,"width","16"),g(n,"height","16"),g(n,"viewBox","0 0 24 24"),g(n,"xmlns","http://www.w3.org/2000/svg")},m(e,t){f(e,n,t),u(n,s),u(s,r),u(n,o)},p:e,i:e,o:e,d(e){e&&d(n)}}}class K extends O{constructor(e){super(),G(this,e,null,J,o,{})}}function R(e){let t;return{c(){t=m("Disponible")},m(e,n){f(e,t,n)},d(e){e&&d(t)}}}function W(e){let t;return{c(){t=m("Abierto a Freelance")},m(e,n){f(e,t,n)},d(e){e&&d(t)}}}function Y(e){let t,n,s;return t=new U({}),{c(){T(t.$$.fragment),n=m(" Correo")},m(e,r){B(t,e,r),f(e,n,r),s=!0},i(e){s||(I(t.$$.fragment,e),s=!0)},o(e){N(t.$$.fragment,e),s=!1},d(e){F(t,e),e&&d(n)}}}function Z(e){let t,n,s;return t=new X({}),{c(){T(t.$$.fragment),n=m(" LinkedIn")},m(e,r){B(t,e,r),f(e,n,r),s=!0},i(e){s||(I(t.$$.fragment,e),s=!0)},o(e){N(t.$$.fragment,e),s=!1},d(e){F(t,e),e&&d(n)}}}function ee(e){let t,n,s;return t=new K({}),{c(){T(t.$$.fragment),n=m(" Github")},m(e,r){B(t,e,r),f(e,n,r),s=!0},i(e){s||(I(t.$$.fragment,e),s=!0)},o(e){N(t.$$.fragment,e),s=!1},d(e){F(t,e),e&&d(n)}}}function te(e){let t,n,s,r,o,l,i,a,p,m,v,x,w,y,b,k,z,_;return l=new q({props:{size:"small",$$slots:{default:[R]},$$scope:{ctx:e}}}),l.$on("click",e[1]),a=new q({props:{size:"small",$$slots:{default:[W]},$$scope:{ctx:e}}}),a.$on("click",e[2]),w=new q({props:{$$slots:{default:[Y]},$$scope:{ctx:e}}}),w.$on("click",e[3]),b=new q({props:{$$slots:{default:[Z]},$$scope:{ctx:e}}}),b.$on("click",e[4]),z=new q({props:{$$slots:{default:[ee]},$$scope:{ctx:e}}}),z.$on("click",e[5]),{c(){var e,u;t=$("div"),n=$("div"),s=$("img"),o=h(),T(l.$$.fragment),i=h(),T(a.$$.fragment),p=h(),m=$("div"),m.innerHTML='<p class="say svelte-11xveze">¡Hola! mi nombre es</p> \n    <h1 class="svelte-11xveze">David Gutiérrez Alvarez</h1> \n    <p class="desc svelte-11xveze"><span class="highlighted svelte-11xveze">Desarrollador front-end</span> con <span class="highlighted svelte-11xveze">3 años de experiencia</span>, especializado en crear interfaces intuitivas y funcionales. Apasionado por mejorar la experiencia del usuario con soluciones técnicas innovadoras.</p>',v=h(),x=$("div"),T(w.$$.fragment),y=h(),T(b.$$.fragment),k=h(),T(z.$$.fragment),e=s.src,u=r="./profile.jpg",c||(c=document.createElement("a")),c.href=u,e!==c.href&&g(s,"src","./profile.jpg"),g(s,"alt",""),g(s,"class","svelte-11xveze"),g(n,"class","resume-header svelte-11xveze"),g(x,"class","resume-links svelte-11xveze"),g(t,"class","resume svelte-11xveze")},m(e,r){f(e,t,r),u(t,n),u(n,s),u(n,o),B(l,n,null),u(n,i),B(a,n,null),u(t,p),u(t,m),u(t,v),u(t,x),B(w,x,null),u(x,y),B(b,x,null),u(x,k),B(z,x,null),_=!0},p(e,[t]){const n={};64&t&&(n.$$scope={dirty:t,ctx:e}),l.$set(n);const s={};64&t&&(s.$$scope={dirty:t,ctx:e}),a.$set(s);const r={};64&t&&(r.$$scope={dirty:t,ctx:e}),w.$set(r);const o={};64&t&&(o.$$scope={dirty:t,ctx:e}),b.$set(o);const c={};64&t&&(c.$$scope={dirty:t,ctx:e}),z.$set(c)},i(e){_||(I(l.$$.fragment,e),I(a.$$.fragment,e),I(w.$$.fragment,e),I(b.$$.fragment,e),I(z.$$.fragment,e),_=!0)},o(e){N(l.$$.fragment,e),N(a.$$.fragment,e),N(w.$$.fragment,e),N(b.$$.fragment,e),N(z.$$.fragment,e),_=!1},d(e){e&&d(t),F(l),F(a),F(w),F(b),F(z)}}}function ne(e){const t=e=>window.open(e,"_blank");return[t,()=>t("https://www.linkedin.com/in/self-david"),()=>t("https://www.linkedin.com/in/self-david"),()=>t("mailto:david_xd1996@live.com.mx"),()=>t("https://www.linkedin.com/in/self-david"),()=>t("https://github.com/self-david")]}class se extends O{constructor(e){super(),G(this,e,ne,te,o,{})}}function re(t){let n;return{c(){n=$("div"),n.innerHTML='<h2 class="svelte-sgf17s">Experiencia laboral</h2> \n  <ol class="svelte-sgf17s"><li class="svelte-sgf17s"><div><h4 class="svelte-sgf17s">Buscabot - FrontEnd developer</h4> \n        <p class="svelte-sgf17s">Marzo 2022 - Actualmente</p></div> \n      <span class="svelte-sgf17s">Mi enfoque principal es el desarrollo front-end del sitio web, transformando todo el diseño UI/UX en código y creando la interfaz de usuario, trabajando con el modelo first-mobile.</span></li> \n    <li class="svelte-sgf17s"><div><h4 class="svelte-sgf17s">Hartec - Fullstack</h4> \n        <p class="svelte-sgf17s">Agosto 2021 - Marzo 2022</p></div> \n      <span class="svelte-sgf17s">Mi trabajo consistía en desarrollar aplicaciones para clientes usando C# (. Net) e IIS (ventana) para implementar las aplicaciones.</span></li> \n    <li class="svelte-sgf17s"><div><h4 class="svelte-sgf17s">Geeo - Fullstack</h4> \n        <p class="svelte-sgf17s">Febrero 2019 - Agosto 2019</p></div> \n      <span class="svelte-sgf17s">python y PyQt ...</span></li></ol>',g(n,"class","experiences svelte-sgf17s")},m(e,t){f(e,n,t)},p:e,i:e,o:e,d(e){e&&d(n)}}}class oe extends O{constructor(e){super(),G(this,e,null,re,o,{})}}function ce(t){let n;return{c(){n=$("div"),n.innerHTML='<h2 class="svelte-15a2d2">Habilidades técnicas</h2>\n\n  ...',g(n,"class","experiences")},m(e,t){f(e,n,t)},p:e,i:e,o:e,d(e){e&&d(n)}}}class le extends O{constructor(e){super(),G(this,e,null,ce,o,{})}}function ie(t){let n;return{c(){n=$("div"),n.innerHTML='<h2 class="svelte-15a2d2">Educación y certificados</h2>\n\n  ...',g(n,"class","experiences")},m(e,t){f(e,n,t)},p:e,i:e,o:e,d(e){e&&d(n)}}}class ae extends O{constructor(e){super(),G(this,e,null,ie,o,{})}}function ue(t){let n;return{c(){n=$("div"),n.innerHTML='<h2 class="svelte-15a2d2">Sobre mi</h2>\n\n  ...',g(n,"class","experiences")},m(e,t){f(e,n,t)},p:e,i:e,o:e,d(e){e&&d(n)}}}class fe extends O{constructor(e){super(),G(this,e,null,ue,o,{})}}function de(e,t,n){const s=e.slice();return s[1]=t[n],s}function $e(t){let n,s,r=t[1]+"";return{c(){n=$("p"),s=m(r)},m(e,t){f(e,n,t),u(n,s)},p:e,d(e){e&&d(n)}}}function pe(e){let t,n,s,r,o,c,l,i,a,p,m,v,x;t=new se({}),r=new oe({}),c=new le({}),i=new ae({}),p=new fe({});let w=[...Array(50).keys()],y=[];for(let t=0;t<w.length;t+=1)y[t]=$e(de(e,w,t));return{c(){T(t.$$.fragment),n=h(),s=$("main"),T(r.$$.fragment),o=h(),T(c.$$.fragment),l=h(),T(i.$$.fragment),a=h(),T(p.$$.fragment),m=h(),v=$("div");for(let e=0;e<y.length;e+=1)y[e].c();g(s,"class","svelte-19nmsvo")},m(e,d){B(t,e,d),f(e,n,d),f(e,s,d),B(r,s,null),u(s,o),B(c,s,null),u(s,l),B(i,s,null),u(s,a),B(p,s,null),u(s,m),u(s,v);for(let e=0;e<y.length;e+=1)y[e]&&y[e].m(v,null);x=!0},p(e,[t]){0},i(e){x||(I(t.$$.fragment,e),I(r.$$.fragment,e),I(c.$$.fragment,e),I(i.$$.fragment,e),I(p.$$.fragment,e),x=!0)},o(e){N(t.$$.fragment,e),N(r.$$.fragment,e),N(c.$$.fragment,e),N(i.$$.fragment,e),N(p.$$.fragment,e),x=!1},d(e){F(t,e),e&&d(n),e&&d(s),F(r),F(c),F(i),F(p),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(y,e)}}}function me(e){window.geofeed=e=>window.geolocation=e;var t=document.createElement("script");return t.setAttribute("src","https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location/geofeed"),document.head.appendChild(t),[]}return new class extends O{constructor(e){super(),G(this,e,me,pe,o,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
