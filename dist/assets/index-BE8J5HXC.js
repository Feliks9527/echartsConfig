import{e as u,i as f}from"./toggleHighContrast-F54KRSAV.js";import{_ as p,r as l,w as m,o as g,h as v,c as h,a as t,F as _,f as b}from"./index-D8-J9tcT.js";const x={class:"bar-container"},y={__name:"index",setup(C){const e=l(localStorage.getItem("barConfig")||`
{
  "title": {
    "text": "柱状图大标题",
    "subtext": "小标题",
    "left": "center"
  },
  "color": ["#9a60b4", "#ea7ccc", "#ff0000", "可多个颜色，默认依次取"],
  "tooltip": {
    "trigger": "axis",
    "axisPointer": {
      "type": "shadow"
    }
  },
  "legend": {
    "show": true,
    "data": ["销量", "库存"],
    "left": "10%",
    "top": "0",
    "textStyle": {
      "color": "#333",
      "fontSize": 12,
      "fontWeight": "bold"
    },
    "backgroundColor": "#ccc",
    "borderColor": "#00f",
    "borderWidth": 2,
    "borderRadius": 10,
    "padding": 10,
    "itemGap": 20
  },
  "xAxis": {
    "type": "category",
    "data": ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
  },
  "yAxis": {
    "type": "value"
  },
  "series": [
    {
      "name": "销量",
      "type": "bar",
      "data": [120, 200, 150, 80, 70, 110, 130]
    },
    {
      "name": "库存",
      "type": "bar",
      "data": [60, 100, 75, 40, 35, 55, 65]
    }
  ]
}
`),c=()=>{localStorage.setItem("barConfig",e.value)},n=l(null);let a=null,o=null;const d=()=>{n.value&&(a=f(n.value),s())},s=()=>{try{const r=JSON.parse(e.value);a.setOption(r)}catch(r){console.error("配置代码解析错误:",r)}};return m(e,s),g(()=>{d(),window.addEventListener("resize",()=>{a.resize()}),o=u.create(document.getElementById("editor"),{value:e.value,language:"json",automaticLayout:!0,theme:"vs-dark"}),o.onDidChangeModelContent(()=>{e.value=o.getValue()})}),v(()=>{o.dispose(),window.removeEventListener("resize",()=>{a.resize()})}),(r,i)=>(b(),h(_,null,[t("main",null,[t("div",x,[i[0]||(i[0]=t("div",{class:"child",id:"editor"},null,-1)),t("div",{class:"child",ref_key:"chartRef",ref:n},null,512)])]),t("button",{onClick:c},"暂存")],64))}},z=p(y,[["__scopeId","data-v-897fc0cf"]]);export{z as default};
