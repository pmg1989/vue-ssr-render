<template>
  <div>
    <div class="list_box">
      <div class="tips">以下排名不分先后</div>
      <ul class="list clearfix">
        <li class="fl" v-for="item in list">
          <div class="thumb_box">
            <img :src="item.avatar" />
          </div>
          <div class="text">
            <div v-text="item.name"></div>
            <div class="small" v-text="item.description"></div>
          </div>
          <div class="btn_box">
            <a :class="['btn',{disabled: voteId == item.id}]" @click="submit(item)">
              <span v-text="voteId == item.id ? '已投票' : '投TA一票'"></span>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  // 在这里导入模块，而不是在 `store/index.js` 中
  import voteStoreModule from '../store/modules/vote'

  export default {
    name: 'vote',
    title () {
      return 'vote'
    },
    // serverCacheKey: props => props.item.id,
    asyncData ({ store }) {
      store.registerModule('vote', voteStoreModule)
      return store.dispatch('vote/getList')
    },
    // 重要信息：当多次访问路由时，
    // 避免在客户端重复注册模块。
    destroyed () {
      this.$store.unregisterModule('vote')
    },
    data() {
      return {
        voteId: 0,
      }
    },
    computed: mapState('vote', ['list'])
  }
</script>
<style scoped>
  .clearfix:before, .clearfix:after {
    content:" ";
    display:table
  }

  .clearfix:after {
    clear:both
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .text-center{
    text-align: center;
  }

  .list_box {
    position: relative;
    z-index: 100;
  }

  .tips {
    text-align: center;
    font-size: 0.16rem;
    color: #000;
    margin-bottom: 0.2rem;
  }

  .list {
    font-size: 0.14rem;
    line-height: 1.4;
    color: #000;
  }

  .list li {
    width: 45.5%;
    text-align: center;
    border: 1px solid #40A82B;
    border-radius: 0.05rem;
    margin-left: 3%;
    margin-bottom: 0.15rem;
    padding: 0.1rem;
    background-color: rgba(54,219,80,0.13);
  }

  .thumb_box {
    margin-bottom: 0.1rem;
  }

  .thumb_box img {
    display: block;
    width: 1.48rem;
    height: 1.02rem;
  }

  .text .small {
    font-size: 0.13rem;
    height: 0.4rem;
    overflow: hidden;
  }

  .btn_box .btn {
    color: #fff;
    display: inline-block;
    padding: 0.08rem 0.2rem;
    background-image: -webkit-linear-gradient(16deg, #24B056 3%, #AEE749 98%);
    background-image: linear-gradient(74deg, #24B056 3%, #AEE749 98%);
    border-radius: 0.2rem;
  }

  .btn_box .disabled {
    background: #275E3B;
    color: #608C70;
  }
</style>
