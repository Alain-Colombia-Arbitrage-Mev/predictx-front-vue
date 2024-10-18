import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import i18n from './ i18n';
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import loading from './store/loadingState'; // Importar el estado global de loading

import Login from "./pages/Login.vue";
import Signup from "./pages/Signup.vue";
import Dashboard from "./pages/Dashboard.vue";
import Signals from "./pages/Signals.vue";
import Plans from "./pages/Plans.vue";
import Profile from "./pages/Profile.vue";
import Deposit from "./pages/Deposit.vue";

import IPhone1415ProMax from "./pages/IPhone1415ProMax.vue";
import IPhone8Plus from "./pages/IPhone8Plus.vue";
import IPhoneSE from "./pages/IPhoneSE.vue";
import "./global.css";

import store from './store';
import AuthService from './services/AuthService'; // Importar el servicio de autenticación

const authService = new AuthService(); // Instanciar el servicio

const routes = [
  { path: "/", name: "Login", component: Login },
  { path: "/signup", name: "Signup", component: Signup },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true }, // Necesita autenticación
    children: [
      { path: "signals/:symbol", name: "signals", component: Signals, props: true, meta: { requiresAuth: true } },
      { path: "plans", name: "upgrade", component: Plans, props: true, meta: { requiresAuth: true } },
      { path: "profile", name: "profile", component: Profile, props: true, meta: { requiresAuth: true } },
      { path: "deposit", name: "deposit", component: Deposit, props: true, meta: { requiresAuth: true } }
    ]
  },
  { path: "/iphone-14-15-pro-max-1", name: "IPhone1415ProMax", component: IPhone1415ProMax },
  { path: "/iphone-8-plus-1", name: "IPhone8Plus", component: IPhone8Plus },
  { path: "/iphone-se-1", name: "IPhoneSE", component: IPhoneSE }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Función para comprobar si el usuario está autenticado usando el AuthService
function isAuthenticated() {
  return authService.userLogged() !== null; // Comprueba si hay un usuario en localStorage
}

// Guardar de ruta global para verificar autenticación
router.beforeEach((to, from, next) => {
  loading.value = true; // Mostrar el loader inmediatamente
  
  // Verificar si la ruta requiere autenticación
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated()) {
      next({ name: 'Login' }); // Redirigir al login si no está autenticado
    } else {
      next(); // Permitir la navegación si está autenticado
    }
  } else {
    next(); // Continuar si la ruta no requiere autenticación
  }

  const metaTitle = to.meta.title;
  const metaDesc = to.meta.description;

  window.document.title = metaTitle || "Predictx2";
  if (metaDesc) {
    addMetaTag(metaDesc);
  }
});

// Ocultar loader después de completar el cambio de ruta con retardo
router.afterEach(() => {
  setTimeout(() => { // Retardo de 1 segundo
    loading.value = false; // Oculta el loader
  }, 1000); // 1000 ms = 1 segundo
});

const addMetaTag = (value) => {
  const element = document.querySelector(`meta[name='description']`);
  if (element) {
    element.setAttribute("content", value);
  }
};

const vuetify = createVuetify({ components, directives });

createApp(App)
  .use(store)
  .use(router)
  .use(vuetify)
  .use(i18n)
  .mount("#app");

export default router;
