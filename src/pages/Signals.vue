<template>
  <div> <!-- Contenedor raíz -->
    <!-- Banner -->
    <div class="h-48 relative overflow-hidden">
      <img src="/src/images/banner1.gif" class="absolute object-cover w-full h-full" />
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <h2 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold z-10">
        Predicciones Recientes {{ symbol }}
      </h2>
    </div>
    <!-- Signal List Component -->
    <SignalList :predictions="signals" :section="currentSection" />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import SignalList from '../components/SignalList.vue'

const route = useRoute()
const symbol = computed(() => route.params.symbol || '')

const currentSection = ref('Crypto')
const signals = ref([])

// Función para obtener las señales desde la API
const fetchSignals = async () => {
  try {
    const response = await axios.get('http://localhost:9000/api/signals', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer jxqNiJ99h/vWuBOAHGxz03skYoJqTg56DWooh6vomUatJEtmTThC2ufQMvwmABvovqmFuYvXxeOxUAbknWGMfQ==` // Cambia 'YOUR_BEARER_TOKEN_HERE' por el token adecuado
      }
    })

    
    signals.value = response.data.data
    console.log("signals", response.data.data);
  } catch (error) {
    console.error('Error fetching signals:', error)
  }
}

// Llamar a la función fetchSignals cuando el componente se monte
onMounted(() => {
  fetchSignals()
})

const handleSectionChange = (section) => {
  currentSection.value = section
}
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>
