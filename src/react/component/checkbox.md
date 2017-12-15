# bee-checkbox

复选按钮，界面与交互相对原生更人性化


## API

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|colors|oneOf:`info` `news` `success` `danger` `warning`|string|`warning`|
|disabled||是否可用|bool|false|
|checked|是否选中|bool|false|


## 案例

### 基本 Checkbox

下例四种状态：可用默认非选中，不可用默认非选中，可用默认选中和不可用默认不选中

<div class="example-content"><div id="ReactCheckboxDemo1"></div>
</div>



<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;div id="ReactCheckboxDemo1">&lt;/div>
</code></pre>
</div>



<div class="examples-code"><pre><code>
import { Checkbox } from 'tinper-bee';


function demo1 () {
	return (
		&lt;div className="demo-checkbox">
			&lt;Checkbox> checkbox&lt;/Checkbox>
			&lt;Checkbox disabled> checkbox&lt;/Checkbox>
			&lt;Checkbox checked> checkbox&lt;/Checkbox>
			&lt;Checkbox checked disabled> checkbox&lt;/Checkbox>
		&lt;/div>
	)
}


ReactDOM.render(demo1(), document.getElementById('ReactCheckboxDemo1'));

</code></pre>
</div>
</div>

###  多颜色 Checkbox

通过参数colors控制

<div class="example-content"><div id="ReactCheckboxDemo2"></div>
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

	var _CheckboxDemo = __webpack_require__(1);

	var _CheckboxDemo2 = _interopRequireDefault(_CheckboxDemo);

	var _reactDom = __webpack_require__(6);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _src = __webpack_require__(2);

	var _src2 = _interopRequireDefault(_src);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function demo1() {
		return React.createElement(
			'div',
			{ className: 'demo-checkbox' },
			React.createElement(
				_src2['default'],
				null,
				' checkbox'
			),
			React.createElement(
				_src2['default'],
				{ disabled: true },
				' checkbox'
			),
			React.createElement(
				_src2['default'],
				{ checked: true },
				' checkbox'
			),
			React.createElement(
				_src2['default'],
				{ checked: true, disabled: true },
				' checkbox'
			)
		);
	}

	function demo2() {
		return React.createElement(
			'div',
			{ className: 'demo-checkbox' },
			React.createElement(
				_src2['default'],
				{ colors: 'danger' },
				' checkbox'
			),
			React.createElement(
				_src2['default'],
				{ colors: 'info' },
				' checkbox'
			),
			React.createElement(
				_src2['default'],
				{ colors: 'success' },
				' checkbox'
			),
			React.createElement(
				_src2['default'],
				{ colors: 'dark' },
				' checkbox'
			),
			React.createElement(
				_src2['default'],
				{ colors: 'danger' },
				' checkbox'
			)
		);
	}
	_reactDom2['default'].render(demo1(), document.getElementById('ReactCheckboxDemo1'));
	_reactDom2['default'].render(demo2(), document.getElementById('ReactCheckboxDemo2'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _src = __webpack_require__(2);

	var _src2 = _interopRequireDefault(_src);

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(6);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var Demo = function (_Component) {
		_inherits(Demo, _Component);

		function Demo() {
			_classCallCheck(this, Demo);

			return _possibleConstructorReturn(this, _Component.apply(this, arguments));
		}

		Demo.prototype.render = function render() {
			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(
					_src2['default'],
					{ colors: 'danger' },
					' checkbox'
				),
				_react2['default'].createElement(
					_src2['default'],
					{ colors: 'info' },
					' checkbox'
				),
				_react2['default'].createElement(
					_src2['default'],
					{ colors: 'success' },
					' checkbox'
				),
				_react2['default'].createElement(
					_src2['default'],
					{ colors: 'dark' },
					' checkbox'
				),
				_react2['default'].createElement(
					_src2['default'],
					{ colors: 'danger', checked: true, disabled: true },
					' checkbox'
				),
				_react2['default'].createElement(
					_src2['default'],
					{ disabled: true },
					' checkbox'
				)
			);
		};

		return Demo;
	}(_react.Component);

	exports['default'] = Demo;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Checkbox = __webpack_require__(3);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports['default'] = _Checkbox2['default'];
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	//import warning from 'warning';


	var propTypes = {

	  colors: _react2['default'].PropTypes.oneOf(['', 'dark', 'success', 'info', 'warning', 'danger', 'primary']),

	  disabled: _react2['default'].PropTypes.bool

	};

	var defaultProps = {
	  disabled: false,
	  colors: 'primary'
	};
	var clsPrefix = 'u-checkbox';

	var Checkbox = function (_React$Component) {
	  _inherits(Checkbox, _React$Component);

	  function Checkbox(props) {
	    _classCallCheck(this, Checkbox);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

	    _this.state = {
	      checked: _this.props.checked
	    };
	    return _this;
	  }

	  Checkbox.prototype.changeState = function changeState() {
	    if (this.props.disabled == false) {
	      this.setState({ checked: !this.state.checked });
	    }
	  };

	  Checkbox.prototype.render = function render() {
	    var _props = this.props;
	    var disabled = _props.disabled;
	    var colors = _props.colors;
	    var size = _props.size;
	    var className = _props.className;
	    var children = _props.children;

	    var others = _objectWithoutProperties(_props, ['disabled', 'colors', 'size', 'className', 'children']);

	    var input = _react2['default'].createElement('input', _extends({}, others, {
	      type: 'checkbox',
	      disabled: this.props.disabled
	    }));

	    var classes = {
	      'u-checkbox': true,
	      'is-checked': this.state.checked,
	      disabled: disabled
	    };

	    if (colors) {
	      classes[clsPrefix + '-' + colors] = true;
	    }

	    if (colors) {
	      classes[clsPrefix + '-' + colors] = true;
	    }

	    if (size) {
	      classes[clsPrefix + '-' + size] = true;
	    }

	    return _react2['default'].createElement(
	      'label',
	      { className: (0, _classnames2['default'])(className, classes), onClick: this.changeState.bind(this) },
	      input,
	      _react2['default'].createElement(
	        'label',
	        { className: 'u-checkbox-label' },
	        children
	      )
	    );
	  };

	  return Checkbox;
	}(_react2['default'].Component);

	Checkbox.propTypes = propTypes;
	Checkbox.defaultProps = defaultProps;

	exports['default'] = Checkbox;
	module.exports = exports['default'];

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

	module.exports = React;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ }
/******/ ]);
</script>
<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;div id="ReactCheckboxDemo2">&lt;/div>
</code></pre>
</div>



<div class="examples-code"><pre><code>
import { Checkbox } from 'tinper-bee';


function demo2 () {
	return (
		&lt;div className="demo-checkbox">
			&lt;Checkbox colors="danger"> checkbox&lt;/Checkbox>
			&lt;Checkbox colors="info"> checkbox&lt;/Checkbox>
			&lt;Checkbox colors="success"> checkbox&lt;/Checkbox>
			&lt;Checkbox colors="dark"> checkbox&lt;/Checkbox>
			&lt;Checkbox colors="danger"> checkbox&lt;/Checkbox>
		&lt;/div>
	)
}

ReactDOM.render(demo2(), document.getElementById('ReactCheckboxDemo2'));


</code></pre>
</div>
</div>