<template>
	<view @click="handleNum">
		自定义组件, {{name}}
	</view>
</template>

<script>
	export default {
		name:"test-my-component",
		props:['name'],
		data() {
			return {
				
			};
		},
		methods:{
			// 向父组件传递事件
			handleNum(){
				this.$emit('onNum', 1000)
			}
		},
		created() {
			console.log('component created 事件');
		}
	}
</script>

<style lang="scss">

</style>