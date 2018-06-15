<template>
  <div class="index" @click="click">
    <h1 class="title" style="text-align: center;">view 页面级跳转</h1>
    <h5 class="back"><router-link to="/modesensvue?id=0">返回modesensvue页面</router-link></h5>
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
  }
}
</script>

<style lang="stylus">
  h1.title
    text-align: center
  h5.back
    text-align: center
    margin-bottom: 100px
</style>
