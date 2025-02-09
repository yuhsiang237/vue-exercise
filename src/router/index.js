import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Vue3Ref from "../views/Vue3Ref.vue";
import Vue3Lifetime from "../views/Vue3Lifetime.vue";
import ParentView from "../views/ParentView.vue";
import Children1View from "../views/Children1View.vue";
import Children2View from "../views/Children2View.vue";
import Vue3Pinia from "../views/Vue3Pinia.vue";
import CustomComponent from "../views/CustomComponent.vue";
import JSES6 from "../views/JSES6.vue";
import CSSView from "../views/CSSView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Vue3Ref",
      name: "Vue3Ref",
      component: Vue3Ref,
    },
    {
      path: "/CustomComponent",
      name: "CustomComponent",
      component: CustomComponent,
    },
    {
      path: "/Vue3Lifetime",
      name: "Vue3Lifetime",
      component: Vue3Lifetime,
    },
    {
      path: "/Vue3Pinia",
      name: "Vue3Pinia",
      component: Vue3Pinia,
    },
    {
      path: "/CSSView",
      name: "CSSView",
      component: CSSView,
    },
    {
      path: "/JSES6",
      name: "JSES6",
      component: JSES6,
    },
    {
      path: "/parent",
      component: ParentView,
      children: [
        {
          path: "child1", // 這是相對路徑，表示 /parent/child1
          component: Children1View,
        },
        {
          path: "child2", // 這是相對路徑，表示 /parent/child2
          component: Children2View,
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
