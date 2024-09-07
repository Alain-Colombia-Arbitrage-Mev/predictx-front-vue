import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";  
import i18n from './ i18n'
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";


import Login from "./pages/Login.vue";
import Signup from "./pages/Signup.vue";
import Dashboard from "./pages/Dashboard.vue";
import Signals from "./pages/Signals.vue";
import Plans from "./pages/Plans.vue";

import IPhone1415ProMax from "./pages/IPhone1415ProMax.vue";
import IPhone8Plus from "./pages/IPhone8Plus.vue";
import IPhoneSE from "./pages/IPhoneSE.vue";
import "./global.css";

import store from './store'

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "signals/:symbol", 
        name: "signals",
        component: Signals,
        props: true
      },

      {
        path: "/plans", 
        name: "upgrade",
        component: Plans,
        props: true
      }

    ]
  },
 
  {
    path: "/iphone-14-15-pro-max-1",
    name: "IPhone1415ProMax",
    component: IPhone1415ProMax,
  },
  {
    path: "/iphone-8-plus-1",
    name: "IPhone8Plus",
    component: IPhone8Plus,
  },
  {
    path: "/iphone-se-1",
    name: "IPhoneSE",
    component: IPhoneSE,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, _, next) => {
  const metaTitle = toRoute.meta.title;
  const metaDesc = toRoute.meta.description;

  window.document.title = metaTitle || "Predictx2";
  if (metaDesc) {
    addMetaTag(metaDesc);
  }
  next();
});

const addMetaTag = (value) => {
  const element = document.querySelector(`meta[name='description']`);
  if (element) {
    element.setAttribute("content", value);
  }
};

const vuetify = createVuetify({ components, directives });

createApp(App).use(store).use(router).use(vuetify).use(i18n).mount("#app");

export default router;