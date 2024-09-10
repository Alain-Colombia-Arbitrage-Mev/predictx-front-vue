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
      <p class="text-3xl font-bold text-gray-900 mb-4">${{ plan.price }}</p>
      <p class="text-gray-600 mb-6">{{ plan.description }}</p>
      <ul class="mb-6 space-y-2">
        <li v-for="(feature, index) in plan.features" :key="index" class="text-sm text-gray-700">
          {{ feature }}
        </li>
      </ul>
    </div>
    <!-- Formulario de pago -->
    <form @submit.prevent="processPayment" class="mt-auto">
      <input type="hidden" name="plan_id" :value="plan._id"> <!-- Enviar el ID del plan -->
      <input type="hidden" name="price_amount" :value="plan.price">
      <input type="hidden" name="price_currency" value="USD">
      <input type="hidden" name="pay_currency" value="USDT.TRC20">
      <input type="hidden" name="item_name" :value="plan.name">
      <input type="hidden" name="item_desc" :value="plan.description">
      <button
        type="submit"
        class="bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
      >
        Pagar
      </button>
    </form>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import SubscriptionService from '../services/subscriptionService'; // Asegúrate de que la ruta sea correcta
import { useRouter } from 'vue-router';

const props = defineProps({
  plan: Object,
  isPopular: Boolean,
});

const router = useRouter();

const processPayment = async (event) => {
  const formData = new FormData(event.target);
  const paymentData = {
    plan: formData.get('plan_id'), // Obtener el ID del plan
    price_amount: formData.get('price_amount'),
    price_currency: formData.get('price_currency'),
    pay_currency: formData.get('pay_currency'),
    item_name: formData.get('item_name'),
    item_desc: formData.get('item_desc'),
    pluginPayment: 'Coinpayments'
  };

  try {
    const response = await SubscriptionService.save(paymentData);
    console.log('Pago procesado exitosamente', response);

    // Verifica si el request fue exitoso y si existe la propiedad data.checkout_url
    if (response.data && response.data.checkout_url) {
      // Redirige a la página de checkout de CoinPayments
      window.open(response.data.checkout_url, '_blank');
    } else {
      console.error('No se pudo obtener la URL de checkout de CoinPayments');
      // Puedes manejar el error aquí, por ejemplo, mostrando un mensaje al usuario
    }
  } catch (error) {
    console.error('Error:', error);
    // Maneja el error, por ejemplo, mostrando un mensaje de error
  }
};
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
