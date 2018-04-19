<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{product.title}} - {{product.price}}
      <br>      
      <button
        :disabled="!product.inventory"
        @click="addProductToCart(product)">
        加入购物车
      </button>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters({
    products: "allProducts"
  }),
  methods: mapActions(["addProductToCart"]),
  created() {
    this.$store.dispatch("getAllProducts");
  }
};
</script>

