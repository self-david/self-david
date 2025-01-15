var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function s(e){e.forEach(t)}function o(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let c,l;function a(e,t){return c||(c=document.createElement("a")),c.href=t,e===c.href}function i(e,t,n,s){return e[1]&&s?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](s(t))):n.ctx}function d(e){return null==e?"":e}function u(e,t){e.appendChild(t)}function f(e,t,n){e.insertBefore(t,n||null)}function $(e){e.parentNode&&e.parentNode.removeChild(e)}function p(e){return document.createElement(e)}function m(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function g(e){return document.createTextNode(e)}function h(){return g(" ")}function v(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function x(e){l=e}function w(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach((e=>e.call(this,t)))}const b=[],y=[];let k=[];const z=[],_=Promise.resolve();let C=!1;function E(e){k.push(e)}const M=new Set;let H=0;function L(){if(0!==H)return;const e=l;do{try{for(;H<b.length;){const e=b[H];H++,x(e),j(e.$$)}}catch(e){throw b.length=0,H=0,e}for(x(null),b.length=0,H=0;y.length;)y.pop()();for(let e=0;e<k.length;e+=1){const t=k[e];M.has(t)||(M.add(t),t())}k.length=0}while(b.length);for(;z.length;)z.pop()();C=!1,M.clear(),x(e)}function j(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(E)}}const A=new Set;let S;function T(e,t){e&&e.i&&(A.delete(e),e.i(t))}function I(e,t,n,s){if(e&&e.o){if(A.has(e))return;A.add(e),S.c.push((()=>{A.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}else s&&s()}function G(e){e&&e.c()}function N(e,n,r,c){const{fragment:l,after_update:a}=e.$$;l&&l.m(n,r),c||E((()=>{const n=e.$$.on_mount.map(t).filter(o);e.$$.on_destroy?e.$$.on_destroy.push(...n):s(n),e.$$.on_mount=[]})),a.forEach(E)}function P(e,t){const n=e.$$;null!==n.fragment&&(!function(e){const t=[],n=[];k.forEach((s=>-1===e.indexOf(s)?t.push(s):n.push(s))),n.forEach((e=>e())),k=t}(n.after_update),s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function q(e,t){-1===e.$$.dirty[0]&&(b.push(e),C||(C=!0,_.then(L)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function B(t,o,r,c,a,i,d,u=[-1]){const f=l;x(t);const p=t.$$={fragment:null,ctx:[],props:i,update:e,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(f?f.$$.context:[])),callbacks:n(),dirty:u,skip_bound:!1,root:o.target||f.$$.root};d&&d(p.root);let m=!1;if(p.ctx=r?r(t,o.props||{},((e,n,...s)=>{const o=s.length?s[0]:n;return p.ctx&&a(p.ctx[e],p.ctx[e]=o)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](o),m&&q(t,e)),n})):[],p.update(),m=!0,s(p.before_update),p.fragment=!!c&&c(p.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);p.fragment&&p.fragment.l(e),e.forEach($)}else p.fragment&&p.fragment.c();o.intro&&T(t.$$.fragment),N(t,o.target,o.anchor,o.customElement),L()}x(f)}class D{$destroy(){P(this,1),this.$destroy=e}$on(t,n){if(!o(n))return e;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const e=s.indexOf(n);-1!==e&&s.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function F(e){let t,n,s,o,r;const c=e[2].default,l=function(e,t,n,s){if(e){const o=i(e,t,n,s);return e[0](o)}}(c,e,e[1],null);return{c(){t=p("button"),l&&l.c(),v(t,"class",n=d(e[0])+" svelte-f263ym")},m(n,c){var a,i,d,u;f(n,t,c),l&&l.m(t,null),s=!0,o||(a=t,i="click",d=e[3],a.addEventListener(i,d,u),r=()=>a.removeEventListener(i,d,u),o=!0)},p(e,[o]){l&&l.p&&(!s||2&o)&&function(e,t,n,s,o,r){if(o){const c=i(t,n,s,r);e.p(c,o)}}(l,c,e,e[1],s?function(e,t,n,s){if(e[2]&&s){const o=e[2](s(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|o[s];return e}return t.dirty|o}return t.dirty}(c,e[1],o,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[1]),null),(!s||1&o&&n!==(n=d(e[0])+" svelte-f263ym"))&&v(t,"class",n)},i(e){s||(T(l,e),s=!0)},o(e){I(l,e),s=!1},d(e){e&&$(t),l&&l.d(e),o=!1,r()}}}function O(e,t,n){let{$$slots:s={},$$scope:o}=t,{size:r="medium"}=t;return e.$$set=e=>{"size"in e&&n(0,r=e.size),"$$scope"in e&&n(1,o=e.$$scope)},[r,o,s,function(t){w.call(this,e,t)}]}class R extends D{constructor(e){super(),B(this,e,O,F,r,{size:0})}}function U(t){let n,s,o,r,c;return{c(){n=m("svg"),s=m("title"),o=g("Mail Icon"),r=m("rect"),c=m("path"),v(r,"width","20"),v(r,"height","16"),v(r,"x","2"),v(r,"y","4"),v(r,"rx","2"),v(c,"d","m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"),v(n,"xmlns","http://www.w3.org/2000/svg"),v(n,"width","16"),v(n,"height","16"),v(n,"viewBox","0 0 24 24"),v(n,"fill","none"),v(n,"stroke","currentColor"),v(n,"stroke-width","2"),v(n,"stroke-linecap","round"),v(n,"stroke-linejoin","round"),v(n,"class","lucide lucide-mail size-4")},m(e,t){f(e,n,t),u(n,s),u(s,o),u(n,r),u(n,c)},p:e,i:e,o:e,d(e){e&&$(n)}}}class V extends D{constructor(e){super(),B(this,e,null,U,r,{})}}function J(t){let n,s,o,r;return{c(){n=m("svg"),s=m("title"),o=g("LinkedIn"),r=m("path"),v(r,"fill","currentColor"),v(r,"d","M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"),v(n,"height","16"),v(n,"width","16"),v(n,"viewBox","0 0 24 24"),v(n,"xmlns","http://www.w3.org/2000/svg")},m(e,t){f(e,n,t),u(n,s),u(s,o),u(n,r)},p:e,i:e,o:e,d(e){e&&$(n)}}}class X extends D{constructor(e){super(),B(this,e,null,J,r,{})}}function K(t){let n,s,o,r;return{c(){n=m("svg"),s=m("title"),o=g("GitHub"),r=m("path"),v(r,"fill","currentColor"),v(r,"d","M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"),v(n,"width","16"),v(n,"height","16"),v(n,"viewBox","0 0 24 24"),v(n,"xmlns","http://www.w3.org/2000/svg")},m(e,t){f(e,n,t),u(n,s),u(s,o),u(n,r)},p:e,i:e,o:e,d(e){e&&$(n)}}}class Q extends D{constructor(e){super(),B(this,e,null,K,r,{})}}function W(e){let t;return{c(){t=g("Disponible")},m(e,n){f(e,t,n)},d(e){e&&$(t)}}}function Y(e){let t;return{c(){t=g("Abierto a Freelance")},m(e,n){f(e,t,n)},d(e){e&&$(t)}}}function Z(e){let t,n,s;return t=new V({}),{c(){G(t.$$.fragment),n=g(" Correo")},m(e,o){N(t,e,o),f(e,n,o),s=!0},i(e){s||(T(t.$$.fragment,e),s=!0)},o(e){I(t.$$.fragment,e),s=!1},d(e){P(t,e),e&&$(n)}}}function ee(e){let t,n,s;return t=new X({}),{c(){G(t.$$.fragment),n=g(" LinkedIn")},m(e,o){N(t,e,o),f(e,n,o),s=!0},i(e){s||(T(t.$$.fragment,e),s=!0)},o(e){I(t.$$.fragment,e),s=!1},d(e){P(t,e),e&&$(n)}}}function te(e){let t,n,s;return t=new Q({}),{c(){G(t.$$.fragment),n=g(" Github")},m(e,o){N(t,e,o),f(e,n,o),s=!0},i(e){s||(T(t.$$.fragment,e),s=!0)},o(e){I(t.$$.fragment,e),s=!1},d(e){P(t,e),e&&$(n)}}}function ne(e){let t,n,s,o,r,c,l,i,d,m,g,x,w,b,y,k,z,_;return c=new R({props:{size:"small",$$slots:{default:[W]},$$scope:{ctx:e}}}),c.$on("click",e[1]),i=new R({props:{size:"small",$$slots:{default:[Y]},$$scope:{ctx:e}}}),i.$on("click",e[2]),w=new R({props:{$$slots:{default:[Z]},$$scope:{ctx:e}}}),w.$on("click",e[3]),y=new R({props:{$$slots:{default:[ee]},$$scope:{ctx:e}}}),y.$on("click",e[4]),z=new R({props:{$$slots:{default:[te]},$$scope:{ctx:e}}}),z.$on("click",e[5]),{c(){t=p("div"),n=p("div"),s=p("img"),r=h(),G(c.$$.fragment),l=h(),G(i.$$.fragment),d=h(),m=p("div"),m.innerHTML='<p class="say svelte-11xveze">¡Hola! mi nombre es</p> \n    <h1 class="svelte-11xveze">David Gutiérrez Alvarez</h1> \n    <p class="desc svelte-11xveze"><span class="highlighted svelte-11xveze">Desarrollador front-end</span> con <span class="highlighted svelte-11xveze">3 años de experiencia</span>, especializado en crear interfaces intuitivas y funcionales. Apasionado por mejorar la experiencia del usuario con soluciones técnicas innovadoras.</p>',g=h(),x=p("div"),G(w.$$.fragment),b=h(),G(y.$$.fragment),k=h(),G(z.$$.fragment),a(s.src,o="./profile.jpg")||v(s,"src","./profile.jpg"),v(s,"alt",""),v(s,"class","svelte-11xveze"),v(n,"class","resume-header svelte-11xveze"),v(x,"class","resume-links svelte-11xveze"),v(t,"class","resume svelte-11xveze")},m(e,o){f(e,t,o),u(t,n),u(n,s),u(n,r),N(c,n,null),u(n,l),N(i,n,null),u(t,d),u(t,m),u(t,g),u(t,x),N(w,x,null),u(x,b),N(y,x,null),u(x,k),N(z,x,null),_=!0},p(e,[t]){const n={};64&t&&(n.$$scope={dirty:t,ctx:e}),c.$set(n);const s={};64&t&&(s.$$scope={dirty:t,ctx:e}),i.$set(s);const o={};64&t&&(o.$$scope={dirty:t,ctx:e}),w.$set(o);const r={};64&t&&(r.$$scope={dirty:t,ctx:e}),y.$set(r);const l={};64&t&&(l.$$scope={dirty:t,ctx:e}),z.$set(l)},i(e){_||(T(c.$$.fragment,e),T(i.$$.fragment,e),T(w.$$.fragment,e),T(y.$$.fragment,e),T(z.$$.fragment,e),_=!0)},o(e){I(c.$$.fragment,e),I(i.$$.fragment,e),I(w.$$.fragment,e),I(y.$$.fragment,e),I(z.$$.fragment,e),_=!1},d(e){e&&$(t),P(c),P(i),P(w),P(y),P(z)}}}function se(e){const t=e=>window.open(e,"_blank");return[t,()=>t("https://www.linkedin.com/in/self-david"),()=>t("https://www.linkedin.com/in/self-david"),()=>t("mailto:david_xd1996@live.com.mx"),()=>t("https://www.linkedin.com/in/self-david"),()=>t("https://github.com/self-david")]}class oe extends D{constructor(e){super(),B(this,e,se,ne,r,{})}}function re(t){let n;return{c(){n=p("div"),n.innerHTML='<h2 class="svelte-sgf17s">Experiencia laboral</h2> \n  <ol class="svelte-sgf17s"><li class="svelte-sgf17s"><div><h4 class="svelte-sgf17s">Buscabot - FrontEnd developer</h4> \n        <p class="svelte-sgf17s">Marzo 2022 - Junio 2024</p></div> \n      <span class="svelte-sgf17s">Mi enfoque principal es el desarrollo front-end del sitio web, transformando todo el diseño UI/UX en código y creando la interfaz de usuario, trabajando con el modelo first-mobile.</span></li> \n    <li class="svelte-sgf17s"><div><h4 class="svelte-sgf17s">Hartec - Fullstack</h4> \n        <p class="svelte-sgf17s">Agosto 2021 - Marzo 2022</p></div> \n      <span class="svelte-sgf17s">Mi trabajo consistía en desarrollar aplicaciones para clientes usando C# (. Net) e IIS (ventana) para implementar las aplicaciones.</span></li> \n    <li class="svelte-sgf17s"><div><h4 class="svelte-sgf17s">Geeo - Fullstack</h4> \n        <p class="svelte-sgf17s">Febrero 2019 - Agosto 2019</p></div> \n      <span class="svelte-sgf17s">Desarrollé un sistema de registro de materiales para la empresa utilizando Supabase para la base de datos, Python para el backend y PySide para la interfaz gráfica.</span></li></ol>',v(n,"class","experiences svelte-sgf17s")},m(e,t){f(e,n,t)},p:e,i:e,o:e,d(e){e&&$(n)}}}class ce extends D{constructor(e){super(),B(this,e,null,re,r,{})}}function le(e){let t,n,s;return t=new Q({}),{c(){G(t.$$.fragment),n=g("Sitio web")},m(e,o){N(t,e,o),f(e,n,o),s=!0},i(e){s||(T(t.$$.fragment,e),s=!0)},o(e){I(t.$$.fragment,e),s=!1},d(e){P(t,e),e&&$(n)}}}function ae(e){let t,n,s;return t=new Q({}),{c(){G(t.$$.fragment),n=g("Sitio web")},m(e,o){N(t,e,o),f(e,n,o),s=!0},i(e){s||(T(t.$$.fragment,e),s=!0)},o(e){I(t.$$.fragment,e),s=!1},d(e){P(t,e),e&&$(n)}}}function ie(e){let t,n,s;return t=new Q({}),{c(){G(t.$$.fragment),n=g("Repositorio")},m(e,o){N(t,e,o),f(e,n,o),s=!0},i(e){s||(T(t.$$.fragment,e),s=!0)},o(e){I(t.$$.fragment,e),s=!1},d(e){P(t,e),e&&$(n)}}}function de(e){let t,n,s,o,r,c,l,i,d,m,g,x,w,b,y,k,z,_,C,E,M,H,L,j,A,S,q,B,D,F,O,U,V,J,X,K,Q,W,Y,Z,ee,te,ne,se,oe;return k=new R({props:{$$slots:{default:[le]},$$scope:{ctx:e}}}),k.$on("click",e[1]),F=new R({props:{$$slots:{default:[ae]},$$scope:{ctx:e}}}),F.$on("click",e[2]),se=new R({props:{$$slots:{default:[ie]},$$scope:{ctx:e}}}),se.$on("click",e[3]),{c(){t=p("div"),n=p("h2"),n.textContent="Proyectos destacados",s=h(),o=p("div"),r=p("img"),l=h(),i=p("div"),d=p("h3"),d.textContent="Codax - Lenguanje de programación",m=h(),g=p("div"),g.innerHTML="<p>React</p> \n        <p>Electron</p>",x=h(),w=p("p"),w.textContent="Una plataforma de aprendizaje de programación en español que te lleva de la mano desde principiante.",b=h(),y=p("div"),G(k.$$.fragment),z=h(),_=p("div"),C=p("img"),M=h(),H=p("div"),L=p("h3"),L.textContent="LiteImage - Reduce el peso de las imágenes",j=h(),A=p("div"),A.innerHTML="<p>React</p>",S=h(),q=p("p"),q.textContent="Una aplicacion web que te ayuda a reducir el peso de tus imágenes de forma toltalmente gratuita.",B=h(),D=p("div"),G(F.$$.fragment),O=h(),U=p("div"),V=p("img"),X=h(),K=p("div"),Q=p("h3"),Q.textContent="Portfolio - David Gutiérrez Alvarez",W=h(),Y=p("div"),Y.innerHTML="<p>Svelte</p>",Z=h(),ee=p("p"),ee.textContent="Para explorar el código de este proyecto, te invito a visitar mi repositorio en GitHub.",te=h(),ne=p("div"),G(se.$$.fragment),v(n,"class","svelte-16xhc4o"),a(r.src,c="./codax.webp")||v(r,"src","./codax.webp"),v(r,"alt",""),v(r,"class","svelte-16xhc4o"),v(d,"class","svelte-16xhc4o"),v(g,"class","tags svelte-16xhc4o"),v(y,"class","card-links svelte-16xhc4o"),v(i,"class","card-desc svelte-16xhc4o"),v(o,"class","card svelte-16xhc4o"),a(C.src,E="./liteimage.webp")||v(C,"src","./liteimage.webp"),v(C,"alt",""),v(C,"class","svelte-16xhc4o"),v(L,"class","svelte-16xhc4o"),v(A,"class","tags svelte-16xhc4o"),v(D,"class","card-links svelte-16xhc4o"),v(H,"class","card-desc svelte-16xhc4o"),v(_,"class","card svelte-16xhc4o"),a(V.src,J="./portfolio.webp")||v(V,"src","./portfolio.webp"),v(V,"alt",""),v(V,"class","svelte-16xhc4o"),v(Q,"class","svelte-16xhc4o"),v(Y,"class","tags svelte-16xhc4o"),v(ne,"class","card-links svelte-16xhc4o"),v(K,"class","card-desc svelte-16xhc4o"),v(U,"class","card svelte-16xhc4o"),v(t,"class","proyects svelte-16xhc4o")},m(e,c){f(e,t,c),u(t,n),u(t,s),u(t,o),u(o,r),u(o,l),u(o,i),u(i,d),u(i,m),u(i,g),u(i,x),u(i,w),u(i,b),u(i,y),N(k,y,null),u(t,z),u(t,_),u(_,C),u(_,M),u(_,H),u(H,L),u(H,j),u(H,A),u(H,S),u(H,q),u(H,B),u(H,D),N(F,D,null),u(t,O),u(t,U),u(U,V),u(U,X),u(U,K),u(K,Q),u(K,W),u(K,Y),u(K,Z),u(K,ee),u(K,te),u(K,ne),N(se,ne,null),oe=!0},p(e,[t]){const n={};16&t&&(n.$$scope={dirty:t,ctx:e}),k.$set(n);const s={};16&t&&(s.$$scope={dirty:t,ctx:e}),F.$set(s);const o={};16&t&&(o.$$scope={dirty:t,ctx:e}),se.$set(o)},i(e){oe||(T(k.$$.fragment,e),T(F.$$.fragment,e),T(se.$$.fragment,e),oe=!0)},o(e){I(k.$$.fragment,e),I(F.$$.fragment,e),I(se.$$.fragment,e),oe=!1},d(e){e&&$(t),P(k),P(F),P(se)}}}function ue(e){const t=e=>window.open(e,"_blank");return[t,()=>t("https://codax.davidga.dev/"),()=>t("https://liteimage.pro"),()=>t("https://github.com/self-david/self-david")]}class fe extends D{constructor(e){super(),B(this,e,ue,de,r,{})}}function $e(t){let n;return{c(){n=p("div"),n.innerHTML='<h2 class="svelte-15a2d2">Habilidades técnicas</h2>\n\n  ...',v(n,"class","experiences")},m(e,t){f(e,n,t)},p:e,i:e,o:e,d(e){e&&$(n)}}}class pe extends D{constructor(e){super(),B(this,e,null,$e,r,{})}}function me(t){let n;return{c(){n=p("div"),n.innerHTML='<h2 class="svelte-15a2d2">Educación y certificados</h2>\n\n  ...',v(n,"class","experiences")},m(e,t){f(e,n,t)},p:e,i:e,o:e,d(e){e&&$(n)}}}class ge extends D{constructor(e){super(),B(this,e,null,me,r,{})}}function he(t){let n,s,o,r,c,l,a,i,d,m,g;return n=new oe({}),r=new ce({}),l=new fe({}),i=new pe({}),m=new ge({}),{c(){G(n.$$.fragment),s=h(),o=p("main"),G(r.$$.fragment),c=h(),G(l.$$.fragment),a=h(),G(i.$$.fragment),d=h(),G(m.$$.fragment),v(o,"class","svelte-lw6qfj")},m(e,t){N(n,e,t),f(e,s,t),f(e,o,t),N(r,o,null),u(o,c),N(l,o,null),u(o,a),N(i,o,null),u(o,d),N(m,o,null),g=!0},p:e,i(e){g||(T(n.$$.fragment,e),T(r.$$.fragment,e),T(l.$$.fragment,e),T(i.$$.fragment,e),T(m.$$.fragment,e),g=!0)},o(e){I(n.$$.fragment,e),I(r.$$.fragment,e),I(l.$$.fragment,e),I(i.$$.fragment,e),I(m.$$.fragment,e),g=!1},d(e){P(n,e),e&&$(s),e&&$(o),P(r),P(l),P(i),P(m)}}}function ve(e){window.geofeed=e=>window.geolocation=e;var t=document.createElement("script");return t.setAttribute("src","https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location/geofeed"),document.head.appendChild(t),[]}return new class extends D{constructor(e){super(),B(this,e,ve,he,r,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
