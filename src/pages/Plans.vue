<template>
  <div class="container mx-auto py-16 px-4 text-center">
    <!-- Header Section -->
    <h1 class="text-4xl font-bold mb-4">Get an attractive price here</h1>
    <p class="text-lg text-gray-600 mb-12">
      Choose the perfect plan that fits your needs. Whether you're just starting out or ready to scale, we have a plan for you.
    </p>

    <!-- Pricing Cards Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <PricingCard
        v-for="plan in plans"
        :key="plan.name"
        :plan="plan"
        :isPopular="plan.name === 'Popular'"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PricingCard from '../components/PricingCard.vue'

const plans = ref([
  {
    name: 'Intro',
    price: '$10/month',
    description: 'Perfect for individuals just starting out.',
    features: [
      '5 GB Storage',
      'Basic Support',
      'Single User Access',
      'Community Support',
      'Basic Analytics',
      'Basic Integrations',
      'Free Updates',
      'Email Alerts',
      'Limited Customization',
      'Basic Security',
    ],
  },
  {
    name: 'Base',
    price: '$30/month',
    description: 'Ideal for small teams or startups.',
    features: [
      '25 GB Storage',
      'Priority Support',
      'Multiple User Access',
      'Weekly Reports',
      'Advanced Analytics',
      'API Integrations',
      'Enhanced Security',
      'Customizable Interface',
      'Unlimited Updates',
      'Slack Alerts',
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
      'Daily Reports',
      'Premium Analytics',
      'Advanced Integrations',
      'Full Customization',
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
      'Real-Time Reports',
      'Advanced Data Science',
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
  max-width: 1200px;
}
</style>
