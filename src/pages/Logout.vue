<template>
    <div class="login">
        <img :src="require('../assets/logo.svg')"  width="50px"/>
        <h1 class="ma-2">Logout</h1>
    </div>
    
</template>

<script>
// import Card from "@/components/Cards/Card.vue";
// import BaseInput from "@/components/Inputs/BaseInput.vue";
import Swal from 'sweetalert2'
import AuthService from '../services/AuthService'

let service = new AuthService()

export default {
    name: 'Logout',
    components: {},
    mixins: [],
        data() {
          return {
            redirect: 'login'
          }
        },
        created () {
          service.logout()
          // this.$router.
          this.$router.push({name: 'login'})

          // alert('logout')
        },
        methods: {
            login: async function  () {
            }
        }
    }
</script>

<style scoped>
    .login {
        width: 500px;
        border: 1px solid rgba(66, 43, 195, 0.445);
        background-color: rgba(75, 164, 208, 0.34);
        margin: auto;
        margin-top: 200px;
        padding: 20px;
        text-align: center;
    }

    .login > p {
        color: white;
        text-align: center;
    }

    input {
        border: 1px solid;
    }
</style>