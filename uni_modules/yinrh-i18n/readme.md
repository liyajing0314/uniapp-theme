## yinrh-i18n
用于国际化，切换不同的语言环境

## 安装方式
### 1、在任意目录下创建js文件，用于放置语言文件，并在``main.js``中导入
```
import zhCN from 'uni_modules/yinrh-i18n/language/zh_CN.js'
import enUS from 'uni_modules/yinrh-i18n/language/en_US.js'
```

### 2、在``main.js``中添加
```
import VueI18n from 'uni_modules/yinrh-i18n/vue-i18n'
Vue.use(VueI18n);
const i18n = new VueI18n({
	locale: 'enUS',
	messages: {
		'enUS': enUS,
		'zhCN': zhCN
	}
});
Vue.prototype.$_i18n = i18n;


const app = new Vue({
	i18n,
	...App
})
```

### 3、初始化
在``app.vue``或其他vue文件中
```
let locale = uni.getStorageSync('language');
this.$_i18n.locale = locale ? locale : 'zhCN';
```

### 4、调用方式
### 方法一：
+ 在``script``的``computed``中创建``i18n``
```
computed: {
	i18n() {
		return this.$_i18n.messages[this.$_i18n.locale];
	}
}
```
+ 在``template``中调用
```
<text>{{i18n.title}}</text>
```
+ 在``script``中调用
```
this.i18n.title
```

### 方法二：
+ 在``main.js``中创建全局方法
```
Vue.prototype.$language = function(context) {
	let _msg = this.$_i18n.messages,
		_loc = this.$_i18n.locale;
	let result = _msg[_loc];
	context.split('.').forEach((key) => {
		result = result[key];
	});
	return result;
}
```
+ 在``template``中调用
```
<text>{{$language('title.index')}}</text>
```
+ 在``script``中调用
```
this.$language('title.index')
```

