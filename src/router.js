import VueRouter from "vue-router";
import Shopping from "./pages/Shopping.vue"

const routes = [{
  path: '/shop',
  component: Shopping,
}]

const router = new VueRouter({
  routes
})

export default router;