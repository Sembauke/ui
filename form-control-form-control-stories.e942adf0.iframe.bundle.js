"use strict";(self.webpackChunk_freecodecamp_ui=self.webpackChunk_freecodecamp_ui||[]).push([[412],{"./src/form-control/form-control.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Feedback:()=>Feedback,Static:()=>Static,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/form-control/index.ts");const story={title:"Components/FormControl",component:___WEBPACK_IMPORTED_MODULE_1__.M,parameters:{controls:{include:["className","id","onChange","value","componentClass","placeholder","required","type"]}},argTypes:{className:{control:{type:"text"}},id:{control:{type:"text"}},onChange:{action:"changed"},value:{control:{type:"text"}},componentClass:{options:["input","textarea"]},placeholder:{control:{type:"text"}},required:{control:"boolean"},type:{options:["text","email","url"]}}},Default={},Static={render:args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.M.Static,args),args:{children:"foo@bar.com"}},Feedback={render:args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.M.Feedback,args),args:{children:react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"currentColor",d:"M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"}))}},__WEBPACK_DEFAULT_EXPORT__=story;Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},Static.parameters={...Static.parameters,docs:{...Static.parameters?.docs,source:{originalSource:'{\n  render: StaticTemplate,\n  args: {\n    children: "foo@bar.com"\n  }\n}',...Static.parameters?.docs?.source}}},Feedback.parameters={...Feedback.parameters,docs:{...Feedback.parameters?.docs,source:{originalSource:"{\n  render: FeedBackTemplate,\n  args: {\n    children: checkMark\n  }\n}",...Feedback.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Static","Feedback"]},"./src/form-control/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>FormControl});var react=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js"),form_group=__webpack_require__("./src/form-group/form-group.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const FormControlFeedback=_ref=>{let{children,className,...props}=_ref;const classes=[className,"absolute top-[30px] right-0 z-2 block w-8 h-8 leading-8 text-center pointer-events-none text-green-700"].join(" ");return react.createElement("span",_extends({className:classes},props),children)};try{FormControlFeedback.displayName="FormControlFeedback",FormControlFeedback.__docgenInfo={description:"",displayName:"FormControlFeedback",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/form-control/form-control-feedback.tsx#FormControlFeedback"]={docgenInfo:FormControlFeedback.__docgenInfo,name:"FormControlFeedback",path:"src/form-control/form-control-feedback.tsx#FormControlFeedback"})}catch(__react_docgen_typescript_loader_error){}function form_control_static_extends(){return form_control_static_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},form_control_static_extends.apply(this,arguments)}const FormControlStatic=_ref=>{let{className,children,...props}=_ref;const classes=["py-1.5 mb-0 min-h-43-px text-foreground-secondary",className].join(" ");return react.createElement("p",form_control_static_extends({className:classes},props),children)};try{FormControlStatic.displayName="FormControlStatic",FormControlStatic.__docgenInfo={description:"",displayName:"FormControlStatic",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/form-control/form-control-static.tsx#FormControlStatic"]={docgenInfo:FormControlStatic.__docgenInfo,name:"FormControlStatic",path:"src/form-control/form-control-static.tsx#FormControlStatic"})}catch(__react_docgen_typescript_loader_error){}function form_control_extends(){return form_control_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},form_control_extends.apply(this,arguments)}let variantClass;const defaultClasses="outline-0 block w-full py-1.5 px-2.5 text-md text-foreground-primary bg-background-primary bg-none rounded-none border-1 border-solid border-background-quaternary shadow-none transition ease-in-out duration-150 focus:border-foreground-tertiary",FormControl=_ref=>{let{componentClass,...props}=_ref;const{controlId}=(0,react.useContext)(form_group.c),{id,className}=props,Component=componentClass||"input";"textarea"!==Component&&(variantClass=" h-8");const classes=[className,defaultClasses,variantClass].join(" ");return react.createElement(Component,form_control_extends({id:id||controlId,className:classes},props))};FormControl.Feedback=FormControlFeedback,FormControl.Static=FormControlStatic;try{FormControl.displayName="FormControl",FormControl.__docgenInfo={description:"",displayName:"FormControl",props:{componentClass:{defaultValue:null,description:"",name:"componentClass",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/form-control/form-control.tsx#FormControl"]={docgenInfo:FormControl.__docgenInfo,name:"FormControl",path:"src/form-control/form-control.tsx#FormControl"})}catch(__react_docgen_typescript_loader_error){}},"./src/form-group/form-group.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>FormContext,g:()=>FormGroup});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const FormContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({}),defaultClasses="mb-3.5 relative",FormGroup=_ref=>{let{className,validationState,controlId,as,...props}=_ref;const context={controlId,validationState},Component=as||"div",classes=[defaultClasses,className].join(" ");return react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormContext.Provider,{value:context},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,_extends({className:classes,as},props,{validationstate:validationState})))};try{FormGroup.displayName="FormGroup",FormGroup.__docgenInfo={description:"",displayName:"FormGroup",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"typeof Component | undefined"}},controlId:{defaultValue:null,description:"",name:"controlId",required:!1,type:{name:"string | undefined"}},validationState:{defaultValue:null,description:"",name:"validationState",required:!1,type:{name:'"success" | "warning" | "error" | null | undefined'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/form-group/form-group.tsx#FormGroup"]={docgenInfo:FormGroup.__docgenInfo,name:"FormGroup",path:"src/form-group/form-group.tsx#FormGroup"})}catch(__react_docgen_typescript_loader_error){}}}]);