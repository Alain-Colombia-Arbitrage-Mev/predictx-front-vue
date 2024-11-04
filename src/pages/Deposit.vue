<template>
  <div class="container mx-auto py-10 px-4 text-center">
    <!-- Header Section -->
    <h1 class="text-4xl font-bold mb-2">Fast Buy / Sell </h1>
    <p class="text-lg text-gray-600 mb-12">
     Fast Buy / Sell Crypto
    </p>

    <!-- Deposit Form -->
    <form @submit.prevent="handleDeposit" class="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <div class="mb-6">
        <label for="amount" class="block text-left text-gray-700 font-medium mb-2">
          Amount in USD
        </label>
        <input 
          type="number" 
          id="amount" 
          v-model="amount" 
          min="10" 
          step="0.01"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter amount to deposit"
          required 
        />
      </div>

      <button 
        type="submit" 
        class="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity duration-300">

        Deposit with Unlimit
 
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const amount = ref(0);

const handleDeposit = () => {
  if (amount.value <= 0) {
    alert('Please enter a valid amount!');
    return;
  }

  // Redirigir a OnRamper con el monto especificado

  const onramperUrl = `https://onramp-sandbox.gatefi.com/?merchantId=0180333c-d5ee-472b-8767-e4504b717708&cryptoCurrencyLock=true&cryptoCurrency=USDT-TRC20&wallet=0xD14562135758d083698b0Ae04d1F355CC35D23F9&walletLock=true&cryptoAmount=${amount.value}`;

  window.open(onramperUrl, '_blank');
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
