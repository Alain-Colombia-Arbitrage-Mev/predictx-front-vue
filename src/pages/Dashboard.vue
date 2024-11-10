<template>
  <div class="flex h-screen bg-black text-white">
    <Loader :isLoading="loading" />
    <Sidebar @section-change="handleSectionChange" />
    
    <!-- Main Content -->
    <main class="flex-grow p-8 overflow-auto">
      <!-- Encabezado con saludo y suscripción en el mismo nivel -->
      <div class="flex justify-between items-center mb-8">
        <!-- Columna Izquierda: Saludo -->
        <div>
          <h2 class="text-2xl font-bold">{{ $t("hello") }}, {{ username }}</h2>
          <p class="text-lg">{{ $t('welcomeback') }} 🎉</p>
        </div>
        
        <!-- Columna Derecha: Información de Suscripción -->
        <div v-if="subscription" class="flex flex-col items-start bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold mb-2">Suscripción</h3>
          <p><span class="font-bold">Plan:</span> {{ subscription.plan }}</p>
          <!-- <p><span class="font-bold">Tipo:</span> {{ subscription.type }}</p> -->
          <p><span class="font-bold">Expira el:</span> {{ formattedExpiryDate }}</p>
          <p v-if="isExpired" class="text-red-500 font-bold mt-2">⚠️ Expirado, ¡Renueva!</p>
        </div>
      </div>

      <!-- Contenido adicional (Router View) -->
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Sidebar from '../components/Sidebar.vue';
import AuthService from '../services/AuthService';
import Loader from '../components/Loader.vue';
import loading from '../store/loadingState';

// Obtener el usuario autenticado
const authService = new AuthService();
const user = ref(authService.userLogged());

// Obtener nombre de usuario
const username = computed(() => user.value.username);

// Obtener suscripción
const subscription = computed(() => user.value.subscription ? user.value.subscription[0] : null);

// Formatear la fecha de expiración
const formattedExpiryDate = computed(() => {
  return subscription.value?.expiresAt 
    ? new Date(subscription.value.expiresAt).toLocaleDateString()
    : 'N/A';
});

// Validar si la suscripción ha expirado
const isExpired = computed(() => {
  return subscription.value?.expiresAt 
    ? new Date(subscription.value.expiresAt) < new Date()
    : false;
});

// Manejo de sección actual
const currentSection = ref('Crypto');
const selectedSymbol = ref('');

const handleSectionChange = (section) => {
  currentSection.value = section;
  selectedSymbol.value = ''; // Reset symbol filter when changing sections
};
</script>

<style scoped>
/* Estilos personalizados para el dashboard */
main {
  background-color: #1a1a1a;
  color: #ffffff;
}

h2, h3 {
  color: #ffffff;
}

p {
  color: #d1d1d1;
}

.bg-gray-800 {
  background-color: #2d2d2d;
}

.shadow-lg {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
