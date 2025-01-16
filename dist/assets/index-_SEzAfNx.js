import{e as y,i as x}from"./toggleHighContrast-F54KRSAV.js";import{_ as C,r as o,w as S,o as _,c as h,a as n,b as s,d as c,F as k,e as w,f as z,g as u}from"./index-D8-J9tcT.js";const I={class:"line-container"},L={__name:"index",setup(B){const d=o(!1);o(localStorage.getItem("lineConfig"));const f=o(`{
  title: {
    text: "折线图示例", //大标题
    subtext: "数据来自某某网站", //小标题
    left: "center",
    textStyle: {
      color: "#409ef3",
      fontSize: 18,
      fontWeight: "bold"
    },
    subtextStyle: {
      color: "#666",
      fontSize: 12,
      fontWeight: "100"
    }
  },
  tooltip: {
    trigger: "axis",
    formatter: "{a}-{b} : {c}",
    backgroundColor: "rgba(0,0,0,0.7)",
    borderColor: "#333",
    borderWidth: 2,
    textStyle: {
      color: "#fff",
      fontSize: 16
    },
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985"
      }
    }
  },
  legend: {
    data: ["销量", "库存"], // 图例的数据项，每一项对应一个系列的名称
    orient: "vertical", // 图例的排列方向，'horizontal'-水平; 'vertical'-垂直
    left: "5%", // 图例在水平轴上的位置，这里设置为5%， 另可选值：'left', 'center', 'right'
    top: "center", // 图例在垂直轴上的位置，这里设置为center， 另可选值：'top', 'middle', 'bottom'
    textStyle: {
      color: "#333",
      fontSize: 14
    }
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      name: "销量",
      type: "line",
      stack: "总量",
      data: [120, 200, 150, 80, 70, 110, 130],
      areaStyle: {}
    },
    {
      name: "库存",
      type: "line",
      stack: "总量",
      data: [50, 100, 90, 40, 30, 70, 100]
    }
  ]
}`),t=o(new Function(`return ${f.value}`)()),p=()=>{localStorage.setItem("lineConfig",JSON.stringify(t.value))},l=o(null);let a=null,r=null;const m=()=>{l.value&&(a=x(l.value),g())},g=()=>{if(console.log("configCode.value:",t.value),a)try{a.setOption(t.value,!0)}catch{}};S(t,g,{deep:!0}),_(()=>{m(),window.addEventListener("resize",()=>{a.resize()}),r=y.create(document.getElementById("editor"),{value:f.value.trim(),language:"javascript",automaticLayout:!0,theme:"vs-dark"}),r.onDidChangeModelContent(()=>{try{t.value=new Function(`return ${r.getValue()}`)()}catch{}})});const b=()=>{};return(v,e)=>{const i=w("a-button");return z(),h(k,null,[n("main",null,[n("div",I,[e[1]||(e[1]=n("div",{class:"child",id:"editor"},null,-1)),n("div",{class:"child",ref_key:"chartRef",ref:l},null,512)])]),s(i,{onClick:p},{default:c(()=>e[2]||(e[2]=[u("暂存")])),_:1}),s(i,{onClick:b},{default:c(()=>e[3]||(e[3]=[u("自定义tooltip")])),_:1}),s(i,{onClick:e[0]||(e[0]=F=>d.value.value=!d.value.value)},{default:c(()=>e[4]||(e[4]=[u("使用本地配置")])),_:1})],64)}}},$=C(L,[["__scopeId","data-v-22a971bb"]]);export{$ as default};