## 补充说明
在``/uni_modules/yinrh-i18n/vue-i18n``目录下丢失一个``package.json``文件
```
{
	"_from": "vue-i18n",
	"_id": "vue-i18n@8.20.0",
	"_inBundle": false,
	"_integrity": "sha512-ZiAOoeR4d/JtKpbjipx3I80ey7cYG1ki5gQ7HwzWm4YFio9brA15BEYHjalEoBaEfzF5OBEZP+Y2MvAaWnyXXg==",
	"_location": "/vue-i18n",
	"_phantomChildren": {},
	"_requested": {
		"type": "tag",
		"registry": true,
		"raw": "vue-i18n",
		"name": "vue-i18n",
		"escapedName": "vue-i18n",
		"rawSpec": "",
		"saveSpec": null,
		"fetchSpec": "latest"
	},
	"_requiredBy": [
		"#USER",
		"/"
	],
	"_resolved": "https://registry.npmjs.org/vue-i18n/-/vue-i18n-8.20.0.tgz",
	"_shasum": "c81b01d6541182b28565316cafe881b65a3c0f1b",
	"_spec": "vue-i18n",
	"_where": "E:\\www\\uniapp\\uView",
	"author": {
		"name": "kazuya kawaguchi",
		"email": "kawakazu80@gmail.com"
	},
	"bugs": {
		"url": "https://github.com/kazupon/vue-i18n/issues"
	},
	"bundleDependencies": false,
	"changelog": {
		"labels": {
			"Type: Feature": ":star: New Features",
			"Type: Bug": ":bug: Bug Fixes",
			"Type: Security": ":lock: Security Fixes",
			"Type: Performance": ":chart_with_upwards_trend: Performance Fixes",
			"Type: Improvement": ":zap: Improved Features",
			"Type: Breaking": ":boom: Breaking Change",
			"Type: Deprecated": ":warning: Deprecated Features",
			"Type: I18n": ":globe_with_meridians: Internationalization",
			"Type: A11y": ":wheelchair: Accessibility",
			"Type: Documentation": ":pencil: Documentation"
		}
	},
	"deprecated": false,
	"description": "Internationalization plugin for Vue.js",
	"devDependencies": {
		"@babel/core": "^7.1.0",
		"@babel/plugin-proposal-class-properties": "^7.1.0",
		"@babel/plugin-syntax-flow": "^7.0.0",
		"@babel/plugin-transform-flow-strip-types": "^7.0.0",
		"@typescript-eslint/eslint-plugin": "^3.0.0",
		"@typescript-eslint/parser": "^3.0.0",
		"@vue/babel-preset-app": "^4.4.1",
		"babel-eslint": "^10.1.0",
		"babel-loader": "^8.1.0",
		"babel-plugin-istanbul": "^6.0.0",
		"babel-preset-power-assert": "^3.0.0",
		"buble": "^0.19.3",
		"chromedriver": "^83.0.0",
		"core-js": "^3.6.5",
		"cross-env": "^7.0.2",
		"cross-spawn": "^7.0.3",
		"eslint": "^6.8.0",
		"eslint-loader": "^4.0.2",
		"eslint-plugin-flowtype": "^4.7.0",
		"eslint-plugin-ie11": "^1.0.0",
		"eslint-plugin-no-autofix": "^1.0.1",
		"eslint-plugin-vue": "^6.2.2",
		"eslint-plugin-vue-libs": "^4.0.0",
		"flow-bin": "^0.38.0",
		"http-server": "^0.12.3",
		"intl": "^1.2.5",
		"karma": "^5.0.9",
		"karma-chrome-launcher": "^3.1.0",
		"karma-coverage": "^2.0.2",
		"karma-firefox-launcher": "^1.1.0",
		"karma-mocha": "^2.0.1",
		"karma-mocha-reporter": "^2.2.5",
		"karma-safari-launcher": "^1.0.0",
		"karma-sauce-launcher": "^4.1.5",
		"karma-sourcemap-loader": "^0.3.7",
		"karma-webpack": "^4.0.2",
		"lerna-changelog": "^1.0.0",
		"lerna-changelog-label-schema": "^3.0.0",
		"mocha": "^7.2.0",
		"mocha-loader": "^5.0.0",
		"nightwatch": "^1.3.5",
		"nightwatch-helpers": "^1.2.0",
		"power-assert": "^1.6.0",
		"rollup": "^0.66.0",
		"rollup-plugin-buble": "^0.19.2",
		"rollup-plugin-commonjs": "^9.1.8",
		"rollup-plugin-flow-no-whitespace": "^1.0.0",
		"rollup-plugin-node-resolve": "^3.4.0",
		"rollup-plugin-replace": "^2.0.0",
		"selenium-server": "^3.141.59",
		"shipjs": "^0.17.0",
		"sinon": "^9.0.2",
		"terser": "^3.17.0",
		"typescript": "^3.9.3",
		"vue": "^2.5.17",
		"vue-github-button": "^1.1.2",
		"vue-template-compiler": "^2.5.17",
		"vuepress": "^1.5.0",
		"webpack": "^4.43.0",
		"webpack-cli": "^3.1.1",
		"webpack-dev-middleware": "^3.7.2",
		"webpack-dev-server": "^3.11.0"
	},
	"files": [
		"dist/vue-i18n.js",
		"dist/vue-i18n.min.js",
		"dist/vue-i18n.common.js",
		"dist/vue-i18n.esm.js",
		"dist/vue-i18n.esm.browser.js",
		"dist/vue-i18n.esm.browser.min.js",
		"src/**/*.js",
		"types/*.d.ts",
		"decls",
		"vetur/tags.json",
		"vetur/attributes.json"
	],
	"homepage": "https://github.com/kazupon/vue-i18n#readme",
	"keywords": [
		"i18n",
		"internationalization",
		"plugin",
		"vue",
		"vue.js"
	],
	"license": "MIT",
	"main": "dist/vue-i18n.common.js",
	"module": "dist/vue-i18n.esm.js",
	"name": "vue-i18n",
	"repository": {
		"type": "git",
		"url": "git+https://github.com/kazupon/vue-i18n.git"
	},
	"scripts": {
		"build": "node config/build.js",
		"clean": "rm -rf coverage && rm -rf dist/*.js* && rm ./*.log",
		"coverage": "cat ./coverage/lcov.info",
		"dev": "cross-env BABEL_ENV=test webpack-dev-server --inline --hot --open --content-base ./test/unit/ --config config/webpack.dev.conf.js",
		"docs:build": "cross-env NODE_ENV=production node config/version.js && cross-env NODE_ENV=production vuepress build vuepress -d docs",
		"docs:clean": "rm -rf docs/**",
		"docs:dev": "vuepress dev vuepress",
		"flow": "flow check",
		"lint": "eslint --fix src test types/**/*.ts",
		"release:prepare": "shipjs prepare",
		"release:trigger": "shipjs trigger",
		"sauce": "npm run sauce:coolkids && npm run sauce:ie && npm run sauce:mobile",
		"sauce:coolkids": "karma start config/karma.sauce.conf.js -- 0",
		"sauce:ie": "karma start config/karma.sauce.conf.js -- 1",
		"sauce:mobile": "karma start config/karma.sauce.conf.js -- 2",
		"test": "npm run lint && npm run flow && npm run test:types && npm run test:cover && npm run test:e2e",
		"test:cover": "cross-env BABEL_ENV=test karma start config/karma.cover.conf.js",
		"test:e2e": "npm run build && node test/e2e/runner.js",
		"test:types": "tsc -p types",
		"test:unit": "cross-env BABEL_ENV=test karma start config/karma.unit.conf.js",
		"test:unit:ci": "cross-env BABEL_ENV=test karma start config/karma.unit.ci.conf.js"
	},
	"sideEffects": false,
	"types": "types/index.d.ts",
	"unpkg": "dist/vue-i18n.js",
	"version": "8.20.0",
	"vetur": {
		"tags": "vetur/tags.json",
		"attributes": "vetur/attributes.json"
	}
}

```