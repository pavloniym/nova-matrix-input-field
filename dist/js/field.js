(()=>{"use strict";var e,t={290:(e,t,l)=>{const n=Vue;const r={props:["resourceName","field"],computed:{fieldValue:function(){return this.field.displayedAs||this.field.value}}};var o=l(262);const i=(0,o.A)(r,[["render",function(e,t,l,r,o,i){return(0,n.openBlock)(),(0,n.createElementBlock)("span",null,(0,n.toDisplayString)(i.fieldValue),1)}]]);var u=["value","readonly","disabled"];function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function d(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){c(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function c(e,t,l){return(t=function(e){var t=function(e,t){if("object"!=v(e)||!e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var n=l.call(e,t||"default");if("object"!=v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==v(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}var f={class:"whitespace-nowrap text-right pr-2"},s="IMPLODE_ROW_COLUMN";const p={__name:"MatrixInput",props:{field:{type:Object,required:!0}},setup:function(e){var t=e,l=(0,n.computed)((function(){var e;return(null==t||null===(e=t.field)||void 0===e?void 0:e.rows)||[]})),r=(0,n.computed)((function(){var e;return(null==t||null===(e=t.field)||void 0===e?void 0:e.cells)||[]})),o=(0,n.computed)((function(){var e;return(null==t||null===(e=t.field)||void 0===e?void 0:e.columns)||[]})),i=(0,n.computed)((function(){var e;return(null==t||null===(e=t.field)||void 0===e?void 0:e.prefix)||null})),u=(0,n.computed)((function(){var e;return(null==t||null===(e=t.field)||void 0===e?void 0:e.delimiter)||":"})),a=(0,n.computed)((function(){var e;return(null==t||null===(e=t.field)||void 0===e?void 0:e.implodeType)||s})),c=(0,n.computed)((function(){var e;return(null==t||null===(e=t.field)||void 0===e?void 0:e.tableStyles)||{}})),p=(0,n.computed)((function(){try{var e,l,n=(null==t||null===(e=t.field)||void 0===e?void 0:e.value)||(null==t||null===(l=t.field)||void 0===l?void 0:l.displayedAs);if("object"===v(n)&&null!==n&&!Array.isArray(n))return n;var r=JSON.parse(n);return"object"!==v(r)||null===r||Array.isArray(r)?{}:r}catch(e){return{}}})),m=function(e,t){var n,r,d,c,v=[];return a===s&&(v=[null==i?void 0:i.value,null==l||null===(n=l.value)||void 0===n||null===(n=n[e])||void 0===n?void 0:n.value,null==o||null===(r=o.value)||void 0===r||null===(r=r[t])||void 0===r?void 0:r.value]),"IMPLODE_COLUMN_ROW"===a&&(v=[null==i?void 0:i.value,null==o||null===(d=o.value)||void 0===d||null===(d=d[t])||void 0===d?void 0:d.value,null==l||null===(c=l.value)||void 0===c||null===(c=c[e])||void 0===c?void 0:c.value]),v.filter((function(e){return null!=e})).join(u.value)},y=function(e,t){return((null==r?void 0:r.value)||[]).find((function(l){return l.rowIndex===e&&l.colIndex===t}))||null},b=function(e){var t,l,n={width:(null==e?void 0:e.cellWidth)||"auto",maxWidth:(null==e?void 0:e.cellWidth)||"auto",minWidth:(null==e?void 0:e.cellWidth)||"auto",textAlign:e.headerAlign||"center"};(null!=e&&e.rotateHeaderInDegrees||null!=e&&e.translateHeaderByXYInPixels)&&(n=d(d({},n),{},{transform:"rotate(".concat(null==e?void 0:e.rotateHeaderInDegrees,") translate(").concat((null===(t=e.translateHeaderByXYInPixels)||void 0===t?void 0:t[0])||"0px",", ").concat((null===(l=e.translateHeaderByXYInPixels)||void 0===l?void 0:l[1])||"0px",")"),whiteSpace:"nowrap",transformOrigin:"center center"}));return d(d({},n),(null==e?void 0:e.theadStyles)||[])};return function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("table",{style:(0,n.normalizeStyle)(c.value)},[(0,n.createElementVNode)("thead",null,[(0,n.createElementVNode)("tr",null,[t[0]||(t[0]=(0,n.createElementVNode)("th",null,null,-1)),((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(o.value,(function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("th",{key:t,style:(0,n.normalizeStyle)(b(e))},(0,n.toDisplayString)(e.label),5)})),128))])]),(0,n.createElementVNode)("tbody",null,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(l.value,(function(t,l){return(0,n.openBlock)(),(0,n.createElementBlock)("tr",{key:l},[(0,n.createElementVNode)("td",f,(0,n.toDisplayString)(t.label),1),((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(o.value,(function(r,o){var i;return(0,n.openBlock)(),(0,n.createElementBlock)("td",{key:o,style:(0,n.normalizeStyle)({width:(null==r?void 0:r.cellWidth)||"80px"})},[(0,n.renderSlot)(e.$slots,"default",(0,n.mergeProps)({ref_for:!0},{row:t,column:r,rowIndex:l,colIndex:o,cell:y(l,o),valueKey:m(l,o),displayValue:null===(i=p.value)||void 0===i?void 0:i[m(l,o)]}))],4)})),128))])})),128))])],4)}}},m={props:["index","resource","resourceName","resourceId","field"],components:{MatrixInput:p}},y=(0,o.A)(m,[["render",function(e,t,l,r,o,i){var a=(0,n.resolveComponent)("matrix-input"),d=(0,n.resolveComponent)("PanelItem");return(0,n.openBlock)(),(0,n.createBlock)(d,{index:l.index,field:l.field},{value:(0,n.withCtx)((function(){return[(0,n.createVNode)(a,(0,n.normalizeProps)((0,n.guardReactiveProps)({field:l.field})),{default:(0,n.withCtx)((function(e){var t=e.cell,l=e.row,r=e.displayValue;return[(0,n.createElementVNode)("input",{readonly:"",type:"text",class:"w-full form-control form-input form-control-bordered",style:(0,n.normalizeStyle)({textAlign:(null==l?void 0:l.valueAlign)||"left"}),value:r,disabled:!0===(null==t?void 0:t.isDisabled)},null,12,u)]})),_:1},16)]})),_:1},8,["index","field"])}]]);var b=["value","readonly","disabled","onInput"];const h=LaravelNova;function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}const O={mixins:[h.FormField,h.HandlesValidationErrors],props:["resourceName","resourceId","field"],components:{MatrixInput:p},methods:{setInitialValue:function(){try{var e=this.field.value;if("object"!==x(e)||null===e||Array.isArray(e)){var t=JSON.parse(e);this.value="object"!==x(t)||null===t||Array.isArray(t)?{}:t}else this.value=e}catch(e){this.value={}}},fill:function(e){e.append(this.fieldAttribute,this.value?JSON.stringify(this.value):null)}}},g=(0,o.A)(O,[["render",function(e,t,l,r,o,i){var u=(0,n.resolveComponent)("matrix-input"),a=(0,n.resolveComponent)("DefaultField");return(0,n.openBlock)(),(0,n.createBlock)(a,{field:l.field,errors:e.errors,"show-help-text":e.showHelpText,"full-width-content":e.fullWidthContent},{field:(0,n.withCtx)((function(){return[(0,n.createVNode)(u,(0,n.mergeProps)({field:l.field},{id:l.field.attribute}),{default:(0,n.withCtx)((function(t){var l,r=t.cell,o=t.row,i=t.valueKey;return[(0,n.createElementVNode)("input",{type:"text",class:"w-full form-control form-input form-control-bordered",value:null===(l=e.value)||void 0===l?void 0:l[i],style:(0,n.normalizeStyle)({textAlign:(null==o?void 0:o.valueAlign)||"left"}),readonly:!0===(null==r?void 0:r.isReadonly),disabled:!0===(null==r?void 0:r.isDisabled),onInput:function(t){return e.value[i]=t.target.value}},null,44,b)]})),_:1},16,["id"])]})),_:1},8,["field","errors","show-help-text","full-width-content"])}]]);Nova.booting((function(e,t){e.component("index-nova-matrix-input-field",i),e.component("detail-nova-matrix-input-field",y),e.component("form-nova-matrix-input-field",g)}))},613:()=>{},262:(e,t)=>{t.A=(e,t)=>{const l=e.__vccOpts||e;for(const[e,n]of t)l[e]=n;return l}}},l={};function n(e){var r=l[e];if(void 0!==r)return r.exports;var o=l[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,l,r,o)=>{if(!l){var i=1/0;for(c=0;c<e.length;c++){for(var[l,r,o]=e[c],u=!0,a=0;a<l.length;a++)(!1&o||i>=o)&&Object.keys(n.O).every((e=>n.O[e](l[a])))?l.splice(a--,1):(u=!1,o<i&&(i=o));if(u){e.splice(c--,1);var d=r();void 0!==d&&(t=d)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[l,r,o]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={222:0,101:0};n.O.j=t=>0===e[t];var t=(t,l)=>{var r,o,[i,u,a]=l,d=0;if(i.some((t=>0!==e[t]))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(a)var c=a(n)}for(t&&t(l);d<i.length;d++)o=i[d],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},l=self.webpackChunkpavloniym_nova_matrix_input_field=self.webpackChunkpavloniym_nova_matrix_input_field||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})(),n.O(void 0,[101],(()=>n(290)));var r=n.O(void 0,[101],(()=>n(613)));r=n.O(r)})();