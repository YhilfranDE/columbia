import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/educative_offer",
    name: "educative_offer",
    component: () =>
      import("../views/EducativeOffertView.vue"),
  },
  {
    path: "/partners",
    name: "partners",
    component: () =>
      import("../views/PartnersView.vue"),
  },
  {
    path: "/professionals",
    name: "professionals",
    component: () =>
      import("../views/ProfessionalsView.vue"),
  },
  {
    path: "/portal",
    name: "portal",
    component: () =>
      import("../views/PortalView.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () =>
      import("../views/BlogView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
