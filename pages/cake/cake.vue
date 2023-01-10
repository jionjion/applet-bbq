<template>
	<view class="cont">
		<view class="cake-item" v-for="(item,index) in 8" @click="handlerDetail(index)">
			<view class="poster">
				<image src="../../static/yangrouchuan.jpeg" style="height: 350upx"></image>
			</view>
			<view class="info-cont">
				<view class="info">
					<view class="bbq-font-size-32">羊肉串</view>
					<view class="bbq-font-size-18">巨好吃的羊肉串</view>
					<view class="bbq-font-size-24">210.00</view>				
				</view>
				<view class="cart-btn"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			handlerDetail(index){
				console.log(index);
				uni.navigateTo({
					url: '../detail/detail?index='+index
				})
			}
		}
	}
</script>

<style lang="scss">
.cont{
	display: flex;
	flex-wrap: wrap;
	padding: 15upx;
	justify-content: space-between;
}
	
.cake-item{
	width: 350upx;
	
	.poster{
		height: 350upx;
		background-color: #f0f0f0f0;
	}
}

.info{
	view{
		margin: 10upx;
	}
}

</style>
