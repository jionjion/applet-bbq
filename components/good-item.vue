<!-- 商品种类 -->
<template>
	<view class="cake-item">
		<view class="poster">
			<image :src="goodData.img" style="height: 350upx"></image>
		</view>
		<view class="info-cont">
			<view class="info flex align-center justify-between">
				<view>
					<view class="bbq-font-size-32">{{goodData.name}}</view>
					<view class="bbq-font-size-32">{{goodData.french}}</view>
				</view>
				<view class="cart-btn">
					<text class="iconfont icon-danju"></text>
				</view>
			</view>
			<view class="info">
				<view class="bbq-font-size-32">$ {{goodData.price}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "good-item",
		/* 驼峰命名 */
		props:["goodData"],
		data() {
			return {

			};
		}
	}
</script>


<style lang="scss">
	.cont {
		display: flex;
		flex-wrap: wrap;
		padding: 15upx;
		justify-content: space-between;
	}

	.cake-item {
		width: 350upx;

		.poster {
			height: 350upx;
			background-color: #f0f0f0f0;
		}
	}

	.info {
		view {
			margin: 4upx;
		}
	}

	.cart-btn {
		width: 60upx;
		height: 60upx;
		border-radius: 50%;
		background-color: #ffaa00f0;
		text-align: center;
		line-height: 60upx;
	}
</style>
