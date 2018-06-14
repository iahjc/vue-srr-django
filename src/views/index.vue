<template>
  <div class="index" @click="click">
    index sdfsdfsdfsd
    <!-- <h1>{{product.title}}</h1>
    <h2>{{product.desc}}</h2>
    <h3>{{product.price}}</h3>
    <h4>{{product.num}}</h4>
    <img :src="product.img"/> -->
  </div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
export default {
  data() {
    return {
      product: null
    }
  },
  mounted() {
    this.product = this.$store.state.product
  },
  methods: {
    click() {
      console.log(this.$store.state.product)
    }
  },
  computed: {
    item () {
      return this.$store.state.product
    }
  }
}
</script>

<style lang="stylus">
</style>
