import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import WorksView from "@/views/WorksView.vue";
import WorkView from "@/views/WorkView.vue";
import WatchView from "@/views/WatchView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/works/:cat",
    name: "works",
    component: WorksView,
  },
  {
    path: "/work/:id",
    name: "work",
    component: WorkView,
  },
  {
    path: "/watch/:sid/:ep",
    name: "watch",
    component: WatchView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
