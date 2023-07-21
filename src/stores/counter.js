import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios"
const dataLocation = ref() 
export const useCounterStore = defineStore('useCounterStore', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
 async function getWeatherLocation(){
try {
  const {data} = await axios.get('http://api.weatherstack.com/current?access_key=6293f5c0e72345b869a9d41eecd52185&query=biguacu');
  dataLocation.value =  data

} catch (error) {

}

  }
 
  return { count, doubleCount, increment, getWeatherLocation, dataLocation }
})
