function j(){}function tt(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function R(){return Object.create(null)}function $(t){t.forEach(J)}function K(t){return typeof t=="function"}function bt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function wt(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function et(t){return Object.keys(t).length===0}function nt(t,...e){if(t==null)return j;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function $t(t,e,n){t.$$.on_destroy.push(nt(e,n))}function Et(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?tt(n.ctx.slice(),t[1](i(e))):n.ctx}function vt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)u[l]=e.dirty[l]|r[l];return u}return e.dirty|r}return e.dirty}function kt(t,e,n,i,r,u){if(r){const s=Q(e,n,i,u);t.p(s,r)}}function Nt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function At(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}let M=!1;function it(){M=!0}function rt(){M=!1}function st(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function ct(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<e.length;o++){const a=e[o];a.claim_order!==void 0&&c.push(a)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const o=e[c].claim_order,a=(r>0&&e[n[r]].claim_order<=o?r+1:st(1,r,_=>e[n[_]].claim_order,o))-1;i[c]=n[a]+1;const d=a+1;n[d]=c,r=Math.max(d,r)}const u=[],s=[];let l=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);l>=c;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);u.reverse(),s.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<s.length;c++){for(;o<u.length&&s[c].claim_order>=u[o].claim_order;)o++;const a=o<u.length?u[o]:null;t.insertBefore(s[c],a)}}function lt(t,e){if(M){for(ct(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function St(t,e,n){M&&!n?lt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ot(t){t.parentNode&&t.parentNode.removeChild(t)}function jt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ut(t){return document.createElement(t)}function B(t){return document.createTextNode(t)}function Mt(){return B(" ")}function Tt(){return B("")}function Ct(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ft(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ot(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:ft(t,i,e[i])}function at(t){return Array.from(t.childNodes)}function _t(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function U(t,e,n,i,r=!1){_t(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const c=n(l);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const c=n(l);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function dt(t,e,n,i){return U(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||u.push(l.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Dt(t,e,n){return dt(t,e,n,ut)}function ht(t,e){return U(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>B(e),!0)}function Lt(t){return ht(t," ")}function Pt(t,e){e=""+e,t.data!==e&&(t.data=e)}function qt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Bt(t,e,n){t.classList[n?"add":"remove"](e)}function Ht(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${t}_END`?(i-=1,n.push(r)):u===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function zt(t,e){return new t(e)}let v;function E(t){v=t}function V(){if(!v)throw new Error("Function called outside component initialization");return v}function Ft(t){V().$$.on_mount.push(t)}function Rt(t){V().$$.after_update.push(t)}const b=[],G=[];let w=[];const I=[],W=Promise.resolve();let P=!1;function X(){P||(P=!0,W.then(Y))}function Gt(){return X(),W}function q(t){w.push(t)}const L=new Set;let x=0;function Y(){if(x!==0)return;const t=v;do{try{for(;x<b.length;){const e=b[x];x++,E(e),mt(e.$$)}}catch(e){throw b.length=0,x=0,e}for(E(null),b.length=0,x=0;G.length;)G.pop()();for(let e=0;e<w.length;e+=1){const n=w[e];L.has(n)||(L.add(n),n())}w.length=0}while(b.length);for(;I.length;)I.pop()();P=!1,L.clear(),E(t)}function mt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}function pt(t){const e=[],n=[];w.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),w=e}const S=new Set;let g;function It(){g={r:0,c:[],p:g}}function Jt(){g.r||$(g.c),g=g.p}function Z(t,e){t&&t.i&&(S.delete(t),t.i(e))}function Kt(t,e,n,i){if(t&&t.o){if(S.has(t))return;S.add(t),g.c.push(()=>{S.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Qt(t,e){t.d(1),e.delete(t.key)}function Ut(t,e,n,i,r,u,s,l,c,o,a,d){let _=t.length,m=u.length,h=_;const T={};for(;h--;)T[t[h].key]=h;const k=[],C=new Map,O=new Map,H=[];for(h=m;h--;){const f=d(r,u,h),p=n(f);let y=s.get(p);y?i&&H.push(()=>y.p(f,e)):(y=o(p,f),y.c()),C.set(p,k[h]=y),p in T&&O.set(p,Math.abs(h-T[p]))}const z=new Set,F=new Set;function D(f){Z(f,1),f.m(l,a),s.set(f.key,f),a=f.first,m--}for(;_&&m;){const f=k[m-1],p=t[_-1],y=f.key,N=p.key;f===p?(a=f.first,_--,m--):C.has(N)?!s.has(y)||z.has(y)?D(f):F.has(N)?_--:O.get(y)>O.get(N)?(F.add(y),D(f)):(z.add(N),_--):(c(p,s),_--)}for(;_--;){const f=t[_];C.has(f.key)||c(f,s)}for(;m;)D(k[m-1]);return $(H),k}function Vt(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const s=t[u],l=e[u];if(l){for(const c in s)c in l||(i[c]=1);for(const c in l)r[c]||(n[c]=l[c],r[c]=1);t[u]=l}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Wt(t){t&&t.c()}function Xt(t,e){t&&t.l(e)}function yt(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||q(()=>{const s=t.$$.on_mount.map(J).filter(K);t.$$.on_destroy?t.$$.on_destroy.push(...s):$(s),t.$$.on_mount=[]}),u.forEach(q)}function gt(t,e){const n=t.$$;n.fragment!==null&&(pt(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function xt(t,e){t.$$.dirty[0]===-1&&(b.push(t),X(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Yt(t,e,n,i,r,u,s,l=[-1]){const c=v;E(t);const o=t.$$={fragment:null,ctx:[],props:u,update:j,not_equal:r,bound:R(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:R(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};s&&s(o.root);let a=!1;if(o.ctx=n?n(t,e.props||{},(d,_,...m)=>{const h=m.length?m[0]:_;return o.ctx&&r(o.ctx[d],o.ctx[d]=h)&&(!o.skip_bound&&o.bound[d]&&o.bound[d](h),a&&xt(t,d)),_}):[],o.update(),a=!0,$(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){it();const d=at(e.target);o.fragment&&o.fragment.l(d),d.forEach(ot)}else o.fragment&&o.fragment.c();e.intro&&Z(t.$$.fragment),yt(t,e.target,e.anchor,e.customElement),rt(),Y()}E(c)}class Zt{$destroy(){gt(this,1),this.$destroy=j}$on(e,n){if(!K(n))return j;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!et(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{yt as A,gt as B,wt as C,lt as D,j as E,Et as F,kt as G,Nt as H,vt as I,$t as J,Ct as K,Ut as L,jt as M,$ as N,Bt as O,Qt as P,Ht as Q,tt as R,Zt as S,At as T,Ot as U,Vt as V,Mt as a,St as b,Lt as c,Kt as d,Tt as e,Jt as f,Z as g,ot as h,Yt as i,Rt as j,ut as k,Dt as l,at as m,ft as n,Ft as o,qt as p,B as q,ht as r,bt as s,Gt as t,Pt as u,It as v,G as w,zt as x,Wt as y,Xt as z};
