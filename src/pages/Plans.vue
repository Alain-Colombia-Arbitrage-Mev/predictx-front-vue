<template>
  <div class="container mx-auto py-16 px-4 text-center">
    <!-- Header Section -->
    <h1 class="text-4xl font-bold mb-4">Get an attractive price here</h1>
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
      '5 GB Storage',
      'Basic Support',
      'Single User Access',
      'Community Support',
      'Email Alerts',
      'Limited Customization',
      'Basic Security',
    ],
  },
  {
    name: 'Popular',
    price: '$50/month',
    description: 'Best for growing teams that need more control.',
    features: [
      '100 GB Storage',
      '24/7 Support',
      'Unlimited User Access',
      'Dedicated Account Manager',
      'Data Backup & Recovery',
      'Multi-Channel Alerts',
    ],
  },
  {
    name: 'Premium',
    price: '$100/month',
    description: 'Perfect for enterprises with advanced needs.',
    features: [
      '1 TB Storage',
      'Dedicated Support',
      'Unlimited Access',
      'Custom Integrations',
      'Premium Security',
      'Custom SLA',
      'Dedicated Success Manager',
      'Custom Reports & Dashboards',
    ],
  },
])
</script>

<style scoped>
.container {
  max-width: 1200px; /* Ancho máximo del contenedor */
}
</style>
