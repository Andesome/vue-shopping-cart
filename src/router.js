import VueRouter from "vue-router";
import ShoppingCart from "./pages/ShoppingCart.vue"

const routes = [{
  path: '/shop',
  component: ShoppingCart,
}]

const router = new VueRouter({
  routes
})

export default router;