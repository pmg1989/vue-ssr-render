<template>
  <div id="app">
    <header class="header">
      hello world!!! <br />
      <router-link to="/">home</router-link><br />
      <router-link to="/vote">vote</router-link><br />
      <router-link to="/foo">foo</router-link><br />
      <router-link to="/item/1">/item/1</router-link><br />
      <router-link to="/item/2">/item/2</router-link><br />
      <router-link to="/item/3">/item/3</router-link><br />
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
