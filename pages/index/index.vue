<!-- 主页面 -->
<template>
	<view class="content">
		<image class="logo" src="/static//barbecue-logo.jpeg"></image>
		<view class="text-area">
			<uni-link showUnderLine="false" href="https://uniapp.dcloud.io/">
				<text class="title">{{title}}</text>
			</uni-link>
		</view>
		<view>
			<div>
				<p class="bbq-font-size-24 bbq-color-9b9b9b">辣鸡</p>
			</div>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '烧烤摊点餐程序'
			}
		},
		onLoad() {

		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 400rpx;
		width: 400rpx;
		margin-top: 400rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-weight: bold;
		font-size: 42rpx;
		color: #868994;
	}
</style>
