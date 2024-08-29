<template>
  <div
    class="w-full h-[568px] relative bg-black overflow-hidden flex flex-row items-start justify-start py-0 px-[34px] box-border leading-[normal] tracking-[normal]"
  >
    <main
      class="mt-[-28px] flex-1 flex flex-col items-center justify-center py-[110px] px-0 gap-[22px] text-left text-xl text-primary-contrast font-roboto"
    >
      <img
        class="w-12 h-[43px] relative overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src="/logogrande-21@2x.png"
      />
      <div
        class="flex flex-row items-center justify-center py-0 px-[50px] text-center font-poppins"
      >
        <h3
          class="m-0 relative text-inherit leading-[47px] font-semibold font-[inherit]"
        >
          LOGIN PredictX
        </h3>
      </div>
      <section
        class="self-stretch flex flex-col items-center justify-start gap-[19px] text-left text-sm text-gray font-inter"
      >
        <div class="self-stretch flex flex-col items-start justify-start">
          <div
            class="self-stretch rounded-default-border-raius border-light-border border-[1.4px] border-solid flex flex-row items-center justify-start py-px pl-[19px] pr-[17px]"
          >
            <div
              class="flex-1 relative leading-[33px] overflow-hidden text-ellipsis whitespace-nowrap"
            >
              username
            </div>
          </div>
        </div>
        <div class="self-stretch flex flex-col items-start justify-start">
          <div
            class="self-stretch rounded-default-border-raius border-light-border border-[1.4px] border-solid flex flex-row items-center justify-start py-px pl-[19px] pr-[17px]"
          >
            <div
              class="flex-1 relative leading-[33px] overflow-hidden text-ellipsis whitespace-nowrap"
            >
              Password
            </div>
          </div>
        </div>
      </section>
      <div
        class="flex flex-row items-center justify-center py-2.5 px-[75px] text-sm"
      >
        <div class="relative whitespace-pre-wrap inline-block min-w-[99px]">
          Or sign in with:
        </div>
      </div>
      <div
        class="self-stretch h-9 rounded-mini bg-primary-contrast flex flex-row items-center justify-between py-0 px-[42px] box-border gap-5"
      >
        <div
          class="flex flex-col items-center justify-between py-[11.5px] px-0 box-border min-h-[50px]"
        >
          <div class="overflow-hidden flex flex-row items-center justify-start">
            <img
              class="h-[27px] w-7 relative"
              loading="lazy"
              alt=""
              src="/socialicongm.svg"
            />
          </div>
        </div>
        <div
          class="flex flex-col items-center justify-between pt-0 px-0 pb-0 box-border min-h-[50px]"
        >
          <img
            class="w-[50.3px] h-[50.3px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/facebook.svg"
          />
        </div>
        <div
          class="flex flex-col items-center justify-between py-3 px-0 box-border min-h-[52px]"
        >
          <img
            class="w-7 h-7 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/facebook-1.svg"
          />
        </div>
      </div>
      <div
        class="h-[38px] rounded-[43.98px] bg-royalblue overflow-hidden shrink-0 flex flex-row items-center justify-center py-0 px-[54px] box-border whitespace-nowrap text-base hover:bg-blueviolet-100"
      >
        <a
          class="[text-decoration:none] relative tracking-[0.72px] leading-[41px] font-medium text-[inherit] inline-block min-w-[54px]"
          >Sign in</a
        >
      </div>
    </main>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "IPhoneSE",
  });
</script>
