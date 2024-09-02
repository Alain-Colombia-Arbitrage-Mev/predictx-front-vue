<template>
  <div> <!-- Contenedor raíz -->
    <!-- Banner -->
    <div class="h-48 relative overflow-hidden">
      <img src="/src/images/banner1.gif" class="absolute object-cover w-full h-full" />
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <h2 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold z-10">
        Predicciones Recientes  {{ symbol }}
      </h2>
    </div>

    <!-- Signal List Component -->
    <SignalList :predictions="predictions[currentSection]" :section="symbol" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import SignalList from '../components/SignalList.vue'

const route = useRoute()
const symbol = computed(() => route.params.symbol || '')

const currentSection = ref('Crypto')
const selectedSymbol = ref('')

const predictions = {
  Crypto: [
    { id: 1, date: '2023-09-01', timeFrame: '1D', symbol: 'BTC-USD', trend: 'Long', entryPrice: '50000', prediction: '51200', sl: '49500', tp: '52500' },
    { id: 2, date: '2023-09-01', timeFrame: '1D', symbol: 'ETH-USD', trend: 'Long', entryPrice: '2400', prediction: '2410', sl: '2350', tp: '2610' },
  ],
  Metals: [
    { id: 3, date: '2023-09-01', timeFrame: '1D', symbol: 'GOLD', trend: 'Short', entryPrice: '1900', prediction: '1880', sl: '1920', tp: '1850' },
    { id: 4, date: '2023-09-01', timeFrame: '1D', symbol: 'SILVER', trend: 'Long', entryPrice: '24', prediction: '24.5', sl: '23.8', tp: '25' },
  ],
  Forex: [
    { id: 5, date: '2023-09-01', timeFrame: '1D', symbol: 'EUR/USD', trend: 'Long', entryPrice: '1.0500', prediction: '1.0550', sl: '1.0480', tp: '1.0600' },
    { id: 6, date: '2023-09-01', timeFrame: '1D', symbol: 'GBP/JPY', trend: 'Short', entryPrice: '150.00', prediction: '149.50', sl: '150.50', tp: '148.50' },
  ],
  Stocks: [
    { id: 7, date: '2023-09-01', timeFrame: '1D', symbol: 'AAPL', trend: 'Long', entryPrice: '150', prediction: '155', sl: '148', tp: '160' },
    { id: 8, date: '2023-09-01', timeFrame: '1D', symbol: 'GOOGL', trend: 'Short', entryPrice: '2800', prediction: '2750', sl: '2830', tp: '2700' },
  ],
}

const handleSectionChange = (section) => {
  currentSection.value = section
  selectedSymbol.value = '' // Reset symbol filter when changing sections
}
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>
