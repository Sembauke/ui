"use strict";(self.webpackChunk_freecodecamp_ui=self.webpackChunk_freecodecamp_ui||[]).push([[886],{"./src/drop-down/drop-down.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DropUp:()=>DropUp,Menus:()=>Menus,__namedExportsOrder:()=>__namedExportsOrder,default:()=>drop_down_stories});var react=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js"),menu=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0/node_modules/@headlessui/react/dist/components/menu/menu.js"),src_button=__webpack_require__("./src/button/index.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const defaultClass="block text-center no-underline border-none px-4 py-1.5 focus:bg-background-secondary focus:text-foreground-secondary hover:text-foreground-secondary hover:bg-background-secondary w-full",MenuItem=_ref=>{let{children,className,...props}=_ref;return react.createElement(menu.W.Item,null,(_ref2=>{let{active}=_ref2;const classes=[defaultClass,className,active?"text-foreground-secondary bg-background-secondary outline outline-3 outline-blue-500 outline-offset-[-3px]":"text-background-secondary bg-foreground-secondary"].join(" ");return react.createElement(src_button.Q,_extends({className:classes},props),children)}))};try{MenuItem.displayName="MenuItem",MenuItem.__docgenInfo={description:"",displayName:"MenuItem",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType | undefined"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string | undefined"}},static:{defaultValue:null,description:"",name:"static",required:!1,type:{name:"boolean | undefined"}},unmount:{defaultValue:null,description:"",name:"unmount",required:!1,type:{name:"boolean | undefined"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"danger"'},{value:'"info"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"button"'},{value:'"submit"'}]}},block:{defaultValue:null,description:"",name:"block",required:!1,type:{name:"boolean | undefined"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string | undefined"}},download:{defaultValue:null,description:"",name:"download",required:!1,type:{name:"string | undefined"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/drop-down/menu-item.tsx#MenuItem"]={docgenInfo:MenuItem.__docgenInfo,name:"MenuItem",path:"src/drop-down/menu-item.tsx#MenuItem"})}catch(__react_docgen_typescript_loader_error){}var index_es=__webpack_require__("./node_modules/.pnpm/@fortawesome+react-fontawesome@0.2.0_@fortawesome+fontawesome-svg-core@6.5.2_react@16.14.0/node_modules/@fortawesome/react-fontawesome/index.es.js"),free_solid_svg_icons=__webpack_require__("./node_modules/.pnpm/@fortawesome+free-solid-svg-icons@6.5.2/node_modules/@fortawesome/free-solid-svg-icons/index.mjs");function drop_down_extends(){return drop_down_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},drop_down_extends.apply(this,arguments)}const DropDownContext=(0,react.createContext)({menuButtonRef:react.createRef()}),dropDownItems="list-none bg-foreground-secondary text-center border-1 border-solid border-background-quaternary focus:outline-transparent origin-top-right absolute w-full min-w-max py-1 px-0 z-10",dropUpItems=dropDownItems+" transform -translate-y-full top-0",toggleClassNames="cursor-pointer border-3 border-solid w-full block text-center touch-manipulation bg-background-quaternary text-foreground-secondary px-3 py-1.5 relative hover:bg-foreground-secondary hover:text-background-secondary btn-block border-foreground-secondary",MenuItems=react.forwardRef(((_ref,ref)=>{let{children,className}=_ref;const{dropup,menuButtonRef}=(0,react.useContext)(DropDownContext),buttonClass=[className,dropup?dropUpItems:dropDownItems].join(" ");return react.createElement(menu.W.Items,{className:buttonClass,ref,onClick:()=>{var _menuButtonRef$curren;null===(_menuButtonRef$curren=menuButtonRef.current)||void 0===_menuButtonRef$curren||_menuButtonRef$curren.focus()}},children)})),Dropdown=_ref3=>{let{children,id,dropup}=_ref3;const context={dropup,menuButtonRef:(0,react.useRef)(null)};return react.createElement(DropDownContext.Provider,{value:context},react.createElement(menu.W,{className:"relative w-full",as:"div",id},children))};Dropdown.Menu=MenuItems,Dropdown.Toggle=_ref2=>{let{children,className,...rest}=_ref2;const{dropup,menuButtonRef}=(0,react.useContext)(DropDownContext),classes=[className,toggleClassNames].join(" ");return react.createElement(menu.W.Button,drop_down_extends({ref:menuButtonRef,className:classes},rest),children,react.createElement(index_es.g,{icon:dropup?free_solid_svg_icons.S$_:free_solid_svg_icons.xBV,className:"mx-2 h-3","aria-hidden":"true"}))},MenuItems.displayName="MenuItems",Dropdown.displayName="Dropdown";try{MenuItems.displayName="MenuItems",MenuItems.__docgenInfo={description:"",displayName:"MenuItems",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/drop-down/drop-down.tsx#MenuItems"]={docgenInfo:MenuItems.__docgenInfo,name:"MenuItems",path:"src/drop-down/drop-down.tsx#MenuItems"})}catch(__react_docgen_typescript_loader_error){}try{Toggle.displayName="Dropdown.Toggle",Toggle.__docgenInfo={description:"",displayName:"Dropdown.Toggle",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/drop-down/drop-down.tsx#Dropdown.Toggle"]={docgenInfo:Dropdown.Toggle.__docgenInfo,name:"Dropdown.Toggle",path:"src/drop-down/drop-down.tsx#Dropdown.Toggle"})}catch(__react_docgen_typescript_loader_error){}const story={title:"Components/Dropdown",component:Dropdown},DropDownChildren=()=>react.createElement(react.Fragment,null,react.createElement(Dropdown.Toggle,null,"Options"),react.createElement(Dropdown.Menu,null,react.createElement(MenuItem,{onClick:()=>alert("hi")},"Option 1"),react.createElement(MenuItem,{href:"https://www.google.com"},"Option 2"),react.createElement(MenuItem,{href:"https://www.google.com"},"Option 3"))),DropUpChildren=()=>react.createElement(react.Fragment,null,react.createElement(Dropdown.Toggle,null,"Options"),react.createElement(Dropdown.Menu,null,react.createElement(MenuItem,{onClick:()=>alert("hi")},"Option 1"),react.createElement(MenuItem,{href:"https://www.google.com"},"Option 2"),react.createElement(MenuItem,{href:"https://www.google.com",disabled:!0},"Option 3"))),Menus={decorators:[Story=>react.createElement("div",{style:{height:"220px",width:"220px",display:"flex",flexDirection:"column",justifyContent:"flex-start"}},Story())],render:()=>react.createElement(Dropdown,null,react.createElement(DropDownChildren,null))},DropUp={decorators:[Story=>react.createElement("div",{style:{height:"220px",width:"220px",display:"flex",flexDirection:"column",justifyContent:"flex-end"}},Story())],args:{children:react.createElement(DropUpChildren,null),dropup:!0}},drop_down_stories=story;Menus.parameters={...Menus.parameters,docs:{...Menus.parameters?.docs,source:{originalSource:'{\n  decorators: [Story => <div style={{\n    height: "220px",\n    width: "220px",\n    display: "flex",\n    flexDirection: "column",\n    justifyContent: "flex-start"\n  }}>\n                {Story()}\n            </div>],\n  render: () => <Dropdown>\n            <DropDownChildren />\n        </Dropdown>\n}',...Menus.parameters?.docs?.source}}},DropUp.parameters={...DropUp.parameters,docs:{...DropUp.parameters?.docs,source:{originalSource:'{\n  decorators: [Story => <div style={{\n    height: "220px",\n    width: "220px",\n    display: "flex",\n    flexDirection: "column",\n    justifyContent: "flex-end"\n  }}>\n                {Story()}\n            </div>],\n  args: {\n    children: <DropUpChildren />,\n    dropup: true\n  }\n}',...DropUp.parameters?.docs?.source}}};const __namedExportsOrder=["Menus","DropUp"]},"./src/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button,Q:()=>HeadlessButton});var react=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const defaultClassNames=["relative","inline-block","mt-[0.5px]","border-solid","border-3","active:before:w-full","active:before:h-full","active:before:absolute","active:before:inset-0","active:before:border-3","active:before:border-transparent","active:before:bg-gray-900","active:before:opacity-20","focus:outline-none","focus-visible:ring","focus-visible:ring-focus-outline-color","text-center","cursor-pointer","no-underline"],StylessButton=react.forwardRef(((_ref2,ref)=>{let{className,onClick,disabled,children,type="button",...rest}=_ref2;return react.createElement("button",_extends({className,onClick:event=>{disabled?event.preventDefault():onClick&&onClick(event)},"aria-disabled":disabled,ref,type},rest),children)})),Link=react.forwardRef(((_ref3,ref)=>{let{className,href,download,target,children,...rest}=_ref3;return react.createElement("a",_extends({className,download,target,ref,href},rest),children)})),HeadlessButton=react.forwardRef(((_ref4,ref)=>{let{onClick,className,children,disabled,href,download,target,...rest}=_ref4;return href&&!disabled?react.createElement(Link,_extends({className,href,download,target,ref,onClick},rest),children):react.createElement(StylessButton,_extends({className,onClick,disabled,ref},rest),children)})),Button=react.forwardRef(((_ref5,ref)=>{let{className,size="medium",disabled,variant="primary",block,...rest}=_ref5;const buttonStyle=[className,(0,react.useMemo)((()=>(_ref=>{let{size,variant,disabled,block}=_ref;const classNames=[...defaultClassNames];switch(block&&classNames.push("block","w-full"),variant){case"danger":classNames.push("border-foreground-danger","bg-background-danger","text-foreground-danger","hover:bg-foreground-danger","hover:text-background-danger","hover:border-foreground-danger","dark:hover:bg-background-danger","dark:hover:text-foreground-danger");break;case"info":classNames.push("border-foreground-info","bg-background-info","text-foreground-info","hover:bg-foreground-info","hover:text-background-info","hover:border-foreground-info","dark:hover:bg-background-info","dark:hover:text-foreground-info");break;default:classNames.push("bg-background-quaternary","text-foreground-secondary",...disabled?["active:before:hidden","border-gray-450","aria-disabled:cursor-not-allowed","aria-disabled:opacity-80"]:["border-foreground-secondary","hover:bg-foreground-primary","hover:text-background-primary","hover:border-foreground-secondary","dark:hover:bg-background-primary","dark:hover:text-foreground-primary"])}switch(size){case"large":classNames.push("px-4 py-2.5 text-lg");break;case"small":classNames.push("px-2.5 py-1 text-sm");break;default:classNames.push("px-3 py-1.5 text-md")}return classNames.join(" ")})({size,variant,disabled,block})),[size,variant,disabled,block])].join(" ");return react.createElement(HeadlessButton,_extends({className:buttonStyle,ref,disabled},rest))}));Button.displayName="Button",HeadlessButton.displayName="HeadlessButton",StylessButton.displayName="StylessButton",Link.displayName="Link";try{HeadlessButton.displayName="Button",HeadlessButton.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"danger"'},{value:'"info"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement | HTMLButtonElement> | undefined"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"button"'},{value:'"submit"'}]}},block:{defaultValue:null,description:"",name:"block",required:!1,type:{name:"boolean | undefined"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string | undefined"}},download:{defaultValue:null,description:"",name:"download",required:!1,type:{name:"string | undefined"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}}}]);