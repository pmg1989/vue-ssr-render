<template>
  <div>{{ item.title }}</div>
</template>
<script>
export default {
  name: 'news-item',
  // https://ssr.vuejs.org/zh/caching.html#component-level-caching
  // serverCacheKey: props => props.item.id,,
  title () {
    return this.item.title
  },
  asyncData ({ store, route }) {
    // 触发 action 后，会返回 Promise
    return store.dispatch('fetchItem', route.params.id)
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    item () {
      return this.$store.state.items[this.$route.params.id] || {}
    }
  },
  // 修复 从当前item 条转入另一个item时 title bug
  watch: {
    item (newVal, oldVal) {
      document.title = `Vue HN 2.0 | ${newVal.title}`
    }
  }
}
</script>
