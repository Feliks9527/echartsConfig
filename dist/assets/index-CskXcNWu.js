import{e as u,i as p}from"./toggleHighContrast-DgU-bGWw.js";import{_ as f,r as i,w as g,o as m,c as v,a as t,F as _,b as y}from"./index-Bex1lP1L.js";const h={class:"line-container"},x={__name:"index",setup(b){const e=i(localStorage.getItem("lineConfig")||`{
  "title": {
    "text": "折线图示例",
    "subtext": "数据来自某某网站",
    "left": "center"
  },
  "tooltip": {
    "trigger": "axis",
    "axisPointer": {
      "type": "cross",
      "label": {
        "backgroundColor": "#6a7985"
      }
    }
  },
  "legend": {
    "data": ["销量", "库存"],
    "left": "5%"
  },
  "grid": {
    "left": "3%",
    "right": "4%",
    "bottom": "3%",
    "containLabel": true
  },
  "xAxis": {
    "type": "category",
    "boundaryGap": false,
    "data": ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
  },
  "yAxis": {
    "type": "value"
  },
  "series": [
    {
      "name": "销量",
      "type": "line",
      "stack": "总量",
      "data": [120, 200, 150, 80, 70, 110, 130],
      "areaStyle": {}
    },
    {
      "name": "库存",
      "type": "line",
      "stack": "总量",
      "data": [50, 100, 90, 40, 30, 70, 100]
    }
  ]
}`),c=()=>{localStorage.setItem("lineConfig",e.value)},o=i(null);let n=null,l=null;const d=()=>{o.value&&(n=p(o.value),r())},r=()=>{try{const a=JSON.parse(e.value);n.setOption(a)}catch(a){console.error("配置代码解析错误:",a)}};return g(e,r),m(()=>{d(),window.addEventListener("resize",()=>{n.resize()}),l=u.create(document.getElementById("editor"),{value:e.value,language:"json",automaticLayout:!0,theme:"vs-dark"}),l.onDidChangeModelContent(()=>{e.value=l.getValue()})}),(a,s)=>(y(),v(_,null,[t("main",null,[t("div",h,[s[0]||(s[0]=t("div",{class:"child",id:"editor"},null,-1)),t("div",{class:"child",ref_key:"chartRef",ref:o},null,512)])]),t("button",{onClick:c},"暂存")],64))}},I=f(x,[["__scopeId","data-v-b6983c3f"]]);export{I as default};
