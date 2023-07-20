
<template>
 <div class="flex flex-col  justify-center h-full">
    <h1 class="font-sans text-2xl font-bold text-gray-200">Previsão do Tempo</h1>
    <input type="text" class="mt-4 rounded-md p-2" />
    <div class="mt-9 border-[0.1rem] w-96 h-96 bg-slate-200">
       <div class="flex flex-col" >
        <div v-for="item in store.dataLocation" :key="item.type">
          <h1 class="text-center">{{ item.query }}</h1>
          <p class="float-right text-xs">{{ item.localtime }}</p>

        </div>
     
       </div>
    
    </div>

  </div>
</template>
<script setup>
import {onMounted,ref, defineAsyncComponent } from "vue"
import {useCounterStore} from "../stores/counter"
const   store = useCounterStore()

console.log(store.dataLocation)
onMounted(()=>{


  store.getWeatherLocation()
})
</script>