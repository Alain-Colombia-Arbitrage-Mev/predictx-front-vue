<template>
  <section
    class="self-stretch border-light-border border-t-[1px] border-solid overflow-hidden flex flex-col items-start justify-start pt-[27px] px-[25px] pb-[29px] text-left text-base text-fuschia-60 font-caption-caption-1-13"
  >
    <div class="self-stretch flex flex-col items-start justify-start">
      <div
        class="self-stretch rounded-md flex flex-row items-center justify-start py-3.5 pl-3 pr-[85px] gap-[18px]"
      >
        <img
          class="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          loading="lazy"
          alt=""
          src="/solidicon.svg"
        />
        <div class="relative leading-[24px] cursor-pointer" @click="$emit('account-settings-click')">Account Settings</div>
      </div>
    </div>
  </section>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "AccountSettings",
    emits: ['account-settings-click']
  });
</script>