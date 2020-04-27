import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/register" },
  {
    path: "/register",
    name: "register",
    component: () => import("views/Register.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("views/Login")
  },
  {
    path: "/home",
    name: "home",
    component: () => import("views/home/Home"), //home组件一定有个字路由
    redirect: "welcome",
    children: [
      {
        path: "/welcome",
        name: "welcome",
        component: () => import("views/home/HomeWelcome")
      },

      {
        path: "/users", // /users
        name: "users",
        component: () => import("views/users/Users")
      },
      {
        path: "/table", // /users
        name: "table",
        component: () => import("views/table/Table")
      },
      {
        path: "/tree", // /users
        name: "tree",
        component: () => import("views/table/Tree")
      },
      {
        path: "/quanmao", // /users
        name: "quanmao",
        component: () => import("views/table/AllMatiral")
      },
      {
        path: "/quanmao/add/wuzhi", // 加化学式
        name: "newMatrial0",
        component: () => import("views/table/MartialAdd0")
      },
      {
        path: "/quanmao/add/fangcheng", // 加化学方程
        name: "newMatrial1",
        component: () => import("views/table/MartialAdd1")
      },
      {
        path: "/goucheng",
        name: "goucheng",
        component: () => import("views/search/GouCheng")
      },

      {
        path: "/category",
        name: "category",
        component: () => import("views/search/Categroy")
      },
      {
        path: "/fanying",
        name: "fanying",
        component: () => import("views/search/Fanying")
      },
      {
        path: "/onetoall",
        name: "onetoall",
        component: () => import("views/search/OneToAll")
      },
      {
        path: "/sanjiao",
        name: "sanjiao",
        component: () => import("views/search/SanJiao")
      },
      {
        path: "/tuiduan",
        name: "tuiduan",
        component: () => import("views/search/TuiDuan")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});
// 路由守卫
router.beforeEach((to, from, next) => {
  // console.log(from)
  if (to.path == "/login" || to.path == "/register") return next();
  const token = localStorage.getItem("token");
  if (!token) return next("/login");
  next();
  // ...
});
export default router;
