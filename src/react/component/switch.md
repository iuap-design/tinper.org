# 开关 bee-switch

两种状态切换的开关


## API

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|checked	|指定当前是否选中|	Boolean	|false|
|defaultChecked	|初始是否选中	|Boolean|	false |
|onChangeHandler	|变化时回调函数,自定义参照demo	|Function(checked:Boolean) |	
|checkedChildren	|选中时的内容	|React| Node |
|unCheckedChildren	|非选中时的内容	|React| Node	
|size|	大小设置，oneOf：`primary`,`success`,`info`,`dark`,`warning`|string|''|	
|colors| 颜色设置，oneOf：`sm`, `lg`,''|	string	|''|


### 基础的开关

<div class="example-content"><div id='beeSwitchDemo1'></div>
</div>



<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;div id='beeSwitchDemo1'>&lt;/div>
</code></pre>
</div>



<div class="examples-code"><pre><code>
import { Switch } from 'tinper-bee';

function demo1 () {
    return (
        &lt;Switch />
    )
}

ReactDOM.render(demo1(), document.getElementById('beeSwitchDemo1'));
</code></pre>
</div>
</div>

### 不同大小的开关

<div class="example-content"><div id='beeSwitchDemo2'></div>
</div>



<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;div id='beeSwitchDemo2'>&lt;/div>
</code></pre>
</div>



<div class="examples-code"><pre><code>
import { Switch } from 'tinper-bee';

function demo2 () {
    return (
        &lt;div>
            &lt;Switch checked={true} size='small' />
            &lt;Switch checked={true} />
        &lt;/div>
    )
}

ReactDOM.render(demo2(), document.getElementById('beeSwitchDemo2'));
</code></pre>
</div>
</div>

### 不同颜色的开关

<div class="example-content"><div id='beeSwitchDemo3'></div>
</div>



<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;div id='beeSwitchDemo3'>&lt;/div>
</code></pre>
</div>



<div class="examples-code"><pre><code>
import { Switch } from 'tinper-bee';

function demo3 () {
    return (
        &lt;div>
            &lt;Switch colors="primary" checked={true} />
            &lt;Switch colors="success" checked={true} />
            &lt;Switch colors="info" checked={true} />
            &lt;Switch colors="danger" checked={true} />
            &lt;Switch colors="dark" checked={true} />
        &lt;/div>
    )
}

ReactDOM.render(demo3(), document.getElementById('beeSwitchDemo3'));
</code></pre>
</div>
</div>

### 自定义的开关

