<template>
	<view>
		<view class="count"></view>
		<view class="margin bg-fff">
			<view class="text-center">
				<image class="avatar" src="../../static/jion.gif" mode=""></image>
			</view>
			<view class="bbq-font-size-32 text-center">
				胖囧囧
			</view>
			<view class="flex grid">
				<view v-for="(item, index) in gridArr" class="flex flex-direction align-center padding">
					<text :class="['iconfont', 'margin-bottom-xs', item.icon]"></text>
					{{item.name}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gridArr:[
					{
						icon: 'icon-danju',
						name: '我的订单'
					},{
						icon: 'icon-fanhuidingbu',
						name: '待收货'
					},{
						icon: 'icon-jifen',
						name: '代付款'
					},{
						icon: 'icon-dingwei',
						name: '会员登记'
					},{
						icon: 'icon-danju',
						name: '我的订单'
					},{
						icon: 'icon-fanhuidingbu',
						name: '待收货'
					},{
						icon: 'icon-jifen',
						name: '代付款'
					},{
						icon: 'icon-dingwei',
						name: '会员登记'
					},
				]
			};
		}
	}
</script>

<style lang="scss">
	.count{
		background-color: #f6f6ff;
		height: 400upx;
	}
	
	.grid .iconfont {
		font-size: 70upx;
		color: #888;
	}
	.avatar {
		width: 150upx;
		height: 150upx;
		border-radius: 50%;
		margin-top: -75upx;
	}
	
	// scss 选择器, 同时具有这两个clss样式的元素
	.margin.bg-fff{
		margin-top: -200upx;
	}
</style>
