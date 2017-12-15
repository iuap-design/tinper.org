# bee-alert

为用户操作定向的做提示。根据信息类型不同提供相应的以背景颜色区分的alert。若需背景颜色加深需加`dark`类。


## API

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|className|类名|string||
|colors|oneOf:`info` `news` `success` `danger` `warning`|string|`warning`|
|controlLabel|关闭按钮文字|string||
|onDismiss|关闭alert触发的方法|func||


## 案例

### 静态 Alert

消息提示框各种颜色背景的基本显示样式

<div class="example-content"><div id="ReactAlertDemo1"></div>
</div>



<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;div id="ReactAlertDemo1">&lt;/div>
</code></pre>
</div>



<div class="examples-code"><pre><code>
import { Alert } from 'tinper-bee';

function demo1 () {
    return (
    	&lt;div>
	        &lt;Alert colors="news">
			    &lt;strong>Holy guacamole!&lt;/strong> Best check yo self, you're not looking too good.
			&lt;/Alert>
			&lt;Alert colors="success">
			    &lt;strong>Holy guacamole!&lt;/strong> Best check yo self, you're not looking too good.
			&lt;/Alert>
			&lt;Alert colors="warning">
			    &lt;strong>Holy guacamole!&lt;/strong> Best check yo self, you're not looking too good.
			&lt;/Alert>
			&lt;Alert colors="danger">
			    &lt;strong>Holy guacamole!&lt;/strong> Best check yo self, you're not looking too good.
			&lt;/Alert>
			&lt;Alert colors="info">
			    &lt;strong>Holy guacamole!&lt;/strong> Best check yo self, you're not looking too good.
			&lt;/Alert>
		&lt;/div>
    );
}


ReactDOM.render(demo1(), document.getElementById('ReactAlertDemo1'));

</code></pre>
</div>
</div>

###  按钮触发Alert （1）

通过按钮触发显示 Alert

<div class="example-content"><div id="ReactAlertDemo2"></div>
</div>



<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;div id="ReactAlertDemo2">&lt;/div>
</code></pre>
</div>



<div class="examples-code"><pre><code>
import { Alert } from 'tinper-bee';
import { Button } from 'tinper-bee';

class Demo2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showAlert: false
		}
	}
	handleAlertDismiss () {
		this.setState({showAlert: false});
	}
	handerAlertShow () {
		this.setState({showAlert: true});
	}
	render(){
		if(this.state.showAlert){
			return ( 
				&lt;Alert colors="news" className="dark" onDismiss={this.handleAlertDismiss.bind(this)} closeLabel="关闭">
				    &lt;strong>Holy guacamole!&lt;/strong> Best check yo self, you're not looking too good.
				&lt;/Alert>
			)
		}
		return (
			&lt;Button onClick={this.handerAlertShow.bind(this)}> Show alert  hide button&lt;/Button>
		)
	}
}


ReactDOM.render(demo2(), document.getElementById('ReactAlertDemo2'));


</code></pre>
</div>
</div>

###  按钮触发Alert （2）

通过按钮触发显示隐藏 Alert

