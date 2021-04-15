<script>
	export default {
		onLaunch: function() {
			//默认显示主题
			let dark = uni.getStorageSync('theme') || 'dark';
			window.document.documentElement.setAttribute( "data-theme", dark);
			//国际化
			let locale = uni.getStorageSync('language');
			this.$_i18n.locale = locale ? locale : 'zhCN';
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
