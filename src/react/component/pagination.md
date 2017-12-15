# bee-pagination

用于内容过多，分页显示内容

Pagination组件内部集成了子组件PaginationButton.PaginationButton并不暴露给用户。


## API

|参数|说明|类型|默认值|
|---|----|---|------|
|items|总页数|number|''|
|activePage|哪一页是激活状态|number|''|
|onSelect|切换页的方法|func |''|
|maxButton|显示最多页数按钮|number|''|
|pre|显示上一页按钮|bool|false|
|next|显示下一页按钮|bool|''|
|first|显示第一页按钮|bool|false|
|last|显示最后一页按钮|bool|last|
|ellipsis|显示省略按钮|bool|false|
|boundaryLinks|显示边界按钮|bool|false|
|gap|按钮之间有间隔|bool|false|
|noBorder|不显示按钮边框|bool|false|
|size|按钮大小oneOf:lg,sm,''|string|''|


## 案例

### 基础Pagination

所有页均显示出来，点击切换目标页

<div class="example-content"><div id="ReactPaginationDemo1"></div>
</div>



<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;div id="ReactPaginationDemo1">&lt;/div>
</code></pre>
</div>



<div class="examples-code"><pre><code>
import { Pagination } from 'tinper-bee';

class Demo1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activePage:1
		}
	}
	handleSelect(eventKey) {
	    this.setState({
	      activePage: eventKey
	    });
	}
	render() {
	    return (
	      &lt;div>
	        &lt;Pagination
		    	size="lg"
		        items={20}
		        activePage={this.state.activePage}
		        onSelect={this.handleSelect.bind(this)} />
		    &lt;Pagination
		        items={20}
		        activePage={this.state.activePage}
		        onSelect={this.handleSelect.bind(this)} />
		    &lt;Pagination
		    	size="sm"
		        items={20}
		        activePage={this.state.activePage}
		        onSelect={this.handleSelect.bind(this)} />
	      &lt;/div>
	    );
	}
}

ReactDOM.render(&lt;Demo1/>, document.getElementById('ReactPaginationDemo1'));

</code></pre>
</div>
</div>

### 不同按钮大小的Pagination

size:lg||sm,通过设置size的值修改按钮大小，不设置为默认大小

<div class="example-content"><div id="ReactPaginationDemo2"></div>
</div>



<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;div id="ReactPaginationDemo2">&lt;/div>
</code></pre>
</div>



<div class="examples-code"><pre><code>
import { Pagination } from 'tinper-bee';

class Demo2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activePage:1
		}
	}
	handleSelect(eventKey) {
	    this.setState({
	      activePage: eventKey
	    });
	}
	render() {
	    return (
	      &lt;div>
	        &lt;Pagination
		    	noBorder
		        items={20}
		        activePage={this.state.activePage}
		        onSelect={this.handleSelect.bind(this)} />
		    &lt;Pagination
		    	gap
		        items={20}
		        activePage={this.state.activePage}
		        onSelect={this.handleSelect.bind(this)} />
	      &lt;/div>
	    );
	}
}

ReactDOM.render(&lt;Demo2/>, document.getElementById('ReactPaginationDemo2'));

</code></pre>
</div>
</div>

###  显示按钮数的Pagination

maxButtons根据需要设置需要显示的按钮数

<div class="example-content"><div id="ReactPaginationDemo3"></div>
</div>



<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;div id="ReactPaginationDemo3">&lt;/div>
</code></pre>
</div>



<div class="examples-code"><pre><code>
import { Pagination } from 'tinper-bee';


class Demo3 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activePage:1
		}
	}
	handleSelect(eventKey) {
	    this.setState({
	      activePage: eventKey
	    });
	}
	render() {
	    return (
	      &lt;div>
	        &lt;Pagination
		        items={20}
		        maxButtons={5}
		        activePage={this.state.activePage}
		        onSelect={this.handleSelect.bind(this)} />
	      &lt;/div>
	    );
	}
}


ReactDOM.render(&lt;Demo3 />, document.getElementById('ReactPaginationDemo3'));


</code></pre>
</div>
</div>

