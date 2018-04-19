<template>
  <div>
    <h1>shopping cart</h1>
    <ProductList />
  </div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name:'ShoppingCart',
  components:{
    ProductList
  }
}
</script>

