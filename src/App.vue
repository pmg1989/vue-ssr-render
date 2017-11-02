<template>
  <div id="app">
    <header class="header">
      hello world!!! <br />
      <router-link to="/">home</router-link><br />
      <router-link to="/demo">demo</router-link>
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
