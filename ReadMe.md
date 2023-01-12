# 项目介绍

一个微信小程序

## 组件依赖

项目使用 `XBuilder` 构建, 使用 `uni-app` 作为框架基础, `UView` 组件库, `colorUI` 样式库. icon 使用阿里巴巴组件依赖..

## 相关组件

- `ColorUI` 一个 `CSS` 组件库 [地址](https://ext.dcloud.net.cn/plugin?id=10482)
- `UView` 快速开发 `UI` 组件; 安装方式 [地址](https://www.uviewui.com/components/npmSetting.html)
- 阿里巴巴图标库, [地址](https://www.iconfont.cn/)



# 项目搭建

## 基础环境

在 `XHBuilder` 中, 使用 `uni-app` 空白模板, 创建空白页面模板.. `style` 使用 `scss` , `vue` 版本为 `vue3` ..



## 引入 `ColorUI`

默认可以在官网 https://ext.dcloud.net.cn/plugin?id=10482 通过使用 `HBuilderX` 直接导入..

导入后将项目下的 `colorui` 文件夹直接导入项目中

随后修改项目根目录下的 `uni.scss` 文件, 引入当前样式库

```js
/* 引入 colorUI 样式库 */
@import "/colorui/main.css";
@import "/colorui/icon.css";
```



## 引入 `UView`

因为目前 `Uview` 仅支持 `vue2`, 因此这里使用 `vk-uview-ui` 版本, 支持 `vue3` 

`main.js`  引入 `vk-uview-ui`

```js
// 引入 uView UI
import uView from './uni_modules/vk-uview-ui';

import { createSSRApp } from 'vue'

export function createApp() {
  const app  = createSSRApp(App)

  // 使用 uView UI
  app.use(uView)

  return { app }
}
```

声明使用 `scss` 语言

```scss
<style lang="scss">
    @import "./uni_modules/vk-uview-ui/index.scss";
</style>
```

`uni.scss` 引入全局 `scss` 变量文件

```css
@import "@/uni_modules/vk-uview-ui/theme.scss";
```



## 引入图标库

在 https://www.iconfont.cn/ 图标库中选择合适的图标, 然后下载到本地...

放入到项目根目录的 `font` 文件夹下... 常用的字体文件有...

```bash
iconfont.css
iconfont.json
iconfont.ttf
iconfont.woff
iconfont.woff2
```

修改全局 `uni.scss` 文件, 将字体引入

```css
/*  图标 */
@font-face {
  // 图标字体
  font-family: 'iconfont';
  // 地址
  src: // 本地地址
       url('/font/iconfont.woff2?t=1671630043153') format('woff2'),
       url('/font/iconfont.woff?t=1671630043153') format('woff'),
       url('/font/iconfont.ttf?t=1671630043153') format('truetype'),
	   // 在线地址
	   url('//at.alicdn.com/t/c/font_3835384_1bxrwhb26vr.woff2?t=1671630197017') format('woff2'),
       url('//at.alicdn.com/t/c/font_3835384_1bxrwhb26vr.woff?t=1671630197017') format('woff'),
       url('//at.alicdn.com/t/c/font_3835384_1bxrwhb26vr.ttf?t=1671630197017') format('truetype');
}

/* 图标通用样式 */
.iconfont {
  // 使用图标字体
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

#### 使用图标

在页面中, 通过 `class` 指定样式和图标

```xml
<text class="iconfont icon-fanhuidingbu"></text>
```



# `uni` 常见语法

## 全局组件注册

首先在根 `components` 目录下创建相应组件...

`main.js` 文件中注册组件

```js
/* vue app 配置 */
import App from './App'
import { createSSRApp } from 'vue'

// 全局挂载的组件
import myComponent from '/components/test-my-component.vue'
import navCustom from '/components/nav-custom.vue'
import homeTitle from '/components/home-title.vue'
import goodItem from '/components/good-item.vue'



export function createApp() {
  const app = createSSRApp(App)
  // 全局挂载
  app.component('test-my-component', myComponent)
  app.component('nav-custom', navCustom)
  app.component('home-title', homeTitle)
  app.component('good-item', goodItem)
  
  return { app }
}
```



## 原型挂载

在`utils` 文件夹下. 创建对应的 `js` 文件, 并将对象 `export` 导出...

`main.js` 中进行全局原型挂载

```js
/* vue app 配置 */
import App from './App'
import { createSSRApp } from 'vue'

// 全局批量挂载方法
import * as request from '/utils/request.js'
// 全局单个挂载方法
import { $http } from './utils/request';

export function createApp() {
  const app = createSSRApp(App)  
  // 单个挂载
  app.config.globalProperties.$http=$http
  // 批量挂载方法
  for (let key in request) {
  	app.config.globalProperties[key] = request[key]
  }
  return { app }
}
```



## 路由跳转

使用 `uni` 自带的请求进行请求..

```js

```



## 网络请求



### 网络请求

自定义封装, 使用 `Promise` 封装请求

```js
export const $http = function(url, method = "GET", data = {}) {
	// 封装
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseURL + url,
			method: method,
			header: {
				'Content-Type': 'application/json'
			},
			data: data,
			success: (response) => {
				resolve(response.data)
			},
			fail: (error) => {
				reject(error)
			}
		})
	})
}
```



封装后

```js
// 直接请求
uni.request({
	url:' https://api.github.com/octocat',
	method:'GET',
	header:{
		'Content-Type': 'application/json'
	},
	success: (response) =>{
		console.log('默认使用', response)
	}
})
// 使用自己封装的
$http('/octocat').then(respnse=>{
	console.log('自定义使用', respnse)
})
// 全局使用自己封装的
this.$get('/octocat').then(respnse=>{
	console.log('全局使用', respnse)
})
```
