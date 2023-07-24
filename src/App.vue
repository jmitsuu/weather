<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Menu from './components/Menu.vue'
import HomeView from './views/HomeView.vue';

</script>

<template>
  <section class="flex ">
    <main class="absolute w-full h-screen  bg-gradient-to-b from-cyan-900 to-slate-500">
      <Menu/>
    </main>
   <div>

   </div>
  </section>
 
</template>

