<template>
  <main>
    <div class="line-container">
      <div class="child" id="editor"></div>
      <div class="child" ref="chartRef"></div>
    </div>
  </main>
  <a-button @click=saveLocal>暂存</a-button>
  <a-button @click="useCustomTooltip">自定义tooltip</a-button>
  <a-button @click="isUseLocal.value = !isUseLocal.value">使用本地配置</a-button>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import * as echarts from 'echarts';
import * as monaco from 'monaco-editor';

const isUseLocal = ref(false);
const localData = ref(localStorage.getItem('pieConfig'));
const configStr = ref(`{
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
}`);

const configCode = ref(
  new Function(`return ${configStr.value}`)()
);

const saveLocal = () => {
  localStorage.setItem('pieConfig', JSON.stringify(configCode.value));
};

const chartRef = ref(null);
let chartInstance = null;
let editor = null;

const initChart = () => {
  if (chartRef.value) {
    chartInstance = echarts.init(chartRef.value);
    updateChart(); // 初始化时立即更新 ECharts
  }
};

const updateChart = () => {
  console.log('configCode.value:', configCode.value);
  if (chartInstance) {
    try {
      chartInstance.setOption(configCode.value, true); // 不合并配置
    } catch (error) {
      console.warn('ECharts 配置错误:', error);
    }
  }
};

watch(configCode, updateChart, { deep: true });

onMounted(() => {
  initChart();
  window.addEventListener('resize', () => {
    chartInstance.resize();
  });

  // 初始化 Monaco Editor
  editor = monaco.editor.create(document.getElementById('editor'), {
    value: configStr.value.trim(),
    language: 'javascript',
    automaticLayout: true,
    theme: 'vs-dark',
  });

  // 监听编辑器内容变化
  editor.onDidChangeModelContent(() => {
    try {
      configCode.value = new Function(`return ${editor.getValue()}`)();
    } catch (error) {
      console.warn('编辑器内容解析错误:', error);
    }
  });
});

const useCustomTooltip = () => {
  // todo: 自定义 tooltip
};
</script>

<style scoped lang="less">
#editor {
  border: 1px solid #ccc;
}

.line-container {
  display: flex;

  .child {
    width: 50%;
    height: 600px;
  }
}
</style>