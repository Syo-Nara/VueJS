import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Panacea from "@/views/Panacea.vue";
import QeA from "@/views/QeA.vue";
import Cards from "@/views/Cards.vue";
import Login from "@/views/Login.vue";
import Luskiddo from "@/views/Luskiddo.vue";
import Register from "@/views/Register.vue";
import Admin from "@/views/Admin.vue";

console.log("Starting router");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/panacea", component: Panacea },
    { path: "/q&a", component: QeA },
    { path: "/card", component: Cards },
    { path: "/login", component: Login },
    { path: "/aboutme", component: Luskiddo },
    { path: "/signup", component: Register },
    { path: "/admin", component: Admin },
  ],
});

// router.beforeEach(() => {
//   // ✅ This will work because the router starts its navigation after
//   // the router is installed and pinia will be installed too
//   const store = useStore();
// });

console.log("end router");
export default router;
