<template>
	<scroll-view :scroll-into-view="topItem" scroll-y="true" class="scroll-cont" scroll-with-animation="true" @scroll="handleScroll">
		<view>
			<!-- 页面顶部, 锚点 -->
			<view id="top"></view>
			<!-- 自定义标题 -->
			<nav-custom></nav-custom>
			<!-- 轮播 -->
			<swiper class="banner" :indicator-dots="true" :indicator-active-color="'#ffeeaa'" :autoplay="true"
				:interval="3000" :duration="1000">
				<swiper-item @click="handleBanner('1')">
					<view class="swiper-item">
						<image src="../../static/yangrouchuan.jpeg" mode=""></image>
					</view>
				</swiper-item>
				<swiper-item @click="handleBanner('2')">
					<view class="swiper-item">
						<image src="../../static/yangrouchuan.jpeg" mode=""></image>
					</view>
				</swiper-item>
				<swiper-item @click="handleBanner('3')">
					<view class="swiper-item">
						<image src="../../static/yangrouchuan.jpeg" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
			<!-- 自定义组件 -->
			<home-title title="本店推荐" en-title="Recommended Dishes" sec-title="Happay New Day"></home-title>

			<!-- 滚动区 -->
			<scroll-view scroll-x="true">
				<view class="scroll-inner">
					<image src="../../static/yangrouchuan.jpeg" mode="heightFix"></image>
					<image src="../../static/niurouchuan.jpeg" mode="heightFix"></image>
					<image src="../../static/yangrouchuan.jpeg" mode="heightFix"></image>
				</view>
			</scroll-view>

			<!-- 自定义组件 -->
			<home-title title="今日特惠" en-title="Today's special" sec-title="-10%"></home-title>

			<!-- 自定义封面 -->
			<image class=".classify" src="../../static/kaozhurou.jpeg" mode="">

			</image>

			<!-- 自定义商品 -->
			<view class="flex flex-wrap padding-sm justify-between">
				<good-item :good-data="good"></good-item>
			</view>

			<!-- 返回顶部 -->
			<view class="back-top" v-show="isShowScrollTop" @click="handleClick">
				<text class="iconfont icon-fanhuidingbu"></text>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import {$http} from '../../utils/request.js'
	export default {
		data() {
			return {
				// 是否显示返回顶部
				isShowScrollTop:false,
				// 顶部定位元素
				topItem:'',
				// 商品元素
				good:{
					img: '../../static/yangrouchuan.jpeg',
					name: '羊肉串',
					french: '好好吃的羊肉串',
					price: 10.9
				}
			}
		},
		methods:{
			handleScroll(even){
				// 滑动
				let {scrollTop} = even.detail;
				// console.log(even);
				// 根据高度, 是否显示返回顶部
				this.isShowScrollTop = scrollTop >= 200;
				// 重置
				this.topItem = ''
			},
			handleClick(){
				// 返回顶部元素
				this.topItem = 'top'
			},
			handleBanner(id){
				uni.navigateTo({
					url: `./banner-ad?id=${id}`
				})
			}
		},
		onLoad() {
			// 使用 vuex
			this.$store.commit('increment')
			console.log("使用 vuex: ", this.$store.state.count)
			
			// // 直接请求
			// uni.request({
			// 	url:' https://api.github.com/octocat',
			// 	method:'GET',
			// 	header:{
			// 		'Content-Type': 'application/json'
			// 	},
			// 	success: (response) =>{
			// 		console.log('默认使用', response)
			// 	}
			// })
			// // 使用自己封装的
			// $http('/octocat').then(respnse=>{
			// 	console.log('自定义使用', respnse)
			// })
			// // 全局使用自己封装的
			// this.$get('/octocat').then(respnse=>{
			// 	console.log('全局使用', respnse)
			// })
		}
	}
</script>

<style lang="scss">
	/* 内容 */
	.scroll-cont{
		height: 100vh;
	}
	
	/* 轮播 */
	.banner {
		height: 400upx;

		swiper-item: {
			height: 400upx;
		}

		image {
			height: 400upx;
			width: 100%;
		}
	}

	/* 可滚动区域 */
	.scroll-inner {
		white-space: nowrap;

		image {
			height: 300upx;
			width: auto;
		}
	}

	/* 封面 */
	.classify {
		height: 380upx;
		width: 100%;
	}

	/* 返回顶部 */
	.back-top {
		height: 100upx;
		width: 100upx;
		background-color: #fff;
		border-radius: 50%;
		text-align: center;
		line-height: 100upx;
		box-shadow: 0 0 10upx 4upx rgba(0, 0, 0, 0.4);
		position: fixed;
		bottom: 150upx;
		right: 40upx;
	}
</style>
