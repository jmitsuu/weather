<template>
  <div class="flex flex-col justify-center">
    <h1 class="font-sans text-4xl font-bold text-gray-200 text-center">
      Previsão do Tempo
    </h1>
    <span class="relative m-auto">
      <input type="text" class="mt-4 rounded-md p-2" v-model="searchCity" />
      <MagnifyingGlassIcon
        class="h-6 w-6 absolute text-gray-950 hover:text-gray-500 bottom-2 right-2 cursor-pointer"
        @click="getWeather"
      />
    </span>

    <div class="mt-9 p-6 rounded-md" :class="setBgWeather" v-if="temperature">
      <div class="flex flex-col bg-black bg-opacity-30 p-2 rounded-lg">
        <div v-for="item in temperature">
          <h1 class="text-center text-gray-200 text-3xl">{{ item.name }}</h1>
          <div class="flex justify-center items-center">
            <p class="text-gray-200 text-xl text-center">
              {{ item.weather[0].description }}
            </p>
            <img
              class="h-20"
              :src="`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`"
            />
          </div>
          <div v-for="item in temperature" :key="item.temperature">
            <div class="text-center mb-2">
              <p class="text-gray-200 text-4xl">
                {{ item.main.temp.toFixed(0) }}C°
              </p>
            </div>
            <!-- <img class="m-auto rounded-lg w-10" :src="item.weather_icons[0]" /> -->
            <div
              class="flex bg-slate-200 bg-opacity-80 p-4 rounded-lg text-center mt-4 justify-center gap-9"
            >
              <div>
                <p class="text-gray-600 text-xl">Sensação Térmica</p>
                <P class="text-slate-900 border-2 p-2 rounded-xl font-bold"
                  >{{ item.main.feels_like.toFixed(0) }}C°</P
                >
              </div>
              <div class="">
                <p class="text-gray-600 text-xl">Max/Min</p>
                <div class="flex border-2 p-2 rounded-xl font-bold">
                  <P class="text-slate-900"
                    >{{ item.main.temp_max.toFixed(0) }}C° -</P
                  >
                  <P class="text-slate-900 ml-1">
                    {{ item.main.temp_min.toFixed(0) }}C°
                  </P>
                </div>
              </div>
              <div>
                <p class="text-gray-600 text-xl">Humidade</p>
                <P class="text-slate-900 border-2 rounded-xl p-2 font-bold"
                  >{{ item.main.humidity }}%</P
                >
              </div>

              <div>
                <p class="text-gray-600 text-xl">Ventos</p>
                <P class="text-slate-900 border-2 rounded-xl p-2 font-bold"
                  >{{ item.wind.speed.toFixed(0) }} Km/h</P
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Map :location="latLong" class="mt-9 rounded-lg" />
  </div>
</template>
<script setup>
import { onMounted, ref, reactive, defineAsyncComponent } from "vue";
import { fetchWeather } from "../http/fetch";
import axios from "axios";
import { useCounterStore } from "../stores/counter";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
import Map from "../components/Map.vue";
const store = useCounterStore();
const temperature = ref();
const searchCity = ref();
const latLong = ref();
const setBgWeather = ref();
async function getWeather() {
  const {data} = await fetchWeather.get(`/weather?q=${searchCity.value}&units=metric&lang=pt_BR`)
  temperature.value = [data];
  const { lon, lat } = data.coord;
  const dataLocal = [lat, lon];
  latLong.value = [dataLocal[0], dataLocal[1]];
//change background images
  if (data.weather[0].main == "Clear") {
    setBgWeather.value = "bg-bgSun bg-cover";
  }
  if (data.weather[0].main == "Rain") {
    setBgWeather.value = "bg-bgRain bg-cover text-white";
  }
  if (data.weather[0].main == "Clouds") {
    setBgWeather.value = "bg-bgRain bg-cover text-white";
  }
  if (data.weather[0].main == "Mist") {
    setBgWeather.value = "bg-bgMist bg-cover text-white";
  }

  console.log(data);
}

onMounted(() => {
  store.getWeatherLocation();
});
</script>
