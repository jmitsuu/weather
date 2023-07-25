<script setup>
import { toRefs } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

const props = defineProps({
  msg: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: false
  }
})
const { text } = toRefs(props)
const routes = [
  {
    route: '/',
    title: 'Home'
  },
  // {
  //   route: '/about',
  //   title: 'About'
  // }
]
</script>
<template>
  <section class="flex-1  h-screen   bg-cyan-900   ">
    <header class="h-10 p-6 w-full items-center justify-end  flex  bg-gradient-to-b from-blue-300 to-slate-500 ">
      <nav class="  m-2" v-for="item in routes" :key="item.title">
        <RouterLink :to="item.route" class=" p-2 border-l-2 hover:bg-blue-300">{{ item.title }}</RouterLink>
      </nav>

    </header>
    <div class="flex justify-center   bg-cyan-900   items-center p-2">
      <RouterView  />
    </div>
  </section>
</template>

<style scoped></style>
