(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[17],{723:function(e,t,o){"use strict";var r=o(48),a=o(160),n=(o(1),o(698)),s=o(699),c=o(20),l=function(e){var t=e.borderColor,o=e.backgroundColor,l=e.pointHoverBackgroundColor,i=e.dataPoints,d=e.label,b=e.pointed,j=Object(a.a)(e,["borderColor","backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"]),h=l||("transparent"!==o?o:t),p=[{data:i,borderColor:Object(n.getColor)(t),backgroundColor:Object(n.getColor)(o),pointBackgroundColor:Object(n.getColor)(h),pointHoverBackgroundColor:Object(n.getColor)(h),label:d}],x={scales:{xAxes:[{offset:!0,gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,i)-5,max:Math.max.apply(Math,i)+5}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}},m={scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}},O=function(){var e=b?x:m;return Object.assign({},e,{maintainAspectRatio:!1,legend:{display:!1}})}(),g=Object(n.deepObjectsMerge)(p,j.datasets||{}),u=Object(n.deepObjectsMerge)(O,j.options||{});return Object(c.jsx)(s.b,Object(r.a)(Object(r.a)({},j),{},{datasets:g,options:u,labels:d}))};l.defaultProps={borderColor:"rgba(255,255,255,.55)",backgroundColor:"transparent",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"},t.a=l},981:function(e,t,o){"use strict";o.r(t);o(1);var r=o(645),a=o(641),n=o(723),s=o(48),c=o(160),l=o(698),i=o(699),d=o(20),b=function(e){var t=e.backgroundColor,o=e.pointHoverBackgroundColor,r=e.dataPoints,a=e.label,n=(e.pointed,Object(c.a)(e,["backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"])),b=[{data:r,backgroundColor:Object(l.getColor)(t),pointHoverBackgroundColor:Object(l.getColor)(o),label:a,barPercentage:.5,categoryPercentage:1}],j={maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}};return Object(d.jsx)(i.a,Object(s.a)(Object(s.a)({},n),{},{datasets:b,options:j,labels:a}))};b.defaultProps={backgroundColor:"rgba(0,0,0,.2)",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"};var j=b;t.default=function(){return Object(d.jsxs)(r.G,{children:[Object(d.jsx)(r.k,{sm:"6",lg:"3",children:Object(d.jsx)(r.S,{color:"gradient-primary",header:"9.823",text:"Members online",footerSlot:Object(d.jsx)(n.a,{pointed:!0,className:"c-chart-wrapper mt-3 mx-3",style:{height:"70px"},dataPoints:[65,59,84,84,51,55,40],pointHoverBackgroundColor:"primary",label:"Members",labels:"months"}),children:Object(d.jsxs)(r.n,{children:[Object(d.jsx)(r.q,{color:"transparent",children:Object(d.jsx)(a.a,{name:"cil-settings"})}),Object(d.jsxs)(r.p,{className:"pt-0",placement:"bottom-end",children:[Object(d.jsx)(r.o,{children:"Action"}),Object(d.jsx)(r.o,{children:"Another action"}),Object(d.jsx)(r.o,{children:"Something else here..."}),Object(d.jsx)(r.o,{disabled:!0,children:"Disabled action"})]})]})})}),Object(d.jsx)(r.k,{sm:"6",lg:"3",children:Object(d.jsx)(r.S,{color:"gradient-info",header:"9.823",text:"Members online",footerSlot:Object(d.jsx)(n.a,{pointed:!0,className:"mt-3 mx-3",style:{height:"70px"},dataPoints:[1,18,9,17,34,22,11],pointHoverBackgroundColor:"info",options:{elements:{line:{tension:1e-5}}},label:"Members",labels:"months"}),children:Object(d.jsxs)(r.n,{children:[Object(d.jsx)(r.q,{caret:!1,color:"transparent",children:Object(d.jsx)(a.a,{name:"cil-location-pin"})}),Object(d.jsxs)(r.p,{className:"pt-0",placement:"bottom-end",children:[Object(d.jsx)(r.o,{children:"Action"}),Object(d.jsx)(r.o,{children:"Another action"}),Object(d.jsx)(r.o,{children:"Something else here..."}),Object(d.jsx)(r.o,{disabled:!0,children:"Disabled action"})]})]})})}),Object(d.jsx)(r.k,{sm:"6",lg:"3",children:Object(d.jsx)(r.S,{color:"gradient-warning",header:"9.823",text:"Members online",footerSlot:Object(d.jsx)(n.a,{className:"mt-3",style:{height:"70px"},backgroundColor:"rgba(255,255,255,.2)",dataPoints:[78,81,80,45,34,12,40],options:{elements:{line:{borderWidth:2.5}}},pointHoverBackgroundColor:"warning",label:"Members",labels:"months"}),children:Object(d.jsxs)(r.n,{children:[Object(d.jsx)(r.q,{color:"transparent",children:Object(d.jsx)(a.a,{name:"cil-settings"})}),Object(d.jsxs)(r.p,{className:"pt-0",placement:"bottom-end",children:[Object(d.jsx)(r.o,{children:"Action"}),Object(d.jsx)(r.o,{children:"Another action"}),Object(d.jsx)(r.o,{children:"Something else here..."}),Object(d.jsx)(r.o,{disabled:!0,children:"Disabled action"})]})]})})}),Object(d.jsx)(r.k,{sm:"6",lg:"3",children:Object(d.jsx)(r.S,{color:"gradient-danger",header:"9.823",text:"Members online",footerSlot:Object(d.jsx)(j,{className:"mt-3 mx-3",style:{height:"70px"},backgroundColor:"rgb(250, 152, 152)",label:"Members",labels:"months"}),children:Object(d.jsxs)(r.n,{children:[Object(d.jsx)(r.q,{caret:!0,className:"text-white",color:"transparent",children:Object(d.jsx)(a.a,{name:"cil-settings"})}),Object(d.jsxs)(r.p,{className:"pt-0",placement:"bottom-end",children:[Object(d.jsx)(r.o,{children:"Action"}),Object(d.jsx)(r.o,{children:"Another action"}),Object(d.jsx)(r.o,{children:"Something else here..."}),Object(d.jsx)(r.o,{disabled:!0,children:"Disabled action"})]})]})})})]})}}}]);
//# sourceMappingURL=17.f295df35.chunk.js.map