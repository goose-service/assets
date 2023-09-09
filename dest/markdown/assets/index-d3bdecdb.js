var le=Object.defineProperty;var ae=(o,n,e)=>n in o?le(o,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[n]=e;var k=(o,n,e)=>(ae(o,typeof n!="symbol"?n+"":n,e),e),ce=(o,n,e)=>{if(!n.has(o))throw TypeError("Cannot "+e)};var H=(o,n,e)=>{if(n.has(o))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(o):n.set(o,e)};var L=(o,n,e)=>(ce(o,n,"access private method"),e);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function Z(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let S=Z();function V(o){S=o}const Y=/[&<>"']/,pe=new RegExp(Y.source,"g"),X=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,he=new RegExp(X.source,"g"),ue={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},J=o=>ue[o];function b(o,n){if(n){if(Y.test(o))return o.replace(pe,J)}else if(X.test(o))return o.replace(he,J);return o}const ge=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function de(o){return o.replace(ge,(n,e)=>(e=e.toLowerCase(),e==="colon"?":":e.charAt(0)==="#"?e.charAt(1)==="x"?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""))}const fe=/(^|[^\[])\^/g;function f(o,n){o=typeof o=="string"?o:o.source,n=n||"";const e={replace:(t,i)=>(i=typeof i=="object"&&"source"in i?i.source:i,i=i.replace(fe,"$1"),o=o.replace(t,i),e),getRegex:()=>new RegExp(o,n)};return e}function F(o){try{o=encodeURI(o).replace(/%25/g,"%")}catch{return null}return o}const j={exec:()=>null};function K(o,n){const e=o.replace(/\|/g,(s,r,l)=>{let a=!1,g=r;for(;--g>=0&&l[g]==="\\";)a=!a;return a?"|":" |"}),t=e.split(/ \|/);let i=0;if(t[0].trim()||t.shift(),t.length>0&&!t[t.length-1].trim()&&t.pop(),n)if(t.length>n)t.splice(n);else for(;t.length<n;)t.push("");for(;i<t.length;i++)t[i]=t[i].trim().replace(/\\\|/g,"|");return t}function P(o,n,e){const t=o.length;if(t===0)return"";let i=0;for(;i<t;){const s=o.charAt(t-i-1);if(s===n&&!e)i++;else if(s!==n&&e)i++;else break}return o.slice(0,t-i)}function me(o,n){if(o.indexOf(n[1])===-1)return-1;let e=0;for(let t=0;t<o.length;t++)if(o[t]==="\\")t++;else if(o[t]===n[0])e++;else if(o[t]===n[1]&&(e--,e<0))return t;return-1}function W(o,n,e,t){const i=n.href,s=n.title?b(n.title):null,r=o[1].replace(/\\([\[\]])/g,"$1");if(o[0].charAt(0)!=="!"){t.state.inLink=!0;const l={type:"link",raw:e,href:i,title:s,text:r,tokens:t.inlineTokens(r)};return t.state.inLink=!1,l}return{type:"image",raw:e,href:i,title:s,text:b(r)}}function ke(o,n){const e=o.match(/^(\s+)(?:```)/);if(e===null)return n;const t=e[1];return n.split(`
`).map(i=>{const s=i.match(/^\s+/);if(s===null)return i;const[r]=s;return r.length>=t.length?i.slice(t.length):i}).join(`
`)}class E{constructor(n){k(this,"options");k(this,"rules");k(this,"lexer");this.options=n||S}space(n){const e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){const e=this.rules.block.code.exec(n);if(e){const t=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:P(t,`
`)}}}fences(n){const e=this.rules.block.fences.exec(n);if(e){const t=e[0],i=ke(t,e[3]||"");return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline._escapes,"$1"):e[2],text:i}}}heading(n){const e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(/#$/.test(t)){const i=P(t,"#");(this.options.pedantic||!i||/ $/.test(i))&&(t=i.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){const e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:e[0]}}blockquote(n){const e=this.rules.block.blockquote.exec(n);if(e){const t=e[0].replace(/^ *>[ \t]?/gm,""),i=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(t);return this.lexer.state.top=i,{type:"blockquote",raw:e[0],tokens:s,text:t}}}list(n){let e=this.rules.block.list.exec(n);if(e){let t=e[1].trim();const i=t.length>1,s={type:"list",raw:"",ordered:i,start:i?+t.slice(0,-1):"",loose:!1,items:[]};t=i?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=i?t:"[*+-]");const r=new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`);let l="",a="",g=!1;for(;n;){let p=!1;if(!(e=r.exec(n))||this.rules.block.hr.test(n))break;l=e[0],n=n.substring(l.length);let d=e[2].split(`
`,1)[0].replace(/^\t+/,B=>" ".repeat(3*B.length)),u=n.split(`
`,1)[0],x=0;this.options.pedantic?(x=2,a=d.trimStart()):(x=e[2].search(/[^ ]/),x=x>4?1:x,a=d.slice(x),x+=e[1].length);let _=!1;if(!d&&/^ *$/.test(u)&&(l+=u+`
`,n=n.substring(u.length+1),p=!0),!p){const B=new RegExp(`^ {0,${Math.min(3,x-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),N=new RegExp(`^ {0,${Math.min(3,x-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),Q=new RegExp(`^ {0,${Math.min(3,x-1)}}(?:\`\`\`|~~~)`),G=new RegExp(`^ {0,${Math.min(3,x-1)}}#`);for(;n;){const C=n.split(`
`,1)[0];if(u=C,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),Q.test(u)||G.test(u)||B.test(u)||N.test(n))break;if(u.search(/[^ ]/)>=x||!u.trim())a+=`
`+u.slice(x);else{if(_||d.search(/[^ ]/)>=4||Q.test(d)||G.test(d)||N.test(d))break;a+=`
`+u}!_&&!u.trim()&&(_=!0),l+=C+`
`,n=n.substring(C.length+1),d=u.slice(x)}}s.loose||(g?s.loose=!0:/\n *\n *$/.test(l)&&(g=!0));let T=null,z;this.options.gfm&&(T=/^\[[ xX]\] /.exec(a),T&&(z=T[0]!=="[ ] ",a=a.replace(/^\[[ xX]\] +/,""))),s.items.push({type:"list_item",raw:l,task:!!T,checked:z,loose:!1,text:a,tokens:[]}),s.raw+=l}s.items[s.items.length-1].raw=l.trimEnd(),s.items[s.items.length-1].text=a.trimEnd(),s.raw=s.raw.trimEnd();for(let p=0;p<s.items.length;p++)if(this.lexer.state.top=!1,s.items[p].tokens=this.lexer.blockTokens(s.items[p].text,[]),!s.loose){const d=s.items[p].tokens.filter(x=>x.type==="space"),u=d.length>0&&d.some(x=>/\n.*\n/.test(x.raw));s.loose=u}if(s.loose)for(let p=0;p<s.items.length;p++)s.items[p].loose=!0;return s}}html(n){const e=this.rules.block.html.exec(n);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(n){const e=this.rules.block.def.exec(n);if(e){const t=e[1].toLowerCase().replace(/\s+/g," "),i=e[2]?e[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline._escapes,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:i,title:s}}}table(n){const e=this.rules.block.table.exec(n);if(e){const t={type:"table",raw:e[0],header:K(e[1]).map(i=>({text:i,tokens:[]})),align:e[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:e[3]&&e[3].trim()?e[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(t.header.length===t.align.length){let i=t.align.length,s,r,l,a;for(s=0;s<i;s++){const g=t.align[s];g&&(/^ *-+: *$/.test(g)?t.align[s]="right":/^ *:-+: *$/.test(g)?t.align[s]="center":/^ *:-+ *$/.test(g)?t.align[s]="left":t.align[s]=null)}for(i=t.rows.length,s=0;s<i;s++)t.rows[s]=K(t.rows[s],t.header.length).map(g=>({text:g,tokens:[]}));for(i=t.header.length,r=0;r<i;r++)t.header[r].tokens=this.lexer.inline(t.header[r].text);for(i=t.rows.length,r=0;r<i;r++)for(a=t.rows[r],l=0;l<a.length;l++)a[l].tokens=this.lexer.inline(a[l].text);return t}}}lheading(n){const e=this.rules.block.lheading.exec(n);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(n){const e=this.rules.block.paragraph.exec(n);if(e){const t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){const e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){const e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:b(e[1])}}tag(n){const e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){const e=this.rules.inline.link.exec(n);if(e){const t=e[2].trim();if(!this.options.pedantic&&/^</.test(t)){if(!/>$/.test(t))return;const r=P(t.slice(0,-1),"\\");if((t.length-r.length)%2===0)return}else{const r=me(e[2],"()");if(r>-1){const a=(e[0].indexOf("!")===0?5:4)+e[1].length+r;e[2]=e[2].substring(0,r),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let i=e[2],s="";if(this.options.pedantic){const r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);r&&(i=r[1],s=r[3])}else s=e[3]?e[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(t)?i=i.slice(1):i=i.slice(1,-1)),W(e,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:s&&s.replace(this.rules.inline._escapes,"$1")},e[0],this.lexer)}}reflink(n,e){let t;if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){let i=(t[2]||t[1]).replace(/\s+/g," ");if(i=e[i.toLowerCase()],!i){const s=t[0].charAt(0);return{type:"text",raw:s,text:s}}return W(t,i,t[0],this.lexer)}}emStrong(n,e,t=""){let i=this.rules.inline.emStrong.lDelim.exec(n);if(!i||i[3]&&t.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!t||this.rules.inline.punctuation.exec(t)){const r=[...i[0]].length-1;let l,a,g=r,p=0;const d=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(d.lastIndex=0,e=e.slice(-1*n.length+r);(i=d.exec(e))!=null;){if(l=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!l)continue;if(a=[...l].length,i[3]||i[4]){g+=a;continue}else if((i[5]||i[6])&&r%3&&!((r+a)%3)){p+=a;continue}if(g-=a,g>0)continue;a=Math.min(a,a+g+p);const u=[...n].slice(0,r+i.index+a+1).join("");if(Math.min(r,a)%2){const _=u.slice(1,-1);return{type:"em",raw:u,text:_,tokens:this.lexer.inlineTokens(_)}}const x=u.slice(2,-2);return{type:"strong",raw:u,text:x,tokens:this.lexer.inlineTokens(x)}}}}codespan(n){const e=this.rules.inline.code.exec(n);if(e){let t=e[2].replace(/\n/g," ");const i=/[^ ]/.test(t),s=/^ /.test(t)&&/ $/.test(t);return i&&s&&(t=t.substring(1,t.length-1)),t=b(t,!0),{type:"codespan",raw:e[0],text:t}}}br(n){const e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n){const e=this.rules.inline.del.exec(n);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(n){const e=this.rules.inline.autolink.exec(n);if(e){let t,i;return e[2]==="@"?(t=b(e[1]),i="mailto:"+t):(t=b(e[1]),i=t),{type:"link",raw:e[0],text:t,href:i,tokens:[{type:"text",raw:t,text:t}]}}}url(n){let e;if(e=this.rules.inline.url.exec(n)){let t,i;if(e[2]==="@")t=b(e[0]),i="mailto:"+t;else{let s;do s=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])[0];while(s!==e[0]);t=b(e[0]),e[1]==="www."?i="http://"+e[0]:i=e[0]}return{type:"link",raw:e[0],text:t,href:i,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(n){const e=this.rules.inline.text.exec(n);if(e){let t;return this.lexer.state.inRawBlock?t=e[0]:t=b(e[0]),{type:"text",raw:e[0],text:t}}}}const h={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:j,lheading:/^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};h._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;h._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;h.def=f(h.def).replace("label",h._label).replace("title",h._title).getRegex();h.bullet=/(?:[*+-]|\d{1,9}[.)])/;h.listItemStart=f(/^( *)(bull) */).replace("bull",h.bullet).getRegex();h.list=f(h.list).replace(/bull/g,h.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+h.def.source+")").getRegex();h._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";h._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;h.html=f(h.html,"i").replace("comment",h._comment).replace("tag",h._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();h.lheading=f(h.lheading).replace(/bull/g,h.bullet).getRegex();h.paragraph=f(h._paragraph).replace("hr",h.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",h._tag).getRegex();h.blockquote=f(h.blockquote).replace("paragraph",h.paragraph).getRegex();h.normal={...h};h.gfm={...h.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};h.gfm.table=f(h.gfm.table).replace("hr",h.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",h._tag).getRegex();h.gfm.paragraph=f(h._paragraph).replace("hr",h.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",h.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",h._tag).getRegex();h.pedantic={...h.normal,html:f(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",h._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:j,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:f(h.normal._paragraph).replace("hr",h.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",h.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const c={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:j,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:j,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};c._punctuation="\\p{P}$+<=>`^|~";c.punctuation=f(c.punctuation,"u").replace(/punctuation/g,c._punctuation).getRegex();c.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;c.anyPunctuation=/\\[punct]/g;c._escapes=/\\([punct])/g;c._comment=f(h._comment).replace("(?:-->|$)","-->").getRegex();c.emStrong.lDelim=f(c.emStrong.lDelim,"u").replace(/punct/g,c._punctuation).getRegex();c.emStrong.rDelimAst=f(c.emStrong.rDelimAst,"gu").replace(/punct/g,c._punctuation).getRegex();c.emStrong.rDelimUnd=f(c.emStrong.rDelimUnd,"gu").replace(/punct/g,c._punctuation).getRegex();c.anyPunctuation=f(c.anyPunctuation,"gu").replace(/punct/g,c._punctuation).getRegex();c._escapes=f(c._escapes,"gu").replace(/punct/g,c._punctuation).getRegex();c._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;c._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;c.autolink=f(c.autolink).replace("scheme",c._scheme).replace("email",c._email).getRegex();c._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;c.tag=f(c.tag).replace("comment",c._comment).replace("attribute",c._attribute).getRegex();c._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;c._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;c._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;c.link=f(c.link).replace("label",c._label).replace("href",c._href).replace("title",c._title).getRegex();c.reflink=f(c.reflink).replace("label",c._label).replace("ref",h._label).getRegex();c.nolink=f(c.nolink).replace("ref",h._label).getRegex();c.reflinkSearch=f(c.reflinkSearch,"g").replace("reflink",c.reflink).replace("nolink",c.nolink).getRegex();c.normal={...c};c.pedantic={...c.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:f(/^!?\[(label)\]\((.*?)\)/).replace("label",c._label).getRegex(),reflink:f(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",c._label).getRegex()};c.gfm={...c.normal,escape:f(c.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};c.gfm.url=f(c.gfm.url,"i").replace("email",c.gfm._extended_email).getRegex();c.breaks={...c.gfm,br:f(c.br).replace("{2,}","*").getRegex(),text:f(c.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class w{constructor(n){k(this,"tokens");k(this,"options");k(this,"state");k(this,"tokenizer");k(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||S,this.options.tokenizer=this.options.tokenizer||new E,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:h.normal,inline:c.normal};this.options.pedantic?(e.block=h.pedantic,e.inline=c.pedantic):this.options.gfm&&(e.block=h.gfm,this.options.breaks?e.inline=c.breaks:e.inline=c.gfm),this.tokenizer.rules=e}static get rules(){return{block:h,inline:c}}static lex(n,e){return new w(e).lex(n)}static lexInline(n,e){return new w(e).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);let e;for(;e=this.inlineQueue.shift();)this.inlineTokens(e.src,e.tokens);return this.tokens}blockTokens(n,e=[]){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(l,a,g)=>a+"    ".repeat(g.length));let t,i,s,r;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(t=l.call({lexer:this},n,e))?(n=n.substring(t.raw.length),e.push(t),!0):!1))){if(t=this.tokenizer.space(n)){n=n.substring(t.raw.length),t.raw.length===1&&e.length>0?e[e.length-1].raw+=`
`:e.push(t);continue}if(t=this.tokenizer.code(n)){n=n.substring(t.raw.length),i=e[e.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):e.push(t);continue}if(t=this.tokenizer.fences(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.heading(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.hr(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.blockquote(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.list(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.html(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.def(n)){n=n.substring(t.raw.length),i=e[e.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+t.raw,i.text+=`
`+t.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[t.tag]||(this.tokens.links[t.tag]={href:t.href,title:t.title});continue}if(t=this.tokenizer.table(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.lheading(n)){n=n.substring(t.raw.length),e.push(t);continue}if(s=n,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const a=n.slice(1);let g;this.options.extensions.startBlock.forEach(p=>{g=p.call({lexer:this},a),typeof g=="number"&&g>=0&&(l=Math.min(l,g))}),l<1/0&&l>=0&&(s=n.substring(0,l+1))}if(this.state.top&&(t=this.tokenizer.paragraph(s))){i=e[e.length-1],r&&i.type==="paragraph"?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):e.push(t),r=s.length!==n.length,n=n.substring(t.raw.length);continue}if(t=this.tokenizer.text(n)){n=n.substring(t.raw.length),i=e[e.length-1],i&&i.type==="text"?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):e.push(t);continue}if(n){const l="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,e}inline(n,e=[]){return this.inlineQueue.push({src:n,tokens:e}),e}inlineTokens(n,e=[]){let t,i,s,r=n,l,a,g;if(this.tokens.links){const p=Object.keys(this.tokens.links);if(p.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)p.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,l.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(a||(g=""),a=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(p=>(t=p.call({lexer:this},n,e))?(n=n.substring(t.raw.length),e.push(t),!0):!1))){if(t=this.tokenizer.escape(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.tag(n)){n=n.substring(t.raw.length),i=e[e.length-1],i&&t.type==="text"&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):e.push(t);continue}if(t=this.tokenizer.link(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(t.raw.length),i=e[e.length-1],i&&t.type==="text"&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):e.push(t);continue}if(t=this.tokenizer.emStrong(n,r,g)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.codespan(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.br(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.del(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.autolink(n)){n=n.substring(t.raw.length),e.push(t);continue}if(!this.state.inLink&&(t=this.tokenizer.url(n))){n=n.substring(t.raw.length),e.push(t);continue}if(s=n,this.options.extensions&&this.options.extensions.startInline){let p=1/0;const d=n.slice(1);let u;this.options.extensions.startInline.forEach(x=>{u=x.call({lexer:this},d),typeof u=="number"&&u>=0&&(p=Math.min(p,u))}),p<1/0&&p>=0&&(s=n.substring(0,p+1))}if(t=this.tokenizer.inlineText(s)){n=n.substring(t.raw.length),t.raw.slice(-1)!=="_"&&(g=t.raw.slice(-1)),a=!0,i=e[e.length-1],i&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):e.push(t);continue}if(n){const p="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return e}}class v{constructor(n){k(this,"options");this.options=n||S}code(n,e,t){var s;const i=(s=(e||"").match(/^\S*/))==null?void 0:s[0];return n=n.replace(/\n$/,"")+`
`,i?'<pre><code class="language-'+b(i)+'">'+(t?n:b(n,!0))+`</code></pre>
`:"<pre><code>"+(t?n:b(n,!0))+`</code></pre>
`}blockquote(n){return`<blockquote>
${n}</blockquote>
`}html(n,e){return n}heading(n,e,t){return`<h${e}>${n}</h${e}>
`}hr(){return`<hr>
`}list(n,e,t){const i=e?"ol":"ul",s=e&&t!==1?' start="'+t+'"':"";return"<"+i+s+`>
`+n+"</"+i+`>
`}listitem(n,e,t){return`<li>${n}</li>
`}checkbox(n){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(n){return`<p>${n}</p>
`}table(n,e){return e&&(e=`<tbody>${e}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+e+`</table>
`}tablerow(n){return`<tr>
${n}</tr>
`}tablecell(n,e){const t=e.header?"th":"td";return(e.align?`<${t} align="${e.align}">`:`<${t}>`)+n+`</${t}>
`}strong(n){return`<strong>${n}</strong>`}em(n){return`<em>${n}</em>`}codespan(n){return`<code>${n}</code>`}br(){return"<br>"}del(n){return`<del>${n}</del>`}link(n,e,t){const i=F(n);if(i===null)return t;n=i;let s='<a href="'+n+'"';return e&&(s+=' title="'+e+'"'),s+=">"+t+"</a>",s}image(n,e,t){const i=F(n);if(i===null)return t;n=i;let s=`<img src="${n}" alt="${t}"`;return e&&(s+=` title="${e}"`),s+=">",s}text(n){return n}}class U{strong(n){return n}em(n){return n}codespan(n){return n}del(n){return n}html(n){return n}text(n){return n}link(n,e,t){return""+t}image(n,e,t){return""+t}br(){return""}}class y{constructor(n){k(this,"options");k(this,"renderer");k(this,"textRenderer");this.options=n||S,this.options.renderer=this.options.renderer||new v,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new U}static parse(n,e){return new y(e).parse(n)}static parseInline(n,e){return new y(e).parseInline(n)}parse(n,e=!0){let t="";for(let i=0;i<n.length;i++){const s=n[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const r=s,l=this.options.extensions.renderers[r.type].call({parser:this},r);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(r.type)){t+=l||"";continue}}switch(s.type){case"space":continue;case"hr":{t+=this.renderer.hr();continue}case"heading":{const r=s;t+=this.renderer.heading(this.parseInline(r.tokens),r.depth,de(this.parseInline(r.tokens,this.textRenderer)));continue}case"code":{const r=s;t+=this.renderer.code(r.text,r.lang,!!r.escaped);continue}case"table":{const r=s;let l="",a="";for(let p=0;p<r.header.length;p++)a+=this.renderer.tablecell(this.parseInline(r.header[p].tokens),{header:!0,align:r.align[p]});l+=this.renderer.tablerow(a);let g="";for(let p=0;p<r.rows.length;p++){const d=r.rows[p];a="";for(let u=0;u<d.length;u++)a+=this.renderer.tablecell(this.parseInline(d[u].tokens),{header:!1,align:r.align[u]});g+=this.renderer.tablerow(a)}t+=this.renderer.table(l,g);continue}case"blockquote":{const r=s,l=this.parse(r.tokens);t+=this.renderer.blockquote(l);continue}case"list":{const r=s,l=r.ordered,a=r.start,g=r.loose;let p="";for(let d=0;d<r.items.length;d++){const u=r.items[d],x=u.checked,_=u.task;let T="";if(u.task){const z=this.renderer.checkbox(!!x);g?u.tokens.length>0&&u.tokens[0].type==="paragraph"?(u.tokens[0].text=z+" "+u.tokens[0].text,u.tokens[0].tokens&&u.tokens[0].tokens.length>0&&u.tokens[0].tokens[0].type==="text"&&(u.tokens[0].tokens[0].text=z+" "+u.tokens[0].tokens[0].text)):u.tokens.unshift({type:"text",text:z+" "}):T+=z+" "}T+=this.parse(u.tokens,g),p+=this.renderer.listitem(T,_,!!x)}t+=this.renderer.list(p,l,a);continue}case"html":{const r=s;t+=this.renderer.html(r.text,r.block);continue}case"paragraph":{const r=s;t+=this.renderer.paragraph(this.parseInline(r.tokens));continue}case"text":{let r=s,l=r.tokens?this.parseInline(r.tokens):r.text;for(;i+1<n.length&&n[i+1].type==="text";)r=n[++i],l+=`
`+(r.tokens?this.parseInline(r.tokens):r.text);t+=e?this.renderer.paragraph(l):l;continue}default:{const r='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return t}parseInline(n,e){e=e||this.renderer;let t="";for(let i=0;i<n.length;i++){const s=n[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const r=this.options.extensions.renderers[s.type].call({parser:this},s);if(r!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){t+=r||"";continue}}switch(s.type){case"escape":{const r=s;t+=e.text(r.text);break}case"html":{const r=s;t+=e.html(r.text);break}case"link":{const r=s;t+=e.link(r.href,r.title,this.parseInline(r.tokens,e));break}case"image":{const r=s;t+=e.image(r.href,r.title,r.text);break}case"strong":{const r=s;t+=e.strong(this.parseInline(r.tokens,e));break}case"em":{const r=s;t+=e.em(this.parseInline(r.tokens,e));break}case"codespan":{const r=s;t+=e.codespan(r.text);break}case"br":{t+=e.br();break}case"del":{const r=s;t+=e.del(this.parseInline(r.tokens,e));break}case"text":{const r=s;t+=e.text(r.text);break}default:{const r='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return t}}class R{constructor(n){k(this,"options");this.options=n||S}preprocess(n){return n}postprocess(n){return n}}k(R,"passThroughHooks",new Set(["preprocess","postprocess"]));var A,D,q,te;class ee{constructor(...n){H(this,A);H(this,q);k(this,"defaults",Z());k(this,"options",this.setOptions);k(this,"parse",L(this,A,D).call(this,w.lex,y.parse));k(this,"parseInline",L(this,A,D).call(this,w.lexInline,y.parseInline));k(this,"Parser",y);k(this,"parser",y.parse);k(this,"Renderer",v);k(this,"TextRenderer",U);k(this,"Lexer",w);k(this,"lexer",w.lex);k(this,"Tokenizer",E);k(this,"Hooks",R);this.use(...n)}walkTokens(n,e){var i,s;let t=[];for(const r of n)switch(t=t.concat(e.call(this,r)),r.type){case"table":{const l=r;for(const a of l.header)t=t.concat(this.walkTokens(a.tokens,e));for(const a of l.rows)for(const g of a)t=t.concat(this.walkTokens(g.tokens,e));break}case"list":{const l=r;t=t.concat(this.walkTokens(l.items,e));break}default:{const l=r;(s=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&s[l.type]?this.defaults.extensions.childTokens[l.type].forEach(a=>{t=t.concat(this.walkTokens(l[a],e))}):l.tokens&&(t=t.concat(this.walkTokens(l.tokens,e)))}}return t}use(...n){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(t=>{const i={...t};if(i.async=this.defaults.async||i.async||!1,t.extensions&&(t.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const r=e.renderers[s.name];r?e.renderers[s.name]=function(...l){let a=s.renderer.apply(this,l);return a===!1&&(a=r.apply(this,l)),a}:e.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const r=e[s.level];r?r.unshift(s.tokenizer):e[s.level]=[s.tokenizer],s.start&&(s.level==="block"?e.startBlock?e.startBlock.push(s.start):e.startBlock=[s.start]:s.level==="inline"&&(e.startInline?e.startInline.push(s.start):e.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(e.childTokens[s.name]=s.childTokens)}),i.extensions=e),t.renderer){const s=this.defaults.renderer||new v(this.defaults);for(const r in t.renderer){const l=t.renderer[r],a=r,g=s[a];s[a]=(...p)=>{let d=l.apply(s,p);return d===!1&&(d=g.apply(s,p)),d||""}}i.renderer=s}if(t.tokenizer){const s=this.defaults.tokenizer||new E(this.defaults);for(const r in t.tokenizer){const l=t.tokenizer[r],a=r,g=s[a];s[a]=(...p)=>{let d=l.apply(s,p);return d===!1&&(d=g.apply(s,p)),d}}i.tokenizer=s}if(t.hooks){const s=this.defaults.hooks||new R;for(const r in t.hooks){const l=t.hooks[r],a=r,g=s[a];R.passThroughHooks.has(r)?s[a]=p=>{if(this.defaults.async)return Promise.resolve(l.call(s,p)).then(u=>g.call(s,u));const d=l.call(s,p);return g.call(s,d)}:s[a]=(...p)=>{let d=l.apply(s,p);return d===!1&&(d=g.apply(s,p)),d}}i.hooks=s}if(t.walkTokens){const s=this.defaults.walkTokens,r=t.walkTokens;i.walkTokens=function(l){let a=[];return a.push(r.call(this,l)),s&&(a=a.concat(s.call(this,l))),a}}this.defaults={...this.defaults,...i}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}}A=new WeakSet,D=function(n,e){return(t,i)=>{const s={...i},r={...this.defaults,...s};this.defaults.async===!0&&s.async===!1&&(r.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),r.async=!0);const l=L(this,q,te).call(this,!!r.silent,!!r.async);if(typeof t>"u"||t===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(r.hooks&&(r.hooks.options=r),r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(t):t).then(a=>n(a,r)).then(a=>r.walkTokens?Promise.all(this.walkTokens(a,r.walkTokens)).then(()=>a):a).then(a=>e(a,r)).then(a=>r.hooks?r.hooks.postprocess(a):a).catch(l);try{r.hooks&&(t=r.hooks.preprocess(t));const a=n(t,r);r.walkTokens&&this.walkTokens(a,r.walkTokens);let g=e(a,r);return r.hooks&&(g=r.hooks.postprocess(g)),g}catch(a){return l(a)}}},q=new WeakSet,te=function(n,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const i="<p>An error occurred:</p><pre>"+b(t.message+"",!0)+"</pre>";return e?Promise.resolve(i):i}if(e)return Promise.reject(t);throw t}};const $=new ee;function m(o,n){return $.parse(o,n)}m.options=m.setOptions=function(o){return $.setOptions(o),m.defaults=$.defaults,V(m.defaults),m};m.getDefaults=Z;m.defaults=S;m.use=function(...o){return $.use(...o),m.defaults=$.defaults,V(m.defaults),m};m.walkTokens=function(o,n){return $.walkTokens(o,n)};m.parseInline=$.parseInline;m.Parser=y;m.parser=y.parse;m.Renderer=v;m.TextRenderer=U;m.Lexer=w;m.lexer=w.lex;m.Tokenizer=E;m.Hooks=R;m.parse=m;m.options;m.setOptions;m.use;m.walkTokens;m.parseInline;y.parse;w.lex;const xe=`An h1 header
============

Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**, and \`monospace\`. Itemized lists
look like:

  * this one
  * that one
  * the other one

----

Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.

> ### Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.
>
> \`\`\`
> const foo = 'bar';
> \`\`\`

Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all
in chapters 12--14"). Three dots ... will be converted to an ellipsis.
Unicode is supported. ☺

| name   | type    | value | comment       |
|--------|---------|-------|---------------|
| apple  | string  | ''    | red apple     |
| banana | number  | 2     | yellow banana xxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxx |
| mango  | boolean | false | green mango   |

An h2 header
------------

Here's a numbered list:

 1. first item
 2. second item
 3. third item

Note again how the actual text starts at 4 columns in (4 characters
from the left side). Here's a code sample:

    # Let me re-iterate ...
    for i in 1 .. 10 { do-something(i) }

As you probably guessed, indented 4 spaces. By the way, instead of
indenting the block, you can use delimited blocks, if you like:

~~~
define foobar() {
    print "Welcome to flavor country!";
}
~~~

(which makes copying & pasting easier). You can optionally mark the
delimited block for Pandoc to syntax highlight it:

~~~python
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print(i)
~~~



### An h3 header

#### An h4 header

Now a nested list:

 1. First, get these ingredients:

      * carrots
      * celery
      * lentils

 2. Boil some water.

 3. Dump everything in the pot and follow
    this algorithm:

        find wooden spoon
        uncover pot
        stir
        cover pot
        balance wooden spoon precariously on pot handle
        wait 10 minutes
        goto first step (or shut off burner when done)

    Do not bump wooden spoon or it will fall.

Notice again how text always lines up on 4-space indents (including
that last line which continues item 3 above).

Here's a link to [a website](https://google.com), and to a [section heading in the current
doc](#an-h2-header). Here's a footnote [^1].

[^1]: Some footnote text.

Tables can look like this:

Name           Size  Material      Color
------------- -----  ------------  ------------
All Business      9  leather       brown
Roundabout       10  hemp canvas   natural
Cinderella       11  glass         transparent

Table: Shoes sizes, materials, and colors.

(The above is the caption for the table.) Pandoc also supports
multi-line tables:

| Keyword |   Text |
|-----|-----------------------|
| red | Sunsets, apples, and other red or reddish things. |
| green | Leaves, grass, frogs and other things it's not easy being. |
|--------|-----------------------|

A horizontal rule follows.

***

Here's a definition list:

apples: Good for making applesauce.  
oranges: Citrus!
tomatoes: There's no "e" in tomatoe.
Again, text is indented 4 spaces. (Put a blank line between each term and  its definition to spread things out more.)  
Here's a "line block" (note how whitespace is honored):

| Line one  
| Line too  
| Line tree

and images can be specified like so:

![example image](https://images.unsplash.com/photo-1665442580803-b35184c7de0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60 "An exemplary image")

Inline math equation: \`$\\omega = d\\phi / dt$\`.  
Display math should get its own line like so:

\`\`\`
$$I = \\int \\rho R^{2} dV$$
\`\`\`

And note that you can backslash-escape any punctuation characters
which you wish to be displayed literally, ex.: \`foo, bar\`, etc.

## iframe example

비디오 집어넣는 요소 테스트

<div class="iframe">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ASCMw-UCafA?si=2gJQZQaPcqCzrI5s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
`,be=`[공통] 마크다운 markdown 작성법
======================

## 1. 마크다운에 관하여

### 1.1. 마크다운이란?

[**Markdown**](http://whatismarkdown.com/)은 텍스트 기반의 마크업언어로 2004년 존그루버에 의해 만들어졌으며 쉽게 쓰고 읽을 수 있으며 HTML로 변환이 가능하다. 특수기호와 문자를 이용한 매우 간단한 구조의 문법을 사용하여 웹에서도 보다 빠르게 컨텐츠를 작성하고 보다 직관적으로 인식할 수 있다.
마크다운이 최근 각광받기 시작한 이유는 깃헙([https://github.com](https://github.com)) 덕분이다. 깃헙의 저장소Repository에 관한 정보를 기록하는 README.md는 깃헙을 사용하는 사람이라면 누구나 가장 먼저 접하게 되는 마크다운 문서였다. 마크다운을 통해서 설치방법, 소스코드 설명, 이슈 등을 간단하게 기록하고 가독성을 높일 수 있다는 강점이 부각되면서 점점 여러 곳으로 퍼져가게 된다.

### 1.2. 마크다운의 장-단점

#### 1.2.1. 장점

1. 간결하다.
2. 별도의 도구없이 작성가능하다.
3. 다양한 형태로 변환이 가능하다.
4. 텍스트(Text)로 저장되기 때문에 용량이 적어 보관이 용이하다.
5. 텍스트파일이기 때문에 버전관리시스템을 이용하여 변경이력을 관리할 수 있다.
6. 지원하는 프로그램과 플랫폼이 다양하다.

#### 1.2.2. 단점

1. 표준이 없다.
2. 표준이 없기 때문에 도구에 따라서 변환방식이나 생성물이 다르다.
3. 모든 HTML 마크업을 대신하지 못한다.

****

## 2. 마크다운 사용법(문법)

### 2.1. 헤더Headers

#### 큰제목: 문서 제목

\`\`\`
This is an H1
=============
\`\`\`

This is an H1
=============

#### 작은제목: 문서 부제목

\`\`\`
This is an H2
-------------
\`\`\`

This is an H2
-------------

#### 글머리: 1~6까지만 지원

\`\`\`
# This is a H1
## This is a H2
### This is a H3
#### This is a H4
##### This is a H5
###### This is a H6
\`\`\`

# This is a H1
## This is a H2
### This is a H3
#### This is a H4
##### This is a H5
###### This is a H6
####### This is a 7.

### 2.2. BlockQuote

이메일에서 사용하는 \`>\` 블럭인용문자를 이용한다.

\`\`\`
> This is a blockqute.
\`\`\`

> This is a first blockqute.
>	> This is a second blockqute.
>	>	> This is a third blockqute.

이 안에서는 다른 마크다운 요소를 포함할 수 있다.

> ### This is a H3
> * List
>	\`\`\`
>	code
>	\`\`\`

### 2.3. 목록

#### 순서있는 목록(번호)

순서있는 목록은 숫자와 점을 사용한다.

\`\`\`
1. 첫번째
2. 두번째
3. 세번째
\`\`\`

1. 첫번째
2. 두번째
3. 세번째

**현재까지는 어떤 번호를 입력해도 순서는 내림차순으로 정의된다.**

\`\`\`
1. 첫번째
3. 세번째
2. 두번째
\`\`\`

1. 첫번째
3. 세번째
2. 두번째

딱히 개선될 것 같지는 않다. 존 그루버가 신경안쓰고 있다고...

#### 순서없는 목록(글머리 기호)

\`\`\`
* 빨강  
  * 녹색
    * 파랑

+ 빨강
  + 녹색
    + 파랑

- 빨강
  - 녹색
    - 파랑
\`\`\`
* 빨강
  * 녹색
    * 파랑

+ 빨강
  + 녹색
    + 파랑

- 빨강
  - 녹색
    - 파랑

혼합해서 사용하는 것도 가능하다(내가 선호하는 방식)

\`\`\`
* 1단계
  - 2단계
    + 3단계
      = 4단계
\`\`\`

* 1단계
  - 2단계
    + 3단계
      = 4단계

### 2.4. 코드 \`<pre><code></code></pre>\`

4개의 공백 또는 하나의 탭으로 들여쓰기를 만나면 변환되기 시작하여 들여쓰지 않은 행을 만날때까지 변환이 계속된다.

> 한줄 띄어쓰면 인식이 제대로 안되는 문제가 발생하곤 합니다.

\`\`\`
<pre>
<code>
This is a normal paragraph:
    This is a code block.
end code block.
</code>
</pre>
\`\`\`

실제로 적용해보면,
This is a normal paragraph:

    This is a code block.
end code block.

### 2.5. 수평선 \`<hr/>\`

아래 줄은 모두 수평선을 만든다. 마크다운 문서를 미리보기로 출력할 때 *페이지 나누기* 용도로 많이 사용한다.

\`\`\`
* * *

***

*****

- - -

---------------------------------------
\`\`\`

* * *

***

*****

- - -

---------------------------------------


### 2.6. 링크

- 참조링크
  \`\`\`
  [link keyword][id]
  [id]: URL "Optional Title here"
  
  Link: [Google][googlelink]
  [googlelink]: https://google.com "Go google"
  \`\`\`
  Link: [Google][googlelink]
  [googlelink]: https://google.com "Go google"
- 인라인 링크  
  \`\`\`
  syntax: [Title](link)
  \`\`\`
  Link: [Google](https://google.com, "google link")

#### 자동연결
\`\`\`
<http://example.com/>
<address@example.com>
\`\`\`

<http://example.com/>
<address@example.com>

### 2.7. 강조
\`\`\`
*single asterisks*
_single underscores_
**double asterisks**
__double underscores__
++underline++
~~cancelline~~
\`\`\`
*single asterisks*
_single underscores_
**double asterisks**
__double underscores__
++underline++
~~cancelline~~

### 2.8. 이미지

\`\`\`
![Alt text](/path/to/img.jpg)
![Alt text](/path/to/img.jpg "Optional title")
\`\`\`

![석촌호수 러버덕](http://cfile6.uf.tistory.com/image/2426E646543C9B4532C7B0)
![석촌호수 러버덕](http://cfile6.uf.tistory.com/image/2426E646543C9B4532C7B0 "RubberDuck")

사이즈 조절 기능은 없기 때문에 \`<img width="" height=""></img>\`를 이용한다.

예
\`\`\`
<img src="/path/to/img.jpg" width="450px" height="300px" title="px(픽셀) 크기 설정" alt="RubberDuck"></img><br/>
<img src="/path/to/img.jpg" width="40%" height="30%" title="px(픽셀) 크기 설정" alt="RubberDuck"></img>
\`\`\`

<img src="http://cfile6.uf.tistory.com/image/2426E646543C9B4532C7B0" width="450px" height="300px" title="px(픽셀) 크기 설정" alt="RubberDuck"/>
<img src="http://cfile6.uf.tistory.com/image/2426E646543C9B4532C7B0" width="40%" height="30%" title="%(비율) 크기 설정" alt="RubberDuck"/>

****

## 3. 마크다운 사용기

### 3.1. 위지윅(WSYWIG) 에디터

우리가 흔하게 접하는 웹에서 사용되는 에디터(네이버, 다음, 구글 등)이 대부분 이지웍 에디터에 속하며 기본적으로 HTML을 이용하여 스타일을 적용하여 문장을 꾸미는 형태를 취하게 된다. 그래서 하루패드와 같은 마크다운 에디터의 View 영역의 내용을 복사하여 붙여넣기를 하면 대체적으로 View영역에서 보이는 그대로 복사되는 편이다. 다만, 붙여넣기 이후에 문장들을 수정하려고 할 떄 문제가 되는데, 이는 스타일이 포함된 태그가 수정과정에서 변형되면서 전체적인 영향을 끼치는 탓이다. 티스토리 블로그에서는 쉽지 않고... 워드프레스의 경우에는 마크다운으로 작성된 포스트를 HTML로 변환해주는 기능을 활용하는 것이 좋다.
결론은, **복사해서 붙여넣기하면 가급적이면 본문은 수정하지 않는 것이 좋다.**

### 3.2. 깃헙Github, 비트버킷Bitbucket과 요비Yobi 등

최근 유행하는 협업개발플랫폼의 경우에는 마크다운을 변환하는 컨버터 기능을 기본탑재하고 있기 때문에 마크다운 문법으로 작성한 텍스트를 그대로 복사해서 붙여넣거나 업로드하는 것만으로 마크다운의 적용이 가능하다.

### 3.3. MS워드 적용

View 영역의 항목을 그대로 붙여넣거나 HTML 내보내기 등으로 생성한 파일을 불러오는 형태로 사용가능하다. 적용한 헤더를 워드가 읽어드리면서 목차에 적용하기 때문에 이를 활용하면 목차까지도 손쉽게 적용이 가능해진다.

****

## 4. 정리
마크다운은 기본문법만 알고 있다면 일반 텍스트편집기에서도 손쉽게 작성이 가능한 마크업언어다. 현재 다양한 도구와 플랫폼에서 지원하고 있기 때문에 더욱 손쉽게 스타일적용된 문서를 작성할 수 있기 때문에 점점 널리 사용되고 있다. 마크다운을 이해하고 사용하면서 쉽고 빠르게 스타일문서를 작성해보세요.
저는 Dropbox 프로를 구매해서 집-랩탑-스마트폰이 각각 연동을 시켜서 사용하고 있습니다. 드랍박스에 저장된 마크다운 문서는 Dropbox 웹서비스 상에서 제공하기 때문에 웹상에서 바로 열람할 수도 있어 링크를 걸어서 다른 사람과 공유하는 형식으로 사용하고 있다.

* 링크 예: [Markdown 설명](https://www.dropbox.com/s/1e7hbtd0yr0egft/20141021_markdown_use_tip.md?dl=0)


## 참고문서

* [78 Tools for writing and previewing Markdown](http://mashable.com/2013/06/24/markdown-tools/)
* [John gruber 마크다운 번역](http://nolboo.github.io/blog/2013/09/07/john-gruber-markdown/)
* [깃허브 취향의 마크다운 번역](http://nolboo.github.io/blog/2014/03/25/github-flavored-markdown/)
* [허니몬의 마크다운 작성법](http://www.slideshare.net/ihoneymon/ss-40575068)
`,we=`<picture>
<source srcset="https://goose.redgoose.me/data/upload/original/202106/slideshow-001-dark.png" media="(prefers-color-scheme: dark)"/>
<source srcset="https://goose.redgoose.me/data/upload/original/202106/slideshow-001-light.png" media="(prefers-color-scheme: light)"/>
<img src="https://goose.redgoose.me/data/upload/original/202106/slideshow-001-light.png" alt=""/>
</picture>

- date: 2019-02-24
- position: design, front and develop
- tool: phpstorm, sketchapp, balsamiq mockup

회사 개발자가 서비스를 운영하기 위하여 만든 관리자 프로그램을 사용하고 있었다. 시간이 점차 지나가고 점점 관리해야 할 것들이 많아지면서 사용하는데 불만이 많아지기 시작했다.
무엇보다 UI가 엄청 불편해서 사용하는데 지장이 생기는 것들이 한둘이 아니었고, 가면 갈수록 복잡해지기만 하는 모습을 보고 먼저 나서서 관리자를 다시 만들 계획을 하게 되었다.

시작은 짬나는 시간에 조금씩 구상을 하고 어떤 프로그램을 베이스로 할것인지와 어떤 UI 프레임워크를 사용 할 것인지를 고민하는데 꽤 시간이 걸렸다.

최종적으로는 \`vue.js\`와 \`element-ui\`를 사용하게 되었다.
편하고 빠르게 개발을 해서 사용할 수 있다는 것을 중요하게 여기다보니 쉽고 빠르게 개발 가능한 \`vue.js\`로 사용하기로 마음먹고, \`vue.js\`에서 사용할 수 있고, 많은 기능을 가진 UI 프레임워크들을 찾아보니 \`element-ui\` 가 가장 나아 보였다.

그래서 최종적으로 정해진 스택들은 다음과 같다.

- vue.js
- elements-ui
- scss

### 작품 목록에 대한 구상

관리자로 무엇을 할 것인지에 대하여 역할을 미리 정해두는 것이 가장 중요하다고 생각했다.
처음 구상하기 시작할때 적어도 작품 검색이 편했으면 하는 바램이 가장컷다. 그리고 검색한 작품으로 또다른 기능에 활용하는 재료로 사용했으면 좋겠다고 생각했다.

![bbuzzart-manager-001.jpg](https://goose.redgoose.me/data/upload/original/201905/bbuzzart-manager-001.jpg)

작품이라는 것은 명확하게 키워드로 제목이나 내용을 검색하기엔 애매한 주제다.
쇼핑몰의 상품같이 사진을 객관적으로 설명할 수 없는 것들이 대부분이다. 그래서 느낌의 표현에 대한 단서들을 통하여 필터링 해내는것이 이상적이라고 생각한다. 키워드, 색깔, 단어, 장르 같은 것들을 서로 교집합을 통하여 원하는 취향으로 작품을 뽑아내는것을 목표로 잡고 있었다.

## Design

디테일한 UI 디자인은 \`element-ui\`가 해결해 주지만 레이아웃 디자인은 직접 만들기로 하고 레이아웃 네비게이션 부분만 \`sketchApp\` 툴을 이용하여 만들었다.

요소가 많고, 무거운 색을 사용하게 된다면 사용하는데 부담감이 느껴질거라는 생각에 가볍고 단순한 레이아웃으로 만들어 보기로 했다.

![bbuzzart-manager-002.jpg](https://goose.redgoose.me/data/upload/original/201905/bbuzzart-manager-002.jpg)

내부 컨텐츠 영역에서는 \`element-ui\`를 통해서 UI를 만들 예정이어서 \`balsamiq mockup\`툴을 이용하여 와이어프레임 형태로 UI 형태만 빠르게 그리고, 바로 마크업하고, 개발하였다.

![bbuzzart-manager-003.jpg](https://goose.redgoose.me/data/upload/original/201905/bbuzzart-manager-003.jpg)

UI 프레임워크는 실질적으로 사용해본것은 처음이라서 처음 사용할때는 꽤 편해보였다.

## Development

본격적으로 개발을 시작하기전에 먼저 \`vue.js\` 를 이용하여 환경설정을 시작했다.
대부분 \`nuxt.js\` 로 작업을 하다가 \`vue-cli\`를 통하여 개발환경을 만들어보니 상대적으로 직접 커스터마이즈를 많이 할 수 있어보였다. 다르게 말하자면 환경을 만드는데 손이 많이 간다고 할 수 있다.

![bbuzzart-manager-004.png](https://goose.redgoose.me/data/upload/original/201905/bbuzzart-manager-004.png)

디테일하게 view, store, assets, router 부분들의 영역을 배분하는데 꽤 고민을 했다. 이런것들을 잘 설계를 해둬야지 기능이 계속 추가될 때 쉽게 만들 수 있거나 구조가 꼬이지 않을 것이다.
특히 router 부분에서 직접 map을 만들어 컴포넌트로 연결해줘야 하는 방식이 꽤 번거롭게 느껴졌다. (계속 \`nuxt.js\`만 사용해 왔으므로..)

### Markup & Styling

레이아웃 부분은 구조가 단순하고, ui 프레임워크를 사용하기에 애매한 부분이 많아서 직접 만들었다.
대신 컨텐츠 부분에서의 마크업과 컴포넌트 제작 부분에 관해서는 상당히 쉽게 만들어나갈 수 있었다.

![bbuzzart-manager-006.jpg](https://goose.redgoose.me/data/upload/original/201905/bbuzzart-manager-006.jpg)

작은 단위의 컴포넌트는 대부분 \`element-ui\` 프레임워크가 담당하였고(button, text-input, checkbox, switch..), 이것들을 조합하여 레이아웃을 뼈대가 되는 컴포넌트를 만드는것부터 시작하여 페이지가 되는 view 영역의 컴포넌트들을 만들어갔다.

![bbuzzart-manager-005.png](https://goose.redgoose.me/data/upload/original/201905/bbuzzart-manager-005.png)

개인적으로 느끼기엔 \`element-ui\` 의 grid 시스템은 꽤 불편했다.
기초적인 베이스는 \`flex\`가 아닌 \`floating\` 방식으로 만들어져 있지만 속성값으로 \`flex\` 방식으로 바꾸어줄 수 있다.
요즘에는 flex 형식으로 만들고 있다보니 일일히 속성값을 넣어줘야 한다는 점과 \`flex\` 의 속성값들이 제대로 지원해주지 않는다는 인상을 많이 가지고 있다. 그리고 기본 엘리먼트로 사용해도 되는데도 그리드 레이아웃을 위하여 커스텀 컴포넌트를 사용해야 한다는점도 별로 마음에 들진 않는다.
그래서 특수한 레이아웃의 모습을 가진 컴포넌트는 기본 엘리먼트로 마크업하고 컴포넌트 레벨에서 스타일시트를 따로 작성했다.

### List view

개인적으로 가장 중요하게 생각하고 가장 많이 신경을 쓴 부분이 목록 부분이라고 할 수 있다.

목록에서의 요소는 작품, 회원, 컨텐츠등.. 다양한 요소로 이루어진다.
나중에 깨닫게 되었지만 성격이 다른 요소들을 목록화 시키는 부분에서 어려웠던 점은 통일성이라고 볼 수 있다. 목록의 요소 부분은 컴포넌트화 시켜 다양하게 사용할 수 있으면서 알아보기 쉽게 만드는데 노력했다.

![bbuzzart-manager-007.jpg](https://goose.redgoose.me/data/upload/original/201905/bbuzzart-manager-007.jpg)

하나의 크게 시행착오를 겪은 부분은 검색에 관련된 인터페이스 부분이었는데, 처음 생각으로는 필터링 2,3개와 키워드 검색부분만 넣고 나머지는 확장필터라는 형태로 별도의 화면으로 필터링 인터페이스를 만들 계획으로 필터링 영역을 가로로 배치시켰다.

나중에 조금씩 만들어보니 가로로 배치되어있는 필터링이 화면 스크롤로 내리다보면 안보이게 되어 사용에 불편하다는것을 깨닫게 되었다.
이미 컨텐츠 몇개는 만들어져 있는 상태에서 다시 되돌아가서 고치는건 시간적인 소모가 많아서 새로 만들어지는 부분에서 먼저 사용하고 나중에 시간날때 하나씩 다시 리팩토링을 하게 되었다.

![bbuzzart-manager-008.jpg](https://goose.redgoose.me/data/upload/original/201905/bbuzzart-manager-008.jpg)

최종적으로는 목록 오른쪽 사이드 영역으로 배치하고 목록이 스크롤이 되더라도 위치가 그대로 유지할 수 있도록 고정시켰다. 이렇게 고정시켜보니 필터의 값을 변경하고 업데이트된 목록을 확인하고 다시 필터를 바꾸기가 굉장히 쉬워졌다.

### Connect with API

API 연동에 대해서는 기술적으로 그다지 어렵게 만들지는 않았다.

접속할때 로그인한 토큰값으로 검사하고 토큰값을 헤더에 집어넣어서 요청할때 같이 보낸다. API 주소와 그에대한 설명, 파라메터와 결과값 정보는 서버 개발자가 [swagger](https://swagger.io) 도구를 이용하여 팀에게 공유해 주었다.

서버 개발자가 관리자 기능 추가 요청을 할때도 있고, 기획이나 디자인을 한 다음에 서버 개발자에게 기능 추가 요청을 할때가 있는데 그럴때는 서로 대화를 하면서 대략적으로 와이어프레임을 그린다.

![bbuzzart-manager-009.jpg](https://goose.redgoose.me/data/upload/original/201905/bbuzzart-manager-009.jpg)

백엔드와 프론트엔드의 대략적인 작업과정은 다음과 같다.

1. 어떤 형태와 흐름으로 구성할지에 대하여 확정을 짓는다.
2. 화면을 만드는 프론트엔드 개발과 API 개발을 하는 백엔드 개발이 동시에 이루어진다.
3. API 제작이 끝나면 프론트엔드에서 API 요청을 하여 결과값을 확인한다.
4. API 요청을 하여 받은 값들을 화면을 만든 곳에다 넣어주면서 컨트롤 부분들을 디테일하게 만들면서 마무리 짓는다.

기능 하나하나의 마무리는 API 연동 후 내부 테스트를 끝내면 실제 서버로 업데이트를 하게된다.

## End

처음 서비스 관리자를 만들게 된 계기는 기존에 사용하는 관리자가 너무나도 불편해 보였고, 완성도가 떨어져 보여서 내손으로 만들어보고 싶은 의욕이 생겨서 시작하게 되었다.

주요 기능들은 다 만들어진 상태고, 그 이후로 어떻게 기능이 더 늘어나게 되는지는 모르겠지만 잘 쓰였으면 좋겠다.

![bbuzzart-manager-010.jpg](https://goose.redgoose.me/data/upload/original/201905/bbuzzart-manager-010.jpg)

특히 UI에 관해서는 UI 프레임워크를 사용했지만 그것을 활용하는 부분에도 결국 많은 고민과 노력이 필요했다.

보통 재미없는 작업이라고 생각하지만 나름대로 혼자 구상부터 디자인, 프론트엔드 제작까지 모두 만들어낼 수 있어서 재미있게 작업했다.`,ye=`
## grid-item solo

단독으로 사용할때의 예제

<figure class="grid-item" data-mobile="2">
<p><img src="https://goose.redgoose.me/data/upload/original/202306/TRON_Lightcycle-Run_stillion-00165.webp" alt="TRON_Lightcycle-Run_stillion-00165.webp"/></p>
<p><img src="https://goose.redgoose.me/data/upload/original/202305/AI_A_close-up_of_a_dragon_sculpture_made_of_jadeJadeJellyEx_a49035c7-2d53-4cd0-a9a3-5f4b99da8477.png" alt=""/></p>
</figure>


## responsive

반응형 사이즈일때 사용하는 예제

<figure class="grid-item" data-mobile="1" data-tablet="2" data-desktop="3" data-desktop-large="4" data-ratio="21/9" data-ratio-desktop="4/3">
<p><img src="https://goose.redgoose.me/data/upload/original/202306/TRON_Lightcycle-Run_stillion-00165.webp" alt="TRON_Lightcycle-Run_stillion-00165.webp"/></p>
<p><img src="https://goose.redgoose.me/data/upload/original/202305/AI_A_close-up_of_a_dragon_sculpture_made_of_jadeJadeJellyEx_a49035c7-2d53-4cd0-a9a3-5f4b99da8477.png" alt=""/></p>
<p><img src="https://goose.redgoose.me/data/upload/original/202305/864a27169821967-64535d45f32e9.jpg" alt=""/></p>
<p><img src="https://goose.redgoose.me/data/upload/original/202010/rg-20171021-000538.jpg" alt=""/></p>
<p><img src="https://goose.redgoose.me/data/upload/original/202103/rg-20180616-000192.jpg" alt=""/></p>
<p><img src="https://goose.redgoose.me/data/upload/original/202101/rg-20180526-000156.jpg" alt=""/></p>
</figure>


## column

컬럼에서의 값 조정

<figure class="grid-item" data-mobile="4" data-ratio="4/6">
<p col="4" col-tablet="2"><img src="https://goose.redgoose.me/data/upload/original/202305/AI_A_close-up_of_a_dragon_sculpture_made_of_jadeJadeJellyEx_a49035c7-2d53-4cd0-a9a3-5f4b99da8477.png" alt=""/></p>
<p col="4" col-tablet="2"><img src="https://goose.redgoose.me/data/upload/original/202305/864a27169821967-64535d45f32e9.jpg" alt=""/></p>
</figure>
`,_e=Object.freeze(Object.defineProperty({__proto__:null,ex1:xe,ex2:be,ex3:we,ex4:ye},Symbol.toStringTag,{value:"Module"}));const Te=new ee({gfm:!0,breaks:!0,silent:!0}),ne=document.querySelector("html"),ze=document.getElementById("content"),M=document.getElementById("nav-examples"),O=document.getElementById("nav-theme"),ie="assets-markdown",I=new Proxy(Re(),{get:(o,n)=>o[n],set:(o,n,e)=>{if(o[n]===e)return!0;switch(o[n]=e,n){case"example":se(e);break;case"theme":re(e);break}return!0}});function $e(o){I.example=o.currentTarget.dataset.name}function Se(o){I.theme=o.currentTarget.dataset.theme}function se(o,n=!0){ze.innerHTML=String(Te.parse(_e[o]));const e=M.querySelector(`button[data-name=${o}]`);for(const t of M.querySelectorAll("button"))t.removeAttribute("disabled");e.setAttribute("disabled","disabled"),ne.scrollTo(0,0),n&&oe()}function re(o,n=!0){ne.dataset.theme=o;const e=O.querySelector(`button[data-theme=${o}]`);for(const t of O.querySelectorAll("button"))t.removeAttribute("disabled");e.setAttribute("disabled","disabled"),n&&oe()}function Re(){try{const o=window.localStorage.getItem(ie);if(!o)throw"no-storage";return JSON.parse(o)}catch{return{example:"ex1",theme:"system"}}}function oe(){window.localStorage.setItem(ie,JSON.stringify(I))}for(const o of M.querySelectorAll("button"))o.addEventListener("click",$e);for(const o of O.querySelectorAll("button"))o.addEventListener("click",Se);se(I.example,!1);re(I.theme,!1);
