<!-- 自定义组件 -->
<template>
	<view class="cu-bar bg-white">
		<view class="action">
			<text class="cuIcon-locationfill text-gray"></text>
			上海
		</view>
		<view class="content text-bold">
			烧烤
		</view>
		<view class="action">
			<text class="cuIcon-search text-grey"></text>
			<u-line direction="col" length="30upx" margin="20upx"></u-line>
			<text class="cuIcon-sort"></text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "nav-custom",
		data() {
			return {

			};
		}
	}
</script>

<style>

</style>
