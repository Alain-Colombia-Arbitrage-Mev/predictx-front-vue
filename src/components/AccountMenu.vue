<template>
  <div class="relative flex justify-center bg-white p-4">
    <button @click="toggleMenu" class="text-lg flex items-center">
      <span class="text-black">{{ $t('Perfil') }}</span>
      <svg v-if="!showMenu" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
      <svg v-if="showMenu" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </button>
    <transition name="slide-up">
      <div v-if="showMenu" class="absolute bottom-full left-0 w-full bg-black text-white rounded-t-md overflow-hidden">
        <ul>
          <li>
            <button @click="handleAccountSettingsClick" class="text-lg w-full text-left py-3 px-4 hover:bg-white hover:text-black transition-colors duration-200">
              {{ $t('account-settings') }}
            </button>
          </li>
          <li>
            <button @click="handleLogoutClick" class="text-lg w-full text-left py-3 px-4 hover:bg-white hover:text-black transition-colors duration-200">
              {{ $t('logout') }}
            </button>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    handleAccountSettingsClick() {
      this.$emit('account-settings-click');
      this.showMenu = false;
    },
    handleLogoutClick() {
      this.$emit('logout-click');
      this.showMenu = false;
    }
  },
  emits: ['account-settings-click', 'logout-click']
}
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease-out;
}
.slide-up-leave-from,
.slide-up-enter-to {
  transform: translateY(0);
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}
</style>