<template>
  <div class="index">
    <h1 class="modesensvue-title">modesensvue</h1>
    <br /><br /><br />
    <a href="/product/women/clothing/#page=1&category=c">modesens vue内服装跳转</a> <br /><br />
    <router-link to="/pagetwo">Vue 内跳转</router-link> <br />
    <br />
    <div @click="requestProduct1">
      请求产品1
    </div>
    <br />
    <div @click="requestProduct">
      请求产品2
    </div>

    <br /><br /><br />

    <h1 class="modesensvue-title">产品信息</h1>
    <br /><br /><br />
    <h1 style="font-size: 20px;">{{product.title}}</h1>
    <h2 style="font-size: 14px;">{{product.desc}}</h2>
    <h3 style="font-size: 16px;">{{product.price}}</h3>
    <h4>{{product.num}}家电商有库存</h4>
    <img :src="product.img"/>
    <br /><br /><br /><br /><br />
  </div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
import axios from 'axios'
export default {
  data() {
    return {
      product: null
    }
  },
  created() {
    this.product = this.$store.state.product
    // this.product = this.$store.state.product
    // console.log(this.product)
  },
  methods: {
    click() {
      console.log(this.$store.state.product)
    },
    requestProduct1() {
      let _this = this
      axios.get('http://52.80.27.109/modesensvueget?id=0')
      .then(function (response) {
        _this.product = response.data
        _this.$router.push({
          path: `/modesensvue?id=0`
        })
      })
      .catch(function (error) {
        console.log(error);
      });

    },
    requestProduct() {
      let _this = this
      axios.get('http://52.80.27.109/modesensvueget?id=1')
      .then(function (response) {
        _this.product = response.data
        _this.$router.push({
          path: `/modesensvue?id=1`
        })
      })
      .catch(function (error) {
        console.log(error);
      });
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
  .modesensvue-title
    text-align: center
</style>
