# 相关组件
- ColorUI-UniApp 一个CSS组件库
- uViewUI 快速开发UI组件; 安装方式 [地址](https://www.uviewui.com/components/npmSetting.html)

# 网络请求
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
