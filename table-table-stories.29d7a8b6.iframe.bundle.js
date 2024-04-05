"use strict";(self.webpackChunk_freecodecamp_ui=self.webpackChunk_freecodecamp_ui||[]).push([[465],{"./src/table/table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Condensed:()=>Condensed,Default:()=>Default,Striped:()=>Striped,__namedExportsOrder:()=>__namedExportsOrder,default:()=>table_stories});var react=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const defaultClassNames=["table-auto","w-full","max-w-full","border-collapse","text-left","text-foreground-tertiary","[&_th]:font-normal"],Table=react.forwardRef(((_ref2,ref)=>{let{striped=!1,condensed=!1,...props}=_ref2;const classNames=react.useMemo((()=>(_ref=>{let{condensed,striped}=_ref;const classNames=[...defaultClassNames];return condensed?classNames.push("[&_td]:p-1 [&_th]:p-1"):classNames.push("[&_td]:p-2 [&_th]:p-2"),striped&&classNames.push("[&>tbody>tr:nth-of-type(odd)]:bg-background-tertiary"),classNames.join(" ")})({condensed,striped})),[condensed,striped]);return react.createElement("table",_extends({},props,{ref,className:classNames}))}));Table.displayName="Table";try{Table.displayName="Table",Table.__docgenInfo={description:"",displayName:"Table",props:{condensed:{defaultValue:{value:"false"},description:"",name:"condensed",required:!1,type:{name:"boolean | undefined"}},striped:{defaultValue:{value:"false"},description:"",name:"striped",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/table/table.tsx#Table"]={docgenInfo:Table.__docgenInfo,name:"Table",path:"src/table/table.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}const exampleTable=react.createElement(react.Fragment,null,react.createElement("thead",null,react.createElement("tr",null,react.createElement("th",null,"#"),react.createElement("th",null,"First Name"),react.createElement("th",null,"Last Name"),react.createElement("th",null,"Username"))),react.createElement("tbody",null,react.createElement("tr",null,react.createElement("td",null,"1"),react.createElement("td",null,"Mark"),react.createElement("td",null,"Otto"),react.createElement("td",null,"@mdo")),react.createElement("tr",null,react.createElement("td",null,"2"),react.createElement("td",null,"John"),react.createElement("td",null,"Loos"),react.createElement("td",null,"@mlos")),react.createElement("tr",null,react.createElement("td",null,"3"),react.createElement("td",null,"Joe"),react.createElement("td",null,"Kot"),react.createElement("td",null,"@mko")))),Template=args=>react.createElement(Table,args,exampleTable),Default={render:Template,args:{condensed:!1,striped:!1}},Condensed={render:Template,args:{condensed:!0}},Striped={render:Template,args:{striped:!0}},table_stories={title:"Example/Table",component:Table,parameters:{controls:{include:["variant","size","bordered","borderless","hover","striped","condensed","responsive"]}},argTypes:{striped:{options:[!0,!1],control:{type:"radio"}},condensed:{options:[!0,!1],control:{type:"radio"}}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    condensed: false,\n    striped: false\n  }\n}",...Default.parameters?.docs?.source}}},Condensed.parameters={...Condensed.parameters,docs:{...Condensed.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    condensed: true\n  }\n}",...Condensed.parameters?.docs?.source}}},Striped.parameters={...Striped.parameters,docs:{...Striped.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    striped: true\n  }\n}",...Striped.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Condensed","Striped"]}}]);