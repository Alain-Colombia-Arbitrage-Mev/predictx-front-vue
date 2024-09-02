<template>
  <section
    class="self-stretch border-light-border border-t-[1px] border-solid overflow-hidden flex flex-col items-start justify-start pt-[27px] px-[25px] pb-[29px] text-left text-base text-fuschia-60 font-caption-caption-1-13 h-full"
  >
    <div class="self-stretch flex flex-col items-start justify-start h-full">
      <div
        class="self-stretch flex flex-row items-start justify-start py-0 px-3 gap-5"
      >
        <img
          class="h-[60px] w-[60px] relative rounded-[50%] object-cover min-h-[60px]"
          loading="lazy"
          alt=""
          src="/ellipse-6@2x.png"
        />
        <div class="flex-1 flex flex-col items-start justify-start">
          <a
            class="[text-decoration:none] self-stretch relative leading-[24px] text-[inherit]"
            >Hey there!</a
          >
          <a
            class="[text-decoration:none] self-stretch relative text-11xl font-bold text-dark-gray"
            >John Doe</a
          >
        </div>
      </div>
      <div
        class="self-stretch flex flex-col items-start justify-start text-center text-xl text-primary-contrast flex-1"
      >
        <div
          class="w-[215px] flex flex-col items-start justify-center gap-[15px] flex-1"
        >
          <div
            @click="$emit('section-click', 'Crypto')"
            class="self-stretch flex flex-row items-center justify-start py-2.5 pl-0 pr-[78px] gap-px cursor-pointer hover:bg-blue-900"
          >
            <img class="h-6 w-6 relative" loading="lazy" alt="" src="/icon.svg" />
            <a
              class="[text-decoration:none] flex-1 relative leading-[20px] font-semibold text-[inherit]"
              >Crypto</a
            >
          </div>
          <div
            @click="$emit('section-click', 'Forex')"
            class="self-stretch flex flex-row items-center justify-start py-2.5 pl-0 pr-[78px] gap-px cursor-pointer hover:bg-blue-900"
          >
            <img
              class="h-6 w-6 relative"
              loading="lazy"
              alt=""
              src="/iconlytwotonebag.svg"
            />
            <div class="flex-1 relative leading-[20px] font-semibold">Forex</div>
          </div>
          <div
            @click="$emit('section-click', 'Metals')"
            class="self-stretch flex flex-row items-center justify-start py-2.5 pl-0 pr-[78px] gap-px cursor-pointer hover:bg-blue-900"
          >
            <img
              class="h-6 w-6 relative"
              loading="lazy"
              alt=""
              src="/iconlytwotonediscovery.svg"
            />
            <div class="flex-1 relative leading-[20px] font-semibold">Metals</div>
          </div>
          <div
            @click="$emit('section-click', 'Stocks')"
            class="self-stretch flex flex-row items-center justify-start py-2.5 pl-0 pr-[78px] gap-px cursor-pointer hover:bg-blue-900"
          >
            <img
              class="h-6 w-6 relative"
              loading="lazy"
              alt=""
              src="/iconlytwotonewallet.svg"
            />
            <div class="flex-1 relative leading-[20px] font-semibold">Stocks</div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>