import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { Sections, Resources, Resource } from "@/UI/pages";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Sections",
    component: Sections,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "./pages/About/About.vue"),
  },
  {
    path: "/:section",
    name: "Resources",
    component: Resources,
  },
  {
    path: "/:section/:id",
    name: "Resource",
    component: Resource,
  },
];

export const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
