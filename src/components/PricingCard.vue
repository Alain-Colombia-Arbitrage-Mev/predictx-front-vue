<template>
  <div
    class="pricing-card flex flex-col justify-between p-8 rounded-lg shadow-lg border transition-transform transform hover:scale-105"
    :class="[
      isPopular ? 'bg-blue-100 border-purple-600' : 'bg-white border-gray-200',
      'text-left'
    ]"
  >
    <div>
      <h3 class="text-2xl font-bold mb-4 text-purple-800">{{ plan.name }}</h3>
      <p class="text-3xl font-bold text-gray-900 mb-4">{{ plan.price }}</p>
      <p class="text-gray-600 mb-6">{{ plan.description }}</p>
      <ul class="mb-6 space-y-2">
        <li v-for="(feature, index) in plan.features" :key="index" class="text-sm text-gray-700">
          {{ feature }}
        </li>
      </ul>
    </div>
    <button
      class="mt-auto bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
    >
      Choose Plan
    </button>
  </div>
</template>

<script setup>
defineProps({
  plan: Object,
  isPopular: Boolean,
})
</script>

<style scoped>
.pricing-card {
  color: black;
  width: 30%; /* Ancho de la tarjeta al 30% del contenedor */
  max-width: 300px; /* Un ancho máximo opcional para asegurar que no sea demasiado grande */
  margin: 0 auto; /* Centrado de cada tarjeta si es necesario */
}
.shadow-lg {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
</style>
