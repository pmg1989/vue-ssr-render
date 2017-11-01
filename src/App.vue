<template>
  <div id="app">
    <header class="header">
      hello world!!!
    </header>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<style scoped>
  .header {
    text-align: center;
  }
</style>
