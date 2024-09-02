<template>
  <div
    class="w-[319px] flex flex-col items-start justify-start leading-[normal] tracking-[normal]"
  >
    <Secciones />
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
        <v-btn
        class="whitespace-nowrap hover:bg-royalblue"
        color="primary"
        variant="plain"
        >Upgrade</v-btn
        >
      </div>
    </section>
    <AccountSettings />
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import Secciones from "./Secciones.vue";
  import AccountSettings from "./AccountSettings.vue";

  export default defineComponent({
    name: "Sidebar",
    components: { Secciones, AccountSettings },
  });
</script>
