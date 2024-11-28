(()=>{"use strict";var e,t={329:(e,t,n)=>{const r=Vue;const l={props:["resourceName","field"],computed:{fieldValue:function(){return this.field.displayedAs||this.field.value}}};var o=n(262);const i=(0,o.A)(l,[["render",function(e,t,n,l,o,i){return(0,r.openBlock)(),(0,r.createElementBlock)("span",null,(0,r.toDisplayString)(i.fieldValue),1)}]]);var u=["value"];function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=f(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==f(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}var s={class:"whitespace-nowrap text-right pr-2"};const v={__name:"MatrixInput",props:{field:{type:Object,required:!0}},setup:function(e){var t=e,n=(0,r.computed)((function(){var e;return(null==t||null===(e=t.field)||void 0===e?void 0:e.rows)||[]})),l=(0,r.computed)((function(){var e;return(null==t||null===(e=t.field)||void 0===e?void 0:e.cells)||[]})),o=(0,r.computed)((function(){var e;return(null==t||null===(e=t.field)||void 0===e?void 0:e.columns)||[]})),i=(0,r.computed)((function(){var e;return(null==t||null===(e=t.field)||void 0===e?void 0:e.delimiter)||":"})),u=(0,r.computed)((function(){var e;return(null==t||null===(e=t.field)||void 0===e?void 0:e.tableStyles)||{}})),a=(0,r.computed)((function(){try{var e,n,r=(null==t||null===(e=t.field)||void 0===e?void 0:e.value)||(null==t||null===(n=t.field)||void 0===n?void 0:n.displayedAs);if("object"===f(r)&&null!==r&&!Array.isArray(r))return r;var l=JSON.parse(r);return"object"!==f(l)||null===l||Array.isArray(l)?{}:l}catch(e){return{}}})),d=function(e,t){var r,l;return[null==n||null===(r=n.value)||void 0===r||null===(r=r[e])||void 0===r?void 0:r.value,null==o||null===(l=o.value)||void 0===l||null===(l=l[t])||void 0===l?void 0:l.value].join(i.value)},v=function(e,t){return((null==l?void 0:l.value)||[]).find((function(n){return n.rowIndex===e&&n.colIndex===t}))||null},p=function(e){var t,n,r={width:(null==e?void 0:e.cellWidth)||"auto",maxWidth:(null==e?void 0:e.cellWidth)||"auto",minWidth:(null==e?void 0:e.cellWidth)||"auto",textAlign:e.headerAlign||"center"};(null!=e&&e.rotateHeaderInDegrees||null!=e&&e.translateHeaderByXYInPixels)&&(r=c(c({},r),{},{transform:"rotate(".concat(null==e?void 0:e.rotateHeaderInDegrees,") translate(").concat((null===(t=e.translateHeaderByXYInPixels)||void 0===t?void 0:t[0])||"0px",", ").concat((null===(n=e.translateHeaderByXYInPixels)||void 0===n?void 0:n[1])||"0px",")"),whiteSpace:"nowrap",transformOrigin:"center center"}));return c(c({},r),(null==e?void 0:e.theadStyles)||[])};return function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("table",{style:(0,r.normalizeStyle)(u.value)},[(0,r.createElementVNode)("thead",null,[(0,r.createElementVNode)("tr",null,[t[0]||(t[0]=(0,r.createElementVNode)("th",null,null,-1)),((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(o.value,(function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("th",{key:t,style:(0,r.normalizeStyle)(p(e))},(0,r.toDisplayString)(e.label),5)})),128))])]),(0,r.createElementVNode)("tbody",null,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(n.value,(function(t,n){return(0,r.openBlock)(),(0,r.createElementBlock)("tr",{key:n},[(0,r.createElementVNode)("td",s,(0,r.toDisplayString)(t.label),1),((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(o.value,(function(l,o){var i;return(0,r.openBlock)(),(0,r.createElementBlock)("td",{key:o,style:(0,r.normalizeStyle)({width:(null==l?void 0:l.cellWidth)||"80px"})},[(0,r.renderSlot)(e.$slots,"default",(0,r.mergeProps)({ref_for:!0},{row:t,column:l,rowIndex:n,colIndex:o,cell:v(n,o),valueKey:d(n,o),displayValue:null===(i=a.value)||void 0===i?void 0:i[d(n,o)]}))],4)})),128))])})),128))])],4)}}},p={props:["index","resource","resourceName","resourceId","field"],components:{MatrixInput:v}},m=(0,o.A)(p,[["render",function(e,t,n,l,o,i){var a=(0,r.resolveComponent)("matrix-input"),c=(0,r.resolveComponent)("PanelItem");return(0,r.openBlock)(),(0,r.createBlock)(c,{index:n.index,field:n.field},{value:(0,r.withCtx)((function(){return[(0,r.createVNode)(a,(0,r.normalizeProps)((0,r.guardReactiveProps)({field:n.field})),{default:(0,r.withCtx)((function(e){var t=e.row,n=e.displayValue;return[(0,r.createElementVNode)("input",{readonly:"",type:"text",class:"w-full form-control form-input form-control-bordered",style:(0,r.normalizeStyle)({textAlign:(null==t?void 0:t.valueAlign)||"left"}),value:n},null,12,u)]})),_:1},16)]})),_:1},8,["index","field"])}]]);var y=["value","readonly","onInput"];const b=LaravelNova;function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}const x={mixins:[b.FormField,b.HandlesValidationErrors],props:["resourceName","resourceId","field"],components:{MatrixInput:v},methods:{setInitialValue:function(){try{var e=this.field.value;if("object"!==h(e)||null===e||Array.isArray(e)){var t=JSON.parse(e);this.value="object"!==h(t)||null===t||Array.isArray(t)?{}:t}else this.value=e}catch(e){this.value={}}},fill:function(e){e.append(this.fieldAttribute,this.value?JSON.stringify(this.value):null)}}},g=(0,o.A)(x,[["render",function(e,t,n,l,o,i){var u=(0,r.resolveComponent)("matrix-input"),a=(0,r.resolveComponent)("DefaultField");return(0,r.openBlock)(),(0,r.createBlock)(a,{field:n.field,errors:e.errors,"show-help-text":e.showHelpText,"full-width-content":e.fullWidthContent},{field:(0,r.withCtx)((function(){return[(0,r.createVNode)(u,(0,r.mergeProps)({field:n.field},{id:n.field.attribute}),{default:(0,r.withCtx)((function(t){var n,l=t.cell,o=t.row,i=t.valueKey;return[(0,r.createElementVNode)("input",{type:"text",class:"w-full form-control form-input form-control-bordered",value:null===(n=e.value)||void 0===n?void 0:n[i],style:(0,r.normalizeStyle)({textAlign:(null==o?void 0:o.valueAlign)||"left"}),readonly:!0===(null==l?void 0:l.isReadonly),onInput:function(t){return e.value[i]=t.target.value}},null,44,y)]})),_:1},16,["id"])]})),_:1},8,["field","errors","show-help-text","full-width-content"])}]]);Nova.booting((function(e,t){e.component("index-nova-matrix-input-field",i),e.component("detail-nova-matrix-input-field",m),e.component("form-nova-matrix-input-field",g)}))},613:()=>{},262:(e,t)=>{t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[e,r]of t)n[e]=r;return n}}},n={};function r(e){var l=n[e];if(void 0!==l)return l.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,n,l,o)=>{if(!n){var i=1/0;for(d=0;d<e.length;d++){for(var[n,l,o]=e[d],u=!0,a=0;a<n.length;a++)(!1&o||i>=o)&&Object.keys(r.O).every((e=>r.O[e](n[a])))?n.splice(a--,1):(u=!1,o<i&&(i=o));if(u){e.splice(d--,1);var c=l();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,l,o]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={222:0,101:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var l,o,[i,u,a]=n,c=0;if(i.some((t=>0!==e[t]))){for(l in u)r.o(u,l)&&(r.m[l]=u[l]);if(a)var d=a(r)}for(t&&t(n);c<i.length;c++)o=i[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(d)},n=self.webpackChunkpavloniym_nova_matrix_input_field=self.webpackChunkpavloniym_nova_matrix_input_field||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.O(void 0,[101],(()=>r(329)));var l=r.O(void 0,[101],(()=>r(613)));l=r.O(l)})();