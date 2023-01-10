<template>
	<view>
		<div>这是分类</div>
		<!-- 图标使用, 默认样式 + 自定义样式 -->
		<span class="iconfont icon-mima"></span>
		<button type="primary" v-on:tap="onTap">激活通知</button>
		
		<unicloud-db v-slot:default="{data, loading, error, options}" collection="user">
			<view v-if="error">{{error.message}}</view>
			<view v-else>
				{{data}}
			</view>
		</unicloud-db>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			 onTap: ()=>{
				alert("嘤嘤嘤");
			}
		}
	}
</script>

<style>
	.icon-mima {
		font-family: "iconfont";
		font-size: 48upx;
	}
</style>
