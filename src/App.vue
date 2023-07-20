<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Menu from './components/Menu.vue'
import HomeView from './views/HomeView.vue';

</script>

<template>
  <section class="flex ">
    <main class="absolute w-full h-full bg-gradient-to-b from-sky-950 to-slate-500">
      <Menu/>
    </main>
   <div>

   </div>
  </section>
 
</template>

