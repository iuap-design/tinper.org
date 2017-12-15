# 按钮 bee-button

按钮可用于一个交互操作。


## API

| 参数        |                    说明                    |   类型   |    默认值 |
| :-------- | :--------------------------------------: | :----: | -----: |
| size      |      按钮大小(`large` `medium` `small`)      | string | medium |
| type      |         类型(`primary` `success`)          | string |     '' |
| shape     |          形状(`round` `squared`)           | string |     '' |
| disabled  |    是否禁用(`disabled` 或 `true` `false`)     | string |  false |
| className |                增加额外的class                | string |     '' |
| htmlType  | html dom 的 type 属性(`submit` `button` `reset`) | string | button |
| style     |                 style 属性                 | object |     '' |


### 不同大小的按钮

<div class="example-content"><div id="beeButtonDemo1"></div>
</div>



<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;div id="beeButtonDemo1">&lt;/div>
</code></pre>
</div>



<div class="examples-code"><pre><code>
import { Button } from 'tinper-bee';
function demo1 () {
    return (
        &lt;div className="demo-button">
            &lt;Button size="sm" type="primary">小按钮&lt;/Button>
            &lt;Button type="primary">默认&lt;/Button>
            &lt;Button size="lg" type="primary">大按钮&lt;/Button>
            &lt;Button size="xg" type="primary">巨大按钮&lt;/Button>
    &lt;/div>
    );
}


ReactDOM.render(demo1(), document.getElementById('neouiReactDemo1'));
</code></pre>
</div>
</div>

### 不同颜色的按钮

<div class="example-content"><div id="beeButtonDemo2"></div>
</div>



<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;div id="beeButtonDemo2">&lt;/div>
</code></pre>
</div>



<div class="examples-code"><pre><code>
import { Button } from 'tinper-bee';
function demo2 () {
    return (
        &lt;div className="demo-button">
                &lt;Button type="primary">default 主色按钮&lt;/Button>
                &lt;Button type="accent">辅色按钮&lt;/Button>
                &lt;Button disabled>不可点击&lt;/Button>
                &lt;Button type="success">辅色按钮&lt;/Button>
                &lt;Button type="info">辅色按钮&lt;/Button>
                &lt;Button type="warning">辅色按钮&lt;/Button>
                &lt;Button type="danger">辅色按钮&lt;/Button>
            &lt;/div>
    );
}


ReactDOM.render(demo2(), document.getElementById('neouiReactDemo2'));
</code></pre>
</div>
</div>

### 不同形状的按钮

<div class="example-content"><div id="beeButtonDemo3"></div>
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

	var _reactDom = __webpack_require__(4);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function demo1() {
	    return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	            _src2['default'],
	            { size: 'sm', type: 'primary' },
	            '\u5C0F\u6309\u94AE'
	        ),
	        _react2['default'].createElement(
	            _src2['default'],
	            { type: 'primary' },
	            '\u9ED8\u8BA4'
	        ),
	        _react2['default'].createElement(
	            _src2['default'],
	            { size: 'lg', type: 'primary' },
	            '\u5927\u6309\u94AE'
	        ),
	        _react2['default'].createElement(
	            _src2['default'],
	            { size: 'xg', type: 'primary' },
	            '\u5DE8\u5927\u6309\u94AE'
	        )
	    );
	}

	function demo2() {
	    return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	            _src2['default'],
	            { type: 'primary' },
	            'default \u4E3B\u8272\u6309\u94AE'
	        ),
	        _react2['default'].createElement(
	            _src2['default'],
	            { type: 'accent' },
	            '\u8F85\u8272\u6309\u94AE'
	        ),
	        _react2['default'].createElement(
	            _src2['default'],
	            { disabled: true },
	            '\u4E0D\u53EF\u70B9\u51FB'
	        ),
	        _react2['default'].createElement(
	            _src2['default'],
	            { type: 'success' },
	            '\u8F85\u8272\u6309\u94AE'
	        ),
	        _react2['default'].createElement(
	            _src2['default'],
	            { type: 'info' },
	            '\u8F85\u8272\u6309\u94AE'
	        ),
	        _react2['default'].createElement(
	            _src2['default'],
	            { type: 'warning' },
	            '\u8F85\u8272\u6309\u94AE'
	        ),
	        _react2['default'].createElement(
	            _src2['default'],
	            { type: 'danger' },
	            '\u8F85\u8272\u6309\u94AE'
	        )
	    );
	}

	function demo3() {
	    return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	            _src2['default'],
	            { shape: 'block', type: 'primary' },
	            '\u5757\u72B6\u6309\u94AE'
	        ),
	        _react2['default'].createElement(
	            _src2['default'],
	            { shape: 'round', type: 'primary' },
	            '\u5706\u5F62\u8FB9\u6309\u94AE'
	        ),
	        _react2['default'].createElement(
	            _src2['default'],
	            { shape: 'squared', type: 'primary' },
	            '\u65B9\u5F62\u6309\u94AE'
	        ),
	        _react2['default'].createElement(
	            _src2['default'],
	            { shape: 'floating', type: 'primary' },
	            '\u5706\u5F62\u6309\u94AE'
	        ),
	        _react2['default'].createElement(
	            _src2['default'],
	            { shape: 'pillRight', type: 'primary' },
	            '\u53F3\u534A\u5706\u6309\u94AE'
	        ),
	        _react2['default'].createElement(
	            _src2['default'],
	            { shape: 'pillLeft', type: 'primary' },
	            '\u5DE6\u534A\u5706\u6309\u94AE'
	        )
	    );
	}

	_reactDom2['default'].render(demo1(), document.getElementById('beeButtonDemo1'));
	_reactDom2['default'].render(demo2(), document.getElementById('beeButtonDemo2'));
	_reactDom2['default'].render(demo3(), document.getElementById('beeButtonDemo3'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Button = __webpack_require__(2);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports['default'] = _Button2['default'];
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

	var _reactDom = __webpack_require__(4);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

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
	    children: _react.PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
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

	var Button = function (_Component) {
	    _inherits(Button, _Component);

	    function Button(props) {
	        _classCallCheck(this, Button);

	        return _possibleConstructorReturn(this, _Component.call(this, props));
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
	        var classNames = (0, _classnames2['default'])(clsPrefix, clsObj);
	        return _react2['default'].createElement(
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
	}(_react.Component);

	Button.propTypes = propTypes;
	Button.defaultProps = defaultProps;

	exports['default'] = Button;
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
&lt;div id="beeButtonDemo3">&lt;/div>
</code></pre>
</div>



<div class="examples-code"><pre><code>
import { Button } from 'tinper-bee';
function demo3 () {
    return (
        &lt;div className="demo-button">
            &lt;Button shape="block" type="primary">块状按钮&lt;/Button>
            &lt;Button shape="round" type="primary">圆形边按钮&lt;/Button>
            &lt;Button shape="squared" type="primary">方形按钮&lt;/Button>
            &lt;Button shape="floating" type="primary">圆形按钮&lt;/Button>
            &lt;Button shape="pillRight" type="primary">右半圆按钮&lt;/Button>
            &lt;Button shape="pillLeft" type="primary">左半圆按钮&lt;/Button>
        &lt;/div>
    );
}


ReactDOM.render(demo1(), document.getElementById('neouiReactDemo3'));
</code></pre>
</div>
</div>