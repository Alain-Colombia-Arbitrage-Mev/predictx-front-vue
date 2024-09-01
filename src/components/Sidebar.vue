<template>
  <div
    class="w-[319px] flex flex-col items-start justify-start leading-[normal] tracking-[normal]"
  >
    <Secciones @section-click="handleSectionClick" />
    <section
      class="h-[220px] border-light-border border-t-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-[29px] px-14"
    >
      <div
        class="flex-1 flex flex-col items-center justify-between py-0 px-[29px]"
      >
        <img
          class="w-[68px] h-[92px] relative object-cover"
          loading="lazy"
          alt=""
          src="/rectangle1@2x.png"
        />
        <Button1 />
      </div>
    </section>
    <AccountSettings />
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Secciones from "./Secciones.vue";
import Button1 from "./Button1.vue";
import AccountSettings from "./AccountSettings.vue";

export default defineComponent({
  name: "Sidebar",
  components: { Secciones, Button1, AccountSettings },
  emits: ['section-change'],
  methods: {
    handleSectionClick(section) {
      this.$emit('section-change', section);
    }
  }
});
</script>