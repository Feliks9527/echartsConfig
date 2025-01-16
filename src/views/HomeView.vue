<template>
  <div class="btn-container">
    <a-button v-for="item in urls" :key="item.name" @click="toUrl(item.url)">
      {{ item.name }}
    </a-button>
  </div>
  <router-view/>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const urls = ref([
  { name: 'line', url: '/line' },
  { name: 'bar', url: '/bar' },
  { name: 'pie', url: '/pie'}
])

const router = useRouter()
const toUrl = (url) => {
  router.push(url)
}
</script>

<style scoped lang="less">
.btn-container {
  display: flex;
  gap: 10px;
  margin: 20px 0;

  .ant-btn {
    width: 100px;
    height: 40px;
    line-height: 40px;
    padding: 0;
    font-size: 18px;
    font-weight: 600;
  }
}
</style>
