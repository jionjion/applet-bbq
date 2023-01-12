<template>
	<view class="cont">
		<view class="cake-item" v-for="(item, index) in goodList" @click="handlerDetail(index)">
			<!-- 全局样式挂载 -->
			<good-item :good-data="item"></good-item>
		</view>
		<!-- 底部菜单 -->
		<view class="fixed flex align-center justify-around bg-fff padding-sm"
			style="width: 100%;position: fixed;bottom: 5upx;">
			<view class="" @click="handleClick">侧边栏</view>
			<u-line direction="col" length="30" color="#1f4289"></u-line>
			<view class="">分类</view>
			<u-line direction="col" length="30" color="#1f4289"></u-line>
			<view class="">小吃</view>
			<u-line direction="col" length="30" color="#1f4289"></u-line>
			<view class="">蛋糕</view>
		</view>
	</view>
	<!-- 侧边栏 -->
	<u-popup v-model="show" mode="left" @close="handleClose" width='40%'>
		<view class="padding">
			<view class="padding-sm u-border-bottom">所有烤串</view>
			<view class="padding-sm u-border-bottom">辣味选择</view>
			<u-cell-group>
				<u-cell-item title="微辣"></u-cell-item>
				<u-cell-item title="中辣"></u-cell-item>
				<u-cell-item title="重辣"></u-cell-item>
			</u-cell-group>
		</view>
	</u-popup>
</template>

<script>
	import goodItem from '../../components/good-item.vue'
	export default {
		data() {
			return {
				show: true,
				goodList: [{
					img: '../../static/yangrouchuan.jpeg',
					name: '羊肉串',
					french: '好好吃的羊肉串',
					price: 10.9
				}, {
					img: '../../static/kaozhurou.jpeg',
					name: '猪肉串',
					french: '好好吃的猪肉串',
					price: 11.9
				}, {
					img: '../../static/yangrouchuan.jpeg',
					name: '羊肉串',
					french: '好好吃的羊肉串',
					price: 12.9
				}, {
					img: '../../static/kaozhurou.jpeg',
					name: '猪肉串',
					french: '好好吃的猪肉串',
					price: 13.9
				}]
			}
		},
		onLoad() {
			this.goodList = this.goodList.concat(this.goodList);
			console.log("请求后端数据...");
		},
		onReachBottom() {
			console.log("触底事件...内容加倍");
			uni.showToast({
				title: "到底了...",
				icon: 'none'
			})
			this.goodList = this.goodList.concat(this.goodList);

		},
		onPullDownRefresh() {
			console.log("下拉刷新");
			this.goodList = this.goodList.splice(0, 4);
			// 停止下拉刷新
			uni.stopPullDownRefresh();
		},
		methods: {
			handlerDetail(index) {
				console.log(index);
				uni.navigateTo({
					url: '../detail/detail?index=' + index
				})
			},
			// 显示侧边栏
			handleClick() {
				this.show = true;
			},
			// 关闭侧边栏
			handleClose() {
				this.show = false;
			}
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
			margin: 10upx;
		}
	}
	u-cell-item{
		padding: 0;
	}
</style>
