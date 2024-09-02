<template>
  <v-btn
    class="text-lg text-white font-bold  whitespace-nowrap bg-blue-900  transition-colors duration-200 rounded-md px-4 py-2"
    variant="plain"
    >{{ $t('gopronow') }}</v-btn
  >
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Button1",
  });
</script>