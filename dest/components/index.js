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
var o=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var h=Object.prototype.hasOwnProperty;var g=(s,t)=>{for(var e in t)o(s,e,{get:t[e],enumerable:!0})},c=(s,t,e,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of l(t))!h.call(s,i)&&i!==e&&o(s,i,{get:()=>t[i],enumerable:!(a=m(t,i))||a.enumerable});return s};var u=s=>c(o({},"__esModule",{value:!0}),s);var b={};g(b,{DarkModeImage:()=>n});module.exports=u(b);var d=`.dark-mode-image{--display-img-light: block;--display-img-dark: none;display:inline;margin:0;box-sizing:border-box;>img{margin:var(--goose-dmi-margin, unset);width:var(--goose-dmi-width, unset);height:var(--goose-dmi-height, unset);position:var(--goose-dmi-position, unset);left:var(--goose-dmi-left, unset);transform:var(--goose-dmi-transform, unset);max-width:var(--goose-dmi-max-width, 100%);max-height:var(--goose-dmi-max-height, unset);object-fit:var(--goose-dmi-object-fit, unset);transform-origin:var(--goose-dmi-transform-origin, unset);zoom:var(--goose-dmi-zoom, unset);background:var(--goose-dmi-background, unset);box-sizing:border-box;&[data-type=light]{display:var(--display-img-light)}&[data-type=dark]{display:var(--display-img-dark)}}&[data-theme=dark]{--display-img-light: none;--display-img-dark: block}@media (prefers-color-scheme: dark){&:not([data-theme=light]){--display-img-light: none;--display-img-dark: block}}}
`;var r=class extends HTMLElement{#t;constructor(){super(),this.attachShadow({mode:"open"});let t=document.createElement("template");t.innerHTML='<figure class="dark-mode-image"></figure>';let e=new CSSStyleSheet;e.replaceSync(d),this.shadowRoot.appendChild(t.content.cloneNode(!0)),this.shadowRoot.adoptedStyleSheets=[e],this.root=this.shadowRoot.childNodes[0]}static get observedAttributes(){return["src-light","src-dark","alt"]}get props(){return{srcLight:this.getAttribute("src-light"),srcDark:this.getAttribute("src-dark"),alt:this.getAttribute("alt")}}attributeChangedCallback(t,e,a){if(e!==a)switch(t){case"src-light":case"src-dark":this.#a(t,a);break;case"alt":this.#i(a);break}}connectedCallback(){let t=document.querySelector("html");this.#t=new MutationObserver(e=>{e.forEach(a=>{let i=a.attributeName;a.type!=="attributes"||i!=="data-theme"||this.#e(a.target.getAttribute(i))})}),this.#t.observe(t,{attributes:!0}),this.#e(t.dataset.theme)}disconnectedCallback(){this.#t.disconnect()}#a(t,e){t=t.replace(/^src-/,"");let a=this.root.querySelector(`img[data-type='${t}']`);if(a)a.src=e;else{let i=new Image;i.src=e,i.dataset.type=t,i.setAttribute("alt",this.props.alt||""),this.root.appendChild(i)}}#i(t){let e=this.root.querySelectorAll("img");for(let a of e)a.alt=t}#e(t){this.root.dataset.theme=t||""}},n=r;
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
