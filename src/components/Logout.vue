<template>
    <button @click="$emit('logout-click')" class="text-lg">{{ $t('logout') }}</button>
  </template>
  
  <script>
  export default {
    name: "Logout",
    emits: ['logout-click']
  }
  </script>