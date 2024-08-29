<template>
  <div
    class="flex-1 flex flex-col items-start justify-start py-[210px] px-1 gap-[147px] text-center text-21xl text-primary-contrast font-poppins mq675:pt-[88px] mq675:pb-[88px] mq675:box-border"
  >
    <h1
      class="m-0 self-stretch relative text-inherit tracking-[-1px] leading-[64px] font-semibold font-[inherit] mq450:text-5xl mq450:leading-[38px] mq750:text-13xl mq750:leading-[51px]"
    >
      PredictX
    </h1>
    <div
      class="self-stretch relative text-xl tracking-[-0.5px] leading-[40px] mq450:text-base mq450:leading-[32px]"
    >
      <p class="m-0">Ai for predict prices</p>
      <p class="m-0">Crypto, Futures and Forex</p>
    </div>
    <div
      class="self-stretch flex flex-row items-start justify-start py-0 px-14"
    >
      <img
        class="h-[97px] flex-1 relative max-w-full overflow-hidden object-cover"
        loading="lazy"
        alt=""
        src="/logogrande-22@2x.png"
      />
    </div>
    <div
      class="self-stretch flex flex-row items-start justify-start py-0 px-[13px]"
    >
      <div
        class="flex-1 flex flex-row items-start justify-between py-[5px] px-0 gap-5"
      >
        <div
          class="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0"
        >
          <div
            class="h-[31px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[15px] px-[5px] box-border"
          >
            <img
              class="w-7 h-[27px] relative object-cover"
              loading="lazy"
              alt=""
              src="/vector1@2x.png"
            />
          </div>
        </div>
        <div class="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
          <div
            class="h-[30px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-3.5 px-0.5 box-border"
          >
            <img
              class="w-[35px] h-[30px] relative object-cover"
              loading="lazy"
              alt=""
              src="/vector-11@2x.png"
            />
          </div>
        </div>
        <div
          class="h-[42px] w-[46px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-5 px-[5px] box-border"
        >
          <img
            class="w-[35px] h-[27.1px] relative object-cover"
            loading="lazy"
            alt=""
            src="/group-51@2x.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Content",
  });
</script>
