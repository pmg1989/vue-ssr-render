<template>
  <div class="box">
    <input type="button" value="-" @click="reduce" />
    <span class="num">{{ fooCount }}</span>
    <input type="button" value="+" @click="add" />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
// 在这里导入模块，而不是在 `store/index.js` 中
import fooStoreModule from '../store/modules/foo'
export default {
  title () {
    return 'foo'
  },
  asyncData ({ store }) {
    store.registerModule('foo', fooStoreModule)
    return store.dispatch('foo/inc')
  },
  // 重要信息：当多次访问路由时，
  // 避免在客户端重复注册模块。
  destroyed () {
    this.$store.unregisterModule('foo')
  },
  computed: {
    fooCount () {
      return this.$store.state.foo.count
    }
  },
  methods: {
    ...mapActions({
      add: 'foo/inc',
      reduce: 'foo/minus',
    }),
    // inc () {
    //   this.$store.commit('foo/inc')
    // },
    // minus () {
    //   this.$store.dispatch('foo/minus')
    // },
  }
}
</script>
<style scoped>
  .box {
    text-align: center;
    padding: 50px;
  }

  .num {
    padding: 0 10px;
  }
</style>
