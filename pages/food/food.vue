<template>
	<view>
		<!-- 使用单页面组件 -->
		<my-component name="张三" @onNum='onNum'></my-component>
		<!-- 使用全局组件 -->
		<test-my-component></test-my-component>
		<view>
			这是食物...
		</view>
		<div>这是主页</div>
		<u-tag text="标签" plain size="mini" type="warning"></u-tag>
		
		<u-rate :count="count" v-model="value"></u-rate>
	</view>
</template>

<script>
	import myComponent from '../../components/test-my-component.vue'
	export default {
		data() {
			return {
				count: 4,
				value: 2
			}
		},
		methods: {
			// 监听子组件事件
			onNum(e) {
				console.log("监听到子事件", e)
			}
		},
		components: {
			'my-component': myComponent
		},
		onLoad() {
			console.log('food onLoad 事件');
		},
		created() {
			console.log('food created 事件');
		},
		onShow() {
			console.log("food onShow 事件")
		},
		onHide() {
			console.log("food onHide 事件")
		}
	}
</script>

<style lang="scss">

</style>
