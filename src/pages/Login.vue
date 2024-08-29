<template>
  <div class="w-full relative flex flex-row items-start justify-start leading-[normal] tracking-[normal] [row-gap:20px] mq1025:flex-wrap">
    <div class="w-96 bg-blueviolet-200 overflow-hidden shrink-0 flex flex-row items-start justify-start min-w-[384px] max-w-full mq450:min-w-full mq1025:flex-1">
      <div class="mt-[-1px] flex-1 overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-px box-border max-w-full shrink-0">
        <Izquierdo />
      </div>
    </div>
    <section class="flex-1 bg-black overflow-hidden flex flex-row items-end justify-center py-[143px] pl-[21px] pr-5 box-border min-w-[582px] min-h-[832px] max-w-full text-center text-11xl-2 text-primary-contrast font-poppins mq975:pt-[93px] mq975:pb-[93px] mq975:box-border mq450:gap-7 mq450:pt-[60px] mq450:pb-[60px] mq450:box-border mq725:gap-14 mq725:min-w-full mq1025:min-h-[auto]">
      <form @submit.prevent="handleLogin" class="h-[484px] w-[500px] flex flex-col items-center justify-between max-w-full mq450:h-auto">
        <div class="self-stretch flex flex-row items-center justify-center py-0 px-5">
          <div class="relative leading-[47px] font-semibold mq975:text-5xl mq975:leading-[37px] mq450:text-lg mq450:leading-[28px]">
            LOGIN PredictX
          </div>
        </div>
        <div class="self-stretch flex flex-col items-start justify-between min-h-[135px]">
          <v-text-field
            class="[border:none] bg-[transparent] self-stretch h-[60.5px] font-inter text-3xl text-gray"
            color="primary"
            v-model="username"
            variant="outlined"
            type="text"
            name="username"
            label="Username"
            placeholder="Username"
          />
          <v-text-field
            class="[border:none] bg-[transparent] self-stretch h-[60.5px] font-inter text-3xl text-gray"
            color="primary"
            v-model="password"
            variant="outlined"
            type="password"
            name="password"
            label="Password"
            placeholder="Password"
          />
        </div>
        <div class="self-stretch flex flex-row items-center justify-center py-2.5 px-5 text-left text-9xl-3 font-roboto">
          <div class="relative leading-[54px] whitespace-pre-wrap mq450:text-4xl mq450:leading-[43px]">
            Or sign in with:
          </div>
        </div>
        <div class="self-stretch rounded-mini bg-primary-contrast flex flex-row items-center justify-between py-0 px-[42px] gap-5 mq450:flex-wrap mq450:justify-center">
          <div class="flex flex-col items-center justify-between py-[11.5px] px-0 box-border min-h-[50px]">
            <div class="overflow-hidden flex flex-row items-center justify-start">
              <img class="h-[27px] w-7 relative" loading="lazy" alt="" src="/socialicongm.svg" />
            </div>
          </div>
          <div class="flex flex-col items-center justify-between pt-0 px-0 pb-0 box-border min-h-[50px]">
            <img class="w-[50.3px] h-[50.3px] relative overflow-hidden shrink-0" loading="lazy" alt="" src="/facebook.svg" />
          </div>
          <div class="flex flex-col items-center justify-between py-3 px-0 box-border min-h-[52px]">
            <img class="w-7 h-7 relative overflow-hidden shrink-0" loading="lazy" alt="" src="/facebook-1.svg" />
          </div>
        </div>
        <v-btn
          class="self-stretch whitespace-nowrap hover:bg-blueviolet-100"
          color="primary"
          variant="flat"
          type="submit"
        >
          Sign in
        </v-btn>
      </form>
    </section>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Izquierdo from "../components/Izquierdo.vue";

export default defineComponent({
  name: "Login",
  components: { Izquierdo },
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      // Manejar el inicio de sesión
      console.log("Username:", this.username);
      console.log("Password:", this.password);
      // Aquí puedes agregar validaciones o llamar a una API
    }
  }
});
</script>
