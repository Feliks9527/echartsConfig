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
const localData = ref(localStorage.getItem('lineConfig'));
const configStr = ref(`{
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
}`);

const configCode = ref(
  new Function(`return ${configStr.value}`)()
);

const saveLocal = () => {
  localStorage.setItem('lineConfig', JSON.stringify(configCode.value));
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
      // console.error('ECharts 配置错误:', error);
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
      // console.error('编辑器内容解析错误:', error);
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