<template>
  <main>
    <div class="bar-container">
      <div class="child" id="editor"></div>
      <div class="child" ref="chartRef"></div>
    </div>
  </main>
  <button @click=saveLocal>暂存</button>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';
import * as monaco from 'monaco-editor';

const configCode = ref(localStorage.getItem('barConfig') || `
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
`);

const saveLocal = () => {
  localStorage.setItem('barConfig', configCode.value);
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

onBeforeUnmount(() => {
  editor.dispose();
  window.removeEventListener('resize', () => {
    chartInstance.resize();
  });
});
</script>

<style scoped lang="less">
#editor {
  border: 1px solid #ccc;
}

.bar-container {
  display: flex;

  .child {
    width: 50%;
    height: 600px;
  }
}
</style>
