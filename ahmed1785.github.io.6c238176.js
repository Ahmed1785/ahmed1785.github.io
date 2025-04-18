var e,t,i,s,n;let r;function o(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o}"function"==typeof SuppressedError&&SuppressedError;const l=window,a=l.ShadowRoot&&(void 0===l.ShadyCSS||l.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,d=Symbol(),h=new WeakMap;class c{constructor(e,t,i){if(this._$cssResult$=!0,i!==d)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(a&&void 0===e){let i=void 0!==t&&1===t.length;i&&(e=h.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&h.set(t,e))}return e}toString(){return this.cssText}}const u=e=>new c("string"==typeof e?e:e+"",void 0,d),p=(e,t)=>{a?e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(t=>{let i=document.createElement("style"),s=l.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=t.cssText,e.appendChild(i)})},v=a?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return u(t)})(e):e,f=window,m=f.trustedTypes,g=m?m.emptyScript:"",$=f.reactiveElementPolyfillSupport,y={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},_=(e,t)=>t!==e&&(t==t||e==e),A={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:_},b="finalized";class w extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!=(t=this.h)?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,i)=>{let s=this._$Ep(i,t);void 0!==s&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=A){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let i="symbol"==typeof e?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){let n=this[e];this[t]=s,this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||A}static finalize(){if(this.hasOwnProperty(b))return!1;this[b]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)])this.createProperty(t,e[t])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let i of new Set(e.flat(1/0).reverse()))t.unshift(v(i));else void 0!==e&&t.push(v(e));return t}static _$Ep(e,t){let i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null==(e=this.constructor.h)||e.forEach(e=>e(this))}addController(e){var t,i;(null!=(t=this._$ES)?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null==(i=e.hostConnected)||i.call(e))}removeController(e){var t;null==(t=this._$ES)||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=null!=(e=this.shadowRoot)?e:this.attachShadow(this.constructor.shadowRootOptions);return p(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(e=this._$ES)||e.forEach(e=>{var t;return null==(t=e.hostConnected)?void 0:t.call(e)})}enableUpdating(e){}disconnectedCallback(){var e;null==(e=this._$ES)||e.forEach(e=>{var t;return null==(t=e.hostDisconnected)?void 0:t.call(e)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=A){var s;let n=this.constructor._$Ep(e,i);if(void 0!==n&&!0===i.reflect){let r=(void 0!==(null==(s=i.converter)?void 0:s.toAttribute)?i.converter:y).toAttribute(t,i.type);this._$El=e,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(e,t){var i;let s=this.constructor,n=s._$Ev.get(e);if(void 0!==n&&this._$El!==n){let e=s.getPropertyOptions(n),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null==(i=e.converter)?void 0:i.fromAttribute)?e.converter:y;this._$El=n,this[n]=r.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||_)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((e,t)=>this[t]=e),this._$Ei=void 0);let t=!1,i=this._$AL;try{(t=this.shouldUpdate(i))?(this.willUpdate(i),null==(e=this._$ES)||e.forEach(e=>{var t;return null==(t=e.hostUpdate)?void 0:t.call(e)}),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null==(t=this._$ES)||t.forEach(e=>{var t;return null==(t=e.hostUpdated)?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach((e,t)=>this._$EO(t,this[t],e)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}w[b]=!0,w.elementProperties=new Map,w.elementStyles=[],w.shadowRootOptions={mode:"open"},null==$||$({ReactiveElement:w}),(null!=(e=f.reactiveElementVersions)?e:f.reactiveElementVersions=[]).push("1.6.3");const k=window,S=k.trustedTypes,E=S?S.createPolicy("lit-html",{createHTML:e=>e}):void 0,C="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,x="?"+P,N=`<${x}>`,D=document,H=()=>D.createComment(""),M=e=>null===e||"object"!=typeof e&&"function"!=typeof e,O=Array.isArray,U=e=>O(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),T="[ 	\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,I=/>/g,R=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,B=/"/g,K=/^(?:script|style|textarea|title)$/i,z=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),W=z(1),G=(z(2),Symbol.for("lit-noChange")),q=Symbol.for("lit-nothing"),F=new WeakMap,J=D.createTreeWalker(D,129,null,!1);function Y(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}const X=(e,t)=>{let i=e.length-1,s=[],n,r=2===t?"<svg>":"",o=L;for(let t=0;t<i;t++){let i=e[t],l,a,d=-1,h=0;for(;h<i.length&&(o.lastIndex=h,null!==(a=o.exec(i)));)h=o.lastIndex,o===L?"!--"===a[1]?o=j:void 0!==a[1]?o=I:void 0!==a[2]?(K.test(a[2])&&(n=RegExp("</"+a[2],"g")),o=R):void 0!==a[3]&&(o=R):o===R?">"===a[0]?(o=null!=n?n:L,d=-1):void 0===a[1]?d=-2:(d=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?R:'"'===a[3]?B:V):o===B||o===V?o=R:o===j||o===I?o=L:(o=R,n=void 0);let c=o===R&&e[t+1].startsWith("/>")?" ":"";r+=o===L?i+N:d>=0?(s.push(l),i.slice(0,d)+C+i.slice(d)+P+c):i+P+(-2===d?(s.push(void 0),t):c)}return[Y(e,r+(e[i]||"<?>")+(2===t?"</svg>":"")),s]};class Z{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,r=0,o=e.length-1,l=this.parts,[a,d]=X(e,t);if(this.el=Z.createElement(a,i),J.currentNode=this.el.content,2===t){let e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(s=J.nextNode())&&l.length<o;){if(1===s.nodeType){if(s.hasAttributes()){let e=[];for(let t of s.getAttributeNames())if(t.endsWith(C)||t.startsWith(P)){let i=d[r++];if(e.push(t),void 0!==i){let e=s.getAttribute(i.toLowerCase()+C).split(P),t=/([.?@])?(.*)/.exec(i);l.push({type:1,index:n,name:t[2],strings:e,ctor:"."===t[1]?es:"?"===t[1]?er:"@"===t[1]?eo:ei})}else l.push({type:6,index:n})}for(let t of e)s.removeAttribute(t)}if(K.test(s.tagName)){let e=s.textContent.split(P),t=e.length-1;if(t>0){s.textContent=S?S.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],H()),J.nextNode(),l.push({type:2,index:++n});s.append(e[t],H())}}}else if(8===s.nodeType)if(s.data===x)l.push({type:2,index:n});else{let e=-1;for(;-1!==(e=s.data.indexOf(P,e+1));)l.push({type:7,index:n}),e+=P.length-1}n++}}static createElement(e,t){let i=D.createElement("template");return i.innerHTML=e,i}}function Q(e,t,i=e,s){var n,r,o;if(t===G)return t;let l=void 0!==s?null==(n=i._$Co)?void 0:n[s]:i._$Cl,a=M(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==a&&(null==(r=null==l?void 0:l._$AO)||r.call(l,!1),void 0===a?l=void 0:(l=new a(e))._$AT(e,i,s),void 0!==s?(null!=(o=i._$Co)?o:i._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(t=Q(e,l._$AS(e,t.values),l,s)),t}class ee{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:i},parts:s}=this._$AD,n=(null!=(t=null==e?void 0:e.creationScope)?t:D).importNode(i,!0);J.currentNode=n;let r=J.nextNode(),o=0,l=0,a=s[0];for(;void 0!==a;){if(o===a.index){let t;2===a.type?t=new et(r,r.nextSibling,this,e):1===a.type?t=new a.ctor(r,a.name,a.strings,this,e):6===a.type&&(t=new el(r,this,e)),this._$AV.push(t),a=s[++l]}o!==(null==a?void 0:a.index)&&(r=J.nextNode(),o++)}return J.currentNode=D,n}v(e){let t=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class et{constructor(e,t,i,s){var n;this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=null==(n=null==s?void 0:s.isConnected)||n}get _$AU(){var e,t;return null!=(t=null==(e=this._$AM)?void 0:e._$AU)?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){M(e=Q(this,e,t))?e===q||null==e||""===e?(this._$AH!==q&&this._$AR(),this._$AH=q):e!==this._$AH&&e!==G&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):U(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==q&&M(this._$AH)?this._$AA.nextSibling.data=e:this.$(D.createTextNode(e)),this._$AH=e}g(e){var t;let{values:i,_$litType$:s}=e,n="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=Z.createElement(Y(s.h,s.h[0]),this.options)),s);if((null==(t=this._$AH)?void 0:t._$AD)===n)this._$AH.v(i);else{let e=new ee(n,this),t=e.u(this.options);e.v(i),this.$(t),this._$AH=e}}_$AC(e){let t=F.get(e.strings);return void 0===t&&F.set(e.strings,t=new Z(e)),t}T(e){O(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,s=0;for(let n of e)s===t.length?t.push(i=new et(this.k(H()),this.k(H()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for(null==(i=this._$AP)||i.call(this,!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null==(t=this._$AP)||t.call(this,e))}}class ei{constructor(e,t,i,s,n){this.type=1,this._$AH=q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){let n=this.strings,r=!1;if(void 0===n)(r=!M(e=Q(this,e,t,0))||e!==this._$AH&&e!==G)&&(this._$AH=e);else{let s,o,l=e;for(e=n[0],s=0;s<n.length-1;s++)(o=Q(this,l[i+s],t,s))===G&&(o=this._$AH[s]),r||(r=!M(o)||o!==this._$AH[s]),o===q?e=q:e!==q&&(e+=(null!=o?o:"")+n[s+1]),this._$AH[s]=o}r&&!s&&this.j(e)}j(e){e===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class es extends ei{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===q?void 0:e}}const en=S?S.emptyScript:"";class er extends ei{constructor(){super(...arguments),this.type=4}j(e){e&&e!==q?this.element.setAttribute(this.name,en):this.element.removeAttribute(this.name)}}class eo extends ei{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){var i;if((e=null!=(i=Q(this,e,t,0))?i:q)===G)return;let s=this._$AH,n=e===q&&s!==q||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==q&&(s===q||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!=(i=null==(t=this.options)?void 0:t.host)?i:this.element,e):this._$AH.handleEvent(e)}}class el{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Q(this,e)}}const ea=k.litHtmlPolyfillSupport;null==ea||ea(Z,et),(null!=(t=k.litHtmlVersions)?t:k.litHtmlVersions=[]).push("2.8.0");const ed=(e,t,i)=>{var s,n;let r=null!=(s=null==i?void 0:i.renderBefore)?s:t,o=r._$litPart$;if(void 0===o){let e=null!=(n=null==i?void 0:i.renderBefore)?n:null;r._$litPart$=o=new et(t.insertBefore(H(),e),e,void 0,null!=i?i:{})}return o._$AI(e),o};class eh extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let i=super.createRenderRoot();return null!=(t=this.renderOptions).renderBefore||(t.renderBefore=i.firstChild),i}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ed(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null==(e=this._$Do)||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this._$Do)||e.setConnected(!1)}render(){return G}}eh.finalized=!0,eh._$litElement$=!0,null==(i=globalThis.litElementHydrateSupport)||i.call(globalThis,{LitElement:eh});const ec=globalThis.litElementPolyfillSupport;null==ec||ec({LitElement:eh}),(null!=(s=globalThis.litElementVersions)?s:globalThis.litElementVersions=[]).push("3.3.3");const eu=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}}:{...t,finisher(i){i.createProperty(t.key,e)}},ep=(e,t,i)=>{t.constructor.createProperty(i,e)};function ev(e){var t;return t={...e,state:!0},(e,i)=>void 0!==i?ep(t,e,i):eu(t,e)}null!=(null==(n=window.HTMLSlotElement)?void 0:n.prototype.assignedElements)||((e,t)=>e.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE));const ef=e=>(...t)=>({_$litDirective$:e,values:t});class em{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const{I:eg}={O:C,P:P,A:x,C:1,M:X,L:ee,R:U,D:Q,I:et,V:ei,H:er,N:eo,U:es,F:el},e$=()=>document.createComment(""),ey=(e,t,i)=>{var s;let n=e._$AA.parentNode,r=void 0===t?e._$AB:t._$AA;if(void 0===i)i=new eg(n.insertBefore(e$(),r),n.insertBefore(e$(),r),e,e.options);else{let t=i._$AB.nextSibling,o=i._$AM,l=o!==e;if(l){let t;null==(s=i._$AQ)||s.call(i,e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==o._$AU&&i._$AP(t)}if(t!==r||l){let e=i._$AA;for(;e!==t;){let t=e.nextSibling;n.insertBefore(e,r),e=t}}}return i},e_=(e,t,i=e)=>(e._$AI(t,i),e),eA={},eb=(e,t=eA)=>e._$AH=t,ew=e=>e._$AH,ek=e=>{var t;null==(t=e._$AP)||t.call(e,!1,!0);let i=e._$AA,s=e._$AB.nextSibling;for(;i!==s;){let e=i.nextSibling;i.remove(),i=e}},eS=(e,t,i)=>{let s=new Map;for(let n=t;n<=i;n++)s.set(e[n],n);return s},eE=ef(class extends em{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}ct(e,t,i){let s;void 0===i?i=t:void 0!==t&&(s=t);let n=[],r=[],o=0;for(let t of e)n[o]=s?s(t,o):o,r[o]=i(t,o),o++;return{values:r,keys:n}}render(e,t,i){return this.ct(e,t,i).values}update(e,[t,i,s]){var n;let r=ew(e),{values:o,keys:l}=this.ct(t,i,s);if(!Array.isArray(r))return this.ut=l,o;let a=null!=(n=this.ut)?n:this.ut=[],d=[],h,c,u=0,p=r.length-1,v=0,f=o.length-1;for(;u<=p&&v<=f;)if(null===r[u])u++;else if(null===r[p])p--;else if(a[u]===l[v])d[v]=e_(r[u],o[v]),u++,v++;else if(a[p]===l[f])d[f]=e_(r[p],o[f]),p--,f--;else if(a[u]===l[f])d[f]=e_(r[u],o[f]),ey(e,d[f+1],r[u]),u++,f--;else if(a[p]===l[v])d[v]=e_(r[p],o[v]),ey(e,r[u],r[p]),p--,v++;else if(void 0===h&&(h=eS(l,v,f),c=eS(a,u,p)),h.has(a[u]))if(h.has(a[p])){let t=c.get(l[v]),i=void 0!==t?r[t]:null;if(null===i){let t=ey(e,r[u]);e_(t,o[v]),d[v]=t}else d[v]=e_(i,o[v]),ey(e,r[u],i),r[t]=null;v++}else ek(r[p]),p--;else ek(r[u]),u++;for(;v<=f;){let t=ey(e,d[f+1]);e_(t,o[v]),d[v++]=t}for(;u<=p;){let e=r[u++];null!==e&&ek(e)}return this.ut=l,eb(e,d),G}});class eC extends em{constructor(e){if(super(e),this.et=q,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===q||null==e)return this.ft=void 0,this.et=e;if(e===G)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;let t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}eC.directiveName="unsafeHTML",eC.resultType=1;const eP=ef(eC),ex=[{name:"Getting Started with AWS CDK: Deploying a Serverless Lambda Function with API Gateway",description:`
      <h2>Introduction</h2>
      <p>In this blog post, I will walk you through the steps to get up and running quickly with AWS Cloud Development Kit (CDK) to deploy a serverless Lambda function with an API Gateway endpoint. Assuming you have AWS account setup, This guide will help you understand the basics of CDK and how to leverage it for deploying serverless applications.</p>

      <h2>Prerequisites</h2>
      <ul>
        <li>Node.js installed (version specified in <code>.nvmrc</code>)</li>
        <li>AWS Account</li>
        <li>AWS CLI configured</li>
        <li>AWS CDK installed globally (<code>npm install -g aws-cdk</code>)</li>
      </ul>

      <h2>Step 1: Initialize the CDK Project</h2>
      <p>First, create a new directory for your CDK project and navigate into it. Then, initialize a new CDK project.</p>

      <pre><code>bash
      mkdir my-cdk-app
      cd my-cdk-app
      cdk init app --language javascript
      </code></pre>

      <h2>Step 2: Define the Lambda Function</h2>
      <p>Create a new Lambda function in the <code>lib</code> directory. For example, create a file named <code>lambda.js</code>:</p>

      <pre><code>javascript
      exports.handler = async function(event) {
        console.log("request:", JSON.stringify(event, undefined, 2));
        return {
          statusCode: 200,
          headers: { "Content-Type": "text/plain" },
          body: \`Hello, CDK! You've hit \${event.path}
\`
        };
      };
      </code></pre>

      <h2>Step 3: Create the CDK Stack</h2>
      <p>Modify the <code>lib/cdk-stack.js</code> file to include the Lambda function and an API Gateway to trigger it.</p>

      <pre><code>javascript
      const cdk = require('aws-cdk-lib');
      const lambda = require('aws-cdk-lib/aws-lambda');
      const apigateway = require('aws-cdk-lib/aws-apigateway');

      class ApiGatewayStack extends cdk.Stack {
        constructor(scope, id, props) {
          super(scope, id, props);

          // Define the Lambda function
          const myLambda = new lambda.Function(this, 'MyLambda', {
            runtime: lambda.Runtime.NODEJS_20_X,
            code: lambda.Code.fromAsset('lib'),
            handler: 'lambda.handler'
          });

          // Define the API Gateway
          new apigateway.LambdaRestApi(this, 'Endpoint', {
            handler: myLambda
          });
        }
      }

      module.exports = { ApiGatewayStack };
      </code></pre>

      <h2>Step 4: Configure the CDK App</h2>
      <p>Modify the <code>bin/cdk-app.js</code> file to configure the CDK app and stack.</p>

      <pre><code>javascript
      #!/usr/bin/env node
      const cdk = require('aws-cdk-lib');
      const { ApiGatewayStack } = require('../lib/cdk-stack');

      const env = {
        account: process.env.AWS_ACCOUNT,
        region: process.env.DEPLOY_REGION
      };

      const STACK_NAME = 'api-gateway-stack';
      const cdkApp = new cdk.App();

      new ApiGatewayStack(cdkApp, STACK_NAME, {
        synthesizer: new cdk.CliCredentialsStackSynthesizer(),
        env
      });
      </code></pre>

      <h2>Step 5: Deploy the Stack</h2>
      <p>Deploy the stack using the CDK CLI.</p>

      <pre><code>bash
      cdk deploy
      </code></pre>

      <h2>Step 6: Optional: Schedule Lambda Invocation using GitHub Actions</h2>
      <p>To use the GitHub Actions (GHA) scheduler function to call the Lambda on a schedule, you can set up a workflow file in your repository. This allows you to run your Lambda function on a specified schedule without the need for additional infrastructure like cron jobs in a Kubernetes cluster. Below is an example of how to set this up:</p>

      <pre><code>yaml
      name: Scheduled Lambda Invocation
      on:
        workflow_dispatch:
        schedule:
          - cron: '0 21 * * 2'

      jobs:
        invoke-lambda:
          runs-on: ubuntu-latest
          steps:
          - uses: actions/checkout@v2
          - name: Login to AWS
            uses: aws-actions/configure-aws-credentials@v1
            with:
              role-to-assume: "role-to-assume"
              role-skip-session-tagging: true
              role-duration-seconds: 3600
              aws-region: us-west-2
          - name: Setup Node
            uses: actions/setup-node@v2
            with:
              node-version-file: .nvmrc
              cache: 'npm'
              cache-dependency-path: package-lock.json
          - name: Install dependencies
            run: npm ci
          - name: Invoke Lambda
            run: |
              aws lambda invoke \
                --function-name my-lambda-function \
                --payload '{}' \
                response.json
          - name: Notify slack on success
            if: success()
            uses: rtCamp/action-slack-notify@v2
            with:
              status: 'success'
              message: "Workflow succeeded"
              webhook-url: 'SLACK_WEBHOOK_URL'
          - name: Notify slack on failure
            if: failure()
            uses: rtCamp/action-slack-notify@v2
            with:
              webhook-url: 'SLACK_WEBHOOK_URL'
              status: 'failure'
              message: "Workflow failed"
      </code></pre>

      <h2>Conclusion</h2>
      <p>Congratulations! You have successfully deployed a serverless Lambda function with an API Gateway endpoint using AWS CDK and scheduled its invocation using GitHub Actions. This is just the beginning, and there are many more features and configurations you can explore with CDK and GitHub Actions.</p>
    `,image:"aws-cdk.png",links:[{name:"AWS CDK Documentation",link:"https://docs.aws.amazon.com/cdk/latest/guide/home.html"},{name:"GitHub Actions Documentation",link:"https://docs.github.com/en/actions"}]}],eN=[{name:"Coming soon",image:"comingsoon.png",description:"comingsoon",links:[]}];class eD extends eh{constructor(){super(),this.currentView="main",this.fullViewData=null,this.backLink=""}createRenderRoot(){return this}render(){return W`
      ${this.renderMainView()}
      ${"full-view"===this.currentView?this.renderModal():""}
    `}renderMainView(){return W`
      <div class='topbar'>
        ${this.renderNav("about","#about")}
        ${this.renderNav("volunteer work","#project")}
      </div>
      <div class='about-holder'>
        <div class='content'>
          <h1 class='font-lg' id='about'>Ahmed Sheikh</h1>
          ${this.renderAbout()}
        </div>
      </div>
      <div class='volunteer-holder'>
        <div class='content'>
          <h1 class='font-lg' id='project'> Volunteer Work </h1>
          <div>Coming soon</div>
          <div class='projects-container'>
            ${this.renderVolunteerProjects()}
          </div>
        </div>
      </div>
    `}renderModal(){if(!this.fullViewData)return W``;let{name:e,description:t,links:i}=this.fullViewData;return W`
      <div class="modal" @click="${this.closeModal}">
        <div class="modal-content" @click="${e=>e.stopPropagation()}">
          <a class="back-link" href="#" @click="${this.goBack}">X</a>
          <div class="title">${e}</div>
          <div class="description">${eP(t)}</div>
          <div class="links">
            ${i.map(e=>W`<a class="link-item" href="${e.link}" target="_blank">${e.name}</a>`)}
          </div>
        </div>
      </div>
    `}renderNav(e,t){return W`<div class='nav'> <a href=${t} @click="${this.handleNavClick}">${e}</a></div>`}renderAbout(){return W`
      <div>
        I am a Software Engineer at Microsoft, where I work on the Azure Store team, focusing on building internal tools for infrastructure management. My role involves diagnosing and resolving complex customer issues, migrating customers from legacy storage solutions to modern SRP and RSRP storage systems, debugging, and automating workflows to enhance efficiency and reliability. Through cross-team collaboration, I’ve improved migration processes and minimized customer impact.

        <br><br>
        Previously, I worked at Ookla, where I contributed to various impactful projects. As a Software Engineer, I built universal results features using AWS Amplify Datastore and a Go backend, processed Amazon S3 data for user network insights, and developed SEO landing pages that boosted revenue and app downloads. I also implemented monitoring tools with Grafana and Sentry.io and translated Figma designs into responsive React interfaces.

        <br><br>
        My professional interests lie in cloud technology, security, and AI. I’m passionate about building scalable, secure systems and leveraging cutting-edge technologies to solve real-world problems.

        <br><br>
        Outside of work, I enjoy playing basketball, working out, exploring the Pacific Northwest with my wife and two kids, and discovering new places to eat. I also enjoy volunteering and giving back to my community. I teach coding classes for kids ages 8-14, where they learn block coding to build their own Minecraft worlds, fostering creativity and imagination. Additionally, I volunteer locally to give free haircuts to the homeless and low-income individuals, helping to make a positive impact in their lives.

        <br><br>
        <div class="email font-sm">
            Resume available upon request.
            ${this.renderExternal()}
        </div>
      </div>
    `}renderExternal(){let e=(e,t)=>W`
        <a href=${t} target="_blank" class='icon-link'><img src='./images/${e}'></img></a>
      `;return W`
      <div class='external'>
        ${e("linked_in.png","https://linkedin.com/in/a-sheikh")}
        ${e("github.png","https://github.com/ahmed1785")}
      </div>
    `}link(e,t){return W`<a class='upper' href=${t} target="_blank">${e}</a>`}renderBlogs(){return eE(ex,e=>this.renderBlog(e))}renderBlog(e){return e.links.map(e=>W`<div>${this.link(e.name,e.link)}</div>`),W`
      <a class="see-more" href="#" @click="${t=>this.showFullView(t,e,"#blog")}"><div class='title'>${e.name}</div></a>
      <div class='blog'>
        <a class='img-holder' href="#" @click="${t=>this.showFullView(t,e,"#blog")}">
          <img src="./images/${e.image}"></img>
        </a>
      </div>
    `}renderVolunteerProjects(){return eE(eN,e=>this.renderVolunteerProject(e))}renderVolunteerProject(e){return e.links.map(e=>W`<div>${this.link(e.name,e.link)}</div>`),W`
        <div class='title'>${e.name}</div>
        <div class='project'>
          <a class='img-holder' href="#" @click="${t=>this.showFullView(t,e,"#volunteer")}">
            <img src="./images/${e.image}"></img>
          </a>
          <div class='info font-sm'>
            <div>${"string"==typeof e.description?e.description.substring(0,160):e.description}<a class="see-more" href="#" @click="${t=>this.showFullView(t,e,"#volunteer")}">...See More</a>
            </div>
          </div>
        </div>
    `}showFullView(e,t,i){e.preventDefault(),this.fullViewData=t,this.backLink=i,this.currentView="full-view"}goBack(e){e.preventDefault(),this.currentView="main"}closeModal(e){e.preventDefault(),this.currentView="main"}handleNavClick(e){e.preventDefault();let t=e.target.getAttribute("href");t&&(window.location.hash=t)}}o([ev()],eD.prototype,"currentView",void 0),o([ev()],eD.prototype,"fullViewData",void 0),o([ev()],eD.prototype,"backLink",void 0),o([(r="index-component",e=>"function"==typeof e?(customElements.define(r,e),e):((e,t)=>{let{kind:i,elements:s}=t;return{kind:i,elements:s,finisher(t){customElements.define(e,t)}}})(r,e))],eD);
//# sourceMappingURL=ahmed1785.github.io.6c238176.js.map
