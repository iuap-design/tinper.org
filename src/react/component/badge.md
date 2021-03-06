# 徽章 bee-badge

用来醒目的展示新的或未读的信息条目



## API

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
| color     | one of: `primary` `success` `info` `error`  `warning` `dark` | string | ''   |
| className | 增加额外的class                               | string | ''   |


## 案例

### 不同颜色的徽章

<div class="example-content"><div id="ReactBadgeDemo1"></div>
</div>



<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;div id="ReactBadgeDemo1">&lt;/div>
</code></pre>
</div>



<div class="examples-code"><pre><code>
import { Badge } from 'tinper-bee';
function demo1 () {
    return (
        &lt;div className="demo-badge">
                &lt;Badge colors="primary">primary&lt;/Badge>
                &lt;Badge colors="info">info&lt;/Badge>
                &lt;Badge colors="dark">dark&lt;/Badge>
                &lt;Badge colors="success">success&lt;/Badge>
                &lt;Badge colors="warning">warning&lt;/Badge>
                &lt;Badge colors="danger">danger&lt;/Badge>
        &lt;/div>
    );
}


ReactDOM.render(demo1(), document.getElementById('ReactBadgeDemo1'));
</code></pre>
</div>
</div>

### icon内容的的徽章

<div class="example-content"><div id="ReactBadgeDemo2"></div>
</div>




<script>
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _src = __webpack_require__(1);

	var _src2 = _interopRequireDefault(_src);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function demo1() {
	    return _react2['default'].createElement(
	        'div',
	        { className: 'demo-badge' },
	        _react2['default'].createElement(
	            _src2['default'],
	            { colors: 'primary' },
	            'primary'
	        ),
	        _react2['default'].createElement(
	            _src2['default'],
	            { colors: 'info' },
	            'info'
	        ),
	        _react2['default'].createElement(
	            _src2['default'],
	            { colors: 'dark' },
	            'dark'
	        ),
	        _react2['default'].createElement(
	            _src2['default'],
	            { colors: 'success' },
	            'success'
	        ),
	        _react2['default'].createElement(
	            _src2['default'],
	            { colors: 'warning' },
	            'warning'
	        ),
	        _react2['default'].createElement(
	            _src2['default'],
	            { colors: 'danger' },
	            'danger'
	        )
	    );
	}

	function demo2() {
	    return _react2['default'].createElement(
	        'div',
	        { className: 'demo-badge' },
	        _react2['default'].createElement(
	            _src2['default'],
	            { colors: 'primary' },
	            _react2['default'].createElement('i', { className: 'uf uf-bellmusicaltool' })
	        ),
	        _react2['default'].createElement(
	            _src2['default'],
	            { colors: 'info' },
	            _react2['default'].createElement('i', { className: 'uf uf-femalesilhouette' })
	        )
	    );
	}

	_reactDom2['default'].render(demo1(), document.getElementById('ReactBadgeDemo1'));
	_reactDom2['default'].render(demo2(), document.getElementById('ReactBadgeDemo2'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Badge = __webpack_require__(2);

	var _Badge2 = _interopRequireDefault(_Badge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports['default'] = _Badge2['default'];
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	/**
	 * @title badge 默认显示内容1
	 */
	var defaultProps = {
		children: "1"
	};

	var clsPrefix = 'u-badge';

	var Badge = function (_React$Component) {
		_inherits(Badge, _React$Component);

		function Badge(props) {
			_classCallCheck(this, Badge);

			return _possibleConstructorReturn(this, _React$Component.call(this, props));
		}

		Badge.prototype.render = function render() {
			var _props = this.props;
			var colors = _props.colors;
			var className = _props.className;
			var children = _props.children;

			var others = _objectWithoutProperties(_props, ['colors', 'className', 'children']);

			var clsObj = {};
			if (className) {
				clsObj[className] = true;
			}
			/**
	   * @title 以u-badge起头的颜色类判断
	   */
			if (colors) {
				clsObj[clsPrefix + '-' + colors] = true;
			}

			var classNames = (0, _classnames2['default'])(clsPrefix, clsObj);

			return _react2['default'].createElement(
				'span',
				_extends({ className: classNames }, others),
				children
			);
		};

		return Badge;
	}(_react2['default'].Component);

	Badge.defaultProps = defaultProps;

	exports['default'] = Badge;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ }
/******/ ]);
</script>
<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;div id="ReactBadgeDemo2">&lt;/div>
</code></pre>
</div>



<div class="examples-code"><pre><code>
import { Badge } from 'tinper-bee';
function demo1 () {
    return (
        &lt;div className="demo-badge">
            &lt;Badge colors="primary">
            	&lt;i className="uf uf-bellmusicaltool">&lt;/i>
            &lt;/Badge>
            &lt;Badge colors="info">
            	&lt;i className="uf uf-femalesilhouette">&lt;/i>
            &lt;/Badge>
        &lt;/div>
    );
}


ReactDOM.render(demo1(), document.getElementById('ReactBadgeDemo2'));
</code></pre>
</div>
</div>