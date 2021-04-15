import Vue from 'vue'
import App from './App'

import zhCN from './static/language/zh_CN.js'
import enUS from './static/language/en_US.js'

import VueI18n from './uni_modules/yinrh-i18n/vue-i18n'
Vue.use(VueI18n);
const i18n = new VueI18n({
    locale: 'enUS',
    messages: {
        'enUS': enUS,
        'zhCN': zhCN
    }
});
Vue.prototype.$_i18n = i18n;

Vue.prototype.$language = function(context) {
	let _msg = this.$_i18n.messages,
		_loc = this.$_i18n.locale;
	let result = _msg[_loc];
	context.split('.').forEach((key) => {
		result = result[key];
	});
	return result;
}

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
