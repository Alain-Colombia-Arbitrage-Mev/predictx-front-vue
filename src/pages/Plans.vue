<template>
  <div class="container mx-auto py-10 px-4 text-center">
    <!-- Header Section -->
    <h1 class="text-4xl font-bold mb-2">Get an attractive price here</h1>
    <p class="text-lg text-gray-600 mb-12">
      Choose the perfect plan that fits your needs. Whether you're just starting out or ready to scale, we have a plan for you.
    </p>

    <!-- Pricing Cards Section -->
    <div class="flex flex-wrap justify-center gap-8"> <!-- Usar flex para una mejor alineación -->
      <PricingCard
        v-for="plan in plans"
        :key="plan.name"
        :plan="plan"
        :isPopular="plan.name === 'Popular'"
        class="w-[30%]"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PricingCard from '../components/PricingCard.vue'

const plans = ref([
  {
    name: 'Basic',
    price: '$10/month',
    description: 'Perfect for individuals just starting out.',
    features: [
      'Forex Market',
      'Crypto Market',
      'Basic Analytics',
      'Community Support',
    ],
  },
  {
    name: 'Popular',
    price: '$50/month',
    description: 'Best for growing teams that need more control.',
    features: [
      'Forex Market',
      'Crypto Market',
      'Stocks Market',
      'Metals Market',
      'Advanced Analytics',
      'Dedicated Account Manager',
    ],
  },
  {
    name: 'Premium',
    price: '$100/month',
    description: 'Perfect for enterprises with advanced needs.',
    features: [
      'Forex Market',
      'Crypto Market',
      'Stocks Market',
      'Metals Market',
      'Commodities Market',
      'Custom Integrations',
      'Premium Analytics and Reports',
    ],
  },
])
</script>

<style scoped>
.container {
  max-width: 1200px; /* Ancho máximo del contenedor */
}
</style>
