import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: { guest: true },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // const profile = localStorage.getItem('profile') === "true"? true : false;
  const profile = localStorage.getItem('profile');
  // const role = localStorage.getItem('role') !== ""? true : false;
  const role = localStorage.getItem('role');
	const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
	if (requiresAuth && !role && !profile) {
		next({ name: "Login" });
	} else {
		next();
	}
});

export default router
