import { createRouter, createWebHistory } from "vue-router";

import UsersList from "./pages/UsersList.vue";
import AddUsers from "./pages/AddUsers.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/users",
    },
    {
      path: "/users",
      component: UsersList,
    },
    {
      path: "/addusers",
      component: AddUsers,
    },
  ],
});

export default router;
