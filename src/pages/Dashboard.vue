<template>
  <div class="flex h-screen bg-black text-white">
    <Sidebar @section-change="handleSectionChange" />
    
    <!-- Main Content -->
    <main class="flex-grow p-8 overflow-auto">
      <header class="mb-8">
        <h2 class="text-2xl font-bold">Hi {{ username }}</h2>
        <p class="text-lg">Welcome back 🎉</p>
      </header>

      <!-- Banner -->
      <div class="h-48 relative overflow-hidden">
        <img src="/src/images/banner1.gif" class="absolute object-cover w-full h-full" />
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <h2 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold z-10">Predicciones Recientes</h2>
      </div>

      <!-- Predictions Table with Filter -->
      <section class="mt-8">
        <h2 class="text-xl font-bold mb-4">{{ currentSection }} Predictions</h2>
        
        <!-- Symbol Filter -->
        <div class="mb-4">
          <label for="symbolFilter" class="block text-sm font-medium text-gray-400 mb-2">Filter by Symbol:</label>
          <select id="symbolFilter" v-model="selectedSymbol" class="bg-gray-700 text-white rounded-md px-3 py-2 w-full max-w-xs">
            <option value="">All Symbols</option>
            <option v-for="symbol in uniqueSymbols" :key="symbol" :value="symbol">{{ symbol }}</option>
          </select>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="bg-gray-800">
                <th class="p-3 text-left">Date</th>
                <th class="p-3 text-left">TimeFrame</th>
                <th class="p-3 text-left">Symbol</th>
                <th class="p-3 text-left">Trend</th>
                <th class="p-3 text-left">Entry price</th>
                <th class="p-3 text-left">Prediction</th>
                <th class="p-3 text-left">SL</th>
                <th class="p-3 text-left">TP</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="prediction in filteredPredictions" :key="prediction.id" class="border-b border-gray-700">
                <td class="p-3">{{ prediction.date }}</td>
                <td class="p-3">{{ prediction.timeFrame }}</td>
                <td class="p-3">{{ prediction.symbol }}</td>
                <td class="p-3">{{ prediction.trend }}</td>
                <td class="p-3">{{ prediction.entryPrice }}</td>
                <td class="p-3">{{ prediction.prediction }}</td>
                <td class="p-3">{{ prediction.sl }}</td>
                <td class="p-3">{{ prediction.tp }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Sidebar from '../components/Sidebar.vue'

const username = ref('John Doe') // Replace with actual username logic
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

const uniqueSymbols = computed(() => {
  return [...new Set(predictions[currentSection.value].map(p => p.symbol))]
})

const filteredPredictions = computed(() => {
  const sectionPredictions = predictions[currentSection.value]
  if (!selectedSymbol.value) {
    return sectionPredictions
  }
  return sectionPredictions.filter(p => p.symbol === selectedSymbol.value)
})

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