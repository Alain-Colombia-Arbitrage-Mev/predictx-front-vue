<template>
  <div
    class="w-full relative flex flex-row items-start justify-start leading-[normal] tracking-[normal] [row-gap:20px] mq750:flex-wrap"
  >
    <div
      class="w-[250.2px] bg-blueviolet-200 overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 px-[9px] box-border min-w-[250.2px] mq750:flex-1"
    >
      <content />
    </div>
    <main
      class="flex-1 bg-black overflow-hidden flex flex-row items-start justify-center py-[355px] px-5 box-border min-w-[380px] max-w-full z-[1] ml-[-0.2px] mq450:min-w-full mq675:pb-[150px] mq675:box-border mq675:ml-0"
    >
      <section
        class="h-[484px] w-[395px] flex flex-col items-center justify-between max-w-full text-left text-11xl-2 text-primary-contrast font-roboto mq450:h-auto"
      >
        <div
          class="self-stretch flex flex-row items-center justify-center py-0 px-5 text-center font-poppins"
        >
          <div
            class="relative leading-[47px] font-semibold mq450:text-lg mq450:leading-[28px] mq750:text-5xl mq750:leading-[37px]"
          >
            LOGIN PredictX
          </div>
        </div>
        <div
          class="self-stretch flex flex-col items-start justify-between min-h-[135px] max-w-full shrink-0 text-3xl text-gray font-inter"
        >
          <div
            class="self-stretch flex flex-col items-start justify-start max-w-full shrink-0"
          >
            <div
              class="self-stretch rounded-default-border-raius bg-primary-contrast border-light-border border-[1.4px] border-solid box-border flex flex-row items-center justify-start py-3 pl-[19px] pr-[17px] max-w-full"
            >
              <div
                class="flex-1 relative leading-[33px] inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-full mq450:text-lg mq450:leading-[26px]"
              >
                username
              </div>
            </div>
          </div>
          <div
            class="self-stretch flex flex-col items-start justify-start max-w-full shrink-0"
          >
            <div
              class="self-stretch rounded-default-border-raius bg-primary-contrast border-light-border border-[1.4px] border-solid box-border flex flex-row items-center justify-start py-3 pl-[19px] pr-[17px] max-w-full"
            >
              <div
                class="flex-1 relative leading-[33px] inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-full mq450:text-lg mq450:leading-[26px]"
              >
                Password
              </div>
            </div>
          </div>
        </div>
        <div
          class="self-stretch flex flex-row items-center justify-center py-2.5 px-5 text-9xl-3"
        >
          <div
            class="relative leading-[54px] whitespace-pre-wrap mq450:text-4xl mq450:leading-[43px]"
          >
            Or sign in with:
          </div>
        </div>
        <div
          class="self-stretch rounded-mini bg-primary-contrast flex flex-row items-center justify-between py-0 px-[42px] gap-5 mq450:flex-wrap mq450:justify-center"
        >
          <div
            class="flex flex-col items-center justify-between py-[11.5px] px-0 box-border min-h-[50px]"
          >
            <div
              class="overflow-hidden flex flex-row items-center justify-start"
            >
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
          class="self-stretch rounded-[43.98px] bg-royalblue overflow-hidden flex flex-row items-center justify-center py-[16.5px] px-5 whitespace-nowrap text-6xl-1 hover:bg-blueviolet-100"
        >
          <div
            class="relative tracking-[0.72px] leading-[41px] font-medium inline-block min-w-[82px]"
          >
            Sign in
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import Content from "../components/Content.vue";

  export default defineComponent({
    name: "Ipad",
    components: { Content },
  });
</script>
