<template>
  <main class="w-[680px] h-[400px]" v-if="location == undefined ? location = [-27.6146, -48.5012] : location" >
    <l-map ref="map"  v-model:zoom="zoom" :center="location"  :useGlobalLeaflet="false">
      <l-tile-layer url="https://tile.openstreetmap.org/{z}/{x}/{y}{r}.png"
                    layer-type="base"
                    name="Stadia Maps Basemap"></l-tile-layer>
                    <l-marker v-if="location" :lat-lng="location" ></l-marker>
    </l-map>
  </main>

</template>

<script setup>
import "leaflet/dist/leaflet.css"
import {ref} from "vue"
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet"
const latitudes = ref()
const props = defineProps({
location:Object,

})
const zoom = ref(12)
const teste = ref([-27.6146, -48.5012])
const center = ref([38, 139.69])

// -27.4942
// -48.6556
console.log(latitudes.value )
</script>
<style>
html, body {
  margin: 0;
  padding: 0;
}


</style>