<div class="example-content"><div id='beeSwitchDemo4'></div>
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

	var _reactDom = __webpack_require__(4);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function demo1() {
	    return React.createElement(_src2['default'], null);
	}

	function demo2() {
	    return React.createElement(
	        'div',
	        null,
	        React.createElement(_src2['default'], { checked: true, size: 'sm', checkedChildren: '开', unCheckedChildren: '关' }),
	        React.createElement(_src2['default'], { checked: true, size: 'lg', checkedChildren: '开', unCheckedChildren: '关' })
	    );
	}
	function demo3() {
	    return React.createElement(
	        'div',
	        null,
	        React.createElement(_src2['default'], { colors: 'primary', checked: true }),
	        React.createElement(_src2['default'], { colors: 'success', checked: true }),
	        React.createElement(_src2['default'], { colors: 'info', checked: true }),
	        React.createElement(_src2['default'], { colors: 'danger', checked: true }),
	        React.createElement(_src2['default'], { colors: 'dark', checked: true })
	    );
	}
	function changeHandle() {
	    alert('点我点我点我~');
	}

	function demo4() {
	    return React.createElement(
	        'div',
	        null,
	        React.createElement(_src2['default'], { onChangeHandler: changeHandle, checkedChildren: '开', unCheckedChildren: '关' }),
	        React.createElement(_src2['default'], { checked: true, onChangeHandler: changeHandle, checkedChildren: 'on', unCheckedChildren: 'off' })
	    );
	}

	_reactDom2['default'].render(demo1(), document.getElementById('beeSwitchDemo1'));
	_reactDom2['default'].render(demo2(), document.getElementById('beeSwitchDemo2'));
	_reactDom2['default'].render(demo3(), document.getElementById('beeSwitchDemo3'));
	_reactDom2['default'].render(demo4(), document.getElementById('beeSwitchDemo4'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Switch = __webpack_require__(2);

	var _Switch2 = _interopRequireDefault(_Switch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports['default'] = _Switch2['default'];
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(4);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
		clsPrefix: _react2['default'].PropTypes.string,
		disabled: _react2['default'].PropTypes.bool,
		checkedChildren: _react2['default'].PropTypes.any,
		unCheckedChildren: _react2['default'].PropTypes.any,
		onChangeHandler: _react2['default'].PropTypes.func
	};
	var defaultProps = {
		clsPrefix: 'u-switch',
		checkedChildren: null,
		unCheckedChildren: null,
		defaultChecked: false,
		size: '',
		disabled: false,
		onChangeHandler: function onChangeHandler() {}
	};

	var Switch = function (_Component) {
		_inherits(Switch, _Component);

		function Switch(props) {
			_classCallCheck(this, Switch);

			var _this = _possibleConstructorReturn(this, _Component.call(this, props));

			var checked = false;
			if ('checked' in _this.props) {
				checked = !!_this.props.checked;
			} else {
				checked = !!_this.props.defaultChecked;
			}
			_this.state = {
				checked: checked
			};
			_this.clickHandler = _this.clickHandler.bind(_this);
			return _this;
		}
		//点击switch改变状态


		Switch.prototype.clickHandler = function clickHandler() {
			var checked = this.state.checked;
			this.setState({
				checked: !checked
			});
			this.props.onChangeHandler(!checked);
		};

		Switch.prototype.render = function render() {
			var _props = this.props;
			var checkedChildren = _props.checkedChildren;
			var unCheckedChildren = _props.unCheckedChildren;
			var onChangeHandler = _props.onChangeHandler;
			var size = _props.size;
			var className = _props.className;
			var clsPrefix = _props.clsPrefix;
			var colors = _props.colors;
			//获取checked

			var checked = this.state.checked;
			var classes = {
				'is-checked': checked
			};
			if (size) {
				classes[clsPrefix + '-' + size] = true;
			}
			if (colors) {
				classes[clsPrefix + '-' + colors] = true;
			}
			var classNames = (0, _classnames2['default'])(clsPrefix, classes);

			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(
					'span',
					{ onClick: this.clickHandler, className: (0, _classnames2['default'])(className, classNames), tabIndex: '0' },
					_react2['default'].createElement(
						'span',
						{
							className: clsPrefix + '-inner' },
						checked ? checkedChildren : unCheckedChildren
					)
				)
			);
		};

		return Switch;
	}(_react.Component);

	Switch.propTypes = propTypes;
	Switch.defaultProps = defaultProps;
	exports['default'] = Switch;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 5 */
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


/***/ }
/******/ ]);
</script>
<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;div id='beeSwitchDemo4'>&lt;/div>
</code></pre>
</div>



<div class="examples-code"><pre><code>
import { Switch } from 'tinper-bee';

function changeHandle () {
    alert('点我点我点我~');
}

function demo4 () {
    return (
        &lt;div>
            &lt;Switch onChangeHandler = {changeHandle} checkedChildren={'开'} unCheckedChildren={'关'} />
            &lt;Switch checked={true} onChangeHandler = {changeHandle} checkedChildren={'on'} unCheckedChildren={'off'} />
        &lt;/div>
    )
}

ReactDOM.render(demo4(), document.getElementById('beeSwitchDemo4'));
</code></pre>
</div>
</div>