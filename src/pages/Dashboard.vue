 <template>
  <div class="flex h-screen bg-black text-white">
    <Sidebar> </Sidebar>
    <!-- Sidebar -->

    <!-- Main Content -->
    <main class="flex-grow p-8 overflow-auto">
      <header class="mb-8">
        <h2 class="text-2xl font-bold">Hi { username }</h2>
        <p class="text-lg">Welcome back 🎉</p>
      </header>

      <!-- Banner -->
      <div class="bg-purple-600 rounded-lg p-6 mb-8 relative overflow-hidden h-48">
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-40 h-40 bg-pink-400 rounded-full relative">
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500 rounded-full"></div>
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-pink-300 rounded-full"></div>
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-purple-400 rounded-full"></div>
          </div>
        </div>
      </div>

      <!-- Predictions Table with Filter -->
      <section>
        <h2 class="text-xl font-bold mb-4">Filter predictions</h2>
        
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

import { InfinityIcon, RefreshCcwIcon, PackageIcon, TrendingUpIcon, CircleDollarSignIcon, BarChartIcon } from 'lucide-vue-next'

const predictions = ref([
  { id: 1, date: '1', timeFrame: '1D', symbol: 'BTC-USD', trend: 'Long !', entryPrice: '50.0000', prediction: '51.200', sl: '49.500', tp: '62.500' },
  { id: 2, date: '1', timeFrame: '1D', symbol: 'ETH-USD', trend: 'Long !', entryPrice: '2.400', prediction: '2.410', sl: '2.350', tp: '2.610' },
])

const selectedSymbol = ref('')

const uniqueSymbols = computed(() => {
  return [...new Set(predictions.value.map(p => p.symbol))]
})

const filteredPredictions = computed(() => {
  if (!selectedSymbol.value) {
    return predictions.value
  }
  return predictions.value.filter(p => p.symbol === selectedSymbol.value)
})

// export default defineComponent({
//   name: "Dashboard",
//   components: {
//     Sidebar,
//   },
// });

</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>