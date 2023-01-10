<!-- 轮播广告详情页 -->
<template>
	<view>
		<text>轮播广告详情页 {{id}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0
			};
		},
		// 默认参数中解构入参
		onLoad({id}) {
			this.id = id
			console.log(id)
		}
	}
</script>

<style lang="scss">

</style>
