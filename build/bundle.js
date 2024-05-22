var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c,l;function i(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function a(t){return null==t?"":t}function u(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode&&t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function p(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function h(){return m(" ")}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){return new t(e)}function x(t){l=t}function w(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const y=[],b=[];let k=[];const z=[],_=Promise.resolve();let E=!1;function C(t){k.push(t)}const M=new Set;let A=0;function j(){if(0!==A)return;const t=l;do{try{for(;A<y.length;){const t=y[A];A++,x(t),H(t.$$)}}catch(t){throw y.length=0,A=0,t}for(x(null),y.length=0,A=0;b.length;)b.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];M.has(e)||(M.add(e),e())}k.length=0}while(y.length);for(;z.length;)z.pop()();E=!1,M.clear(),x(t)}function H(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const L=new Set;let N;function I(t,e){t&&t.i&&(L.delete(t),t.i(e))}function B(t,e,n,o){if(t&&t.o){if(L.has(t))return;L.add(t),N.c.push((()=>{L.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function F(t){t&&t.c()}function G(t,n,s,c){const{fragment:l,after_update:i}=t.$$;l&&l.m(n,s),c||C((()=>{const n=t.$$.on_mount.map(e).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),i.forEach(C)}function O(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];k.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),k=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function S(t,e){-1===t.$$.dirty[0]&&(y.push(t),E||(E=!0,_.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(e,r,s,c,i,a,u,f=[-1]){const $=l;x(e);const p=e.$$={fragment:null,ctx:[],props:a,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||($?$.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:r.target||$.$$.root};u&&u(p.root);let m=!1;if(p.ctx=s?s(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&i(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),m&&S(e,t)),n})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(d)}else p.fragment&&p.fragment.c();r.intro&&I(e.$$.fragment),G(e,r.target,r.anchor,r.customElement),j()}x($)}class T{$destroy(){O(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function V(t){let e,n,o,r,s;const c=t[2].default,l=function(t,e,n,o){if(t){const r=i(t,e,n,o);return t[0](r)}}(c,t,t[1],null);return{c(){e=$("button"),l&&l.c(),g(e,"class",n=a(t[0])+" svelte-f263ym")},m(n,c){var i,a,u,d;f(n,e,c),l&&l.m(e,null),o=!0,r||(i=e,a="click",u=t[3],i.addEventListener(a,u,d),s=()=>i.removeEventListener(a,u,d),r=!0)},p(t,[r]){l&&l.p&&(!o||2&r)&&function(t,e,n,o,r,s){if(r){const c=i(e,n,o,s);t.p(c,r)}}(l,c,t,t[1],o?function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(c,t[1],r,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null),(!o||1&r&&n!==(n=a(t[0])+" svelte-f263ym"))&&g(e,"class",n)},i(t){o||(I(l,t),o=!0)},o(t){B(l,t),o=!1},d(t){t&&d(e),l&&l.d(t),r=!1,s()}}}function q(t,e,n){let{$$slots:o={},$$scope:r}=e,{size:s="medium"}=e;return t.$$set=t=>{"size"in t&&n(0,s=t.size),"$$scope"in t&&n(1,r=t.$$scope)},[s,r,o,function(e){w.call(this,t,e)}]}class P extends T{constructor(t){super(),D(this,t,q,V,s,{size:0})}}function U(e){let n,o,r,s,c;return{c(){n=p("svg"),o=p("title"),r=m("Mail Icon"),s=p("rect"),c=p("path"),g(s,"width","20"),g(s,"height","16"),g(s,"x","2"),g(s,"y","4"),g(s,"rx","2"),g(c,"d","m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"),g(n,"xmlns","http://www.w3.org/2000/svg"),g(n,"width","16"),g(n,"height","16"),g(n,"viewBox","0 0 24 24"),g(n,"fill","none"),g(n,"stroke","currentColor"),g(n,"stroke-width","2"),g(n,"stroke-linecap","round"),g(n,"stroke-linejoin","round"),g(n,"class","lucide lucide-mail size-4")},m(t,e){f(t,n,e),u(n,o),u(o,r),u(n,s),u(n,c)},p:t,i:t,o:t,d(t){t&&d(n)}}}class Q extends T{constructor(t){super(),D(this,t,null,U,s,{})}}function X(e){let n,o,r,s;return{c(){n=p("svg"),o=p("title"),r=m("LinkedIn"),s=p("path"),g(s,"fill","currentColor"),g(s,"d","M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"),g(n,"height","16"),g(n,"width","16"),g(n,"viewBox","0 0 24 24"),g(n,"xmlns","http://www.w3.org/2000/svg")},m(t,e){f(t,n,e),u(n,o),u(o,r),u(n,s)},p:t,i:t,o:t,d(t){t&&d(n)}}}class J extends T{constructor(t){super(),D(this,t,null,X,s,{})}}function K(e){let n,o,r,s;return{c(){n=p("svg"),o=p("title"),r=m("GitHub"),s=p("path"),g(s,"fill","currentColor"),g(s,"d","M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"),g(n,"width","16"),g(n,"height","16"),g(n,"viewBox","0 0 24 24"),g(n,"xmlns","http://www.w3.org/2000/svg")},m(t,e){f(t,n,e),u(n,o),u(o,r),u(n,s)},p:t,i:t,o:t,d(t){t&&d(n)}}}class R extends T{constructor(t){super(),D(this,t,null,K,s,{})}}function W(t){let e;return{c(){e=m("Disponible")},m(t,n){f(t,e,n)},d(t){t&&d(e)}}}function Y(t){let e;return{c(){e=m("Abierto a Freelance")},m(t,n){f(t,e,n)},d(t){t&&d(e)}}}function Z(t){let e,n,o;return e=new Q({}),{c(){F(e.$$.fragment),n=m(" Correo")},m(t,r){G(e,t,r),f(t,n,r),o=!0},i(t){o||(I(e.$$.fragment,t),o=!0)},o(t){B(e.$$.fragment,t),o=!1},d(t){O(e,t),t&&d(n)}}}function tt(t){let e,n,o;return e=new J({}),{c(){F(e.$$.fragment),n=m(" LinkedIn")},m(t,r){G(e,t,r),f(t,n,r),o=!0},i(t){o||(I(e.$$.fragment,t),o=!0)},o(t){B(e.$$.fragment,t),o=!1},d(t){O(e,t),t&&d(n)}}}function et(t){let e,n,o;return e=new R({}),{c(){F(e.$$.fragment),n=m(" Github")},m(t,r){G(e,t,r),f(t,n,r),o=!0},i(t){o||(I(e.$$.fragment,t),o=!0)},o(t){B(e.$$.fragment,t),o=!1},d(t){O(e,t),t&&d(n)}}}function nt(t){let e,n,o,r,s,l,i,a,p,m,v,x,w,y,b,k,z,_;return l=new P({props:{size:"small",$$slots:{default:[W]},$$scope:{ctx:t}}}),l.$on("click",t[1]),a=new P({props:{size:"small",$$slots:{default:[Y]},$$scope:{ctx:t}}}),a.$on("click",t[2]),w=new P({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),w.$on("click",t[3]),b=new P({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),b.$on("click",t[4]),z=new P({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),z.$on("click",t[5]),{c(){var t,u;e=$("div"),n=$("div"),o=$("img"),s=h(),F(l.$$.fragment),i=h(),F(a.$$.fragment),p=h(),m=$("div"),m.innerHTML='<p class="say svelte-11xveze">¡Hola! mi nombre es</p> \n    <h1 class="svelte-11xveze">David Gutiérrez Alvarez</h1> \n    <p class="desc svelte-11xveze"><span class="highlighted svelte-11xveze">Desarrollador front-end</span> con <span class="highlighted svelte-11xveze">3 años de experiencia</span>, especializado en crear interfaces intuitivas y funcionales. Apasionado por mejorar la experiencia del usuario con soluciones técnicas innovadoras.</p>',v=h(),x=$("div"),F(w.$$.fragment),y=h(),F(b.$$.fragment),k=h(),F(z.$$.fragment),t=o.src,u=r="./profile.jpg",c||(c=document.createElement("a")),c.href=u,t!==c.href&&g(o,"src","./profile.jpg"),g(o,"alt",""),g(o,"class","svelte-11xveze"),g(n,"class","resume-header svelte-11xveze"),g(x,"class","resume-links svelte-11xveze"),g(e,"class","resume svelte-11xveze")},m(t,r){f(t,e,r),u(e,n),u(n,o),u(n,s),G(l,n,null),u(n,i),G(a,n,null),u(e,p),u(e,m),u(e,v),u(e,x),G(w,x,null),u(x,y),G(b,x,null),u(x,k),G(z,x,null),_=!0},p(t,[e]){const n={};64&e&&(n.$$scope={dirty:e,ctx:t}),l.$set(n);const o={};64&e&&(o.$$scope={dirty:e,ctx:t}),a.$set(o);const r={};64&e&&(r.$$scope={dirty:e,ctx:t}),w.$set(r);const s={};64&e&&(s.$$scope={dirty:e,ctx:t}),b.$set(s);const c={};64&e&&(c.$$scope={dirty:e,ctx:t}),z.$set(c)},i(t){_||(I(l.$$.fragment,t),I(a.$$.fragment,t),I(w.$$.fragment,t),I(b.$$.fragment,t),I(z.$$.fragment,t),_=!0)},o(t){B(l.$$.fragment,t),B(a.$$.fragment,t),B(w.$$.fragment,t),B(b.$$.fragment,t),B(z.$$.fragment,t),_=!1},d(t){t&&d(e),O(l),O(a),O(w),O(b),O(z)}}}function ot(t){const e=t=>window.open(t,"_blank");return[e,()=>e("https://www.linkedin.com/in/self-david"),()=>e("https://www.linkedin.com/in/self-david"),()=>e("mailto:david_xd1996@live.com.mx"),()=>e("https://www.linkedin.com/in/self-david"),()=>e("https://github.com/self-david")]}class rt extends T{constructor(t){super(),D(this,t,ot,nt,s,{})}}function st(e){let n;return{c(){n=$("div"),n.innerHTML='<h2 class="svelte-13a948">Experiencia laboral</h2> \n  <ol class="svelte-13a948"><li class="svelte-13a948"><div><h4 class="svelte-13a948">Buscabot - FrontEnd developer</h4> \n        <p class="svelte-13a948">Marzo 2022 - Actualmente</p></div> \n      <span class="svelte-13a948">Mi enfoque principal es el desarrollo front-end del sitio web, transformando todo el diseño UI/UX en código y creando la interfaz de usuario, trabajando con el modelo first-mobile.</span></li> \n    <li class="svelte-13a948"><div><h4 class="svelte-13a948">Hartec - Fullstack</h4> \n        <p class="svelte-13a948">Agosto 2021 - Marzo 2022</p></div> \n      <span class="svelte-13a948">Mi trabajo consistía en desarrollar aplicaciones para clientes usando C# (. Net) e IIS (ventana) para implementar las aplicaciones.</span></li> \n    <li class="svelte-13a948"><div><h4 class="svelte-13a948">Geeo - Fullstack</h4> \n        <p class="svelte-13a948">February 2019 - August 2019</p></div> \n      <span class="svelte-13a948">python y PyQt ...</span></li></ol>',g(n,"class","experiences svelte-13a948")},m(t,e){f(t,n,e)},p:t,i:t,o:t,d(t){t&&d(n)}}}class ct extends T{constructor(t){super(),D(this,t,null,st,s,{})}}function lt(t,e,n){const o=t.slice();return o[1]=e[n],o}function it(e){let n,o,r=e[1]+"";return{c(){n=$("p"),o=m(r)},m(t,e){f(t,n,e),u(n,o)},p:t,d(t){t&&d(n)}}}function at(t){let e,n,r,s,c,l,i;var a=rt;a&&(e=v(a,{})),s=new ct({});let p=[...Array(130).keys()],m=[];for(let e=0;e<p.length;e+=1)m[e]=it(lt(t,p,e));return{c(){e&&F(e.$$.fragment),n=h(),r=$("main"),F(s.$$.fragment),c=h(),l=$("div");for(let t=0;t<m.length;t+=1)m[t].c();g(r,"class","svelte-m7uumo")},m(t,o){e&&G(e,t,o),f(t,n,o),f(t,r,o),G(s,r,null),u(r,c),u(r,l);for(let t=0;t<m.length;t+=1)m[t]&&m[t].m(l,null);i=!0},p(t,[r]){if(a!==(a=rt)){if(e){N={r:0,c:[],p:N};const t=e;B(t.$$.fragment,1,0,(()=>{O(t,1)})),N.r||o(N.c),N=N.p}a?(e=v(a,{}),F(e.$$.fragment),I(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}},i(t){i||(e&&I(e.$$.fragment,t),I(s.$$.fragment,t),i=!0)},o(t){e&&B(e.$$.fragment,t),B(s.$$.fragment,t),i=!1},d(t){e&&O(e,t),t&&d(n),t&&d(r),O(s),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(m,t)}}}function ut(t){window.geofeed=t=>window.geolocation=t;var e=document.createElement("script");return e.setAttribute("src","https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location/geofeed"),document.head.appendChild(e),[]}return new class extends T{constructor(t){super(),D(this,t,ut,at,s,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
