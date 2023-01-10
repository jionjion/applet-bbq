<!-- 主页标题组件 -->
<template>
	<view class="padding flex justify-between align-center">
		<view class="flex align-center">
			<view class="iconfont icon-sousuo padding-right-sm"></view>
			<view>
				{{title}}
				<view>{{enTitle}}</view>
			</view>
		</view>
		
		<view>
			{{secTitle}}
		</view>
	</view>
</template>

<script>
	export default {
		name:"home-title",
		props:['title', 'enTitle', 'secTitle'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
  .icon-sousuo{
	  font-size: 50upx;
  }
</style>