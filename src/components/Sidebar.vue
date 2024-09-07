<template>
  <div
    class="h-screen w-[319px] flex flex-col items-start justify-between leading-[normal] tracking-[normal] bg-gray-800 text-white py-6"
  >
    <div class="w-full flex-grow flex flex-col overflow-y-auto">
      <Secciones @section-click="handleSectionClick" class="flex-grow px-4" />

      <div class="w-full px-4 py-4 border-t border-gray-700 mt-auto">
        <div class="flex items-center justify-start mb-4">
          <img
            src="../bandera-española.svg"
            alt="Español"
            v-if="$i18n.locale === 'es'"
            class="h-6 w-6 mr-2"
          />
          <img
            src="../bandera-inglesa.svg"
            alt="Inglés"
            v-if="$i18n.locale === 'en'"
            class="h-6 w-6 mr-2"
          />
          <select
            @change="handleChangeLanguage"
            class="bg-gray-700 text-white rounded-md px-3 py-2 w-full"
          >
            <option value="es">{{ $t('Español') }}</option>
            <option value="en">{{ $t('Ingles') }}</option>
          </select>
        </div>

        <!-- Sección del botón de actualización -->
        <section
          class="w-full border-t border-gray-700 p-4 flex flex-col items-center justify-center mt-4"
        >
          <img
            class="w-16 h-20 object-cover mb-4"
            loading="lazy"
            alt=""
            src="/rectangle1@2x.png"
          />
          <!-- Nuevo botón con diseño -->
          <button
            @click="handleUpgradeClick"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
          >
            {{ $t('gopronow') }}
          </button>
        </section>
      </div>

      <AccountMenu
        @account-settings-click="handleAccountSettingsClick"
        @logout-click="handleLogoutClick"
        class="w-full"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Secciones from "./Secciones.vue";
import AccountMenu from "./AccountMenu.vue";
import AuthService from "../services/AuthService";

let service = new AuthService();

export default defineComponent({
  name: "Sidebar",
  components: { Secciones, AccountMenu },
  emits: ["section-change", "account-settings-click", "logout-click"],
  methods: {
    handleSectionClick(section) {
      this.$emit("section-change", section);
    },
    handleAccountSettingsClick() {
      console.log("Se hizo clic en Account Settings");
    },
    handleLogoutClick() {
      service.logout();
      localStorage.removeItem("token");

      this.$router.push({ name: "Login" });
    },
    handleChangeLanguage(event) {
      this.$i18n.locale = event.target.value;
    },
    handleUpgradeClick() {
      // Redirige a la ruta 'upgrade'
      this.$router.push({ name: "upgrade" });
    },
  },
});
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>