###  带边界页码按钮的Pagination

带上参数boundaryLinks，会显示第一页和最后一页的页码按钮

<div class="example-content"><div id="ReactPaginationDemo4"></div>
</div>



<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;div id="ReactPaginationDemo4">&lt;/div>
</code></pre>
</div>



<div class="examples-code"><pre><code>
import { Pagination } from 'tinper-bee';


class Demo4 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activePage:1
		}
	}
	handleSelect(eventKey) {
	    this.setState({
	      activePage: eventKey
	    });
	}
	render() {
	    return (
	      &lt;div>
	        &lt;Pagination
	        	boundaryLinks
		        items={20}
		        maxButtons={5}
		        activePage={this.state.activePage}
		        onSelect={this.handleSelect.bind(this)} />
	      &lt;/div>
	    );
	}
}


ReactDOM.render(&lt;Demo4 />, document.getElementById('ReactPaginationDemo4'));</code></pre>
</div>
</div>

###  带上一页下一页的Pagination

带上参数pre和next，会显示上一页和下一页的页码按钮

<div class="example-content"><div id="ReactAlertDemo5"></div>
</div>



<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;div id="ReactAlertDemo5">&lt;/div>
</code></pre>
</div>



<div class="examples-code"><pre><code>
import { Pagination } from 'tinper-bee';


class Demo5 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activePage:1
		}
	}
	handleSelect(eventKey) {
	    this.setState({
	      activePage: eventKey
	    });
	}
	render() {
	    return (
	      &lt;div>
	        &lt;Pagination
	        	prev
	        	next
	        	boundaryLinks
		        items={20}
		        maxButtons={5}
		        activePage={this.state.activePage}
		        onSelect={this.handleSelect.bind(this)} />
	      &lt;/div>
	    );
	}
}


ReactDOM.render(&lt;Demo5 />, document.getElementById('ReactPaginationDemo5'));</code></pre>
</div>
</div>

###  带直接跳转到第一页与最后一页的Pagination

带上参数first和last，会显示直接跳转到第一页和最后一页的页码按钮

