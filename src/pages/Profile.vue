<template>
  <div class="profile-container">
    <h1>Perfil de Cuenta</h1>
    <div class="profile-info">
      <div class="avatar">
        <img :src="user.avatarUrl" alt="Avatar del usuario">
      </div>
      <div class="user-details">
        <h2>{{ user.name }}</h2>
        <p>{{ user.email }}</p>
        <p>Miembro desde: {{ user.memberSince }}</p>
      </div>
    </div>
    <div class="account-settings">
      <h3>Configuración de la cuenta</h3>
      <form @submit.prevent="updateProfile">
        <div class="form-group">
          <label for="name">Nombre</label>
          <input type="text" id="name" v-model="user.name">
        </div>
        <div class="form-group">
          <label for="email">Correo electrónico</label>
          <input type="email" id="email" v-model="user.email">
        </div>
        <div class="form-group">
          <label for="language">Idioma preferido</label>
          <select id="language" v-model="user.language">
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </div>
        <!-- <div class="form-group">
          <label for="theme">Tema</label>
          <select id="theme" v-model="user.theme">
            <option value="dark">Oscuro</option>
            <option value="light">Claro</option>
          </select>
        </div> -->
        <button type="submit" class="update-btn">Actualizar perfil</button>
      </form>
    </div>
    <div class="subscription">
      <h3>Plan de suscripción</h3>
      <p>Plan actual: {{ user.subscription }}</p>
      <button @click="upgradeToPro" class="upgrade-btn" v-if="user.subscription !== 'PRO'">
        Actualizar a PRO
      </button>
    </div>
  </div>
</template>

<script>
import UserService from "../services/UserService"; // Asegúrate de tener el path correcto
import Swal from "sweetalert2";

export default {
  data() {
    return {
      user: {
        name: 'Jhon Doe',
        email: 'usuario@ejemplo.com',
        avatarUrl: 'ruta/a/tu/avatar.jpg',
        memberSince: '01/01/2024',
        language: 'es',
        subscription: 'Básico'
      }
    }
  },
  methods: {
    async updateProfile() {
      try {
        // Llamada a la API para actualizar los datos del usuario
        let userService = new UserService();
        const response = await userService.update({
          name: this.user.name,
          email: this.user.email,
          language: this.user.language
        });

        if (response.status === 200) {
          alert("¡Perfil actualizado correctamente!");
          
        } else {
          Swal.fire("Perfil", String(err), "error");
        }
      } catch (error) {
        console.error("Error actualizando el perfil:", error);
        alert("Ocurrió un error durante la actualización.");
        Swal.fire("Error", String(error), "error");
      }
    },
    upgradeToPro() {
      // Lógica para actualizar a PRO
      console.log('Actualizando a PRO')
    }
  }
}
</script>

<style scoped>
.profile-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: #ffffff;
  font-family: Arial, sans-serif;
}

h1, h2, h3 {
  color: #ffffff;
}

.profile-info {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.avatar img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
}

.user-details p {
  margin: 5px 0;
}

.account-settings, .subscription {
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input, select {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #333;
  background-color: #2a2a2a;
  color: #ffffff;
}

.update-btn, .upgrade-btn {
  background-color: #3366ff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.update-btn:hover, .upgrade-btn:hover {
  background-color: #2952cc;
}
</style>