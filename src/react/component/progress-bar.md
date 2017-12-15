# bee-progress-bar

记录进度或动态的显示进度变化.


## API

|参数|说明|类型|默认值|
|---|----|---|------|
|min|最小值|number|0|
|max|最大值|number|100|
|now|显示值|number |''|
|srOnly|label 只读不显示|bool|false|
|striped|条纹样式|bool|false|
|active|激活状态|bool|false|
|colors|颜色oneOf:danger,info,warning,success,primary,dark,''|string|''|


## 案例

### 基础 ProgressBar

设置参数now的值控制显示的进度值
<div class="example-content"><div id="ReactProgressBarDemo1"></div>
</div>



<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;div id="ReactProgressBarDemo1">&lt;/div>
</code></pre>
</div>



<div class="examples-code"><pre><code>
import { ProgressBar } from 'tinper-bee';

const now = 60;
function demo1() {
    return( 
    	&lt;ProgressBar now = {now} />
	)
}



ReactDOM.render(demo1(), document.getElementById('ReactProgressBarDemo1'));

</code></pre>
</div>
</div>

###  带有label的ProgressBar

设置参数label的值，按需显示必要的进度文字。

<div class="example-content"><div id="ReactProgressBarDemo2"></div>
</div>



<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;div id="ReactProgressBarDemo2">&lt;/div>
</code></pre>
</div>



<div class="examples-code"><pre><code>
import { ProgressBar } from 'tinper-bee';

function demo2() {
    return( 
    	&lt;div className="demo-progress-bar">
    		&lt;ProgressBar now = {now} label = {`${now}%`} />
    	&lt;/div>
	)
}



ReactDOM.render(demo2(), document.getElementById('ReactProgressBarDemo2'));


</code></pre>
</div>
</div>

###  条纹激活状态样式的ProgressBar

添加参数 `active` 显示条激活纹样式的进度条

<div class="example-content"><div id="ReactProgressBarDemo3"></div>
</div>



<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;div id="ReactProgressBarDemo3">&lt;/div>
</code></pre>
</div>



<div class="examples-code"><pre><code>
import { ProgressBar } from 'tinper-bee';


function demo3() {
    return( 
    	&lt;div className="demo-progress-bar">
    		&lt;ProgressBar active now = {now}/> 
    	&lt;/div>
	)
}



ReactDOM.render(demo3(), document.getElementById('ReactProgressBarDemo3'));</code></pre>
</div>
</div>

###  条纹样式的ProgressBar

添加参数 `striped` 显示条纹样式的进度条

<div class="example-content"><div id="ReactProgressBarDemo4"></div>
</div>



<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;div id="ReactProgressBarDemo4">&lt;/div>
</code></pre>
</div>



<div class="examples-code"><pre><code>
import { ProgressBar } from 'tinper-bee';


function demo4() {
    return( 
    	&lt;div className="demo-progress-bar">
    		&lt;ProgressBar striped now = {now}/> 
    	&lt;/div>
	)
}



ReactDOM.render(demo4(), document.getElementById('ReactProgressBarDemo4'));</code></pre>
</div>
</div>

###  多颜色样式的ProgressBar

设置参数 `colors` 的值显示不同颜色样式的进度条

<div class="example-content"><div id="ReactProgressBarDemo5"></div>
</div>



<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;div id="ReactProgressBarDemo5">&lt;/div>
</code></pre>
</div>



<div class="examples-code"><pre><code>
import { ProgressBar } from 'tinper-bee';


function demo5() {
    return( 
    	&lt;div className="demo-progress-bar">
    		&lt;ProgressBar colors="info" now = {20} />
			&lt;ProgressBar colors="danger" now = {50} />
			&lt;ProgressBar colors="success" now = {40} />
			&lt;ProgressBar colors="warning" now = {30} />
    	&lt;/div>
	)
}



ReactDOM.render(demo5(), document.getElementById('ReactProgressBarDemo5'));</code></pre>
</div>
</div>

###  多组 ProgressBar

以第一层<ProgressBar>包裹多个进度条片段。详细记录每个进度的状态。

