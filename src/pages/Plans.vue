<template>
  <div class="container mx-auto py-10 px-4 text-center">
    <!-- Header Section -->
    <h1 class="text-4xl font-bold mb-2">Get an attractive price here</h1>
    <p class="text-lg text-gray-600 mb-12">
      Choose the perfect plan that fits your needs. Whether you're just starting out or ready to scale, we have a plan for you.
    </p>

    <!-- Pricing Cards Section -->
    <div class="flex flex-wrap justify-center gap-8">
      <PricingCard
        v-for="plan in plans"
        :key="plan._id"
        :plan="plan"
        :isPopular="plan.name === 'Popular'"
        class="w-[30%]"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PricingCard from '../components/PricingCard.vue';
import PlanService from '../services/PlanService';
let service = new PlanService();
const plans = ref([]);

const fetchPlans = async () => {
  try {
    const response = await service.list();

    console.log(response);
    
    plans.value = response.data.data;
  } catch (error) {
    console.error('Error fetching plans:', error);
  }
};

onMounted(() => {
  fetchPlans();
});
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
