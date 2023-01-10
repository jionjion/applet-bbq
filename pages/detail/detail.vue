<template>
	<view>
		商品详情
		<button type="default" @click="handlerHome">返回上一页</button>
		<button type="default" @click="handlerMy">返回指定页面</button>
		<button type="default" @click="handlerTab">返回底部导航栏</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			handlerHome() {
				uni.navigateBack({
					delta: 1
				})
			},
			handlerMy() {
				// 不能跳转底部
				uni.navigateTo({
					url: '/pages/my/my'
				})
				// 重定向, 无页面缓存, 一般不用
				uni.redirectTo({
					url: '/pages/my/my'
				})
			}
			handlerTab() {
				uni.switchTab({
					url: '/pages/classify/classify'
				})
			}
		},
		// 生命周期
		onLoad(options) {
			console.log(options);
		}
	}
</script>

<style>

</style>
