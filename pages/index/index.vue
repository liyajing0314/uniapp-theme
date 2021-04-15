<template>
	<view class="content">
		<view class="btn btn-light" @click="theme('light')">浅色主题</view>
		<view class="btn btn-dark" @click="theme('dark')">深色主题</view>
		<view style="margin-top: 20px;">
			<view class="btn" @click="changeI18n('zhCN')">中文</view>
			<view class="btn" @click="changeI18n('enUS')">英文</view>
		</view>
		
		<view class="theme-content">
			这里来展示切换主题的效果
			<view class="label">以下是展示国际化的效果:</view>
			<view>{{$language('title')}}</view>
			<view>{{$language('menu')}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			// this.$language('title')
		},
		methods: {
			//换主题
			theme(theme) {
				uni.setStorageSync('theme',theme)
			    window.document.documentElement.setAttribute( "data-theme", theme );
			},
			changeI18n(locale){ //切换国际化语言包
				uni.setStorageSync('language',locale)
				this.$_i18n.locale = locale
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/static/theme/_handle.scss";
	.content {
		padding: 50px 10px;
	}
	.btn {
		width:100px;
		height:30px;
		line-height: 30px;
		text-align: center;
		cursor: pointer;
		background-color: #1E6CEB;
		color:#FFFFFF;
		display: inline-block;
		margin-right: 20px;
	}
	.btn-dark {
		background-color: #1b2531;
		color:#ffffff;
	}
	.btn-light {
		background-color: #f2f2f2;
		color:#414141;
	}
	.theme-content {
		margin-top: 50px;
		@include font_color("font_color1");
		@include background_color("background_color1");
		@include border_color("border_color1");
	}
	.label {
		padding: 20px 0;
	}
</style>
