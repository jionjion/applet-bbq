/* 使用 vuex  */

import count from 'modules/cart.js'

// 页面路径：store/index.js
import { createStore } from 'vuex'
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  // 修改状态
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

/* 导出vuex */
export default store
