<template>
  <section class="mt-8">

    <!-- Symbol Filter -->
    <div class="mb-4">
      <label for="symbolFilter" class="block text-sm font-medium text-gray-400 mb-2">Filter by Symbol:</label>
      <select id="symbolFilter" v-model="selectedSymbol" class="bg-gray-700 text-white rounded-md px-3 py-2 w-full max-w-xs">
        <option value="">All Symbols</option>
        <option v-for="symbol in uniqueSymbols" :key="symbol" :value="symbol">{{ symbol }}</option>
      </select>
    </div>

    <!-- Predictions Table -->
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="bg-gray-800">
            <th class="p-3 text-left">Date</th>
            <th class="p-3 text-left">TimeFrame</th>
            <th class="p-3 text-left">Symbol</th>
            <th class="p-3 text-left">Trend</th>
            <th class="p-3 text-left">Entry Price</th>
            <th class="p-3 text-left">Prediction</th>
            <th class="p-3 text-left">SL</th>
            <th class="p-3 text-left">TP</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="prediction in paginatedPredictions" :key="prediction.id" class="border-b border-gray-700">
            <td class="p-3">{{ prediction.created }}</td>
            <td class="p-3">{{ prediction.timeframe }}</td>
            <td class="p-3">{{ prediction.currency }}</td>
            <td class="p-3">{{ prediction.trend }}</td>
            <td class="p-3">{{ prediction.entry }}</td>
            <td class="p-3">{{ prediction.prediction }}</td>
            <td class="p-3">{{ prediction.sl }}</td>
            <td class="p-3">{{ prediction.tp }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="mt-4 flex justify-between items-center">
      <button @click="prevPage" :disabled="currentPage === 1" class="px-4 py-2 bg-gray-700 text-white rounded-md disabled:opacity-50">
        Previous
      </button>
      <span class="text-gray-400">Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="px-4 py-2 bg-gray-700 text-white rounded-md disabled:opacity-50">
        Next
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  predictions: {
    type: Array,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
})

const selectedSymbol = ref('')

// Compute unique symbols for the filter dropdown
const uniqueSymbols = computed(() => {
  return [...new Set(props.predictions.map(p => p.currency))]
})

// Filter predictions based on selected symbol
const filteredPredictions = computed(() => {
  if (!selectedSymbol.value) {
    return props.predictions
  }
  return props.predictions.filter(p => p.currency === selectedSymbol.value)
})

const currentPage = ref(1)
const itemsPerPage = 10

const paginatedPredictions = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return filteredPredictions.value.slice(startIndex, endIndex)
})

const totalPages = computed(() => {
  return Math.ceil(filteredPredictions.value.length / itemsPerPage)
})

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}
</script>

<style scoped>
/* Custom styles */
</style>
