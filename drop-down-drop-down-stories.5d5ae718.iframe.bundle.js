"use strict";(self.webpackChunk_freecodecamp_ui=self.webpackChunk_freecodecamp_ui||[]).push([[886],{"./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/hooks/use-outside-click.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>y});var react=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js"),focus_management=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/utils/focus-management.js"),platform=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/utils/platform.js"),use_latest_value=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/hooks/use-latest-value.js");function d(e,r,n){let o=(0,use_latest_value.Y)(r);(0,react.useEffect)((()=>{function t(u){o.current(u)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)}),[e,n])}var use_window_event=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/hooks/use-window-event.js");function y(s,m,a=!0){let i=(0,react.useRef)(!1);function c(e,r){if(!i.current||e.defaultPrevented)return;let t=r(e);if(null===t||!t.getRootNode().contains(t)||!t.isConnected)return;let E=function u(n){return"function"==typeof n?u(n()):Array.isArray(n)||n instanceof Set?n:[n]}(s);for(let u of E){if(null===u)continue;let n=u instanceof HTMLElement?u:u.current;if(null!=n&&n.contains(t)||e.composed&&e.composedPath().includes(n))return}return!(0,focus_management.Bm)(t,focus_management.MZ.Loose)&&-1!==t.tabIndex&&e.preventDefault(),m(e,t)}(0,react.useEffect)((()=>{requestAnimationFrame((()=>{i.current=a}))}),[a]);let o=(0,react.useRef)(null);d("pointerdown",(e=>{var r,t;i.current&&(o.current=(null==(t=null==(r=e.composedPath)?void 0:r.call(e))?void 0:t[0])||e.target)}),!0),d("mousedown",(e=>{var r,t;i.current&&(o.current=(null==(t=null==(r=e.composedPath)?void 0:r.call(e))?void 0:t[0])||e.target)}),!0),d("click",(e=>{(0,platform.Fr)()||o.current&&(c(e,(()=>o.current)),o.current=null)}),!0),d("touchend",(e=>c(e,(()=>e.target instanceof HTMLElement?e.target:null))),!0),(0,use_window_event.M)("blur",(e=>c(e,(()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null))),!0)}},"./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/hooks/use-owner.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>n});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js"),_utils_owner_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/utils/owner.js");function n(...e){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_1__.T)(...e)),[...e])}},"./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/hooks/use-window-event.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>s});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js"),_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/hooks/use-latest-value.js");function s(e,r,n){let o=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.Y)(r);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{function t(i){o.current(i)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)}),[e,n])}},"./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/internal/open-closed.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{El:()=>s,O_:()=>u,Uw:()=>d});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);n.displayName="OpenClosedContext";var e,d=((e=d||{})[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e);function u(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(n)}function s({value:o,children:r}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(n.Provider,{value:o},r)}},"./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/utils/platform.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function t(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function n(){return t()||function i(){return/Android/gi.test(window.navigator.userAgent)}()}__webpack_require__.d(__webpack_exports__,{Fr:()=>n,un:()=>t})},"./src/drop-down/drop-down.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DropUp:()=>DropUp,Menus:()=>Menus,__namedExportsOrder:()=>__namedExportsOrder,default:()=>drop_down_stories});var react=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js"),use_disposables=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/hooks/use-disposables.js"),use_event=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/hooks/use-event.js"),use_id=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/hooks/use-id.js"),use_iso_morphic_effect=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js"),use_outside_click=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/hooks/use-outside-click.js"),use_owner=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/hooks/use-owner.js");function i(t){var n;if(t.type)return t.type;let e=null!=(n=t.as)?n:"button";return"string"==typeof e&&"button"===e.toLowerCase()?"button":void 0}function T(t,e){let[n,u]=(0,react.useState)((()=>i(t)));return(0,use_iso_morphic_effect.s)((()=>{u(i(t))}),[t.type,t.as]),(0,use_iso_morphic_effect.s)((()=>{n||e.current&&e.current instanceof HTMLButtonElement&&!e.current.hasAttribute("type")&&u("button")}),[n,e]),n}var use_sync_refs=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");let a=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function o(e){var r,i;let n=null!=(r=e.innerText)?r:"",t=e.cloneNode(!0);if(!(t instanceof HTMLElement))return n;let u=!1;for(let f of t.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))f.remove(),u=!0;let l=u?null!=(i=t.innerText)?i:"":n;return a.test(l)&&(l=l.replace(a,"")),l}function use_text_value_s(c){let t=(0,react.useRef)(""),r=(0,react.useRef)("");return(0,use_event._)((()=>{let e=c.current;if(!e)return"";let u=e.innerText;if(t.current===u)return r.current;let n=function g(e){let n=e.getAttribute("aria-label");if("string"==typeof n)return n.trim();let t=e.getAttribute("aria-labelledby");if(t){let u=t.split(" ").map((l=>{let r=document.getElementById(l);if(r){let i=r.getAttribute("aria-label");return"string"==typeof i?i.trim():o(r).trim()}return null})).filter(Boolean);if(u.length>0)return u.join(", ")}return o(e).trim()}(e).trim().toLowerCase();return t.current=u,r.current=n,n}))}function t(e){return[e.screenX,e.screenY]}function use_tracked_pointer_u(){let e=(0,react.useRef)([-1,-1]);return{wasMoved(r){let n=t(r);return(e.current[0]!==n[0]||e.current[1]!==n[1])&&(e.current=n,!0)},update(r){e.current=t(r)}}}var use_tree_walker=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/hooks/use-tree-walker.js"),open_closed=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/internal/open-closed.js"),bugs=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/utils/bugs.js");var c=(i=>(i[i.First=0]="First",i[i.Previous=1]="Previous",i[i.Next=2]="Next",i[i.Last=3]="Last",i[i.Specific=4]="Specific",i[i.Nothing=5]="Nothing",i))(c||{});function f(l,n){let t=n.resolveItems();if(t.length<=0)return null;let r=n.resolveActiveIndex(),s=null!=r?r:-1;switch(l.focus){case 0:for(let e=0;e<t.length;++e)if(!n.resolveDisabled(t[e],e,t))return e;return r;case 1:for(let e=s-1;e>=0;--e)if(!n.resolveDisabled(t[e],e,t))return e;return r;case 2:for(let e=s+1;e<t.length;++e)if(!n.resolveDisabled(t[e],e,t))return e;return r;case 3:for(let e=t.length-1;e>=0;--e)if(!n.resolveDisabled(t[e],e,t))return e;return r;case 4:for(let e=0;e<t.length;++e)if(n.resolveId(t[e],e,t)===l.id)return e;return r;case 5:return null;default:!function u(l){throw new Error("Unexpected object: "+l)}(l)}}var r,disposables=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/utils/disposables.js"),focus_management=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/utils/focus-management.js"),match=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/utils/match.js"),render=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/utils/render.js"),keyboard=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/components/keyboard.js"),me=((r=me||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),de=(r=>(r[r.Pointer=0]="Pointer",r[r.Other=1]="Other",r))(de||{}),fe=(a=>(a[a.OpenMenu=0]="OpenMenu",a[a.CloseMenu=1]="CloseMenu",a[a.GoToItem=2]="GoToItem",a[a.Search=3]="Search",a[a.ClearSearch=4]="ClearSearch",a[a.RegisterItem=5]="RegisterItem",a[a.UnregisterItem=6]="UnregisterItem",a))(fe||{});function w(e,u=(r=>r)){let r=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,s=(0,focus_management.wl)(u(e.items.slice()),(t=>t.dataRef.current.domRef.current)),i=r?s.indexOf(r):null;return-1===i&&(i=null),{items:s,activeItemIndex:i}}let Te={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,__demoMode:!1,menuState:0},2:(e,u)=>{var i;let r=w(e),s=f(u,{resolveItems:()=>r.items,resolveActiveIndex:()=>r.activeItemIndex,resolveId:t=>t.id,resolveDisabled:t=>t.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeItemIndex:s,activationTrigger:null!=(i=u.trigger)?i:1}},3:(e,u)=>{let s=""!==e.searchQuery?0:1,i=e.searchQuery+u.value.toLowerCase(),o=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+s).concat(e.items.slice(0,e.activeItemIndex+s)):e.items).find((l=>{var m;return(null==(m=l.dataRef.current.textValue)?void 0:m.startsWith(i))&&!l.dataRef.current.disabled})),a=o?e.items.indexOf(o):-1;return-1===a||a===e.activeItemIndex?{...e,searchQuery:i}:{...e,searchQuery:i,activeItemIndex:a,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,u)=>{let r=w(e,(s=>[...s,{id:u.id,dataRef:u.dataRef}]));return{...e,...r}},6:(e,u)=>{let r=w(e,(s=>{let i=s.findIndex((t=>t.id===u.id));return-1!==i&&s.splice(i,1),s}));return{...e,...r,activationTrigger:1}}},U=(0,react.createContext)(null);function C(e){let u=(0,react.useContext)(U);if(null===u){let r=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,C),r}return u}function ye(e,u){return(0,match.Y)(u.type,Te,e,u)}U.displayName="MenuContext";let Ie=react.Fragment;let be=render.O5.RenderStrategy|render.O5.Static;let Se=react.Fragment;let Pe=(0,render.FX)((function Me(e,u){let{__demoMode:r=!1,...s}=e,i=(0,react.useReducer)(ye,{__demoMode:r,menuState:r?0:1,buttonRef:(0,react.createRef)(),itemsRef:(0,react.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:t,itemsRef:o,buttonRef:a},l]=i,m=(0,use_sync_refs.P)(u);(0,use_outside_click.j)([a,o],((g,R)=>{var p;l({type:1}),(0,focus_management.Bm)(R,focus_management.MZ.Loose)||(g.preventDefault(),null==(p=a.current)||p.focus())}),0===t);let I=(0,use_event._)((()=>{l({type:1})})),A=(0,react.useMemo)((()=>({open:0===t,close:I})),[t,I]),f={ref:m};return react.createElement(U.Provider,{value:i},react.createElement(open_closed.El,{value:(0,match.Y)(t,{0:open_closed.Uw.Open,1:open_closed.Uw.Closed})},(0,render.XX)({ourProps:f,theirProps:s,slot:A,defaultTag:Ie,name:"Menu"})))})),ve=(0,render.FX)((function Re(e,u){var R;let r=(0,use_id.B)(),{id:s=`headlessui-menu-button-${r}`,...i}=e,[t,o]=C("Menu.Button"),a=(0,use_sync_refs.P)(t.buttonRef,u),l=(0,use_disposables.L)(),m=(0,use_event._)((p=>{switch(p.key){case keyboard.D.Space:case keyboard.D.Enter:case keyboard.D.ArrowDown:p.preventDefault(),p.stopPropagation(),o({type:0}),l.nextFrame((()=>o({type:2,focus:c.First})));break;case keyboard.D.ArrowUp:p.preventDefault(),p.stopPropagation(),o({type:0}),l.nextFrame((()=>o({type:2,focus:c.Last})))}})),I=(0,use_event._)((p=>{if(p.key===keyboard.D.Space)p.preventDefault()})),A=(0,use_event._)((p=>{if((0,bugs.l)(p.currentTarget))return p.preventDefault();e.disabled||(0===t.menuState?(o({type:1}),l.nextFrame((()=>{var M;return null==(M=t.buttonRef.current)?void 0:M.focus({preventScroll:!0})}))):(p.preventDefault(),o({type:0})))})),f=(0,react.useMemo)((()=>({open:0===t.menuState})),[t]),g={ref:a,id:s,type:T(e,t.buttonRef),"aria-haspopup":"menu","aria-controls":null==(R=t.itemsRef.current)?void 0:R.id,"aria-expanded":0===t.menuState,onKeyDown:m,onKeyUp:I,onClick:A};return(0,render.XX)({ourProps:g,theirProps:i,slot:f,defaultTag:"button",name:"Menu.Button"})})),he=(0,render.FX)((function Ee(e,u){var M,b;let r=(0,use_id.B)(),{id:s=`headlessui-menu-items-${r}`,...i}=e,[t,o]=C("Menu.Items"),a=(0,use_sync_refs.P)(t.itemsRef,u),l=(0,use_owner.g)(t.itemsRef),m=(0,use_disposables.L)(),I=(0,open_closed.O_)(),A=null!==I?(I&open_closed.Uw.Open)===open_closed.Uw.Open:0===t.menuState;(0,react.useEffect)((()=>{let n=t.itemsRef.current;n&&0===t.menuState&&n!==(null==l?void 0:l.activeElement)&&n.focus({preventScroll:!0})}),[t.menuState,t.itemsRef,l]),(0,use_tree_walker.i)({container:t.itemsRef.current,enabled:0===t.menuState,accept:n=>"menuitem"===n.getAttribute("role")?NodeFilter.FILTER_REJECT:n.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(n){n.setAttribute("role","none")}});let f=(0,use_event._)((n=>{var E,x;switch(m.dispose(),n.key){case keyboard.D.Space:if(""!==t.searchQuery)return n.preventDefault(),n.stopPropagation(),o({type:3,value:n.key});case keyboard.D.Enter:if(n.preventDefault(),n.stopPropagation(),o({type:1}),null!==t.activeItemIndex){let{dataRef:S}=t.items[t.activeItemIndex];null==(x=null==(E=S.current)?void 0:E.domRef.current)||x.click()}(0,focus_management.Fh)(t.buttonRef.current);break;case keyboard.D.ArrowDown:return n.preventDefault(),n.stopPropagation(),o({type:2,focus:c.Next});case keyboard.D.ArrowUp:return n.preventDefault(),n.stopPropagation(),o({type:2,focus:c.Previous});case keyboard.D.Home:case keyboard.D.PageUp:return n.preventDefault(),n.stopPropagation(),o({type:2,focus:c.First});case keyboard.D.End:case keyboard.D.PageDown:return n.preventDefault(),n.stopPropagation(),o({type:2,focus:c.Last});case keyboard.D.Escape:n.preventDefault(),n.stopPropagation(),o({type:1}),(0,disposables.e)().nextFrame((()=>{var S;return null==(S=t.buttonRef.current)?void 0:S.focus({preventScroll:!0})}));break;case keyboard.D.Tab:n.preventDefault(),n.stopPropagation(),o({type:1}),(0,disposables.e)().nextFrame((()=>{(0,focus_management.p9)(t.buttonRef.current,n.shiftKey?focus_management.BD.Previous:focus_management.BD.Next)}));break;default:1===n.key.length&&(o({type:3,value:n.key}),m.setTimeout((()=>o({type:4})),350))}})),g=(0,use_event._)((n=>{if(n.key===keyboard.D.Space)n.preventDefault()})),R=(0,react.useMemo)((()=>({open:0===t.menuState})),[t]),p={"aria-activedescendant":null===t.activeItemIndex||null==(M=t.items[t.activeItemIndex])?void 0:M.id,"aria-labelledby":null==(b=t.buttonRef.current)?void 0:b.id,id:s,onKeyDown:f,onKeyUp:g,role:"menu",tabIndex:0,ref:a};return(0,render.XX)({ourProps:p,theirProps:i,slot:R,defaultTag:"div",features:be,visible:A,name:"Menu.Items"})})),De=(0,render.FX)((function xe(e,u){let r=(0,use_id.B)(),{id:s=`headlessui-menu-item-${r}`,disabled:i=!1,...t}=e,[o,a]=C("Menu.Item"),l=null!==o.activeItemIndex&&o.items[o.activeItemIndex].id===s,m=(0,react.useRef)(null),I=(0,use_sync_refs.P)(u,m);(0,use_iso_morphic_effect.s)((()=>{if(o.__demoMode||0!==o.menuState||!l||0===o.activationTrigger)return;let T=(0,disposables.e)();return T.requestAnimationFrame((()=>{var P,B;null==(B=null==(P=m.current)?void 0:P.scrollIntoView)||B.call(P,{block:"nearest"})})),T.dispose}),[o.__demoMode,m,l,o.menuState,o.activationTrigger,o.activeItemIndex]);let A=use_text_value_s(m),f=(0,react.useRef)({disabled:i,domRef:m,get textValue(){return A()}});(0,use_iso_morphic_effect.s)((()=>{f.current.disabled=i}),[f,i]),(0,use_iso_morphic_effect.s)((()=>(a({type:5,id:s,dataRef:f}),()=>a({type:6,id:s}))),[f,s]);let g=(0,use_event._)((()=>{a({type:1})})),R=(0,use_event._)((T=>{if(i)return T.preventDefault();a({type:1}),(0,focus_management.Fh)(o.buttonRef.current)})),p=(0,use_event._)((()=>{if(i)return a({type:2,focus:c.Nothing});a({type:2,focus:c.Specific,id:s})})),M=use_tracked_pointer_u(),b=(0,use_event._)((T=>M.update(T))),n=(0,use_event._)((T=>{M.wasMoved(T)&&(i||l||a({type:2,focus:c.Specific,id:s,trigger:0}))})),E=(0,use_event._)((T=>{M.wasMoved(T)&&(i||l&&a({type:2,focus:c.Nothing}))})),x=(0,react.useMemo)((()=>({active:l,disabled:i,close:g})),[l,i,g]);return(0,render.XX)({ourProps:{id:s,ref:I,role:"menuitem",tabIndex:!0===i?void 0:-1,"aria-disabled":!0===i||void 0,disabled:void 0,onClick:R,onFocus:p,onPointerEnter:b,onMouseEnter:b,onPointerMove:n,onMouseMove:n,onPointerLeave:E,onMouseLeave:E},theirProps:t,slot:x,defaultTag:Se,name:"Menu.Item"})})),qe=Object.assign(Pe,{Button:ve,Items:he,Item:De});var src_button=__webpack_require__("./src/button/index.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const defaultClass="block text-center no-underline border-none px-4 py-1.5 focus:bg-background-secondary focus:text-foreground-secondary hover:text-foreground-secondary hover:bg-background-secondary w-full",MenuItem=_ref=>{let{children,className,...props}=_ref;return react.createElement(qe.Item,null,(_ref2=>{let{active}=_ref2;const classes=[defaultClass,className,active?"text-foreground-secondary bg-background-secondary outline outline-3 outline-blue-500 outline-offset-[-3px]":"text-background-secondary bg-foreground-secondary"].join(" ");return react.createElement(src_button.Q,_extends({className:classes},props),children)}))};try{MenuItem.displayName="MenuItem",MenuItem.__docgenInfo={description:"",displayName:"MenuItem",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType | undefined"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string | undefined"}},static:{defaultValue:null,description:"",name:"static",required:!1,type:{name:"boolean | undefined"}},unmount:{defaultValue:null,description:"",name:"unmount",required:!1,type:{name:"boolean | undefined"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"danger"'},{value:'"info"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"button"'},{value:'"submit"'}]}},block:{defaultValue:null,description:"",name:"block",required:!1,type:{name:"boolean | undefined"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string | undefined"}},download:{defaultValue:null,description:"",name:"download",required:!1,type:{name:"string | undefined"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/drop-down/menu-item.tsx#MenuItem"]={docgenInfo:MenuItem.__docgenInfo,name:"MenuItem",path:"src/drop-down/menu-item.tsx#MenuItem"})}catch(__react_docgen_typescript_loader_error){}var index_es=__webpack_require__("./node_modules/.pnpm/@fortawesome+react-fontawesome@0.2.2_@fortawesome+fontawesome-svg-core@6.7.2_react@16.14.0/node_modules/@fortawesome/react-fontawesome/index.es.js"),free_solid_svg_icons=__webpack_require__("./node_modules/.pnpm/@fortawesome+free-solid-svg-icons@6.7.2/node_modules/@fortawesome/free-solid-svg-icons/index.mjs");function drop_down_extends(){return drop_down_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},drop_down_extends.apply(null,arguments)}const DropDownContext=(0,react.createContext)({menuButtonRef:react.createRef()}),dropDownItems="list-none bg-foreground-secondary text-center border-1 border-solid border-background-quaternary focus:outline-transparent origin-top-right absolute w-full min-w-max py-1 px-0 z-10",dropUpItems=dropDownItems+" transform -translate-y-full top-0",toggleClassNames="cursor-pointer border-3 border-solid w-full flex items-center justify-center text-center touch-manipulation bg-background-quaternary text-foreground-secondary px-3 py-1.5 mt-[0.5px] relative hover:bg-foreground-secondary hover:text-background-secondary border-foreground-secondary ",MenuItems=react.forwardRef(((_ref,ref)=>{let{children,className}=_ref;const{dropup,menuButtonRef}=(0,react.useContext)(DropDownContext),buttonClass=[className,dropup?dropUpItems:dropDownItems].join(" ");return react.createElement(qe.Items,{className:buttonClass,ref,onClick:()=>{menuButtonRef.current?.focus()}},children)})),Dropdown=_ref3=>{let{children,id,dropup}=_ref3;const context={dropup,menuButtonRef:(0,react.useRef)(null)};return react.createElement(DropDownContext.Provider,{value:context},react.createElement(qe,{className:"relative w-full",as:"div",id},children))};Dropdown.Menu=MenuItems,Dropdown.Toggle=_ref2=>{let{children,className,...rest}=_ref2;const{dropup,menuButtonRef}=(0,react.useContext)(DropDownContext),classes=[className,toggleClassNames].join(" ");return react.createElement(qe.Button,drop_down_extends({ref:menuButtonRef,className:classes},rest),children,react.createElement(index_es.g,{icon:dropup?free_solid_svg_icons.S$_:free_solid_svg_icons.xBV,className:"mx-2 h-3","aria-hidden":"true"}))},MenuItems.displayName="MenuItems",Dropdown.displayName="Dropdown";try{MenuItems.displayName="MenuItems",MenuItems.__docgenInfo={description:"",displayName:"MenuItems",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/drop-down/drop-down.tsx#MenuItems"]={docgenInfo:MenuItems.__docgenInfo,name:"MenuItems",path:"src/drop-down/drop-down.tsx#MenuItems"})}catch(__react_docgen_typescript_loader_error){}try{Toggle.displayName="Dropdown.Toggle",Toggle.__docgenInfo={description:"",displayName:"Dropdown.Toggle",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/drop-down/drop-down.tsx#Dropdown.Toggle"]={docgenInfo:Dropdown.Toggle.__docgenInfo,name:"Dropdown.Toggle",path:"src/drop-down/drop-down.tsx#Dropdown.Toggle"})}catch(__react_docgen_typescript_loader_error){}const story={title:"Components/Dropdown",component:Dropdown},DropDownChildren=()=>react.createElement(react.Fragment,null,react.createElement(Dropdown.Toggle,null,"Options"),react.createElement(Dropdown.Menu,null,react.createElement(MenuItem,{onClick:()=>alert("hi")},"Option 1"),react.createElement(MenuItem,{href:"https://www.google.com"},"Option 2"),react.createElement(MenuItem,{href:"https://www.google.com"},"Option 3"))),DropUpChildren=()=>react.createElement(react.Fragment,null,react.createElement(Dropdown.Toggle,null,"Options"),react.createElement(Dropdown.Menu,null,react.createElement(MenuItem,{onClick:()=>alert("hi")},"Option 1"),react.createElement(MenuItem,{href:"https://www.google.com"},"Option 2"),react.createElement(MenuItem,{href:"https://www.google.com",disabled:!0},"Option 3"))),Menus={decorators:[Story=>react.createElement("div",{style:{height:"220px",width:"220px",display:"flex",flexDirection:"column",justifyContent:"flex-start"}},Story())],render:()=>react.createElement(Dropdown,null,react.createElement(DropDownChildren,null))},DropUp={decorators:[Story=>react.createElement("div",{style:{height:"220px",width:"220px",display:"flex",flexDirection:"column",justifyContent:"flex-end"}},Story())],args:{children:react.createElement(DropUpChildren,null),dropup:!0}},drop_down_stories=story,__namedExportsOrder=["Menus","DropUp"];Menus.parameters={...Menus.parameters,docs:{...Menus.parameters?.docs,source:{originalSource:'{\n  decorators: [Story => <div style={{\n    height: "220px",\n    width: "220px",\n    display: "flex",\n    flexDirection: "column",\n    justifyContent: "flex-start"\n  }}>\n                {Story()}\n            </div>],\n  render: () => <Dropdown>\n            <DropDownChildren />\n        </Dropdown>\n}',...Menus.parameters?.docs?.source}}},DropUp.parameters={...DropUp.parameters,docs:{...DropUp.parameters?.docs,source:{originalSource:'{\n  decorators: [Story => <div style={{\n    height: "220px",\n    width: "220px",\n    display: "flex",\n    flexDirection: "column",\n    justifyContent: "flex-end"\n  }}>\n                {Story()}\n            </div>],\n  args: {\n    children: <DropUpChildren />,\n    dropup: true\n  }\n}',...DropUp.parameters?.docs?.source}}}},"./src/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button,Q:()=>HeadlessButton});var react=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const defaultClassNames=["relative","inline-block","mt-[0.5px]","border-solid","border-3","active:before:w-full","active:before:h-full","active:before:absolute","active:before:inset-0","active:before:border-3","active:before:border-transparent","active:before:bg-gray-900","active:before:opacity-20","text-center","cursor-pointer","no-underline"],StylessButton=react.forwardRef(((_ref2,ref)=>{let{className,onClick,disabled,children,type="button",...rest}=_ref2;return react.createElement("button",_extends({className,onClick:event=>{disabled?event.preventDefault():onClick&&onClick(event)},"aria-disabled":disabled,ref,type},rest),children)})),Link=react.forwardRef(((_ref3,ref)=>{let{className,href,download,target,children,...rest}=_ref3;return react.createElement("a",_extends({className,download,target,ref,href},rest),children)})),HeadlessButton=react.forwardRef(((_ref4,ref)=>{let{onClick,className,children,disabled,href,download,target,...rest}=_ref4;return href&&!disabled?react.createElement(Link,_extends({className,href,download,target,rel:"_blank"===target?"noopener noreferrer":"",ref,onClick},rest),children):react.createElement(StylessButton,_extends({className,onClick,disabled,ref},rest),children)})),Button=react.forwardRef(((_ref5,ref)=>{let{className,size="medium",disabled,variant="primary",block,...rest}=_ref5;const buttonStyle=[className,(0,react.useMemo)((()=>(_ref=>{let{size,variant,disabled,block}=_ref;const classNames=[...defaultClassNames];switch(block&&classNames.push("block","w-full"),variant){case"danger":classNames.push("border-foreground-danger","bg-background-danger","text-foreground-danger","hover:bg-foreground-danger","hover:text-background-danger","hover:border-foreground-danger","dark:hover:bg-background-danger","dark:hover:text-foreground-danger");break;case"info":classNames.push("border-foreground-info","bg-background-info","text-foreground-info","hover:bg-foreground-info","hover:text-background-info","hover:border-foreground-info","dark:hover:bg-background-info","dark:hover:text-foreground-info");break;default:classNames.push("bg-background-quaternary","text-foreground-secondary",...disabled?["active:before:hidden","border-gray-450","aria-disabled:cursor-not-allowed","aria-disabled:opacity-80"]:["border-foreground-secondary","hover:bg-foreground-primary","hover:text-background-primary","hover:border-foreground-secondary","dark:hover:bg-background-primary","dark:hover:text-foreground-primary"])}switch(size){case"large":classNames.push("px-4 py-2.5 text-lg");break;case"small":classNames.push("px-2.5 py-1 text-sm");break;default:classNames.push("px-3 py-1.5 text-md")}return classNames.join(" ")})({size,variant,disabled,block})),[size,variant,disabled,block])].join(" ");return react.createElement(HeadlessButton,_extends({className:buttonStyle,ref,disabled},rest))}));Button.displayName="Button",HeadlessButton.displayName="HeadlessButton",StylessButton.displayName="StylessButton",Link.displayName="Link";try{HeadlessButton.displayName="Button",HeadlessButton.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"danger"'},{value:'"info"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement | HTMLButtonElement> | undefined"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"button"'},{value:'"submit"'}]}},block:{defaultValue:null,description:"",name:"block",required:!1,type:{name:"boolean | undefined"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string | undefined"}},download:{defaultValue:null,description:"",name:"download",required:!1,type:{name:"string | undefined"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}}}]);