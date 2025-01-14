<template>
  <main>
    <div class="line-container">
      <div class="child" id="editor"></div>
      <div class="child" ref="chartRef"></div>
    </div>
  </main>
  <button @click=saveLocal>暂存</button>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import * as echarts from 'echarts';
import * as monaco from 'monaco-editor';

const configCode = ref(localStorage.getItem('lineConfig') || `{
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
}`);

const saveLocal = () => {
  localStorage.setItem('lineConfig', configCode.value);
}

const chartRef = ref(null);
let chartInstance = null;
let editor = null;

const initChart = () => {
  if(chartRef.value) {
    chartInstance = echarts.init(chartRef.value);
    updateChart();
  }
};

const updateChart = () => {
  try {
    const options = JSON.parse(configCode.value);
    chartInstance.setOption(options);
  } catch (error) {
    console.error('配置代码解析错误:', error);
  }
};

watch(configCode, updateChart);

onMounted(() => {
  initChart();
  window.addEventListener('resize', () => {
    chartInstance.resize();
  });

  // 初始化 Monaco Editor
  editor = monaco.editor.create(document.getElementById('editor'), {
    value: configCode.value,
    language: 'json',
    automaticLayout: true,
    theme: 'vs-dark',
  });

  // 监听编辑器内容变化
  editor.onDidChangeModelContent(() => {
    configCode.value = editor.getValue();
  });
});
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
