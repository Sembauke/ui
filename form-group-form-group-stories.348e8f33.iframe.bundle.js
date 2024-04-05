"use strict";(self.webpackChunk_freecodecamp_ui=self.webpackChunk_freecodecamp_ui||[]).push([[396],{"./src/form-group/form-group.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Error:()=>Error,Success:()=>Success,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>form_group_stories});var react=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js"),form_control=__webpack_require__("./src/form-control/index.ts"),control_label=__webpack_require__("./src/control-label/index.ts");const story={title:"Example/FormGroup",component:__webpack_require__("./src/form-group/form-group.tsx").g,argTypes:{children:{control:{type:"object"}},className:{control:{type:"text"}},controlId:{control:{type:"text"}},as:{control:{type:"text"}},validationState:{options:["success","warning","error",null]}}},Child=()=>react.createElement(react.Fragment,null,react.createElement(control_label.m,null,"Label"),react.createElement(form_control.M,{type:"text",placeholder:"Hello World"})),Default={args:{children:react.createElement(Child,null)}},Success={args:{children:react.createElement(Child,null),validationState:"success"}},Error={args:{children:react.createElement(Child,null),validationState:"error"}},Warning={args:{children:react.createElement(Child,null),validationState:"warning"}},form_group_stories=story;Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <Child />\n  }\n}",...Default.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <Child />,\n    validationState: "success"\n  }\n}',...Success.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <Child />,\n    validationState: "error"\n  }\n}',...Error.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <Child />,\n    validationState: "warning"\n  }\n}',...Warning.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Success","Error","Warning"]},"./src/control-label/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>ControlLabel});var react=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js"),form_group=__webpack_require__("./src/form-group/form-group.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const validationLabel={success:"text-background-info",warning:"text-background-warning",error:"text-background-danger"},ControlLabel=_ref=>{let{className,htmlFor,srOnly,...props}=_ref;const{controlId,validationState}=(0,react.useContext)(form_group.c),defaultClasses=[validationState?validationLabel[validationState]:void 0,srOnly?"sr-only":void 0,className].join(" ");return react.createElement("label",_extends({className:defaultClasses,htmlFor:htmlFor||controlId},props))};try{ControlLabel.displayName="ControlLabel",ControlLabel.__docgenInfo={description:"",displayName:"ControlLabel",props:{htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string | undefined"}},srOnly:{defaultValue:null,description:"",name:"srOnly",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/control-label/control-label.tsx#ControlLabel"]={docgenInfo:ControlLabel.__docgenInfo,name:"ControlLabel",path:"src/control-label/control-label.tsx#ControlLabel"})}catch(__react_docgen_typescript_loader_error){}},"./src/form-control/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>FormControl});var react=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js"),form_group=__webpack_require__("./src/form-group/form-group.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const FormControlFeedback=_ref=>{let{children,className,...props}=_ref;const classes=[className,"absolute top-[30px] right-0 z-2 block w-8 h-8 leading-8 text-center pointer-events-none text-green-700"].join(" ");return react.createElement("span",_extends({className:classes},props),children)};try{FormControlFeedback.displayName="FormControlFeedback",FormControlFeedback.__docgenInfo={description:"",displayName:"FormControlFeedback",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/form-control/form-control-feedback.tsx#FormControlFeedback"]={docgenInfo:FormControlFeedback.__docgenInfo,name:"FormControlFeedback",path:"src/form-control/form-control-feedback.tsx#FormControlFeedback"})}catch(__react_docgen_typescript_loader_error){}function form_control_static_extends(){return form_control_static_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},form_control_static_extends.apply(this,arguments)}const FormControlStatic=_ref=>{let{className,children,...props}=_ref;const classes=["py-1.5 mb-0 min-h-43-px text-foreground-secondary",className].join(" ");return react.createElement("p",form_control_static_extends({className:classes},props),children)};try{FormControlStatic.displayName="FormControlStatic",FormControlStatic.__docgenInfo={description:"",displayName:"FormControlStatic",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/form-control/form-control-static.tsx#FormControlStatic"]={docgenInfo:FormControlStatic.__docgenInfo,name:"FormControlStatic",path:"src/form-control/form-control-static.tsx#FormControlStatic"})}catch(__react_docgen_typescript_loader_error){}function form_control_extends(){return form_control_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},form_control_extends.apply(this,arguments)}let variantClass;const defaultClasses="outline-0 block w-full py-1.5 px-2.5 text-md text-foreground-primary bg-background-primary bg-none rounded-none border-1 border-solid border-background-quaternary shadow-none transition ease-in-out duration-150 focus:border-foreground-tertiary",FormControl=_ref=>{let{componentClass,...props}=_ref;const{controlId}=(0,react.useContext)(form_group.c),{id,className}=props,Component=componentClass||"input";"textarea"!==Component&&(variantClass=" h-8");const classes=[className,defaultClasses,variantClass].join(" ");return react.createElement(Component,form_control_extends({id:id||controlId,className:classes},props))};FormControl.Feedback=FormControlFeedback,FormControl.Static=FormControlStatic;try{FormControl.displayName="FormControl",FormControl.__docgenInfo={description:"",displayName:"FormControl",props:{componentClass:{defaultValue:null,description:"",name:"componentClass",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/form-control/form-control.tsx#FormControl"]={docgenInfo:FormControl.__docgenInfo,name:"FormControl",path:"src/form-control/form-control.tsx#FormControl"})}catch(__react_docgen_typescript_loader_error){}},"./src/form-group/form-group.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>FormContext,g:()=>FormGroup});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const FormContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({}),defaultClasses="mb-3.5 relative",FormGroup=_ref=>{let{className,validationState,controlId,as,...props}=_ref;const context={controlId,validationState},Component=as||"div",classes=[defaultClasses,className].join(" ");return react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormContext.Provider,{value:context},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,_extends({className:classes,as},props,{validationstate:validationState})))};try{FormGroup.displayName="FormGroup",FormGroup.__docgenInfo={description:"",displayName:"FormGroup",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"typeof Component | undefined"}},controlId:{defaultValue:null,description:"",name:"controlId",required:!1,type:{name:"string | undefined"}},validationState:{defaultValue:null,description:"",name:"validationState",required:!1,type:{name:'"success" | "warning" | "error" | null | undefined'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/form-group/form-group.tsx#FormGroup"]={docgenInfo:FormGroup.__docgenInfo,name:"FormGroup",path:"src/form-group/form-group.tsx#FormGroup"})}catch(__react_docgen_typescript_loader_error){}}}]);