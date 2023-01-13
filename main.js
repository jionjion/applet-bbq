/* vue app 配置 */
import App from './App'
// 引入 uView UI
import uView from './uni_modules/vk-uview-ui';

// 使用 vuex
import store from './store'


import { createSSRApp } from 'vue'

// 全局挂载方法
import * as request from '/utils/request.js'

// 全局挂载的组件
import myComponent from '/components/test-my-component.vue'
import navCustom from '/components/nav-custom.vue'
import homeTitle from '/components/home-title.vue'
import goodItem from '/components/good-item.vue'
import { $http } from './utils/request';



export function createApp() {
  const app = createSSRApp(App)
 
  // 使用 uView UI
  app.use(uView)
  // 使用 vuex
  app.use(store)
  // 全局挂载
  app.component('test-my-component', myComponent)
  app.component('nav-custom', navCustom)
  app.component('home-title', homeTitle)
  app.component('good-item', goodItem)
  
  // 批量挂载方法
  for (let key in request) {
	//app.config.globalProperties.$http=$http
  	app.config.globalProperties[key] = request[key]
  }
	
  return { app }
}