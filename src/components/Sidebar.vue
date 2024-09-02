<template>
  <div
    class="h-screen w-[319px] flex flex-col items-start justify-between leading-[normal] tracking-[normal] bg-gray-800 text-white py-6"
  >
    <div class="w-full flex-grow flex flex-col overflow-y-auto">
      <Secciones @section-click="handleSectionClick" class="flex-grow px-4" />
      
      <div class="w-full px-4 py-4 border-t border-gray-700 mt-auto">
        <div class="flex items-center justify-start mb-4">
          <img src="../bandera-española.svg" alt="Español" v-if="$i18n.locale === 'es'" class="h-6 w-6 mr-2" />
          <img src="../bandera-inglesa.svg" alt="Inglés" v-if="$i18n.locale === 'en'" class="h-6 w-6 mr-2" />
          <select @change="handleChangeLanguage" class="bg-gray-700 text-white rounded-md px-3 py-2 w-full">
            <option value="es">{{ $t('Español') }}</option>
            <option value="en">{{ $t('Ingles') }}</option>
          </select> 

          
        </div>
        <section
      class="w-full border-t border-gray-700 p-4 flex flex-col items-center justify-center mt-4"
    >
      <img
        class="w-16 h-20 object-cover mb-4"
        loading="lazy"
        alt=""
        src="/rectangle1@2x.png"
      />
      <Button1 />
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
import Button1 from "./Button1.vue";
import AccountMenu from "./AccountMenu.vue";

export default defineComponent({
  name: "Sidebar",
  components: { Secciones, Button1, AccountMenu },
  emits: ['section-change', 'account-settings-click', 'logout-click'],
  methods: {
    handleSectionClick(section) {
      this.$emit('section-change', section);
    },
    handleAccountSettingsClick() {
      console.log("Se hizo clic en Account Settings");
    },
    handleLogoutClick() {
      console.log("Se hizo clic en Logout");
      localStorage.removeItem('token');
      this.$router.push({ name: 'login' });
    },
    handleChangeLanguage(event) {
      this.$i18n.locale = event.target.value;
    }
  }
});
</script>