<template>
  <div class="flex h-screen black text-white">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-800 p-6 flex flex-col">
      <div class="flex items-center mb-8">
        <InfinityIcon class="w-8 h-8 mr-2" />
        <h1 class="text-xl font-bold">PredictX</h1>
      </div>
      <p class="text-sm text-gray-400 mb-8">Tool for predict trends & futures preices</p>
      <nav class="flex-grow">
        <ul class="space-y-4">
          <li><a href="#" class="flex items-center"><RefreshCcwIcon class="w-5 h-5 mr-2" /> Crypto</a></li>
          <li><a href="#" class="flex items-center"><PackageIcon class="w-5 h-5 mr-2" /> Futures</a></li>
          <li><a href="#" class="flex items-center"><TrendingUpIcon class="w-5 h-5 mr-2" /> Forex</a></li>
          <li><a href="#" class="flex items-center"><CircleDollarSignIcon class="w-5 h-5 mr-2" /> Metals</a></li>
          <li><a href="#" class="flex items-center"><BarChartIcon class="w-5 h-5 mr-2" /> Stocks</a></li>
        </ul>
      </nav>
      <div class="mb-8">
        <img src="https://placehold.co/600x400" alt="Sphere" class="w-24 h-24 mx-auto" />
      </div>
      <button class="bg-purple-600 text-white py-2 px-4 rounded-full mb-8 hover:bg-purple-700 transition-colors">
        Get Pro Now
      </button>
      <div class="flex items-center">
        <img src="https://placehold.co/600x400" alt="User Avatar" class="w-10 h-10 rounded-full mr-3" />
        <div>
          <h3 class="font-medium">Tam Tran</h3>
          <p class="text-sm text-gray-400">Free account</p>
        </div>
      </div>
    </aside>

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

      <!-- Predictions Table -->
      <section>
        <h2 class="text-xl font-bold mb-4">Filter predictions</h2>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="bg-gray-800">
                <th class="p-3 text-left">Date</th>
                <th class="p-3 text-left">TimeFrame</th>
                <th class="p-3 text-left">Symbol</th>
                <th class="p-3 text-left">Trend</th>
                <th class="p-3 text-left">Entry price</th>
                <th class="p-3 text-left">Predicción</th>
                <th class="p-3 text-left">SL</th>
                <th class="p-3 text-left">TP</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="prediction in predictions" :key="prediction.id" class="border-b border-gray-700">
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
import { ref } from 'vue'
import { InfinityIcon, RefreshCcwIcon, PackageIcon, TrendingUpIcon, CircleDollarSignIcon, BarChartIcon } from 'lucide-vue-next'

const predictions = ref([
  { id: 1, date: '1', timeFrame: '1D', symbol: 'BTC-USD', trend: 'Long !', entryPrice: '50.0000', prediction: '51.200', sl: '49.500', tp: '62.500' },
  { id: 2, date: '1', timeFrame: '1D', symbol: 'ETH-USD', trend: 'Long !', entryPrice: '2.400', prediction: '2.410', sl: '2.350', tp: '2.610' },
])
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>