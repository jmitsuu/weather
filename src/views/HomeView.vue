
<template>
  <div class="flex flex-col  justify-center  ">
    <h1 class="font-sans text-2xl font-bold text-gray-200 text-center">Previsão do Tempo</h1>
    <span class="relative m-auto">
      <input type="text" class="mt-4 rounded-md p-2" v-model="searchCity" />
    <MagnifyingGlassIcon  class="h-6 w-6 absolute text-gray-950 hover:text-gray-500 bottom-2 right-2 cursor-pointer" @click="getWeather"  />
    </span>


    <div class="mt-9 w-full p-6 bg-slate-800 rounded-md">
      <div class="flex flex-col">
        <div v-for="item in weatherCity " >
          <h1 class="text-center text-gray-200 text-2xl ">{{ item.query }}</h1>
          <div v-for="item in temperature" :key="item.temperature">
            <div class="text-center mb-2">
              <p class=" text-gray-200 text-4xl ">{{ item.temperature }}°</p>
              <p class="text-gray-500">{{ item.weather_descriptions[0] }}</p>
            </div>
            <img class="m-auto rounded-lg w-10" :src="item.weather_icons[0]" />
            <div class="flex bg-slate-200 bg-opacity-70 p-4 rounded-lg gap-4 text-center mt-4">
              <div>
                <p class="text-gray-600">Sensação Térmica</p>
                <P class="text-slate-900">{{ item.feelslike }}°</P>
              </div>
              <div>
                <p class="text-gray-600">Nuvens</p>
                <P class="text-slate-900">{{ item.cloudcover }}%</P>
              </div>
              <div>
                <p class="text-gray-600">Humidade</p>
                <P class="text-slate-900">{{ item.humidity }}%</P>
              </div>
              <div>
                <p class="text-gray-600">Visibilidade</p>
                <P class="text-slate-900">{{ item.visibility }}%</P>
              </div>
              <div>
                <p class="text-gray-600">Ventos</p>
                <P class="text-slate-900">{{ item.wind_speed }}Km/h</P>
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>
<script setup>
import { onMounted, ref, reactive, defineAsyncComponent } from "vue";
import { request } from "../http/fetch"
import { useCounterStore } from "../stores/counter";
import {MagnifyingGlassIcon} from '@heroicons/vue/24/outline'

const store = useCounterStore()
const weatherCity = ref();
const weatherLocation = ref();
const temperature = ref();
const searchCity = ref()

async function getWeather() {
 const {data} = await request('London');
  weatherCity.value 
  // weatherLocation.value =[ data.location]
  // temperature.value = [data.current]
  console.log(data)
}

onMounted(() => {

  store.getWeatherLocation()
})
</script>