<div class="example-content"><div id="ReactProgressBarDemo6"></div>
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

	var _ProgressBarDemo = __webpack_require__(1);

	var _ProgressBarDemo2 = _interopRequireDefault(_ProgressBarDemo);

	var _reactDom = __webpack_require__(6);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _src = __webpack_require__(2);

	var _src2 = _interopRequireDefault(_src);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var now = 60;
	function demo1() {
	    return React.createElement(_src2['default'], { now: now });
	}

	function demo2() {
	    return React.createElement(
	        'div',
	        { className: 'demo-progress-bar' },
	        React.createElement(_src2['default'], { now: now, label: now + '%' })
	    );
	}

	function demo3() {
	    return React.createElement(
	        'div',
	        { className: 'demo-progress-bar' },
	        React.createElement(_src2['default'], { striped: true, now: now })
	    );
	}

	function demo4() {
	    return React.createElement(
	        'div',
	        { className: 'demo-progress-bar' },
	        React.createElement(_src2['default'], { active: true, now: now })
	    );
	}

	function demo5() {
	    return React.createElement(
	        'div',
	        { className: 'demo-progress-bar' },
	        React.createElement(_src2['default'], { colors: 'info', now: 20 }),
	        React.createElement(_src2['default'], { colors: 'danger', now: 50 }),
	        React.createElement(_src2['default'], { colors: 'success', now: 40 }),
	        React.createElement(_src2['default'], { colors: 'warning', now: 30 })
	    );
	}

	function demo6() {
	    return React.createElement(
	        'div',
	        { className: 'demo-progress-bar' },
	        React.createElement(
	            _src2['default'],
	            null,
	            React.createElement(_src2['default'], { colors: 'danger', now: 10 }),
	            React.createElement(_src2['default'], { colors: 'success', now: 20 }),
	            React.createElement(_src2['default'], { colors: 'warning', now: 30 })
	        )
	    );
	}

	_reactDom2['default'].render(demo1(), document.getElementById('ReactProgressBarDemo1'));
	_reactDom2['default'].render(demo2(), document.getElementById('ReactProgressBarDemo2'));
	_reactDom2['default'].render(demo3(), document.getElementById('ReactProgressBarDemo3'));
	_reactDom2['default'].render(demo4(), document.getElementById('ReactProgressBarDemo4'));
	_reactDom2['default'].render(demo5(), document.getElementById('ReactProgressBarDemo5'));
	_reactDom2['default'].render(demo6(), document.getElementById('ReactProgressBarDemo6'));

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

	var now = 60;

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
				_react2['default'].createElement(_src2['default'], { now: now }),
				_react2['default'].createElement(_src2['default'], { now: now, label: now + '%' }),
				_react2['default'].createElement(_src2['default'], { now: now, label: now + '%', srOnly: true }),
				_react2['default'].createElement(_src2['default'], { active: true, now: 40 }),
				_react2['default'].createElement(_src2['default'], { striped: true, now: now }),
				_react2['default'].createElement(_src2['default'], { colors: 'info', now: now }),
				_react2['default'].createElement(_src2['default'], { colors: 'danger', now: 50 }),
				_react2['default'].createElement(_src2['default'], { colors: 'success', now: 40 }),
				_react2['default'].createElement(_src2['default'], { colors: 'warning', now: 30 }),
				_react2['default'].createElement(
					_src2['default'],
					null,
					_react2['default'].createElement(_src2['default'], { colors: 'danger', now: 10 }),
					_react2['default'].createElement(_src2['default'], { colors: 'success', now: 20 }),
					_react2['default'].createElement(_src2['default'], { colors: 'warning', now: 30 })
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

	var _ProgressBar = __webpack_require__(3);

	var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports['default'] = _ProgressBar2['default'];
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

	var ROUND_PRECISION = 1000;

	/**
	 * 自定义验证children是<ProgressBar>的实例.
	 * @props 实例后的propTypes
	 * @propName 本身propTypes的属性名 即 children
	 * @componentName 实例后的children名 期望是ProgressBar
	 */
	function onlyProgressBar(props, propName, componentName) {
	  var children = props[propName];
	  if (!children) {
	    return null;
	  }

	  var error = null;

	  _react2['default'].Children.forEach(children, function (child) {
	    if (error) {
	      return;
	    }

	    if (child.type === ProgressBar) {
	      // eslint-disable-line no-use-before-define
	      return;
	    }

	    var childIdentifier = _react2['default'].isValidElement(child) ? child.type.displayName || child.type.name || child.type : child;
	    error = new Error('Children of ' + componentName + ' can contain only ProgressBar ' + ('components. Found ' + childIdentifier + '.'));
	  });

	  return error;
	}

	var propTypes = {
	  min: _react.PropTypes.number,
	  now: _react.PropTypes.number,
	  max: _react.PropTypes.number,
	  label: _react.PropTypes.node,
	  srOnly: _react.PropTypes.bool,
	  striped: _react.PropTypes.bool,
	  active: _react.PropTypes.bool,
	  children: onlyProgressBar,

	  /**
	   * @private
	   */
	  isChild: _react.PropTypes.bool
	};

	var defaultProps = {
	  min: 0,
	  max: 100,
	  active: false,
	  isChild: false,
	  srOnly: false,
	  striped: false
	};

	/**
	 * 计算实际显示比例 
	 * @now 显示的总数值
	 * @min 最小数值
	 * @max 最大数值
	 */
	function getPercentage(now, min, max) {
	  var percentage = (now - min) / (max - min) * 100;
	  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
	}

	var clsPrefix = 'u-progress-bar';

	var ProgressBar = function (_React$Component) {
	  _inherits(ProgressBar, _React$Component);

	  function ProgressBar() {
	    _classCallCheck(this, ProgressBar);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  ProgressBar.prototype.renderProgressBar = function renderProgressBar(_ref) {
	    var min = _ref.min;
	    var now = _ref.now;
	    var max = _ref.max;
	    var label = _ref.label;
	    var srOnly = _ref.srOnly;
	    var striped = _ref.striped;
	    var active = _ref.active;
	    var colors = _ref.colors;
	    var className = _ref.className;
	    var style = _ref.style;

	    var others = _objectWithoutProperties(_ref, ['min', 'now', 'max', 'label', 'srOnly', 'striped', 'active', 'colors', 'className', 'style']);

	    var classes = {
	      active: active,
	      'u-progress-bar': true,
	      'u-progress-bar-striped': active || striped
	    };

	    if (colors) {
	      classes[clsPrefix + '-' + colors] = true;
	    }
	    //返回不敢wrapper的progressbar
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, others, {
	        role: 'progressbar',
	        className: (0, _classnames2['default'])(className, classes),
	        style: _extends({ width: getPercentage(now, min, max) + '%' }, style),
	        'u-valuenow': now,
	        'u-valuemin': min,
	        'u-valuemax': max
	      }),
	      srOnly ? _react2['default'].createElement(
	        'span',
	        { className: 'sr-only' },
	        label
	      ) : label
	    );
	  };

	  ProgressBar.prototype.render = function render() {
	    //先处理以组ProgressBar形式使用情况
	    var _props = this.props;
	    var isChild = _props.isChild;

	    var props = _objectWithoutProperties(_props, ['isChild']);

	    // 判断isChild是否为true,如果是true,直接渲染成bar


	    if (isChild) {
	      return this.renderProgressBar(props);
	    }

	    var min = props.min;
	    var now = props.now;
	    var max = props.max;
	    var label = props.label;
	    var srOnly = props.srOnly;
	    var striped = props.striped;
	    var active = props.active;
	    var colors = props.colors;
	    var className = props.className;
	    var style = props.style;
	    var children = props.children;

	    var wrapperProps = _objectWithoutProperties(props, ['min', 'now', 'max', 'label', 'srOnly', 'striped', 'active', 'colors', 'className', 'style', 'children']);

	    /**
	    * 如果是单独直接用<ProgressBar /> 走children判断为false语句。
	    * 如果以组的形式使用<ProgressBar><ProgressBar now={10} /><ProgressBar now={20}/></ProgressBar> 走判断语句为true，
	    * 将children分别加上isChild=true的属性
	    */


	    return _react2['default'].createElement(
	      'div',
	      _extends({}, wrapperProps, {
	        className: (0, _classnames2['default'])(className, 'u-progress')
	      }),
	      children ? _react2['default'].Children.map(children, function (child) {
	        return (0, _react.cloneElement)(child, { isChild: true });
	      }) : this.renderProgressBar({
	        min: min, now: now, max: max, label: label, srOnly: srOnly, striped: striped, active: active, colors: colors, className: className, style: style
	      })
	    );
	  };

	  return ProgressBar;
	}(_react2['default'].Component);

	ProgressBar.propTypes = propTypes;
	ProgressBar.defaultProps = defaultProps;

	exports['default'] = ProgressBar;
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
&lt;div id="ReactProgressBarDemo6">&lt;/div>
</code></pre>
</div>



<div class="examples-code"><pre><code>
import { ProgressBar } from 'tinper-bee';


function demo6() {
    return( 
    	&lt;div className="demo-progress-bar">
    		&lt;ProgressBar>
				&lt;ProgressBar colors="success" now = {10} />
				&lt;ProgressBar striped now = {20} />
				&lt;ProgressBar active colors="warning" now = {30} />
			&lt;/ProgressBar>
    	&lt;/div>
	)
}



ReactDOM.render(demo6(), document.getElementById('ReactProgressBarDemo6'));</code></pre>
</div>
</div>