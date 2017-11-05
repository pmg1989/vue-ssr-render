import { fetchVoteList } from '../../api'

export default {
  namespaced: true,
  // 重要信息：state 必须是一个函数，
  // 因此可以创建多个实例化该模块
  state: () => ({
    list: []
  }),
  actions: {
    getList: ({ commit }) => {
      fetchVoteList().then((res) => {
        commit('setList', { list: res.data })
      })
    },
  },
  mutations: {
    setList(state, actions) {
      state.list = actions.list
    },
  }
}
