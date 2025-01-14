<template>
  <div>
    <h1>Home</h1>
    <a-button v-for="item in urls" :key="item.name" @click="toUrl(item.url)">
      {{ item.name }}
    </a-button>
  </div>
  <router-view/>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router'

const urls = ref([
  { name: 'line', url: '/line' },
  { name: 'bar', url: '/bar' },
])

const router = useRouter()
const toUrl = (url) => {
  router.push(url)
}
</script>

<style scoped>

</style>
