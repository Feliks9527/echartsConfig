import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/reset.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)

app.mount('#app')

window.addEventListener('error', (event) => {
  // 过滤 Monaco Editor 的错误
  if (event.message.includes('toUrl')) {
    event.preventDefault(); // 阻止错误冒泡
    console.warn('Monaco Editor 相关错误已被屏蔽:', event.message);
  }
});
