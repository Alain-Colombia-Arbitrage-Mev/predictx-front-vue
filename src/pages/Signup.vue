<template>
  <div class="w-full relative flex flex-row items-start justify-start leading-[normal] tracking-[normal] [row-gap:20px] mq1025:flex-wrap">
    <div class="w-96 bg-blueviolet-200 overflow-hidden shrink-0 flex flex-row items-start justify-start min-w-[384px] max-w-full mq450:min-w-full mq1025:flex-1">
      <div class="mt-[-1px] flex-1 overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-px box-border max-w-full shrink-0">
        <Izquierdo />
      </div>
    </div>
    <section class="flex-1 bg-black overflow-hidden flex flex-row items-end justify-center py-[143px] pl-[21px] pr-5 box-border min-w-[582px] min-h-[832px] max-w-full text-center text-11xl-2 text-primary-contrast font-poppins mq975:pt-[93px] mq975:pb-[93px] mq975:box-border mq450:gap-7 mq450:pt-[60px] mq450:pb-[60px] mq450:box-border mq725:gap-14 mq725:min-w-full mq1025:min-h-[auto]">
      <form @submit.prevent="handleSignup" class="h-[484px] w-[500px] flex flex-col items-center justify-between max-w-full mq450:h-auto">
        <div class="self-stretch flex flex-row items-center justify-center py-0 px-5">
          <div class="relative leading-[47px] font-semibold mq975:text-5xl mq975:leading-[37px] mq450:text-lg mq450:leading-[28px]">
            Signup PredictX
          </div>
        </div>
        <div class="self-stretch flex flex-col items-start justify-between min-h-[135px]">
           <p>Please enter your info and join us</p>
           <v-text-field
            class="[border:none] bg-[transparent] self-stretch h-[60.5px] font-inter text-3xl text-gray"
            color="primary"
            v-model="username"
            variant="outlined"
            type="text"
            name="username"
            label="username"
            placeholder="username"
          />

          <v-text-field
            class="[border:none] bg-[transparent] self-stretch h-[60.5px] font-inter text-3xl text-gray"
            color="primary"
            v-model="name"
            variant="outlined"
            type="text"
            name="name"
            label="name"
            placeholder="name"
          />

          <v-text-field
            class="[border:none] bg-[transparent] self-stretch h-[60.5px] font-inter text-3xl text-gray"
            color="primary"
            v-model="email"
            variant="outlined"
            type="text"
            name="email"
            label="Email"
            placeholder="your email"
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
          <v-text-field
            class="[border:none] bg-[transparent] self-stretch h-[60.5px] font-inter text-3xl text-gray"
            color="primary"
            v-model="mobile"
            variant="outlined"
            type="text"
            name="mobile"
            label="Mobile"
            placeholder="Mobile number"
          />
        </div>
        
        <v-btn
          class="self-stretch whitespace-nowrap hover:bg-blueviolet-100"
          color="primary"
          variant="flat"
          type="submit"
        >
          SignUp
        </v-btn>
        <router-link to="/">Login</router-link>
        
      </form>
    </section>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Izquierdo from "../components/Izquierdo.vue";
import Swal from "sweetalert2";
import AuthService from "../services/AuthService";

export default defineComponent({
  name: "Signup",
  components: { Izquierdo },
  data() {
    return {
      email: '',
      password: '',
      mobile: '', 
      username: '',
      name: ''
    };
  },
  methods: {
    handleSignup: async function() {
      let service = new AuthService();
      var t = this;
      // Puedes ajustar la estructura de los datos que envías según lo necesites
      const userData = {
        name: this.name,
        email: this.email,
        username: this.username,
        password: this.password,
        mobile: this.mobile, // Incluyendo el número de móvil
        name: this.name
      };

      service.signup(userData)
        .then(function (response) {
          if (!response.data.status) {
            Swal.fire(
              'Registro erróneo',
              response.data.message,
              'error'
            );
          } else {
            t.$router.push({ name: 'login' });
          }
        });
    },
  },
});
</script>
