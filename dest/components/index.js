(function (g, f) {
    if ("object" == typeof exports && "object" == typeof module) {
      module.exports = f();
    } else if ("function" == typeof define && define.amd) {
      define("Goose", [], f);
    } else if ("object" == typeof exports) {
      exports["Goose"] = f();
    } else {
      g["Goose"] = f();
    }
  }(this, () => {
var exports = {};
var module = { exports };
var i=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var n=Object.prototype.hasOwnProperty;var m=(r,t)=>{for(var e in t)i(r,e,{get:t[e],enumerable:!0})},g=(r,t,e,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of h(t))!n.call(r,s)&&s!==e&&i(r,s,{get:()=>t[s],enumerable:!(a=c(t,s))||a.enumerable});return r};var p=r=>g(i({},"__esModule",{value:!0}),r);var b={};m(b,{DarkModeImage:()=>d});module.exports=p(b);var l=`.dark-mode-image{--display-img-light: block;--display-img-dark: none;margin:0;box-sizing:border-box;>img{max-width:100%;box-sizing:border-box;&[data-type=light]{display:var(--display-img-light)}&[data-type=dark]{display:var(--display-img-dark)}}&[data-theme=dark]{--display-img-light: none;--display-img-dark: block}@media (prefers-color-scheme: dark){&:not([data-theme=light]){--display-img-light: none;--display-img-dark: block}}}
`;var o=class extends HTMLElement{#t;constructor(){super(),this.attachShadow({mode:"open"});let t=document.createElement("template");t.innerHTML='<figure class="dark-mode-image"></figure>';let e=new CSSStyleSheet;e.replaceSync(l),this.shadowRoot.appendChild(t.content.cloneNode(!0)),this.shadowRoot.adoptedStyleSheets=[e],this.root=this.shadowRoot.childNodes[0]}static get observedAttributes(){return["src-light","src-dark","alt"]}get props(){return{srcLight:this.getAttribute("src-light"),srcDark:this.getAttribute("src-dark"),alt:this.getAttribute("alt")}}attributeChangedCallback(t,e,a){if(e!==a)switch(t){case"src-light":case"src-dark":this.#a(t,a);break;case"alt":this.#s(a);break}}connectedCallback(){let t=document.querySelector("html");this.#t=new MutationObserver(e=>{e.forEach(a=>{let s=a.attributeName;a.type!=="attributes"||s!=="data-theme"||this.#e(a.target.getAttribute(s))})}),this.#t.observe(t,{attributes:!0}),this.#e(t.dataset.theme)}disconnectedCallback(){this.#t.disconnect()}#a(t,e){t=t.replace(/^src-/,"");let a=this.root.querySelector(`img[data-type='${t}']`);if(a)a.src=e;else{let s=new Image;s.src=e,s.dataset.type=t,s.setAttribute("alt",this.props.alt||""),this.root.appendChild(s)}}#s(t){let e=this.root.querySelectorAll("img");for(let a of e)a.alt=t}#e(t){this.root.dataset.theme=t}},d=o;
if (typeof module.exports == "object" && typeof exports == "object") {
  var __cp = (to, from, except, desc) => {
    if ((from && typeof from === "object") || typeof from === "function") {
      for (let key of Object.getOwnPropertyNames(from)) {
        if (!Object.prototype.hasOwnProperty.call(to, key) && key !== except)
        Object.defineProperty(to, key, {
          get: () => from[key],
          enumerable: !(desc = Object.getOwnPropertyDescriptor(from, key)) || desc.enumerable,
        });
      }
    }
    return to;
  };
  module.exports = __cp(module.exports, exports);
}
return module.exports;
}))