<div class="example-content"><div id="ReactPaginationDemo6"></div>
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

	var _PaginationDemo = __webpack_require__(1);

	var _PaginationDemo2 = _interopRequireDefault(_PaginationDemo);

	var _reactDom = __webpack_require__(7);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _src = __webpack_require__(2);

	var _src2 = _interopRequireDefault(_src);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var Demo1 = function (_React$Component) {
		_inherits(Demo1, _React$Component);

		function Demo1(props) {
			_classCallCheck(this, Demo1);

			var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

			_this.state = {
				activePage: 1
			};
			return _this;
		}

		Demo1.prototype.handleSelect = function handleSelect(eventKey) {
			this.setState({
				activePage: eventKey
			});
		};

		Demo1.prototype.render = function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(_src2['default'], {
					size: 'lg',
					items: 20,
					activePage: this.state.activePage,
					onSelect: this.handleSelect.bind(this) }),
				React.createElement(_src2['default'], {
					items: 20,
					activePage: this.state.activePage,
					onSelect: this.handleSelect.bind(this) }),
				React.createElement(_src2['default'], {
					size: 'sm',
					items: 20,
					activePage: this.state.activePage,
					onSelect: this.handleSelect.bind(this) })
			);
		};

		return Demo1;
	}(React.Component);

	var Demo2 = function (_React$Component2) {
		_inherits(Demo2, _React$Component2);

		function Demo2(props) {
			_classCallCheck(this, Demo2);

			var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this, props));

			_this2.state = {
				activePage: 1
			};
			return _this2;
		}

		Demo2.prototype.handleSelect = function handleSelect(eventKey) {
			this.setState({
				activePage: eventKey
			});
		};

		Demo2.prototype.render = function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(_src2['default'], {
					noBorder: true,
					items: 20,
					activePage: this.state.activePage,
					onSelect: this.handleSelect.bind(this) }),
				React.createElement(_src2['default'], {
					gap: true,
					items: 20,
					activePage: this.state.activePage,
					onSelect: this.handleSelect.bind(this) })
			);
		};

		return Demo2;
	}(React.Component);

	var Demo3 = function (_React$Component3) {
		_inherits(Demo3, _React$Component3);

		function Demo3(props) {
			_classCallCheck(this, Demo3);

			var _this3 = _possibleConstructorReturn(this, _React$Component3.call(this, props));

			_this3.state = {
				activePage: 1
			};
			return _this3;
		}

		Demo3.prototype.handleSelect = function handleSelect(eventKey) {
			this.setState({
				activePage: eventKey
			});
		};

		Demo3.prototype.render = function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(_src2['default'], {
					items: 20,
					maxButtons: 5,
					activePage: this.state.activePage,
					onSelect: this.handleSelect.bind(this) })
			);
		};

		return Demo3;
	}(React.Component);

	var Demo4 = function (_React$Component4) {
		_inherits(Demo4, _React$Component4);

		function Demo4(props) {
			_classCallCheck(this, Demo4);

			var _this4 = _possibleConstructorReturn(this, _React$Component4.call(this, props));

			_this4.state = {
				activePage: 1
			};
			return _this4;
		}

		Demo4.prototype.handleSelect = function handleSelect(eventKey) {
			this.setState({
				activePage: eventKey
			});
		};

		Demo4.prototype.render = function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(_src2['default'], {
					boundaryLinks: true,
					items: 20,
					maxButtons: 5,
					activePage: this.state.activePage,
					onSelect: this.handleSelect.bind(this) })
			);
		};

		return Demo4;
	}(React.Component);

	var Demo5 = function (_React$Component5) {
		_inherits(Demo5, _React$Component5);

		function Demo5(props) {
			_classCallCheck(this, Demo5);

			var _this5 = _possibleConstructorReturn(this, _React$Component5.call(this, props));

			_this5.state = {
				activePage: 1
			};
			return _this5;
		}

		Demo5.prototype.handleSelect = function handleSelect(eventKey) {
			this.setState({
				activePage: eventKey
			});
		};

		Demo5.prototype.render = function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(_src2['default'], {
					prev: true,
					next: true,
					boundaryLinks: true,
					items: 20,
					maxButtons: 5,
					activePage: this.state.activePage,
					onSelect: this.handleSelect.bind(this) })
			);
		};

		return Demo5;
	}(React.Component);

	var Demo6 = function (_React$Component6) {
		_inherits(Demo6, _React$Component6);

		function Demo6(props) {
			_classCallCheck(this, Demo6);

			var _this6 = _possibleConstructorReturn(this, _React$Component6.call(this, props));

			_this6.state = {
				activePage: 1
			};
			return _this6;
		}

		Demo6.prototype.handleSelect = function handleSelect(eventKey) {
			this.setState({
				activePage: eventKey
			});
		};

		Demo6.prototype.render = function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(_src2['default'], {
					first: true,
					last: true,
					prev: true,
					next: true,
					boundaryLinks: true,
					items: 20,
					maxButtons: 5,
					activePage: this.state.activePage,
					onSelect: this.handleSelect.bind(this) })
			);
		};

		return Demo6;
	}(React.Component);

	_reactDom2['default'].render(React.createElement(Demo1, null), document.getElementById('ReactPaginationDemo1'));
	_reactDom2['default'].render(React.createElement(Demo2, null), document.getElementById('ReactPaginationDemo2'));
	_reactDom2['default'].render(React.createElement(Demo3, null), document.getElementById('ReactPaginationDemo3'));
	_reactDom2['default'].render(React.createElement(Demo4, null), document.getElementById('ReactPaginationDemo4'));
	_reactDom2['default'].render(React.createElement(Demo5, null), document.getElementById('ReactPaginationDemo5'));
	_reactDom2['default'].render(React.createElement(Demo6, null), document.getElementById('ReactPaginationDemo6'));

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

	var _reactDom = __webpack_require__(7);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var Demo = function (_Component) {
		_inherits(Demo, _Component);

		function Demo(props) {
			_classCallCheck(this, Demo);

			var _this = _possibleConstructorReturn(this, _Component.call(this, props));

			_this.state = {
				activePage: 1
			};
			return _this;
		}

		Demo.prototype.handleSelect = function handleSelect(eventKey) {
			this.setState({
				activePage: eventKey
			});
		};

		Demo.prototype.render = function render() {
			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(_src2['default'], {
					prev: true,
					next: true,
					first: true,
					last: true,
					ellipsis: true,
					boundaryLinks: true,
					items: 20,
					maxButtons: 5,
					activePage: this.state.activePage,
					onSelect: this.handleSelect.bind(this) })
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

	var _Pagination = __webpack_require__(3);

	var _Pagination2 = _interopRequireDefault(_Pagination);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports['default'] = _Pagination2['default'];
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

	var _PaginationButton = __webpack_require__(6);

	var _PaginationButton2 = _interopRequireDefault(_PaginationButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  /**
	   * 当前激活状态页
	   */
	  activePage: _react.PropTypes.number,
	  /**
	   * 总页数
	   */
	  items: _react.PropTypes.number,
	  /**
	   * 显示按钮从1到maxButton的按钮数
	   */
	  maxButtons: _react.PropTypes.number,

	  /**
	   * 当为true,不管切换到多少页都显示第一页和最后一页的按钮
	   */
	  boundaryLinks: _react.PropTypes.bool,

	  /**
	   * 当为true,显示省略号，否则
	   * 
	   */
	  ellipsis: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.node]),

	  /**
	   *  当为true,显示点击到第一页的按钮
	   */
	  first: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.node]),

	  /**
	   *  当为true,显示点击到最后一页的按钮
	   */
	  last: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.node]),

	  /**
	   * 当为true,显示前一页按钮
	   */
	  prev: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.node]),

	  /**
	   * 当为true,显示下一页按钮
	   */
	  next: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.node]),

	  /**
	   * 暴露给用户的切换页的方法
	   */
	  onSelect: _react.PropTypes.func,

	  /**
	   * You can use a custom element for the buttons
	   */
	  buttonComponentClass: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string])
	};

	var defaultProps = {
	  activePage: 1,
	  items: 1,
	  maxButtons: 0,
	  first: false,
	  last: false,
	  prev: false,
	  next: false,
	  ellipsis: true,
	  boundaryLinks: false,
	  clsPrefix: 'u-pagination',
	  gap: false,
	  noBorder: false
	};

	var Pagination = function (_React$Component) {
	  _inherits(Pagination, _React$Component);

	  function Pagination() {
	    _classCallCheck(this, Pagination);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  Pagination.prototype.renderPageButtons = function renderPageButtons(activePage, items, maxButtons, boundaryLinks, ellipsis, buttonProps) {
	    var pageButtons = [];

	    var startPage = void 0;
	    var endPage = void 0;
	    var hasHiddenPagesAfter = void 0;

	    if (maxButtons) {
	      //根据max很当前activepage计算出应隐藏activeButton之前的页数
	      var hiddenPagesBefore = activePage - parseInt(maxButtons / 2, 10);
	      startPage = hiddenPagesBefore > 2 ? hiddenPagesBefore : 1;
	      //计算出是否存在隐藏activeButton之后的页数
	      hasHiddenPagesAfter = startPage + maxButtons < items;

	      if (!hasHiddenPagesAfter) {
	        endPage = items;
	        startPage = items - maxButtons + 1;
	        if (startPage < 1) {
	          startPage = 1;
	        }
	      } else {
	        endPage = startPage + maxButtons - 1;
	      }
	    } else {
	      startPage = 1;
	      endPage = items;
	    }
	    //将所有的button循环渲染出来
	    for (var pagenumber = startPage; pagenumber <= endPage; pagenumber++) {
	      pageButtons.push(_react2['default'].createElement(
	        _PaginationButton2['default'],
	        _extends({}, buttonProps, {
	          key: pagenumber,
	          eventKey: pagenumber,
	          active: pagenumber === activePage
	        }),
	        pagenumber
	      ));
	    }
	    //如果boundaryLinks和eclipsis且startPage!=1 需要加上before More Button
	    if (boundaryLinks && ellipsis && startPage !== 1) {
	      pageButtons.unshift(_react2['default'].createElement(
	        _PaginationButton2['default'],
	        {
	          key: 'ellipsisFirst',
	          disabled: true,
	          componentClass: buttonProps.componentClass
	        },
	        _react2['default'].createElement(
	          'span',
	          { 'aria-label': 'More' },
	          ellipsis === true ? '\u2026' : ellipsis
	        )
	      ));
	      //加上最小边界 Button
	      pageButtons.unshift(_react2['default'].createElement(
	        _PaginationButton2['default'],
	        _extends({}, buttonProps, {
	          key: 1,
	          eventKey: 1,
	          active: false
	        }),
	        '1'
	      ));
	    }
	    //如果maxButtons和eclipsis且hasHiddenPagesAfter 需加上after More Button
	    if (maxButtons && hasHiddenPagesAfter && ellipsis) {
	      pageButtons.push(_react2['default'].createElement(
	        _PaginationButton2['default'],
	        {
	          key: 'ellipsis',
	          disabled: true,
	          componentClass: buttonProps.componentClass
	        },
	        _react2['default'].createElement(
	          'span',
	          { 'aria-label': 'More' },
	          ellipsis === true ? '\u2026' : ellipsis
	        )
	      ));
	      //如果最后一个页数按钮不等于总页数 且 边界为true 需加上最大边界按钮
	      if (boundaryLinks && endPage !== items) {
	        pageButtons.push(_react2['default'].createElement(
	          _PaginationButton2['default'],
	          _extends({}, buttonProps, {
	            key: items,
	            eventKey: items,
	            active: false
	          }),
	          items
	        ));
	      }
	    }

	    return pageButtons;
	  };

	  Pagination.prototype.render = function render() {
	    var _props = this.props;
	    var activePage = _props.activePage;
	    var items = _props.items;
	    var maxButtons = _props.maxButtons;
	    var boundaryLinks = _props.boundaryLinks;
	    var ellipsis = _props.ellipsis;
	    var first = _props.first;
	    var last = _props.last;
	    var prev = _props.prev;
	    var next = _props.next;
	    var onSelect = _props.onSelect;
	    var buttonComponentClass = _props.buttonComponentClass;
	    var noBorder = _props.noBorder;
	    var className = _props.className;
	    var clsPrefix = _props.clsPrefix;
	    var size = _props.size;
	    var gap = _props.gap;

	    var others = _objectWithoutProperties(_props, ['activePage', 'items', 'maxButtons', 'boundaryLinks', 'ellipsis', 'first', 'last', 'prev', 'next', 'onSelect', 'buttonComponentClass', 'noBorder', 'className', 'clsPrefix', 'size', 'gap']);

	    var classes = {};
	    if (noBorder) {
	      classes[clsPrefix + '-no-border'] = true;
	    }
	    if (size) {
	      classes[clsPrefix + '-' + size] = true;
	    }
	    if (gap) {
	      classes[clsPrefix + '-gap'] = true;
	    }
	    var classNames = (0, _classnames2['default'])(clsPrefix, classes);

	    /**
	     *  页按钮属性
	     *  onSelect:暴露在外层交互动作，也是与父组件Pagination的交流接口
	     *  componentClass: 用户定义的按钮dom元素类型
	     */
	    var buttonProps = {
	      onSelect: onSelect,
	      componentClass: buttonComponentClass
	    };

	    return _react2['default'].createElement(
	      'ul',
	      _extends({}, others, {
	        className: (0, _classnames2['default'])(className, classNames)
	      }),
	      first && _react2['default'].createElement(
	        _PaginationButton2['default'],
	        _extends({}, buttonProps, {
	          eventKey: 1,
	          disabled: activePage === 1
	        }),
	        _react2['default'].createElement(
	          'span',
	          { 'aria-label': 'First' },
	          first === true ? '\xAB' : first
	        )
	      ),
	      prev && _react2['default'].createElement(
	        _PaginationButton2['default'],
	        _extends({}, buttonProps, {
	          eventKey: activePage - 1,
	          disabled: activePage === 1
	        }),
	        _react2['default'].createElement(
	          'span',
	          { 'aria-label': 'Previous' },
	          prev === true ? '\u2039' : prev
	        )
	      ),
	      this.renderPageButtons(activePage, items, maxButtons, boundaryLinks, ellipsis, buttonProps),
	      next && _react2['default'].createElement(
	        _PaginationButton2['default'],
	        _extends({}, buttonProps, {
	          eventKey: activePage + 1,
	          disabled: activePage >= items
	        }),
	        _react2['default'].createElement(
	          'span',
	          { 'aria-label': 'Next' },
	          next === true ? '\u203A' : next
	        )
	      ),
	      last && _react2['default'].createElement(
	        _PaginationButton2['default'],
	        _extends({}, buttonProps, {
	          eventKey: items,
	          disabled: activePage >= items
	        }),
	        _react2['default'].createElement(
	          'span',
	          { 'aria-label': 'Last' },
	          last === true ? '\xBB' : last
	        )
	      )
	    );
	  };

	  return Pagination;
	}(_react2['default'].Component);

	Pagination.propTypes = propTypes;
	Pagination.defaultProps = defaultProps;

	exports['default'] = Pagination;
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

	// TODO: This should be `<Pagination.Item>`.

	// TODO: This should use `componentClass` like other components.

	var propTypes = {
	  className: _react.PropTypes.string,
	  eventKey: _react.PropTypes.any,
	  onSelect: _react.PropTypes.func,
	  disabled: _react.PropTypes.bool,
	  active: _react.PropTypes.bool,
	  onClick: _react.PropTypes.func
	};

	var defaultProps = {
	  componentClass: 'a',
	  active: false,
	  disabled: false
	};

	var PaginationButton = function (_React$Component) {
	  _inherits(PaginationButton, _React$Component);

	  function PaginationButton(props, context) {
	    _classCallCheck(this, PaginationButton);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }

	  PaginationButton.prototype.handleClick = function handleClick(event) {
	    var _props = this.props;
	    var disabled = _props.disabled;
	    var onSelect = _props.onSelect;
	    var eventKey = _props.eventKey;


	    if (disabled) {
	      return;
	    }

	    if (onSelect) {
	      onSelect(eventKey, event);
	    }
	  };

	  PaginationButton.prototype.render = function render() {
	    var _props2 = this.props;
	    var Component = _props2.componentClass;
	    var active = _props2.active;
	    var disabled = _props2.disabled;
	    var onClick = _props2.onClick;
	    var className = _props2.className;
	    var style = _props2.style;

	    var props = _objectWithoutProperties(_props2, ['componentClass', 'active', 'disabled', 'onClick', 'className', 'style']);

	    delete props.onSelect;

	    return _react2['default'].createElement(
	      'li',
	      {
	        className: (0, _classnames2['default'])(className, { active: active, disabled: disabled }),
	        style: style
	      },
	      _react2['default'].createElement(Component, _extends({ href: '#'
	      }, props, {
	        disabled: disabled,
	        onClick: this.handleClick
	      }))
	    );
	  };

	  return PaginationButton;
	}(_react2['default'].Component);

	PaginationButton.propTypes = propTypes;
	PaginationButton.defaultProps = defaultProps;

	exports['default'] = PaginationButton;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ }
/******/ ]);
</script>
<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;div id="ReactPaginationDemo6">&lt;/div>
</code></pre>
</div>



<div class="examples-code"><pre><code>
import { Pagination } from 'tinper-bee';


class Demo6 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activePage:1
		}
	}
	handleSelect(eventKey) {
	    this.setState({
	      activePage: eventKey
	    });
	}
	render() {
	    return (
	      &lt;div>
	        &lt;Pagination
	        	first
	        	last
	        	prev
	        	next
		        items={20}
		        maxButtons={5}
		        activePage={this.state.activePage}
		        onSelect={this.handleSelect.bind(this)} />
	      &lt;/div>
	    );
	}
}


ReactDOM.render(&lt;Demo6 />, document.getElementById('ReactPaginationDemo6'));</code></pre>
</div>
</div>