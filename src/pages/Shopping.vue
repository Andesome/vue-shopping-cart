<template>
  <div>
    <h1>shopping cart</h1>
    <ProductList />
    <hr>
    <ShoppingCart/>
  </div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
import ShoppingCart from "../components/ShoppingCart.vue"

export default {
  name:'Shopping',
  components:{
    ProductList,
    ShoppingCart
  }
}
</script>