<div class="example-content"><div id="ReactAlertDemo3"></div>
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

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(7);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _beeButton = __webpack_require__(5);

	var _beeButton2 = _interopRequireDefault(_beeButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	function demo1() {
		return _react2['default'].createElement(
			'div',
			null,
			_react2['default'].createElement(
				_src2['default'],
				{ colors: 'news' },
				_react2['default'].createElement(
					'strong',
					null,
					'Holy guacamole!'
				),
				' Best check yo self, you\'re not looking too good.'
			),
			_react2['default'].createElement(
				_src2['default'],
				{ colors: 'success' },
				_react2['default'].createElement(
					'strong',
					null,
					'Holy guacamole!'
				),
				' Best check yo self, you\'re not looking too good.'
			),
			_react2['default'].createElement(
				_src2['default'],
				{ colors: 'warning' },
				_react2['default'].createElement(
					'strong',
					null,
					'Holy guacamole!'
				),
				' Best check yo self, you\'re not looking too good.'
			),
			_react2['default'].createElement(
				_src2['default'],
				{ colors: 'danger' },
				_react2['default'].createElement(
					'strong',
					null,
					'Holy guacamole!'
				),
				' Best check yo self, you\'re not looking too good.'
			),
			_react2['default'].createElement(
				_src2['default'],
				{ colors: 'info' },
				_react2['default'].createElement(
					'strong',
					null,
					'Holy guacamole!'
				),
				' Best check yo self, you\'re not looking too good.'
			)
		);
	}

	var Demo2 = function (_Component) {
		_inherits(Demo2, _Component);

		function Demo2(props) {
			_classCallCheck(this, Demo2);

			var _this = _possibleConstructorReturn(this, _Component.call(this, props));

			_this.state = {
				showAlert: false
			};
			return _this;
		}

		Demo2.prototype.handleAlertDismiss = function handleAlertDismiss() {
			this.setState({ showAlert: false });
		};

		Demo2.prototype.handerAlertShow = function handerAlertShow() {
			this.setState({ showAlert: true });
		};

		Demo2.prototype.render = function render() {
			if (this.state.showAlert) {
				return _react2['default'].createElement(
					_src2['default'],
					{ colors: 'news', className: 'dark', onDismiss: this.handleAlertDismiss.bind(this), closeLabel: '\u5173\u95ED' },
					_react2['default'].createElement(
						'strong',
						null,
						'Holy guacamole!'
					),
					' Best check yo self, you\'re not looking too good.'
				);
			}
			return _react2['default'].createElement(
				_beeButton2['default'],
				{ onClick: this.handerAlertShow.bind(this) },
				' Show alert  hide button'
			);
		};

		return Demo2;
	}(_react.Component);

	var Demo3 = function (_Component2) {
		_inherits(Demo3, _Component2);

		function Demo3(props) {
			_classCallCheck(this, Demo3);

			var _this2 = _possibleConstructorReturn(this, _Component2.call(this, props));

			_this2.state = {
				showAlert: false
			};
			return _this2;
		}

		Demo3.prototype.handleAlertDismiss = function handleAlertDismiss() {
			this.setState({ showAlert: false });
		};

		Demo3.prototype.handerAlertShow = function handerAlertShow() {
			this.setState({ showAlert: true });
		};

		Demo3.prototype.render = function render() {
			if (this.state.showAlert) {
				return _react2['default'].createElement(
					'div',
					null,
					_react2['default'].createElement(
						_beeButton2['default'],
						{ type: 'warning', onClick: this.handleAlertDismiss.bind(this) },
						' hide alert'
					),
					_react2['default'].createElement(
						_src2['default'],
						{ colors: 'news', className: 'dark', onDismiss: this.handleAlertDismiss.bind(this), closeLabel: '\u5173\u95ED' },
						_react2['default'].createElement(
							'strong',
							null,
							'Holy guacamole!'
						),
						' Best check yo self, you\'re not looking too good.'
					)
				);
			} else {
				return _react2['default'].createElement(
					_beeButton2['default'],
					{ onClick: this.handerAlertShow.bind(this) },
					' Show alert'
				);
			}
		};

		return Demo3;
	}(_react.Component);

	_reactDom2['default'].render(demo1(), document.getElementById('ReactAlertDemo1'));
	_reactDom2['default'].render(_react2['default'].createElement(Demo2, null), document.getElementById('ReactAlertDemo2'));
	_reactDom2['default'].render(_react2['default'].createElement(Demo3, null), document.getElementById('ReactAlertDemo3'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Alert = __webpack_require__(2);

	var _Alert2 = _interopRequireDefault(_Alert);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports['default'] = _Alert2['default'];
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _beeButton = __webpack_require__(5);

	var _beeButton2 = _interopRequireDefault(_beeButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
		onDismiss: _react2['default'].PropTypes.func,
		closeLabel: _react2['default'].PropTypes.string
	};

	var clsPrefix = "u-alert";

	var Alert = function (_React$Component) {
		_inherits(Alert, _React$Component);

		function Alert(props) {
			_classCallCheck(this, Alert);

			var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

			_this.state = {
				showCloseLabel: !!_this.props.closeLabel
			};
			return _this;
		}
		/**
	  * 渲染右上角关闭alert按钮
	  */


		Alert.prototype.renderDismissButton = function renderDismissButton(onDismiss) {
			return _react2['default'].createElement(
				_beeButton2['default'],
				{
					className: 'close',
					onClick: onDismiss
				},
				_react2['default'].createElement(
					'span',
					null,
					'\xD7'
				)
			);
		};
		/**
	 * 渲染alert信息内部关闭alert的文字按钮
	 * @onDismiss 外界传进来的操作动作方法
	 * @closeLabel 内部关闭按钮显示的文字
	 */


		Alert.prototype.renderSrOnlyDismissButton = function renderSrOnlyDismissButton(onDismiss, closeLabel) {
			return _react2['default'].createElement(
				_beeButton2['default'],
				{
					className: 'close sr-only',
					onClick: onDismiss
				},
				closeLabel
			);
		};

		Alert.prototype.render = function render() {
			var _props = this.props;
			var onDismiss = _props.onDismiss;
			var closeLabel = _props.closeLabel;
			var colors = _props.colors;
			var className = _props.className;
			var children = _props.children;

			var others = _objectWithoutProperties(_props, ['onDismiss', 'closeLabel', 'colors', 'className', 'children']);

			var clsObj = {
				"u-alert": true
			};
			if (colors) {
				clsObj[clsPrefix + '-' + colors] = true;
			} else {
				clsObj[clsPrefix + '-warning'] = true;
			}
			return _react2['default'].createElement(
				'div',
				_extends({}, others, {
					role: 'alert',
					className: (0, _classnames2['default'])(className, clsObj)
				}),
				children,
				!this.state.showCloseLabel && this.renderDismissButton(onDismiss),
				this.state.showCloseLabel && this.renderSrOnlyDismissButton(onDismiss, closeLabel)
			);
		};

		return Alert;
	}(_react2['default'].Component);

	Alert.propTypes = propTypes;

	exports['default'] = Alert;
	module.exports = exports['default'];

/***/ },
/* 3 */
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
/* 4 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Button = __webpack_require__(6);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _Button2["default"];
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(7);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	    /**
	     * @title 尺寸
	     */
	    size: _react.PropTypes.oneOf(['sm', 'xg', 'lg', '']),
	    /**
	     * @title 样式
	     */
	    style: _react.PropTypes.object,
	    /**
	     * @title 形状
	     */
	    shape: _react.PropTypes.oneOf(['block', 'round', 'squared', 'floating', 'pillRight', 'pillLeft', '']),
	    /**
	    * @title 类型
	    */
	    type: _react.PropTypes.oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger', '']),
	    /**
	     * @title 是否禁用
	     * @veIgnore
	     */
	    disabled: _react.PropTypes.bool,
	    /**
	     * @title 类名
	     * @veIgnore
	     */
	    className: _react.PropTypes.string,
	    /**
	     * @title 内容
	     */
	    children: _react.PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.string]),
	    /**
	     * @title <button> 的 type
	     * @veIgnore
	     */
	    htmlType: _react.PropTypes.oneOf(['submit', 'button', 'reset'])
	};

	var defaultProps = {
	    size: '',
	    type: 'primary',
	    shape: '',
	    disabled: false,
	    className: '',
	    children: '',
	    htmlType: 'button'
	};

	var sizeMap = {
	    sm: 'sm',
	    xg: 'xg',
	    lg: 'lg'
	},
	    typeMap = {
	    primary: 'primary',
	    accent: 'accent',
	    success: 'success',
	    info: 'info',
	    warning: 'warning',
	    danger: 'danger'
	},
	    shapeMap = {
	    block: 'block',
	    round: 'round',
	    squared: 'squared',
	    floating: 'floating',
	    pillRight: 'pill-right',
	    pillLeft: 'pill-left'
	},
	    clsPrefix = 'u-button';

	var Button = function (_React$Component) {
	    _inherits(Button, _React$Component);

	    function Button(props) {
	        _classCallCheck(this, Button);

	        return _possibleConstructorReturn(this, _React$Component.call(this, props));
	    }

	    Button.prototype.render = function render() {
	        var _props = this.props;
	        var type = _props.type;
	        var shape = _props.shape;
	        var disabled = _props.disabled;
	        var className = _props.className;
	        var size = _props.size;
	        var children = _props.children;
	        var htmlType = _props.htmlType;

	        var others = _objectWithoutProperties(_props, ['type', 'shape', 'disabled', 'className', 'size', 'children', 'htmlType']);

	        var clsObj = {};
	        if (className) {
	            clsObj[className] = true;
	        }
	        if (sizeMap[size]) {
	            clsObj[clsPrefix + '-' + sizeMap[size]] = true;
	        }
	        if (shapeMap[shape]) {
	            clsObj[clsPrefix + '-' + shapeMap[shape]] = true;
	        }
	        if (typeMap[type]) {
	            clsObj[clsPrefix + '-' + typeMap[type]] = true;
	        }
	        var classNames = (0, _classnames2["default"])(clsPrefix, clsObj);
	        return _react2["default"].createElement(
	            'button',
	            _extends({
	                type: htmlType,
	                className: classNames,
	                disabled: disabled
	            }, others),
	            this.props.children
	        );
	    };

	    return Button;
	}(_react2["default"].Component);

	Button.propTypes = propTypes;
	Button.defaultProps = defaultProps;

	exports["default"] = Button;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ }
/******/ ]);
</script>
<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;div id="ReactAlertDemo3">&lt;/div>
</code></pre>
</div>



<div class="examples-code"><pre><code>
import { Loadingstate } from 'tinper-bee';
import { Button } from 'tinper-bee';


class Demo3 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showAlert: false
		}
	}
	handleAlertDismiss () {
		this.setState({showAlert: false});
	}
	handerAlertShow () {
		this.setState({showAlert: true});
	}
	render(){
		if(this.state.showAlert){
			return ( 
				&lt;div>
					
					&lt;Button type="warning" onClick={this.handleAlertDismiss.bind(this)}> hide alert&lt;/Button>
					&lt;Alert colors="news" className="dark" onDismiss={this.handleAlertDismiss.bind(this)} closeLabel="关闭">
					    &lt;strong>Holy guacamole!&lt;/strong> Best check yo self, you're not looking too good.
					&lt;/Alert>
					
				&lt;/div>
			)
		}else {
			return (
				&lt;Button onClick={this.handerAlertShow.bind(this)}> Show alert&lt;/Button>
			)
			
		}

	}
}


ReactDOM.render(demo2(), document.getElementById('ReactAlertDemo3'));</code></pre>
</div>
</div>