<template>
  <div
    class="w-full relative bg-black overflow-hidden flex flex-row items-start justify-start pt-14 px-[59px] pb-[55px] box-border leading-[normal] tracking-[normal]"
  >
    <main
      class="flex-1 flex flex-col items-center justify-center py-[44.2px] px-0 gap-[22px] text-left text-11xl-2 text-primary-contrast font-roboto"
    >
      <img
        class="w-[111px] h-[97px] relative overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src="/logogrande-2@2x.png"
      />
      <div
        class="flex flex-row items-center justify-center py-0 px-[34px] text-center font-poppins"
      >
        <div class="relative leading-[47px] font-semibold">LOGIN PredictX</div>
      </div>
      <section
        class="self-stretch flex flex-col items-start justify-between min-h-[135px] text-left text-3xl text-gray font-inter"
      >
        <div class="self-stretch flex flex-col items-start justify-start">
          <div
            class="self-stretch rounded-default-border-raius border-light-border border-[1.4px] border-solid flex flex-row items-center justify-start py-3 pl-[19px] pr-[17px]"
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
            class="self-stretch rounded-default-border-raius border-light-border border-[1.4px] border-solid flex flex-row items-center justify-start py-3 pl-[19px] pr-[17px]"
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
        class="flex flex-row items-center justify-center py-2.5 px-[51px] text-9xl-3 mq295:pl-5 mq295:pr-5 mq295:box-border"
      >
        <div class="relative leading-[54px] whitespace-pre-wrap shrink-0">
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
        <div
          class="relative tracking-[0.72px] leading-[41px] font-medium inline-block min-w-[54px]"
        >
          Sign in
        </div>
      </div>
    </main>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "IPhone8Plus",
  });
</script>
