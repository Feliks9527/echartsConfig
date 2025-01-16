import{e as b,i as h}from"./toggleHighContrast-F54KRSAV.js";import{_ as x,r as o,w as S,o as w,c as y,a as l,b as u,d as c,F as _,e as k,f as z,g as d}from"./index-D8-J9tcT.js";const B={class:"line-container"},I={__name:"index",setup(E){const f=o(!1);o(localStorage.getItem("pieConfig"));const v=o(`{
  title: {
    text: "饼图示例", // 大标题
    subtext: "数据来自某某网站", // 小标题
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
    trigger: "item", // 饼图的 tooltip 触发方式为 'item'
    formatter: "{a} <br/>{b} : {c} ({d}%)", // 提示框内容格式
    backgroundColor: "rgba(0,0,0,0.7)",
    borderColor: "#333",
    borderWidth: 2,
    textStyle: {
      color: "#fff",
      fontSize: 16
    }
  },
  legend: {
    orient: "vertical", // 图例的排列方向，'horizontal'-水平; 'vertical'-垂直
    left: "5%", // 图例在水平轴上的位置
    top: "center", // 图例在垂直轴上的位置
    textStyle: {
      color: "#333",
      fontSize: 14
    }
  },
  series: [
    {
      name: "访问来源", // 系列名称
      type: "pie", // 类型为饼图
      radius: "50%", // 饼图的半径，可以是百分比或具体数值
      data: [
        { value: 1048, name: "搜索引擎" },
        { value: 735, name: "直接访问" },
        { value: 580, name: "邮件营销" },
        { value: 484, name: "联盟广告" },
        { value: 300, name: "视频广告" }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    }
  ]
}`),t=o(new Function(`return ${v.value}`)()),g=()=>{localStorage.setItem("pieConfig",JSON.stringify(t.value))},r=o(null);let a=null,i=null;const p=()=>{r.value&&(a=h(r.value),m())},m=()=>{if(console.log("configCode.value:",t.value),a)try{a.setOption(t.value,!0)}catch(n){console.warn("ECharts 配置错误:",n)}};S(t,m,{deep:!0}),w(()=>{p(),window.addEventListener("resize",()=>{a.resize()}),i=b.create(document.getElementById("editor"),{value:v.value.trim(),language:"javascript",automaticLayout:!0,theme:"vs-dark"}),i.onDidChangeModelContent(()=>{try{t.value=new Function(`return ${i.getValue()}`)()}catch(n){console.warn("编辑器内容解析错误:",n)}})});const C=()=>{};return(n,e)=>{const s=k("a-button");return z(),y(_,null,[l("main",null,[l("div",B,[e[1]||(e[1]=l("div",{class:"child",id:"editor"},null,-1)),l("div",{class:"child",ref_key:"chartRef",ref:r},null,512)])]),u(s,{onClick:g},{default:c(()=>e[2]||(e[2]=[d("暂存")])),_:1}),u(s,{onClick:C},{default:c(()=>e[3]||(e[3]=[d("自定义tooltip")])),_:1}),u(s,{onClick:e[0]||(e[0]=F=>f.value.value=!f.value.value)},{default:c(()=>e[4]||(e[4]=[d("使用本地配置")])),_:1})],64)}}},V=x(I,[["__scopeId","data-v-3ec30a3b"]]);export{V as default};
