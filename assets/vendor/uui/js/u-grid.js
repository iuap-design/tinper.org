/** 
 * neoui-kero v3.2.1
 * neoui kero
 * author : [object Object]
 * homepage : https://github.com/iuap-design/neoui-kero#readme
 * bugs : https://github.com/iuap-design/neoui-kero/issues
 **/ 
/*!
 * tinper-neoui-grid v3.2.1
 * grid
 * author : yonyou FED
 * homepage : https://github.com/iuap-design/tinper-neoui-grid#readme
 * bugs : https://github.com/iuap-design/tinper-neoui-grid/issues
 */
!function(modules) {
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    var installedModules = {};
    __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.i = function(value) {
        return value;
    }, __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            configurable: !1,
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module.default;
        } : function() {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 20);
}([ function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports, __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports, _gridBrowser) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.eventFunObj = void 0;
        var initEventFun = function() {
            var oThis = this;
            $("#" + this.options.id).on("mousedown", function(e) {
                $(e.target).closest("#" + oThis.options.id + "_header").length > 0 ? (oThis.mouseDownX = e.clientX, 
                oThis.mouseDownY = e.clientY) : $(e.target).closest("#" + oThis.options.id + "_content").length;
            });
        }, initGridEventFun = function() {
            var oThis = this;
            this.initContentDivEventFun(), $("#" + this.options.id + "_header_multi_input").on("click", function(e) {
                oThis.hasChecked ? oThis.setAllRowUnSelect() : oThis.setAllRowSelect();
            });
        }, initContentDivEventFun = function() {
            var oThis = this;
            $("#" + oThis.options.id + "_content .u-grid-content-left").on("click", function(e) {
                var $input = $(e.target).closest(".u-grid-checkbox-outline");
                if ($input.length > 0) {
                    var $div = $($input.parent()), index = $(".u-grid-content-multiSelect", $div.parent()).index($div);
                    $input.hasClass("is-checked") ? oThis.setRowUnselect(index) : oThis.setRowSelect(index);
                }
            }), $("#" + this.options.id + "_content_div").on("scroll", function(e) {
                var sumRowH = 0;
                oThis.scrollLeft = this.scrollLeft, oThis.scrollTop = this.scrollTop, "right" == oThis.options.fixedFloat ? $("#" + oThis.options.id + "_header_table").css("left", oThis.leftW - oThis.scrollLeft + "px") : $("#" + oThis.options.id + "_header_table").css("left", oThis.leftW - oThis.scrollLeft + oThis.fixedWidth + "px"), 
                $("#" + oThis.options.id + "_noRowsShow").css("left", oThis.scrollLeft + "px"), 
                $("#" + oThis.options.id + "_edit_form").css("left", oThis.scrollLeft + "px"), oThis.options.showSumRow && oThis.options.sumRowFirst && (sumRowH = 44, 
                oThis.options.sumRowHeight && (sumRowH = oThis.options.sumRowHeight)), $("#" + oThis.options.id + "_content_multiSelect").css("top", -oThis.scrollTop + sumRowH + "px"), 
                $("#" + oThis.options.id + "_content_numCol").css("top", -oThis.scrollTop + sumRowH + "px"), 
                $("#" + oThis.options.id + "_content_fixed_div").css("top", -oThis.scrollTop + "px"), 
                _gridBrowser.gridBrowser.isIE10 || _gridBrowser.gridBrowser.isIPAD || oThis.editClose();
            }), $("#" + this.options.id + "_content_tbody").on("click", function(e) {
                "function" == typeof oThis.options.onDblClickFun ? oThis.isDblEvent("tbodyClick", oThis.dblClickFun, e, oThis.clickFun, e) : oThis.clickFun(e);
            }), $("#" + this.options.id + "_content_fixed_tbody").on("click", function(e) {
                "function" == typeof oThis.options.onDblClickFun ? oThis.isDblEvent("tbodyClick", oThis.dblClickFun, e, oThis.clickFun, e) : oThis.clickFun(e);
            }), $("#" + this.options.id + "_content").on("mousemove", function(e) {
                var $tr = $(e.target).closest("tr"), $div = $(e.target).closest("div"), mousemoveIndex = -1;
                $tr.length > 0 ? mousemoveIndex = $("tr", $tr.parent()).index($tr) : $div.length > 0 && ($div.hasClass("u-grid-content-multiSelect") || $div.hasClass("u-grid-content-num")) && (mousemoveIndex = $("div", $div.parent()).index($div)), 
                oThis.trHoverFun(mousemoveIndex);
            }), $("#" + this.options.id + "_content").on("mouseout", function(e) {
                if ($("#" + oThis.options.id + "_content_tbody").find("tr").removeClass("u-grid-move-bg"), 
                $("#" + oThis.options.id + "_content_fixed_tbody").find("tr").removeClass("u-grid-move-bg"), 
                oThis.options.multiSelect && $("#" + oThis.options.id + "_content_multiSelect").find("div").removeClass("u-grid-move-bg"), 
                oThis.options.showNumCol && $("#" + oThis.options.id + "_content_numCol").find("div").removeClass("u-grid-move-bg"), 
                "function" == typeof oThis.options.onContentOut) {
                    var obj = {};
                    obj.gridObj = oThis;
                    var $tr = $(e.target).closest("tr");
                    if ($tr.length > 0 && !$tr.is(".u-grid-content-sum-row")) {
                        var mouseoutIndex = $('tr[role="row"]', $tr.parent()).index($tr);
                        obj.rowObj = oThis.dataSourceObj.rows[mouseoutIndex], obj.rowIndex = mouseoutIndex;
                    }
                    oThis.options.onContentOut(obj);
                }
            });
        };
        exports.eventFunObj = {
            initEventFun: initEventFun,
            initGridEventFun: initGridEventFun,
            initContentDivEventFun: initContentDivEventFun
        };
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var gridBrowser = {}, userAgent = navigator.userAgent, ua = userAgent.toLowerCase();
        if (ua.match(/msie ([\d.]+)/) && (gridBrowser.isIE = !0), gridBrowser.isIE) {
            var mode = document.documentMode;
            null == mode || (8 == mode ? gridBrowser.isIE8 = !0 : 9 == mode ? gridBrowser.isIE9 = !0 : 10 == mode && (gridBrowser.isIE10 = !0));
        }
        (ua.indexOf("Android") > -1 || ua.indexOf("android") > -1 || ua.indexOf("Adr") > -1 || ua.indexOf("adr") > -1) && (gridBrowser.isAndroid = !0), 
        gridBrowser.isAndroid && (window.screen.width >= 768 && window.screen.width < 1024 && (gridBrowser.isAndroidPAD = !0), 
        window.screen.width <= 768 && (gridBrowser.isAndroidPhone = !0)), ua.match(/iphone/i) && (gridBrowser.isIOS = !0, 
        gridBrowser.isIphone = !0), ua.match(/ipad/i) && (gridBrowser.isIOS = !0, gridBrowser.isIPAD = !0), 
        (gridBrowser.isIphone || gridBrowser.isAndroidPhone) && (gridBrowser.isMobile = !0), 
        exports.gridBrowser = gridBrowser;
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports, __webpack_require__(1), __webpack_require__(5), __webpack_require__(4), __webpack_require__(7) ], 
        __WEBPACK_AMD_DEFINE_FACTORY__ = factory, void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports, _gridBrowser, _dataSource, _column, _re_gridCompEdit) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.initFunObj = void 0;
        var init = function(ele, options) {
            this.dataSource = _dataSource.dataSource, this.gridCompColumn = _column.column, 
            this.ele = ele[0], this.$ele = ele, this.initDefault(), this.options = $.extend({}, this.defaults, options), 
            this.getBooleanOptions(), this.transDefault = {
                ml_show_column: "显示/隐藏列",
                ml_clear_set: "清除设置",
                ml_no_rows: "无数据",
                ml_sum: "合计:",
                ml_close: "关闭"
            }, this.transMap = $.extend({}, this.transDefault, options.transMap), this.gridCompColumnFixedArr = new Array(), 
            this.gridCompColumnArr = new Array(), this.countContentHeight = !0, this.minColumnWidth = 80, 
            this.scrollBarHeight = 16, this.numWidth = this.options.numWidth || 40, this.multiSelectWidth = this.options.multiSelectWidth || 40, 
            this.basicGridCompColumnArr = new Array(), this.columnMenuWidth = 160, this.columnMenuHeight = 33, 
            this.gridCompColumnFixedArr = new Array(), this.gridCompLevelColumn = new Array(), 
            this.baseHeaderHeight = this.options.headerHeight || 44, this.headerHeight = this.baseHeaderHeight * parseInt(this.options.maxHeaderLevel) + 1, 
            this.gridCompHiddenLevelColumnArr = new Array(), this.treeLeft = 10, this.overWidthVisibleColumnArr = new Array();
        }, getBooleanOptions = function() {
            this.options.cancelFocus = this.getBoolean(this.options.cancelFocus), this.options.showHeader = this.getBoolean(this.options.showHeader), 
            this.options.showNumCol = this.getBoolean(this.options.showNumCol), this.options.multiSelect = this.getBoolean(this.options.multiSelect), 
            this.options.columnMenu = this.getBoolean(this.options.columnMenu), this.options.canDrag = this.getBoolean(this.options.canDrag), 
            this.options.overWidthHiddenColumn = this.getBoolean(this.options.overWidthHiddenColumn), 
            this.options.sortable = this.getBoolean(this.options.sortable), this.options.showSumRow = this.getBoolean(this.options.showSumRow), 
            this.options.sumRowFirst = this.getBoolean(this.options.sumRowFirst), this.options.canSwap = this.getBoolean(this.options.canSwap), 
            this.options.showTree = this.getBoolean(this.options.showTree), this.options.autoExpand = this.getBoolean(this.options.autoExpand), 
            this.options.needTreeSort = this.getBoolean(this.options.needTreeSort), this.options.needLocalStorage = this.getBoolean(this.options.needLocalStorage), 
            this.options.noScroll = this.getBoolean(this.options.noScroll), this.options.cancelSelect = this.getBoolean(this.options.cancelSelect), 
            this.options.contentSelect = this.getBoolean(this.options.contentSelect), this.options.contentFocus = this.getBoolean(this.options.contentFocus);
        }, initDefault = function() {
            this.defaults = {
                id: new Date().valueOf(),
                editType: "default",
                cancelFocus: !0,
                cancelSelect: !0,
                showHeader: !0,
                showNumCol: !1,
                multiSelect: !1,
                columnMenu: !0,
                canDrag: !0,
                formMaxWidth: 0,
                maxHeaderLevel: 1,
                overWidthHiddenColumn: !1,
                sortable: !0,
                showSumRow: !1,
                sumRowFirst: !1,
                canSwap: !0,
                showTree: !1,
                autoExpand: !0,
                needTreeSort: !1,
                needLocalStorage: !1,
                noScroll: !1,
                contentSelect: !0,
                showEditIcon: !1,
                contentFocus: !0,
                fixedFloat: "left"
            };
        }, initGrid = function() {
            if (this.options.columns && 0 != this.options.columns.length) {
                var oThis = this;
                this.initOptions(), this.initVariable(), this.initWidthVariable(), this.initGridCompColumn(), 
                this.initDataSource(), this.createDivs(), this.inte = setInterval(function() {
                    oThis.setIntervalFun.call(oThis);
                }, 300);
            }
        }, destroySelf = function() {
            clearInterval(this.inte), this.$ele.data("gridComp", null), this.ele.innerHTML = "", 
            this.showTree = "", this.showType = "";
        }, initOptions = function() {
            this.options.width = this.formatWidth(this.options.width), this.options.height = this.formatWidth(this.options.height), 
            "100%" != this.options.height && this.options.height || (this.countContentHeight = !1), 
            this.initOptionsTree(), this.leftW = 0, this.options.showNumCol && (this.leftW += this.numWidth), 
            this.options.multiSelect && (this.leftW += this.multiSelectWidth), this.exceptContentHeight = 0, 
            this.options.showHeader && (this.exceptContentHeight += this.headerHeight), this.fixedWidth = 0, 
            this.options.maxHeaderLevel > 1 && (this.options.canSwap = !1, this.options.canDrag = !1, 
            this.options.columnMenu = !1), this.options.rowHeight && !this.options.sumRowHeight && (this.options.sumRowHeight = this.options.rowHeight);
            var url = window.location.href, index = url.indexOf("?");
            index > 0 && (url = url.substring(0, index)), this.localStorageId = this.options.id + url;
        }, initOptionsTree = function() {}, initVariable = function() {
            this.initDataSourceVariable(), this.mouseUpX = "mouseUpX", this.mouseUpY = "mouseUpY", 
            this.mouseDownX = "mouseDownX", this.mouseDownY = "mouseDownY", this.mouseMoveX = "mouseMoveX", 
            this.mouseMoveY = "mouseMoveY", this.scrollLeft = 0, this.scrollTop = 0, this.showType = "", 
            this.createGridFlag = !1, this.columnClickX = 0, this.columnClickY = 0, this.columnMenuMove = !1, 
            this.firstColumn = !0, this.lastVisibleColumn = null, this.lastVisibleColumnWidth = 0, 
            this.columnMenuMove = !1, this.createColumnMenuFlag = !1, this.menuColumnsHeight = 0, 
            this.createFormFlag = !1, this.$sd_storageData = null;
        }, initDataSourceVariable = function() {
            this.selectRows = new Array(), this.selectRowsObj = new Array(), this.selectRowsIndex = new Array(), 
            this.allRows = new Array(), this.eidtRowIndex = -1;
        }, initWidthVariable = function() {
            this.wholeWidth = 0, this.wholeHeight = 0, this.rowHeight = 0, this.contentRealWidth = 0, 
            this.contentWidth = 0, this.contentMinWidth = 0, this.contentHeight = 0, this.fixedRealWidth = 0, 
            this.fixedWidth = 0;
        }, initGridCompColumn = function() {
            var oThis = this;
            this.initGridCompColumnVar(), this.options.columns && $.each(this.options.columns, function(i) {
                oThis.initGridCompColumnFun(this);
            }), this.initGridCompColumnLoacl(), this.initGridHiddenLevelColumn(), this.initGridCompFixedColumn(), 
            this.columnsVisibleFun();
        }, initGridCompColumnVar = function() {
            this.gridCompColumnArr = new Array(), this.basicGridCompColumnArr = new Array(), 
            this.gridCompColumnFixedArr = new Array(), this.gridCompLevelColumn = new Array(), 
            this.gridCompHiddenLevelColumnArr = new Array();
        }, initGridCompColumnFun = function(columnOptions) {
            var column = new _column.column(columnOptions, this);
            this.editHeadTitleIcon(column), (column.options.width + "").indexOf("%") > 0 ? this.options.noScroll = "true" : column.options.width = parseInt(column.options.width), 
            column.options.optionsWidth = column.options.width, column.options.realWidth = column.options.width, 
            this.gridCompColumnArr.push(column), this.initGridCompColumnColumnMenuFun(columnOptions), 
            this.initGridCompColumnHeaderLevelFun(columnOptions);
        }, initGridCompColumnColumnMenuFun = function(columnOptions) {}, initGridCompColumnHeaderLevelFun = function(columnOptions) {}, initGridCompColumnLoacl = function(columnOptions) {}, initGridHiddenLevelColumn = function() {}, initGridCompFixedColumn = function() {}, setRequired = function(field, value) {}, initDataSource = function() {
            this.dataSourceObj = new _dataSource.dataSource(this.options.dataSource, this);
        };
        exports.initFunObj = {
            init: init,
            getBooleanOptions: getBooleanOptions,
            initDefault: initDefault,
            initGrid: initGrid,
            destroySelf: destroySelf,
            initOptions: initOptions,
            initOptionsTree: initOptionsTree,
            initVariable: initVariable,
            initDataSourceVariable: initDataSourceVariable,
            initWidthVariable: initWidthVariable,
            initGridCompColumn: initGridCompColumn,
            initGridCompColumnVar: initGridCompColumnVar,
            initGridCompColumnFun: initGridCompColumnFun,
            initGridCompColumnColumnMenuFun: initGridCompColumnColumnMenuFun,
            initGridCompColumnHeaderLevelFun: initGridCompColumnHeaderLevelFun,
            initGridCompColumnLoacl: initGridCompColumnLoacl,
            initGridHiddenLevelColumn: initGridHiddenLevelColumn,
            initGridCompFixedColumn: initGridCompFixedColumn,
            setRequired: setRequired,
            initDataSource: initDataSource
        };
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var re_initTree = function(options, gridOptions) {
            return gridOptions.showTree && (options.sortable = !1), options;
        }, re_initOptionsTree = function() {
            this.options.showTree && (this.options.showNumCol = !1);
        }, re_clickFunTree = function(e) {
            var oThis = this, $target = $(e.target), $td = $target.closest("td");
            if ($td.length > 0) {
                var $tr = $td.parent(), index = this.getTrIndex($tr), row = oThis.dataSourceObj.rows[index];
                if (row) {
                    var rowChildIndex = oThis.getChildRowIndex(row);
                    if ($target.hasClass("uf-reduce-s-o") || $target.hasClass("uf-add-s-o")) {
                        var minus = $td.find(".uf-reduce-s-o"), plus = $td.find(".uf-add-s-o");
                        if (minus.length > 0) {
                            if (minus.removeClass("uf-reduce-s-o").addClass("uf-add-s-o"), rowChildIndex.length > 0) {
                                var allChildRowIndex = oThis.getAllChildRowIndex(row);
                                $.each(allChildRowIndex, function() {
                                    var $tr1 = $('tr[role="row"]:eq(' + parseInt(this) + ")", $tr.parent());
                                    $tr1.css("display", "none"), $("#" + oThis.options.id + "_content_multiSelect >div:nth-child(" + (parseInt(this) + 1) + ")").css("display", "none"), 
                                    $(".uf-reduce-s-o", $tr1).removeClass("uf-reduce-s-o").addClass("uf-add-s-o");
                                });
                            }
                            "form" == this.options.editType && ($("#" + this.options.id + "_multiSelect_edit").remove(null, !0), 
                            $("#" + this.options.id + "_numCol_edit").remove(null, !0), $("#" + this.options.id + "_edit_tr").remove(null, !0), 
                            $("#" + this.options.id + "_edit_tr1").remove(null, !0));
                        } else plus.length > 0 && (plus.removeClass("uf-add-s-o").addClass("uf-reduce-s-o"), 
                        rowChildIndex.length > 0 && $.each(rowChildIndex, function() {
                            $('tr[role="row"]:eq(' + parseInt(this) + ")", $tr.parent()).css("display", "");
                            $("#" + oThis.options.id + "_content_multiSelect >div:nth-child(" + (parseInt(this) + 1) + ")")[0];
                            $("#" + oThis.options.id + "_content_multiSelect >div:nth-child(" + (parseInt(this) + 1) + ")").css("display", "");
                        }));
                        this.resetLeftHeight();
                    }
                }
            }
        }, re_addOneRowTree = function(row, index, rowObj) {
            var displayFlag, oThis = this, l = this.dataSourceObj.rows.length;
            if (this.options.showTree) {
                this.hasParent = !1, this.hasChildF = !1;
                var keyField = this.options.keyField, parentKeyField = this.options.parentKeyField, keyValue = this.getString($(row).attr(keyField), "");
                rowObj.keyValue = keyValue;
                var parentKeyValue = this.getString($(row).attr(parentKeyField), "");
                rowObj.parentKeyValue = parentKeyValue;
                var parentChildLength;
                if ($.each(this.dataSourceObj.rows, function(i) {
                    var value = this.value, nowKeyValue = oThis.getString($(value).attr(keyField), ""), nowParentKeyValue = oThis.getString($(value).attr(parentKeyField), "");
                    if (nowKeyValue == parentKeyValue) {
                        oThis.hasParent = !0, oThis.addRowParentIndex = i, parentChildLength = oThis.getAllChildRow(this).length;
                        var parentLevel = this.level;
                        if (rowObj.level = parentLevel + 1, index = oThis.addRowParentIndex + parentChildLength + 1, 
                        !oThis.options.needTreeSort) return !1;
                    }
                    if (nowParentKeyValue == keyValue && (oThis.hasChildF = !0), oThis.hasParent && oThis.hasChildF) return !1;
                }), this.hasParent || (rowObj.level = 0, index != l && (index = l)), this.hasParent) {
                    var $pTr = $("#" + this.options.id + "_content_div").find("tbody").find('tr[role="row"]').eq(oThis.addRowParentIndex);
                    if ($pTr.removeClass("u-grid-content-leaf-row").addClass("u-grid-content-parent-row"), 
                    parentChildLength > 0) {
                        var openDiv = $(".uf-add-s-o", $pTr);
                        openDiv.length > 0 || (displayFlag = "block");
                    } else {
                        this.options.autoExpand && (displayFlag = "block");
                        var d = $("div:eq(0)", $pTr), openDiv = $(".uf-add-s-o", $pTr), closeDiv = $(".uf-reduce-s-o", $pTr);
                        if (this.options.autoExpand) var spanHtml = '<span class="uf u-grid-content-tree-span uf-reduce-s-o"></span>'; else var spanHtml = '<span class="uf u-grid-content-tree-span uf-add-s-o"></span>';
                        if (d.length > 0 && 0 == openDiv.length && 0 == closeDiv.length) {
                            d[0].insertAdjacentHTML("afterBegin", spanHtml);
                            l = parseInt(d[0].style.left) - 16, (l > 0 || 0 == l) && (d[0].style.left = l + "px");
                        }
                        openDiv.length > 0 && openDiv.removeClass("uf-add-s-o").addClass("uf-reduce-s-o");
                    }
                }
            }
            return {
                index: index,
                displayFlag: displayFlag
            };
        }, re_addOneRowTreeHasChildF = function(rowObj) {
            if (this.hasChildF) this.dataSourceObj.sortRows(), this.repairContent(); else {
                if (this.hasParent) {
                    var parentRowObj = this.dataSourceObj.rows[this.addRowParentIndex];
                    parentRowObj.hasChild = !0, parentRowObj.childRow.push(rowObj), parentRowObj.childRowIndex.push(rowObj.valueIndex), 
                    rowObj.parentRow = parentRowObj, rowObj.parentRowIndex = this.addRowParentIndex;
                }
                rowObj.hasChild = !1, rowObj.childRow = new Array(), rowObj.childRowIndex = new Array();
            }
        }, re_updateValueAtTree = function(rowIndex, field, value, force) {
            var oThis = this, keyField = this.options.keyField, parentKeyField = this.options.parentKeyField;
            if (this.options.showTree && (field == keyField || field == parentKeyField)) {
                var hasParent = !1, hasChildF = !1;
                if ($.each(this.dataSourceObj.rows, function(i) {
                    var vv = this.value, nowKeyValue = oThis.getString($(vv).attr(keyField), ""), nowParentKeyValue = oThis.getString($(vv).attr(parentKeyField), "");
                    field == keyField && value == nowParentKeyValue && (hasChildF = !0), field == parentKeyField && value == nowKeyValue && (hasParent = !0);
                }), hasChildF || hasParent) {
                    var rowValue = $(this.dataSourceObj.rows[rowIndex].value);
                    this.deleteOneRow(rowIndex), this.addOneRow(rowValue[0]);
                }
            }
            return !this.options.showTree || field != keyField && field != parentKeyField || !hasChildF && !hasParent || (rowIndex = this.getRowIndexByValue(field, value)), 
            rowIndex;
        }, getAllChildRow = function(row) {
            return row.allChildRow = new Array(), this.getAllChildRowFun(row, row.allChildRow), 
            row.allChildRow;
        }, re_getChildRowIndex = function(row) {
            var result = [];
            return row.childRow && row.childRow.length > 0 && $.each(row.childRow, function() {
                result.push(this.valueIndex);
            }), result;
        }, getAllChildRowIndex = function(row) {
            return row.allChildRowIndex = new Array(), this.getAllChildRowIndexFun(row, row.allChildRowIndex), 
            row.allChildRowIndex;
        }, getAllChildRowFun = function(row, rowArry) {
            var oThis = this;
            row.childRow.length > 0 && (Array.prototype.push.apply(rowArry, row.childRow), $.each(row.childRow, function() {
                oThis.getAllChildRowFun(this, rowArry);
            }));
        }, getAllChildRowIndexFun = function(row, rowArry) {
            var oThis = this;
            row.childRow.length > 0 && (Array.prototype.push.apply(rowArry, this.getChildRowIndex(row)), 
            $.each(row.childRow, function() {
                oThis.getAllChildRowIndexFun(this, rowArry);
            }));
        }, expandNode = function(keyValue) {
            var rowIndex = this.getRowIndexByValue(this.options.keyField, keyValue);
            this.expandNodeByIndex(rowIndex);
        }, expandNodeByIndex = function(rowIndex) {
            for (var parentIndex, row = this.getRowByIndex(rowIndex), parentExpand = !1, needExpanedParent = new Array(), whileRow = row; !parentExpand; ) {
                if ("" == whileRow.parentKeyValue) {
                    parentExpand = !0;
                    break;
                }
                parentIndex = whileRow.parentRowIndex, whileRow = whileRow.parentRow;
                var $pTr = $("#" + this.options.id + "_content_div").find("tbody").find('tr[role="row"]').eq(parentIndex), openDiv = $(".uf-add-s-o", $pTr);
                if (!(openDiv.length > 0)) {
                    parentExpand = !0;
                    break;
                }
                needExpanedParent.push(parentIndex);
            }
            if (needExpanedParent.length > 0) for (var i = needExpanedParent.length - 1; i > -1; i--) {
                var index = needExpanedParent[i], $pTr = $("#" + this.options.id + "_content_div").find("tbody").find('tr[role="row"]').eq(index), openDiv = $(".uf-add-s-o", $pTr);
                openDiv.click();
            }
            var $Tr = $("#" + this.options.id + "_content_div").find("tbody").find('tr[role="row"]').eq(rowIndex), openDiv = $(".uf-add-s-o", $Tr), firstDiv = $(".u-grid-content-td-div", $Tr);
            openDiv.length > 0 ? openDiv.click() : firstDiv.click();
        }, re_treeSortRows = function(field, sortType) {
            var oThis = this, spliceHasParentRows = new Array();
            if (this.rows = new Array(), this.hasParentRows = new Array(), this.nothasParentRows = new Array(), 
            this.options.values) {
                $.each(this.options.values, function(i) {
                    var rowObj = {}, $this = $(this), keyField = oThis.gridComp.options.keyField, parentKeyField = oThis.gridComp.options.parentKeyField, keyValue = oThis.gridComp.getString($this.attr(keyField), ""), parentKeyValue = oThis.gridComp.getString($this.attr(parentKeyField), "");
                    rowObj.valueIndex = i, rowObj.value = this, rowObj.keyValue = keyValue, rowObj.parentKeyValue = parentKeyValue, 
                    "" == parentKeyValue ? oThis.nothasParentRows.push(rowObj) : oThis.hasParentRows.push(rowObj), 
                    oThis.rows.push(rowObj);
                }), $.each(this.hasParentRows, function(i) {
                    var parentKeyValue = this.parentKeyValue, hasParent = !1;
                    $.each(oThis.rows, function() {
                        this.keyValue == parentKeyValue && (hasParent = !0);
                    }), hasParent || (spliceHasParentRows.push(this), oThis.nothasParentRows.push(this));
                }), $.each(spliceHasParentRows, function() {
                    var index = oThis.hasParentRows.indexOf(this);
                    oThis.hasParentRows.splice(index, 1);
                }), oThis.rows = new Array();
                $.each(this.nothasParentRows, function(i) {
                    this.level = 0, oThis.rows.push(this), oThis.pushChildRows(this, 0);
                });
            }
        }, pushChildRows = function(row, level) {
            var keyValue = row.keyValue, oThis = this, nowLevel = parseInt(level) + 1, hasChild = !1, childRowArray = new Array(), childRowIndexArray = new Array(), spliceHasParentRows = new Array();
            $.each(this.hasParentRows, function(i) {
                if (this && this.parentKeyValue == keyValue) {
                    hasChild = !0, this.level = nowLevel, oThis.rows.push(this), childRowArray.push(this);
                    var index = parseInt(oThis.rows.length - 1);
                    childRowIndexArray.push(index), spliceHasParentRows.push(this), oThis.pushChildRows(this, nowLevel);
                }
            }), $.each(spliceHasParentRows, function() {
                var index = oThis.hasParentRows.indexOf(this);
                oThis.hasParentRows.splice(index, 1);
            }), row.hasChild = hasChild, row.childRow = childRowArray, row.childRowIndex = childRowIndexArray;
        };
        exports.treeFunObj = {
            initOptionsTree: re_initOptionsTree,
            clickFunTree: re_clickFunTree,
            addOneRowTree: re_addOneRowTree,
            addOneRowTreeHasChildF: re_addOneRowTreeHasChildF,
            updateValueAtTree: re_updateValueAtTree,
            getAllChildRow: getAllChildRow,
            getChildRowIndex: re_getChildRowIndex,
            getAllChildRowIndex: getAllChildRowIndex,
            getAllChildRowFun: getAllChildRowFun,
            getAllChildRowIndexFun: getAllChildRowIndexFun,
            expandNode: expandNode,
            expandNodeByIndex: expandNodeByIndex,
            re_treeSortRows: re_treeSortRows,
            pushChildRows: pushChildRows,
            re_initTree: re_initTree
        };
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports, __webpack_require__(10), __webpack_require__(3) ], 
        __WEBPACK_AMD_DEFINE_FACTORY__ = factory, void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports, _columnInit, _re_gridCompTree) {
        "use strict";
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.column = void 0;
        var column = function column(options, gridComp) {
            _classCallCheck(this, column), this.init(options, gridComp);
        }, gridCompColumnProto = column.prototype;
        Object.assign(gridCompColumnProto, _columnInit.initFunObj), gridCompColumnProto.initTree = _re_gridCompTree.treeFunObj.re_initTree, 
        exports.column = column;
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports, __webpack_require__(11), __webpack_require__(8), __webpack_require__(3) ], 
        __WEBPACK_AMD_DEFINE_FACTORY__ = factory, void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports, _dataSourceInit, _re_gridCompSort, _re_gridCompTree) {
        "use strict";
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.dataSource = void 0;
        var dataSource = function dataSource(options, gridComp) {
            _classCallCheck(this, dataSource), this.init(options, gridComp), this.sortRows();
        }, dataSourceProto = dataSource.prototype;
        Object.assign(dataSourceProto, _dataSourceInit.initFunObj), dataSourceProto.basicSortRows = _re_gridCompSort.sortFunObj.re_basicSortRows, 
        dataSourceProto.treeSortRows = _re_gridCompTree.treeFunObj.re_treeSortRows, dataSourceProto.pushChildRows = _re_gridCompTree.treeFunObj.pushChildRows, 
        exports.dataSource = dataSource;
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var updateLastRowFlag = function() {
            return;
        }, updateNumColLastRowFlag = function() {
            return;
        }, columnsVisibleFun = function() {
            var oThis = this, w = 0;
            this.firstColumn = !0, this.overWidthVisibleColumnArr = new Array(), $.each(this.gridCompColumnArr, function() {
                this.options.visible && (w += parseInt(this.options.width), this.options.width > this.options.realWidth && oThis.overWidthVisibleColumnArr.push(this), 
                this.firstColumn = oThis.firstColumn, oThis.firstColumn = !1, oThis.lastVisibleColumn = this, 
                oThis.lastVisibleColumnWidth = this.options.width);
            }), this.contentRealWidth = w;
        }, resetThVariable = function() {
            if ("grid" == this.showType) {
                var oThis = this;
                this.contentWidth = 0, $("#" + this.options.id + "_header_table th", this.$ele).each(function(i) {
                    var gridCompColumn = oThis.gridCompColumnArr[i], w = 0;
                    gridCompColumn.options.visible && (w = parseInt(gridCompColumn.options.width)), 
                    this.attrLeftTotalWidth = oThis.contentWidth, oThis.contentWidth += w, oThis.resetThVariableDrag(this, gridCompColumn, w), 
                    this.gridCompColumn = gridCompColumn, this.attrWidth = w, this.attrRightTotalWidth = oThis.contentWidth;
                }), oThis.resetThVariableHeaderLevel();
            }
        }, resetThVariableDrag = function(nowTh, gridCompColumn) {}, resetThVariableHeaderLevel = function() {}, headerFirstClassFun = function() {
            $("#" + this.options.id + "_grid .u-grid-header-th-first").removeClass("u-grid-header-th-first"), 
            $("#" + this.options.id + "_grid").find("th").eq(0).addClass("u-grid-header-th-first");
        }, setRenderType = function(field, renderType) {
            var gridCompColumn = this.getColumnByField(field);
            gridCompColumn.options.renderType = renderType;
            var index = this.getIndexOfColumn(gridCompColumn);
            this.renderTypeByColumn(gridCompColumn, index);
        }, setShowHeader = function(showHeader) {
            this.options.showHeader = showHeader, showHeader ? $("#" + this.options.id + "_header").css("display", "block") : $("#" + this.options.id + "_header").css("display", "none");
        }, setColumnPrecision = function(field, precision) {
            this.getColumnByField(field).options.precision = precision, this.renderTypeFun(), 
            this.options.showSumRow && this.repairSumRow();
        }, setMultiSelect = function(multiSelect) {
            this.options.multiSelect != multiSelect && (this.options.multiSelect = multiSelect, 
            this.initGrid());
        }, setShowNumCol = function(showNumCol) {
            this.options.showNumCol != showNumCol && (this.options.showNumCol = showNumCol, 
            this.initGrid());
        }, isGridShow = function() {
            return "grid" == this.showType;
        }, getBoolean = function(value) {
            return "true" === value || value === !0;
        };
        exports.otherFunObj = {
            updateLastRowFlag: updateLastRowFlag,
            updateNumColLastRowFlag: updateNumColLastRowFlag,
            columnsVisibleFun: columnsVisibleFun,
            resetThVariable: resetThVariable,
            resetThVariableDrag: resetThVariableDrag,
            resetThVariableHeaderLevel: resetThVariableHeaderLevel,
            headerFirstClassFun: headerFirstClassFun,
            setRenderType: setRenderType,
            setShowHeader: setShowHeader,
            setColumnPrecision: setColumnPrecision,
            setMultiSelect: setMultiSelect,
            setShowNumCol: setShowNumCol,
            isGridShow: isGridShow,
            getBoolean: getBoolean
        };
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports, __webpack_require__(0), __webpack_require__(1) ], 
        __WEBPACK_AMD_DEFINE_FACTORY__ = factory, void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports, _gridCompEvent, _gridBrowser) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.eidtFunObj = void 0;
        var re_hideEditMenu = function() {
            $("#" + this.options.id + "_content_edit_menu").css("display", "none");
        }, re_clickFunEdit = function(e, index) {
            var $tr = $(e.target).closest("tr"), $td = $(e.target).closest("td"), colIndex = $td.index();
            this.options.editable && (this.eidtRowIndex != index || "default" == this.options.editType && this.editColIndex != colIndex) && (this.editClose(), 
            this.editRowFun($tr, colIndex));
        }, editRowFun = function($tr, colIndex) {
            var index = this.getTrIndex($tr);
            if ("function" == typeof this.options.onBeforeEditFun) {
                var obj = {};
                if (obj.gridObj = this, obj.rowObj = this.dataSourceObj.rows[index], obj.rowIndex = index, 
                obj.colIndex = colIndex, obj.$tr = $tr, !this.options.onBeforeEditFun(obj)) return void (this.eidtRowIndex != -1 && this.editClose());
            }
            this.eidtRowIndex != -1 && this.editClose();
            var index = "number" == typeof $tr ? $tr : this.getTrIndex($tr);
            return this.eidtRowIndex = index, this.editColIndex = colIndex, this.editRow($tr, colIndex), 
            !0;
        }, editRowIndexFun = function(i) {
            this.eidtRowIndex != -1 && this.editClose(), this.eidtRowIndex = i, this.editColIndex = 0, 
            this.editRow();
        }, editRow = function($tr, colIndex) {
            if (!(colIndex < 0)) {
                var oThis = this, isFixedCol = !1;
                $tr && $tr.parents("table").attr("id").indexOf("_fixed_") > -1 && (isFixedCol = !0), 
                $tr = $tr || $("#" + this.options.id + '_content_tbody tr[role="row"]:eq(' + this.eidtRowIndex + ")"), 
                colIndex = colIndex || 0;
                var row = this.dataSourceObj.rows[this.eidtRowIndex].value;
                if (this.editRowObj = this.cloneObj(row), "default" == this.options.editType) {
                    var column = isFixedCol ? this.gridCompColumnFixedArr[colIndex] : this.gridCompColumnArr[colIndex];
                    if (column.options.editable) {
                        var td = $("td:eq(" + colIndex + ")", $tr)[0], field = column.options.field, value = $(row).attr(field);
                        value = oThis.getString(value, "");
                        var obj = {};
                        obj.td = td, obj.value = value, obj.field = field, obj.editType = column.options.editType, 
                        obj.rowObj = oThis.editRowObj, obj.$tr = $tr, obj.colIndex = colIndex, oThis.editCell(obj);
                    }
                    $("#" + this.options.id + "_content_edit_menu").css("display", "block"), $("#" + this.options.id + "_content_edit_menu_cancel").css("marginLeft", "10px");
                    var topIndex = $("tr:visible", $tr.parent()).index($tr);
                    this.rowHeight = $tr.height();
                    this.rowHeight, this.headerHeight;
                } else if ("form" == this.options.editType) if ("function" == typeof this.options.formEditRenderFun) {
                    if (this.fixedWidth > 0) var table = $("#" + this.options.id + "_content_fixed_table")[0]; else var table = $("#" + this.options.id + "_content_table")[0];
                    var tr = table.insertRow(this.eidtRowIndex + 2);
                    tr.id = this.options.id + "_edit_tr", $(tr).addClass("grid_edit_form_tr");
                    var cell = tr.insertCell();
                    cell.id = this.options.id + "_edit_td", $(cell).addClass("grid_edit_form_td"), cell.style.borderBottom = "0px", 
                    cell.style.background = "#fff";
                    var cWidth = parseInt(this.contentMinWidth) + parseInt(this.fixedWidth), htmlStr = '<div id="' + this.options.id + '_edit_form" class="u-grid-edit-form" style="width:' + cWidth + 'px;float:left;">';
                    htmlStr += "</div>", cell.innerHTML = htmlStr;
                    var obj = {};
                    obj.grid = gridObj, obj.element = $("#" + this.options.id + "_edit_form")[0], obj.editRowObj = this.editRowObj, 
                    this.options.formEditRenderFun.call(this, obj);
                    var htmlStr = '<div style="position:relative;float:left;width:100%;height:40px;"></div>';
                    $("#" + this.options.id + "_edit_form")[0].insertAdjacentHTML("beforeEnd", htmlStr);
                    var h = $("#" + this.options.id + "_edit_td")[0].offsetHeight, color = $("#" + this.options.id + "_edit_form").css("background-color");
                    if (this.options.multiSelect) {
                        var $div = $("#" + this.options.id + "_content_multiSelect > div").eq(this.eidtRowIndex), htmlStr = '<div class="grid_open_edit" id="' + this.options.id + '_multiSelect_edit" style="background-color:' + color + ";float:left;position:relative;width:" + this.multiSelectWidth + "px;height:" + h + 'px"></div>';
                        $div[0].insertAdjacentHTML("afterEnd", htmlStr);
                    }
                    if (this.options.showNumCol) {
                        var $div = $("#" + this.options.id + "_content_numCol > .u-grid-content-num").eq(this.eidtRowIndex), htmlStr = '<div id="' + this.options.id + '_numCol_edit" style="background-color:' + color + ";float:left;position:relative;width:" + this.numWidth + 'px;"></div>';
                        $div[0].insertAdjacentHTML("afterEnd", htmlStr);
                    }
                    if ($("#" + this.options.id + "_content_edit_menu").css("display", "block"), this.fixedWidth > 0) {
                        var table1 = $("#" + this.options.id + "_content_table")[0], tr1 = table1.insertRow(this.eidtRowIndex + 2);
                        tr1.id = this.options.id + "_edit_tr1";
                    }
                } else {
                    if (this.fixedWidth > 0) var table = $("#" + this.options.id + "_content_fixed_table")[0]; else var table = $("#" + this.options.id + "_content_table")[0];
                    var tr = table.insertRow(this.eidtRowIndex + 2);
                    tr.id = this.options.id + "_edit_tr", $(tr).addClass("grid_edit_form_tr");
                    var cell = tr.insertCell();
                    cell.id = this.options.id + "_edit_td", $(cell).addClass("grid_edit_form_td"), cell.style.borderBottom = "0px";
                    var cWidth = parseInt(this.contentMinWidth) + parseInt(this.fixedWidth), htmlStr = '<div id="' + this.options.id + '_edit_form" class="u-grid-edit-form" style="width:' + cWidth + 'px;float:left;">';
                    if ($.each(this.gridCompColumnFixedArr, function(i) {
                        var show = !1;
                        if (this.options.editFormShow && (this.options.editable || !this.options.editable && oThis.options.noneEditableFormShow) && (show = !0), 
                        show) {
                            var field = this.options.field, value = $(row).attr(field);
                            value = oThis.getString(value, "");
                            var title = this.options.title, headerColor = this.options.headerColor;
                            htmlStr += oThis.formEditCell(value, field, title, this.options.required, headerColor);
                        }
                    }), $.each(this.gridCompColumnArr, function(i) {
                        var show = !1;
                        if (this.options.editFormShow && (this.options.editable || !this.options.editable && oThis.options.noneEditableFormShow) && (show = !0), 
                        show) {
                            var field = this.options.field, value = $(row).attr(field);
                            value = oThis.getString(value, "");
                            var title = this.options.title, headerColor = this.options.headerColor;
                            htmlStr += oThis.formEditCell(value, field, title, this.options.required, headerColor);
                        }
                    }), htmlStr += "</div>", cell.innerHTML = htmlStr, $.each(this.gridCompColumnFixedArr, function(i) {
                        var show = !1;
                        if (this.options.editFormShow && (this.options.editable || !this.options.editable && oThis.options.noneEditableFormShow) && (show = !0), 
                        show) {
                            var field = this.options.field, td = $("#" + oThis.options.id + "_edit_" + field)[0], value = $(row).attr(field);
                            this.options.title;
                            value = oThis.getString(value, "");
                            var obj = {};
                            obj.td = td, td.innerHTML = '<div class="u-grid-content-td-div" title=""></div>', 
                            obj.value = value, obj.field = field, obj.editType = this.options.editType, obj.rowObj = oThis.editRowObj, 
                            obj.$tr = $tr, obj.colIndex = colIndex, htmlStr += oThis.editCell(obj);
                        }
                    }), $.each(this.gridCompColumnArr, function(i) {
                        var show = !1;
                        if (this.options.editFormShow && (this.options.editable || !this.options.editable && oThis.options.noneEditableFormShow) && (show = !0), 
                        show) {
                            var field = this.options.field, td = $("#" + oThis.options.id + "_edit_" + field)[0], value = $(row).attr(field);
                            this.options.title;
                            value = oThis.getString(value, "");
                            var obj = {};
                            obj.td = td, td.innerHTML = '<div class="u-grid-content-td-div" title=""></div>', 
                            obj.value = value, obj.field = field, obj.editType = this.options.editType, obj.rowObj = oThis.editRowObj, 
                            obj.$tr = $tr, obj.colIndex = colIndex, htmlStr += oThis.editCell(obj);
                        }
                    }), "function" == typeof this.options.renderEditMemu) this.options.renderEditMemu.apply(this, [ $("#" + this.options.id + "_edit_form")[0], this.eidtRowIndex, this.dataSourceObj.rows.length ]); else {
                        var htmlStr = '<div id="' + this.options.id + '_content_edit_menu" style="position:relative;float:left;width:100%;height:40px;"><button type="button" class="u-grid-content-edit-menu-button u-grid-content-edit-menu-button-ok" id="' + this.options.id + '_content_edit_menu_close">' + this.transMap.ml_close + "</button></div>";
                        $("#" + this.options.id + "_edit_form")[0].insertAdjacentHTML("beforeEnd", htmlStr), 
                        $("#" + this.options.id + "_content_edit_menu_close").on("click", function(e) {
                            oThis.editClose();
                        });
                    }
                    var h = $("#" + this.options.id + "_edit_td")[0].offsetHeight, color = $("#" + this.options.id + "_edit_form").css("background-color");
                    if (this.options.multiSelect) {
                        var $div = $("#" + this.options.id + "_content_multiSelect > div").eq(this.eidtRowIndex), htmlStr = '<div class="grid_open_edit " id="' + this.options.id + '_multiSelect_edit" style="background-color:' + color + ";float:left;position:relative;width:" + this.multiSelectWidth + "px;height:" + h + 'px"></div>';
                        $div[0].insertAdjacentHTML("afterEnd", htmlStr);
                    }
                    if (this.options.showNumCol) {
                        var $div = $("#" + this.options.id + "_content_numCol > .u-grid-content-num").eq(this.eidtRowIndex), htmlStr = '<div id="' + this.options.id + '_numCol_edit" style="background-color:' + color + ";float:left;position:relative;width:" + this.numWidth + 'px;"></div>';
                        $div[0].insertAdjacentHTML("afterEnd", htmlStr);
                    }
                    if ($("#" + this.options.id + "_content_edit_menu").css("display", "block"), this.fixedWidth > 0) {
                        var table1 = $("#" + this.options.id + "_content_table")[0], tr1 = table1.insertRow(this.eidtRowIndex + 2);
                        tr1.id = this.options.id + "_edit_tr1";
                    }
                }
            }
        }, re_editClose = function() {
            if (!(this.eidtRowIndex < 0)) {
                var row = this.dataSourceObj.rows[this.eidtRowIndex], editField = this.gridCompColumnArr[this.editColIndex].options.field, inputDom = null;
                this.editComp && this.editComp.hide && (this.editComp.hide(), !1);
                try {
                    var inputDom = this.editComp.element.parentNode.querySelector("input");
                } catch (e) {}
                inputDom && (inputDom.blur(), !1), this.editComp && this.editComp.comp && this.editComp.comp.hide && (this.editComp.comp.hide(), 
                !1);
                try {
                    $("#" + this.options.id + "_placeholder_div").remove();
                } catch (e) {}
                if (row) {
                    if ("form" != this.options.editType) {
                        var obj = {};
                        obj.begin = this.eidtRowIndex, obj.length = 1, obj.field = editField, this.renderTypeFun(obj);
                    }
                    $("#" + this.options.id + "_content_edit_menu").css("display", "none"), this.repairSumRow(), 
                    this.noRowsShowFun(), this.updateLastRowFlag(), this.eidtRowIndex = -1, $("#" + this.options.id + "_multiSelect_edit").remove(null, !0), 
                    $("#" + this.options.id + "_numCol_edit").remove(null, !0), $("#" + this.options.id + "_edit_tr").remove(null, !0), 
                    $("#" + this.options.id + "_edit_tr1").remove(null, !0);
                }
            }
        }, editCell = function(obj) {
            var td = obj.td, value = obj.value, field = obj.field, editType = obj.editType, rowObj = obj.rowObj, $tr = obj.$tr, colIndex = obj.colIndex, oThis = this;
            if (0 == obj.colIndex) try {
                this.iconSpan = "", this.iconSpan = $(td).find(".uf")[0].outerHTML;
            } catch (e) {} else this.iconSpan = "";
            var obj = {};
            if (obj.td = td, obj.field = field, obj.$tr = $tr, obj.colIndex = colIndex, oThis.newEditObj = obj, 
            "text" == editType) "default" == this.options.editType ? td.innerHTML = '<div class="u-grid-content-td-div" style="position: relative; left: 0px;"><div class="eType-input"><input id="' + this.options.id + "_edit_field_" + field + '" type="text" value="' + value + '" field="' + field + '" style="width:100%;margin:0px;min-height:20px;font-size:12px;color:#444"></div></div>' : td.innerHTML = '<div class="u-grid-content-td-div" style="position: relative; left: 0px;"><div class="eType-input"><input id="' + this.options.id + "_edit_field_" + field + '" type="text" value="' + value + '" field="' + field + '"></div></div>', 
            $("input", $(td)).on("blur", function() {
                oThis.editValueChange(field, this.value);
            }); else if ("function" == typeof editType) {
                var obj = {}, $Div = $(".u-grid-content-td-div", $(td));
                if ($Div.removeClass("u-grid-content-td-div-over"), obj.gridObj = this, obj.element = $Div[0], 
                "default" == this.options.editType) {
                    var nowHeight = obj.element.offsetHeight, editDivHtml = '<div id="' + this.options.id + '_placeholder_div" class="u-grid-edit-placeholder-div" style="height:' + nowHeight + 'px;"></div>';
                    $Div[0].innerHTML = editDivHtml, obj.element = $("#" + this.options.id + "_placeholder_div")[0];
                }
                obj.value = value, obj.field = field, obj.rowObj = rowObj, editType.call(this, obj);
            }
            $("input", $(td)).off("keydown"), $("input", $(td)).on("keydown", function(e) {
                if ("form" == oThis.options.editType) ; else {
                    e.keyCode;
                    13 != e.keyCode && 9 != e.keyCode || (this.blur(), setTimeout(function() {
                        oThis.nextEditShow();
                    }, 100), u.stopEvent(e));
                }
            }), "default" == this.options.editType && $("input:first", $(td)).focus();
        }, nextEditShow = function() {
            var obj = this.newEditObj, td = obj.td, $tr = obj.$tr, colIndex = parseInt(obj.colIndex) + 1;
            if (0 == $(td).next("td").length) {
                var $nextTr = $tr.next("tr");
                if (!($nextTr.length > 0)) return;
                $tr = $nextTr, colIndex = 0, $tr.click();
            }
            colIndex = _getNextEditColIndex(this, colIndex, $tr), this.editRowFun($tr, colIndex);
        }, _getNextEditColIndex = function _getNextEditColIndex(gridObj, nowIndex, $tr) {
            var column = gridObj.gridCompColumnArr[nowIndex], beforeFlag = !0, index = gridObj.getTrIndex($tr);
            if ("function" == typeof gridObj.options.onBeforeEditFun) {
                var obj = {};
                obj.gridObj = gridObj, obj.rowObj = gridObj.dataSourceObj.rows[index], obj.rowIndex = index, 
                obj.colIndex = nowIndex, obj.$tr = $tr, gridObj.options.onBeforeEditFun(obj) || (beforeFlag = !1);
            }
            return column.options.visible && column.options.editable && beforeFlag ? nowIndex : _getNextEditColIndex(gridObj, nowIndex + 1, $tr);
        }, editValueChange = function(field, value) {
            this.eidtRowIndex > -1 && this.eidtRowIndex < this.dataSourceObj.rows.length && this.updateValueAt(this.eidtRowIndex, field, value);
        }, re_updateEditRowIndex = function(opType, opIndex, num) {
            this.eidtRowIndex < 0 || ("-" == opType ? opIndex < this.eidtRowIndex ? this.eidtRowIndex-- : opIndex == this.eidtRowIndex && (this.eidtRowIndex = -1) : "+" == opType && (void 0 === num && (num = 1), 
            opIndex <= this.eidtRowIndex && (this.eidtRowIndex += num)));
        }, re_updateValueAtEdit = function(rowIndex, field, value, force) {
            this.eidtRowIndex == rowIndex && ("form" == this.options.editType || this.gridCompColumnArr[this.editColIndex].options.field == field && (this.eidtRowIndex = -1), 
            $("#" + this.options.id + "_edit_field_" + field).length > 0 && ("checkbox" == $("#" + this.options.id + "_edit_field_" + field)[0].type ? $("#" + this.options.id + "_edit_field_" + field)[0].checked = "Y" == value || "true" == value || value === !0 : $("#" + this.options.id + "_edit_field_" + field)[0].value = value));
        }, setEditType = function(field, editType) {
            this.getColumnByField(field).options.editType = editType;
        }, setEditable = function(editable) {
            this.options.editable = editable, this.setColumnEdit(), this.editClose();
        }, setColumnEdit = function() {
            var i;
            for (i = 0; i < this.gridCompColumnArr.length; i++) this.editFieldIcon(this.gridCompColumnArr[i]);
            for (i = 0; i < this.gridCompColumnFixedArr.length; i++) this.editFieldIcon(this.gridCompColumnFixedArr[i]);
        }, editFieldIcon = function(column) {
            var fieldDom = $(".u-grid-header-link[field=" + column.options.field + "]"), fieldEditIconDom = fieldDom.find(".uf-fontselectioneditor");
            this.options.showEditIcon && this.options.editable && column.options.editable ? (fieldEditIconDom || fieldDom.append('<i class="uf uf-fontselectioneditor"></i>'), 
            fieldDom.removeClass("u-grid-hide-title-icon")) : fieldDom.addClass("u-grid-hide-title-icon");
        }, edit_initEventFun = function() {
            var oThis = this;
            $(document).on("click", function(e) {
                if (oThis.options.editable && "default" == oThis.options.editType) {
                    var $e = $(e.target), flag = !0;
                    flag = !($(e.target).closest(".u-grid-content-td-div").length > 0) && flag;
                    var cusStr = oThis.options.customEditPanelClass;
                    if (cusStr) {
                        var cArr = cusStr.split(",");
                        $.each(cArr, function() {
                            flag = !($e.closest("." + this).length > 0) && flag;
                        });
                    }
                    "grid-for-edit" == $e.attr("role") && (flag = !1), flag && oThis.editClose();
                }
            }), u.on(document, "scroll", function() {
                "default" == oThis.options.editType && (_gridBrowser.gridBrowser.isIE10 || _gridBrowser.gridBrowser.isIPAD || oThis.editClose());
            }), $("div").on("scroll", function() {
                "default" == oThis.options.editType && (_gridBrowser.gridBrowser.isIE10 || _gridBrowser.gridBrowser.isIPAD || oThis.editClose());
            });
        }, setGridEditType = function(newEditType) {
            this.options.editType = newEditType;
        }, setGridEditTypeAndEditRow = function(newEditType, rowIndex, colIndex) {
            this.options.editType = newEditType;
            var $contentBody = $("#" + this.options.id + "_content_tbody"), $tr = $("tr:eq(" + rowIndex + ")", $contentBody);
            this.editRowFun($tr, colIndex);
        }, editHeadTitleIcon = function(column) {
            this.options.showEditIcon && this.options.editable && column.options.editable && (column.options.title += '<i class="uf uf-fontselectioneditor"></i>');
        };
        exports.eidtFunObj = {
            hideEditMenu: re_hideEditMenu,
            clickFunEdit: re_clickFunEdit,
            editRowFun: editRowFun,
            editRowIndexFun: editRowIndexFun,
            editRow: editRow,
            editClose: re_editClose,
            editCell: editCell,
            nextEditShow: nextEditShow,
            editValueChange: editValueChange,
            updateEditRowIndex: re_updateEditRowIndex,
            updateValueAtEdit: re_updateValueAtEdit,
            setEditType: setEditType,
            setEditable: setEditable,
            setColumnEdit: setColumnEdit,
            editFieldIcon: editFieldIcon,
            setGridEditType: setGridEditType,
            setGridEditTypeAndEditRow: setGridEditTypeAndEditRow,
            editHeadTitleIcon: editHeadTitleIcon,
            edit_initEventFun: edit_initEventFun
        };
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports, __webpack_require__(0) ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports, _gridCompEvent) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.sortFunObj = void 0;
        var sort_initEventFun = function() {
            var oThis = this;
            $("#" + this.options.id).on("mouseup", function(e) {
                if ($(e.target).closest("#" + oThis.options.id + "_header").length > 0) {
                    if (oThis.mouseUpX = e.clientX, oThis.mouseUpY = e.clientY, oThis.mouseDownX == oThis.mouseUpX && oThis.mouseDownY == oThis.mouseUpY) {
                        oThis.columnClickX = e.clientX, oThis.columnClickY = e.clientY;
                        var eleTh = $(e.target).closest("th")[0];
                        $(e.target).hasClass("u-grid-header-columnmenu") || oThis.canSortable(e, eleTh);
                    }
                } else $(e.target).closest("#" + oThis.options.id + "_content").length;
            });
        }, sort_initGridEventFun = function() {
        }, canSortable = function(e, ele) {
            var oThis = this, $ele = $(ele), field = $ele.attr("field");
            if (this.getColumnAttr("sortable", field)) {
                if (e.ctrlKey) {
                    var prioArray = [];
                    $(".u-grid-header-sort-priority").each(function(index, domEle) {
                        var st, $el = $(domEle), p = parseInt($el.text()), f = $el.closest("th").attr("field");
                        $el.parent().hasClass("uf-arrow-up") ? st = "asc" : $el.parent().hasClass("uf-arrow-down") && (st = "desc"), 
                        prioArray[p - 1] = {
                            field: f,
                            sortType: st
                        };
                    });
                    var $caret;
                    if (($caret = $ele.find(".uf-arrow-up")).length > 0) {
                        var p = parseInt($caret.find(".u-grid-header-sort-priority").text());
                        prioArray[p - 1].sortType = "desc", $caret.removeClass("uf-arrow-up").addClass("uf-arrow-down");
                    } else if (($caret = $ele.find(".uf-arrow-down")).length > 0) {
                        for (var p = parseInt($caret.find(".u-grid-header-sort-priority").text()), i = p; i < prioArray.length; i++) {
                            var $flag = $("[field=" + prioArray[i].field + "]").find(".u-grid-header-sort-priority");
                            $flag.text(parseInt($flag.text()) - 1);
                        }
                        prioArray.splice(p - 1, 1), $caret.remove();
                    } else prioArray.push({
                        field: field,
                        sortType: "asc"
                    }), $ele.first().first().append('<span class="uf uf-arrow-up u-grid-header-sort-span" ></span>');
                    this.dataSourceObj.sortRowsByPrio(prioArray);
                } else $(".uf-arrow-up").parent().parent().parent()[0] == ele ? ($(".uf-arrow-up").remove(), 
                $(ele.firstChild.firstChild)[0].insertAdjacentHTML("beforeEnd", '<span class="uf uf-arrow-down u-grid-header-sort-span" ></span>'), 
                "function" == typeof this.options.onSortFun ? this.options.onSortFun(field, "asc") : this.dataSourceObj.sortRows(field, "asc")) : $(".uf-arrow-down").parent().parent().parent()[0] == ele ? ($(".uf-arrow-down").remove(), 
                "function" == typeof this.options.onSortFun ? this.options.onSortFun() : this.dataSourceObj.sortRows()) : ($(".uf-arrow-up").remove(), 
                $(".uf-arrow-down").remove(), $(ele.firstChild.firstChild)[0].insertAdjacentHTML("beforeEnd", '<span class="uf uf-arrow-up u-grid-header-sort-span"></span>'), 
                "function" == typeof this.options.onSortFun ? this.options.onSortFun(field, "desc") : this.dataSourceObj.sortRows(field, "desc"));
                oThis.repairContent(), oThis.afterGridDivsCreate();
            }
        }, re_deleteOneRowTree = function() {
            this.options.showTree && this.dataSourceObj.sortRows();
        }, sortRowsByPrio = function sortRowsByPrio(prioArray, cancelSort) {
            var oThis = this;
            cancelSort && (this.rows = new Array(), this.options.values && $.each(this.options.values, function(i) {
                var rowObj = {};
                rowObj.value = this, rowObj.valueIndex = i, oThis.rows.push(rowObj);
            }));
            var evalStr = function evalStr(i) {
                return i == prioArray.length - 1 ? "by(prioArray[" + i + "].field, prioArray[" + i + "].sortType)" : "by(prioArray[" + i + "].field, prioArray[" + i + "].sortType," + evalStr(i + 1) + ")";
            }, by = function(field, sortType, eqCall) {
                arguments.callee;
                return function(a, b) {
                    var v1 = $(a.value).attr(field), v2 = $(b.value).attr(field), dataType = oThis.gridComp.getColumnByField(field).options.dataType;
                    if ("Float" == dataType) return v1 = parseFloat(v1), v2 = parseFloat(v2), isNaN(v1) ? 1 : isNaN(v2) ? -1 : v1 == v2 && eqCall ? eqCall() : "asc" == sortType ? v1 - v2 : v2 - v1;
                    if ("Int" == dataType) return v1 = parseInt(v1), v2 = parseInt(v2), isNaN(v1) ? 1 : isNaN(v2) ? -1 : v1 == v2 && eqCall ? eqCall() : "asc" == sortType ? v1 - v2 : v2 - v1;
                    v1 = oThis.gridComp.getString(v1, ""), v2 = oThis.gridComp.getString(v2, "");
                    try {
                        var rsl = v1.localeCompare(v2);
                        return 0 === rsl && eqCall ? eqCall() : 0 === rsl ? 0 : "asc" == sortType ? rsl : -rsl;
                    } catch (e) {
                        return 0;
                    }
                };
            };
            this.rows.sort(eval(evalStr(0)));
        }, re_basicSortRows = function(field, sortType) {
            var oThis = this, dataType = "";
            field && (dataType = this.gridComp.getColumnByField(field).options.dataType), "asc" == sortType ? this.rows.sort(function(a, b) {
                var v1 = $(b.value).attr(field), v2 = $(a.value).attr(field);
                if ("Float" == dataType) return v1 = parseFloat(v1), v2 = parseFloat(v2), isNaN(v1) ? 1 : isNaN(v2) ? -1 : v1 - v2;
                if ("Int" == dataType) return v1 = parseInt(v1), v2 = parseInt(v2), isNaN(v1) ? 1 : isNaN(v2) ? -1 : v1 - v2;
                v1 = oThis.gridComp.getString(v1, ""), v2 = oThis.gridComp.getString(v2, "");
                try {
                    return v1.localeCompare(v2);
                } catch (e) {
                    return 0;
                }
            }) : "desc" == sortType ? this.rows.sort(function(a, b) {
                var v1 = $(a.value).attr(field), v2 = $(b.value).attr(field);
                if ("Float" == dataType) return v1 = parseFloat(v1), v2 = parseFloat(v2), isNaN(v1) ? 1 : isNaN(v2) ? -1 : v1 - v2;
                if ("Int" == dataType) return v1 = parseInt(v1), v2 = parseInt(v2), isNaN(v1) ? 1 : isNaN(v2) ? -1 : v1 - v2;
                v1 = oThis.gridComp.getString(v1, ""), v2 = oThis.gridComp.getString(v2, "");
                try {
                    return v1.localeCompare(v2);
                } catch (e) {
                    return 0;
                }
            }) : (this.rows = new Array(), this.options.values && $.each(this.options.values, function(i) {
                var rowObj = {};
                rowObj.value = this, rowObj.valueIndex = i, oThis.rows.push(rowObj);
            }));
        }, sortFunObj = exports.sortFunObj = {
            sort_initEventFun: sort_initEventFun,
            sort_initGridEventFun: sort_initGridEventFun,
            re_basicSortRows: re_basicSortRows,
            canSortable: canSortable,
            deleteOneRowTree: re_deleteOneRowTree,
            sortRowsByPrio: sortRowsByPrio
        };
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports, __webpack_require__(13), __webpack_require__(14), __webpack_require__(0), __webpack_require__(15), __webpack_require__(2), __webpack_require__(16), __webpack_require__(17), __webpack_require__(18), __webpack_require__(19), __webpack_require__(12), __webpack_require__(6), __webpack_require__(32), __webpack_require__(21), __webpack_require__(22), __webpack_require__(7), __webpack_require__(23), __webpack_require__(24), __webpack_require__(25), __webpack_require__(26), __webpack_require__(27), __webpack_require__(28), __webpack_require__(8), __webpack_require__(30), __webpack_require__(31), __webpack_require__(29), __webpack_require__(3) ], 
        __WEBPACK_AMD_DEFINE_FACTORY__ = factory, void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports, _gridCompCreate, _gridCompCreateCal, _gridCompEvent, _gridCompGet, _gridCompInit, _gridCompOperateRow, _gridCompRenderType, _gridCompSet, _gridCompWDChange, _gridCompClick, _gridCompOther, _ut_utility, _re_gridCompColMenu, _re_gridCompDrag, _re_gridCompEdit, _re_gridCompEditForm, _re_gridCompFixed, _re_gridCompFormShow, _re_gridCompHeaderLevel, _re_gridCompLocalStorage, _re_gridCompOverWidthHidden, _re_gridCompSort, _re_gridCompSumRow, _re_gridCompSwap, _re_gridCompRowDrag, _re_gridCompTree) {
        "use strict";
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.gridComp = void 0;
        var gridComp = function gridComp(ele, options) {
            _classCallCheck(this, gridComp), this.init(ele, options), this.initGrid();
        }, gridCompProto = gridComp.prototype;
        Object.assign(gridCompProto, _gridCompCreate.createFunObj), Object.assign(gridCompProto, _gridCompCreateCal.createCalFunOjb), 
        Object.assign(gridCompProto, _gridCompEvent.eventFunObj), Object.assign(gridCompProto, _gridCompGet.getFunObj), 
        Object.assign(gridCompProto, _gridCompInit.initFunObj), Object.assign(gridCompProto, _gridCompOperateRow.operateRowFunObj), 
        Object.assign(gridCompProto, _gridCompRenderType.renderTypeFunObj), Object.assign(gridCompProto, _gridCompSet.setFunObj), 
        Object.assign(gridCompProto, _gridCompWDChange.wdChangeFunObj), Object.assign(gridCompProto, _gridCompClick.clickFunObj), 
        Object.assign(gridCompProto, _gridCompOther.otherFunObj), Object.assign(gridCompProto, _ut_utility.utilFunOjb);
        var oldInitGridCompColumn = gridCompProto.initGridCompColumn, oldInitEventFun = gridCompProto.initEventFun, oldInitGridEventFun = gridCompProto.initGridEventFun;
        gridCompProto.initGridCompColumnColumnMenuFun = _re_gridCompColMenu.re_initGridCompColumnColumnMenuFun, 
        gridCompProto.initGridCompColumn = function() {
            oldInitGridCompColumn.apply(this, arguments), _re_gridCompColMenu.colMenu_initGridCompColumn.apply(this, arguments);
        }, gridCompProto.createColumnMenu = _re_gridCompColMenu.re_createColumnMenu, gridCompProto.initEventFun = function() {
            oldInitEventFun.apply(this, arguments), _re_gridCompColMenu.colMenu_initEventFun.apply(this, arguments);
        }, gridCompProto.initGridEventFun = function() {
            oldInitGridEventFun.apply(this, arguments), _re_gridCompColMenu.colMenu_initGridEventFun.apply(this, arguments);
        }, void 0 === gridCompProto.saveGridCompColumnArrToLocal && (gridCompProto.saveGridCompColumnArrToLocal = function() {}), 
        void 0 === gridCompProto.clearLocalData && (gridCompProto.clearLocalData = function() {});
        var oldInitEventFun_grag = gridCompProto.initEventFun, oldInitGridEventFun_grag = gridCompProto.initGridEventFun;
        Object.assign(gridCompProto, _re_gridCompDrag.dragFunObj), gridCompProto.initEventFun = function() {
            oldInitEventFun_grag.apply(this, arguments), _re_gridCompDrag.dragFunObj.drag_initEventFun.apply(this, arguments);
        }, gridCompProto.initGridEventFun = function() {
            oldInitGridEventFun_grag.apply(this, arguments), _re_gridCompDrag.dragFunObj.drag_initGridEventFun.apply(this, arguments);
        }, void 0 === gridCompProto.saveGridCompColumnArrToLocal && (gridCompProto.saveGridCompColumnArrToLocal = function() {});
        var oldInitEventFun_edit = gridCompProto.initEventFun;
        Object.assign(gridCompProto, _re_gridCompEdit.eidtFunObj), void 0 === gridCompProto.formEditCell && (gridCompProto.formEditCell = function() {}), 
        gridCompProto.initEventFun = function() {
            oldInitEventFun_edit.apply(this, arguments), _re_gridCompEdit.eidtFunObj.edit_initEventFun.apply(this, arguments);
        };
        var oldInitDefault = gridCompProto.initDefault, oldSetRequired = gridCompProto.setRequired;
        Object.assign(gridCompProto, _re_gridCompEditForm.editFromFunObj), gridCompProto.initDefault = function() {
            oldInitDefault.apply(this, arguments), _re_gridCompEditForm.editFromFunObj.editForm_initDefault.apply(this, arguments);
        }, gridCompProto.setRequired = function() {
            oldSetRequired.apply(this, arguments), _re_gridCompEditForm.editFromFunObj.editForm_setRequired.apply(this, arguments);
        };
        var oldColumnsVisibleFun = gridCompProto.columnsVisibleFun;
        Object.assign(gridCompProto, _re_gridCompFixed.fixFunObj), gridCompProto.columnsVisibleFun = function() {
            oldColumnsVisibleFun.apply(this, arguments), _re_gridCompFixed.fixFunObj.fixed_columnsVisibleFun.apply(this, arguments);
        }, Object.assign(gridCompProto, _re_gridCompFormShow.formShowFunOjb), Object.assign(gridCompProto, _re_gridCompHeaderLevel.headerLevelFunObj), 
        Object.assign(gridCompProto, _re_gridCompLocalStorage.localStorageFunObj), Object.assign(gridCompProto, _re_gridCompOverWidthHidden.overWidthHiddenFunObj);
        var oldInitEventFun_sort = gridCompProto.initEventFun, oldInitGridEventFun_sort = gridCompProto.initGridEventFun;
        Object.assign(gridCompProto, _re_gridCompSort.sortFunObj), gridCompProto.initEventFun = function() {
            oldInitEventFun_sort.apply(this, arguments), _re_gridCompSort.sortFunObj.sort_initEventFun.apply(this, arguments);
        }, gridCompProto.initGridEventFun = function() {
            oldInitGridEventFun_sort.apply(this, arguments), _re_gridCompSort.sortFunObj.sort_initGridEventFun.apply(this, arguments);
        }, Object.assign(gridCompProto, _re_gridCompSumRow.sumRowFunObj);
        var oldInitEventFun_swap = gridCompProto.initEventFun, oldInitGridEventFun_swap = gridCompProto.initGridEventFun;
        Object.assign(gridCompProto, _re_gridCompSwap.swapFunObj), gridCompProto.initEventFun = function() {
            oldInitEventFun_swap.apply(this, arguments), _re_gridCompSwap.swapFunObj.swap_initEventFun.apply(this, arguments);
        }, gridCompProto.initGridEventFun = function() {
            oldInitGridEventFun_swap.apply(this, arguments), _re_gridCompSwap.swapFunObj.swap_initGridEventFun.apply(this, arguments);
        };
        var oldInitGridEventFun_rowDrag = gridCompProto.initGridEventFun;
        Object.assign(gridCompProto, _re_gridCompRowDrag.rowDragFunObj), gridCompProto.initGridEventFun = function() {
            oldInitGridEventFun_rowDrag.apply(this, arguments), _re_gridCompRowDrag.rowDragFunObj.rowDrag_initGridEventFun.apply(this, arguments);
        }, Object.assign(gridCompProto, _re_gridCompTree.treeFunObj), exports.gridComp = gridComp;
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var init = function init(options, gridComp) {
            var gridOptions = gridComp.options;
            this.gridGetBoolean = gridComp.getBoolean, this.defaults = {
                width: "200",
                sortable: !0,
                canDrag: !0,
                fixed: !1,
                visible: !0,
                canVisible: !0,
                sumCol: !1,
                editable: !0,
                editFormShow: !0,
                autoExpand: !1,
                editType: "text",
                dataType: "String",
                format: "YYYY-MM-DD hh:mm:ss",
                headerLevel: 1,
                hiddenLevel: 1,
                textAlign: "left"
            };
            var gridDefault = {
                sortable: gridOptions.sortable,
                canDrag: gridOptions.canDrag,
                width: gridOptions.columnWidth
            };
            "Date" == options.dataType && (this.defaults.format = "YYYY-MM-DD"), options = this.initTree(options, gridOptions), 
            this.options = $.extend({}, this.defaults, gridDefault, options), this.getBooleanOptions();
            try {
                "string" == typeof this.options.renderType && (this.options.renderType = eval(this.options.renderType));
            } catch (e) {}
            try {
                "string" == typeof this.options.editType && (this.options.editType = eval(this.options.editType));
            } catch (e) {}
            this.options.width = this.options.width, this.firstColumn = !1;
        }, initTree = function(options) {
            return options;
        }, getBooleanOptions = function() {
            this.options.sortable = this.gridGetBoolean(this.options.sortable), this.options.canDrag = this.gridGetBoolean(this.options.canDrag), 
            this.options.fixed = this.gridGetBoolean(this.options.fixed), this.options.visible = this.gridGetBoolean(this.options.visible), 
            this.options.canVisible = this.gridGetBoolean(this.options.canVisible), this.options.sumCol = this.gridGetBoolean(this.options.sumCol), 
            this.options.editable = this.gridGetBoolean(this.options.editable), this.options.editFormShow = this.gridGetBoolean(this.options.editFormShow), 
            this.options.autoExpand = this.gridGetBoolean(this.options.autoExpand);
        }, initFunObj = exports.initFunObj = {
            init: init,
            initTree: initTree,
            getBooleanOptions: getBooleanOptions
        };
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var init = function(options, gridComp) {
            this.defaults = {}, this.gridComp = gridComp, this.options = $.extend({}, this.defaults, options), 
            this.rows = new Array(), this.hasParentRows = new Array(), this.nothasParentRows = new Array();
        }, sortRows = function(field, sortType) {
            "function" == typeof this.gridComp.options.filterDataFun && (this.options.values = this.gridComp.options.filterDataFun.call(this, this.options.values)), 
            this.gridComp.options.showTree ? this.treeSortRows(field, sortType) : this.basicSortRows(field, sortType), 
            this.gridComp.eidtRowIndex = -1;
        }, basicSortRows = function(field, sortType) {
            var oThis = this;
            field && this.gridComp.getColumnByField(field).options.dataType, this.rows = new Array(), 
            this.options.values && $.each(this.options.values, function(i) {
                var rowObj = {};
                rowObj.value = this, rowObj.valueIndex = i, oThis.rows.push(rowObj);
            });
        }, treeSortRows = function(field, sortType) {
            this.basicSortRows(field, sortType);
        }, getSumValue = function(field, gridCompColumn, gridComp) {
            var sumValue = null;
            if (gridCompColumn.options.sumCol && $.each(this.rows, function(i) {
                var v = $(this.value).attr(field);
                "Int" == gridCompColumn.options.dataType ? (v = gridComp.getInt(v, 0), sumValue += parseInt(v)) : (v = gridComp.getFloat(v, 0), 
                sumValue = gridComp.accAdd(sumValue, parseFloat(v)));
            }), "Float" == gridCompColumn.options.dataType && gridCompColumn.options.precision) {
                var o = {};
                o.value = sumValue, o.precision = gridCompColumn.options.precision, sumValue = gridComp.DicimalFormater(o);
            }
            return null != sumValue && void 0 != sumValue && "null" != sumValue && "undefined" != sumValue ? sumValue + "" : "";
        };
        exports.initFunObj = {
            init: init,
            sortRows: sortRows,
            basicSortRows: basicSortRows,
            treeSortRows: treeSortRows,
            getSumValue: getSumValue
        };
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var isDblEvent = function(eventname, dbFun, dbArg, Fun, Arg) {
            if (null != this.currentEventName && this.currentEventName == eventname) dbFun.call(this, dbArg), 
            this.currentEventName = null, this.cleanCurrEventName && clearTimeout(this.cleanCurrEventName); else {
                var oThis = this;
                this.cleanCurrEventName && clearTimeout(this.cleanCurrEventName), this.currentEventName = eventname, 
                this.cleanCurrEventName = setTimeout(function() {
                    oThis.currentEventName = null, Fun.call(oThis, Arg);
                }, 250);
            }
        }, dblClickFun = function(e) {
            if ("function" == typeof this.options.onDblClickFun) {
                var $tr = $(e.target).closest("tr");
                if ($tr[0].id == this.options.id + "_edit_tr") return;
                var index = 0;
                $tr.length > 0 && (index = this.getTrIndex($tr));
                var obj = {};
                obj.gridObj = this, obj.rowObj = this.dataSourceObj.rows[index], obj.rowIndex = index, 
                this.options.onDblClickFun(obj);
            }
        }, clickFun = function(e) {
            var oThis = this, $tr = $(e.target).closest("tr");
            if (!($tr.length > 0 && $tr[0].id == this.options.id + "_edit_tr")) {
                var index = this.getTrIndex($tr);
                if ("function" == typeof this.options.onBeforeClickFun) {
                    var obj = {};
                    if (obj.gridObj = this, obj.rowObj = this.dataSourceObj.rows[index], obj.rowIndex = index, 
                    obj.e = e, !this.options.onBeforeClickFun(obj)) return;
                }
                if (this.clickFunTree(e), $tr.length > 0) {
                    var row = oThis.dataSourceObj.rows[index];
                    if (row) {
                        if (oThis.options.rowClickBan) return;
                        this.clickFunEdit(e, index);
                        oThis.getChildRowIndex(row);
                        !oThis.options.contentFocus && oThis.options.multiSelect || (oThis.dataSourceObj.rows[index].focus && oThis.options.cancelFocus ? oThis.setRowUnFocus(index) : oThis.dataSourceObj.rows[index].focus || oThis.setRowFocus(index)), 
                        !oThis.options.contentSelect && oThis.options.multiSelect || (oThis.dataSourceObj.rows[index].checked && oThis.options.cancelSelect ? oThis.setRowUnselect(index) : oThis.dataSourceObj.rows[index].checked || oThis.setRowSelect(index));
                    }
                }
            }
        }, clickFunTree = function(e) {}, clickFunEdit = function(e) {};
        exports.clickFunObj = {
            isDblEvent: isDblEvent,
            dblClickFun: dblClickFun,
            clickFun: clickFun,
            clickFunTree: clickFunTree,
            clickFunEdit: clickFunEdit
        };
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports, __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports, _gridBrowser) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.createFunObj = void 0;
        var createDivs = function() {
            var styleStr = "", str = "", mobileClass = "";
            this.ele.innerHTML = "", this.options.width ? str += "width:" + this.options.width + ";" : str += "width:auto;", 
            this.options.height ? str += "height:" + this.options.height + ";" : str += "height:auto;", 
            "" != str && (styleStr = 'style="' + str + '"'), _gridBrowser.gridBrowser.isMobile && (mobileClass = "u-grid-mobile");
            var htmlStr = '<div id="' + this.options.id + '" data-role="grid" class="u-grid ' + mobileClass + '" ' + styleStr + ">";
            htmlStr += "</div>", this.ele.insertAdjacentHTML("afterBegin", htmlStr);
            var htmlStr = '<div id="' + this.options.id + '_top" class="u-grid-top"></div>';
            document.body.appendChild($(htmlStr)[0]), this.initEventFun(), this.widthChangeFun();
        }, repaintDivs = function() {
            this.repaintGridDivs(), this.realtimeTableRows = null;
        }, createGridDivs = function() {
            if (!this.createGridFlag) {
                $("#" + this.options.id)[0] && ($("#" + this.options.id)[0].innerHTML = "");
                var htmlStr = '<div id="' + this.options.id + '_grid" class="u-grid-grid">';
                htmlStr += this.createHeader(), htmlStr += this.createContent(), htmlStr += "</div>", 
                $("#" + this.options.id)[0] && $("#" + this.options.id).html(htmlStr), $("#" + this.options.id + "_column_menu").remove(), 
                $(document.body).append(this.createColumnMenu()), this.initGridEventFun(), this.headerFirstClassFun(), 
                this.showType = "grid", this.afterGridDivsCreate(), this.createGridFlag = !0, this.realtimeTableRows = null;
            }
        }, repaintGridDivs = function() {
            $("#" + this.options.id + "_grid").remove(null, !0), this.showType = "", this.wholeWidth = 0, 
            this.createGridFlag = !1, this.columnsVisibleFun(), this.widthChangeFun(), this.realtimeTableRows = null;
        }, createColumnMenu = function() {
            return "";
        }, createHeader = function() {
            var headerShowStr = "";
            this.options.showHeader || (headerShowStr = 'style="display:none;"');
            var htmlStr = '<div class="u-grid-header" id="' + this.options.id + '_header" ' + headerShowStr + '><div class="u-grid-header-wrap" id="' + this.options.id + '_header_wrap" data-role="resizable" >';
            return this.options.columnMenu && (htmlStr += '<div class="u-grid-header-columnmenu uf uf-navmenu-light"></div>'), 
            (this.options.multiSelect || this.options.showNumCol) && (htmlStr += '<div id="' + this.options.id + '_header_left" class="u-grid-header-left" style="width:' + this.leftW + 'px;">', 
            this.options.multiSelect && (_gridBrowser.gridBrowser.isIE8 ? htmlStr += '<div class="u-grid-header-multi-select" style="width:' + this.multiSelectWidth + 'px;"><span class="u-grid-checkbox-outline" id="' + this.options.id + '_header_multi_input"><span class="u-grid-checkbox-tick-outline"></span></span></div>' : htmlStr += '<div class="u-grid-header-multi-select  checkbox check-success" style="width:' + this.multiSelectWidth + 'px;"><span class="u-grid-checkbox-outline" id="' + this.options.id + '_header_multi_input"><span class="u-grid-checkbox-tick-outline"></span></span></div>'), 
            this.options.showNumCol && (htmlStr += '<div class="u-grid-header-num" style="width:' + this.numWidth + 'px;"></div>'), 
            htmlStr += "</div>"), htmlStr += this.createHeaderTableFixed(), htmlStr += this.createHeaderTable(), 
            htmlStr += "</div>", htmlStr += this.createHeaderDrag(), htmlStr += "</div>";
        }, createHeaderTable = function(createFlag) {
            var leftW, positionStr, idStr;
            if ("fixed" == createFlag ? (leftW = parseInt(this.leftW), positionStr = "absolute;width:" + this.fixedWidth + "px;z-index:11;background:#F9F9F9;", 
            idStr = "fixed_") : (leftW = "right" == this.options.fixedFloat ? parseInt(this.leftW) : parseInt(this.leftW) + parseInt(this.fixedWidth), 
            positionStr = "relative;", idStr = "", this.contentMinWidth > 0 && (positionStr += "width:" + this.contentMinWidth + "px;")), 
            "fixed" == createFlag && "right" == this.options.fixedFloat) var htmlStr = '<table role="grid" id="' + this.options.id + "_header_" + idStr + 'table" style="position:' + positionStr + ';right:0px;">'; else var htmlStr = '<table role="grid" id="' + this.options.id + "_header_" + idStr + 'table" style="position:' + positionStr + ";left:" + leftW + 'px;">';
            return htmlStr += this.createColgroup(createFlag), htmlStr += '<thead role="rowgroup" id="' + this.options.id + "_header_" + idStr + 'thead">', 
            htmlStr += this.createThead(createFlag), htmlStr += "</thead></table>";
        }, createHeaderTableFixed = function() {
            return "";
        }, createHeaderDrag = function() {
            return "";
        }, createColgroup = function(createFlag) {
            var gridCompColumnArr, oThis = this, htmlStr = "<colgroup>";
            return gridCompColumnArr = "fixed" == createFlag ? this.gridCompColumnFixedArr : this.gridCompColumnArr, 
            $.each(gridCompColumnArr, function() {
                this.options.visible && (htmlStr += "<col", this.options.autoExpand || (htmlStr += ' style="width:' + oThis.formatWidth(this.options.width) + '"'), 
                htmlStr += ">");
            }), htmlStr += "</colgroup>";
        }, createThead = function(createFlag) {
            var gridCompColumnArr, oThis = this, visibleIndex = 0, trStyle = "", thLevelClass = "";
            this.options.maxHeaderLevel > 1 && (trStyle = 'style="height:' + (this.headerHeight - 1) + 'px;"', 
            thLevelClass = " u-grid-header-level-th ");
            var htmlStr = '<tr role="row" ' + trStyle + ">";
            return gridCompColumnArr = "fixed" == createFlag ? this.gridCompColumnFixedArr : this.gridCompColumnArr, 
            $.each(gridCompColumnArr, function(i) {
                var vi = visibleIndex, displayStyle = "";
                0 == this.options.visible ? (vi = -1, displayStyle = 'style="display:none;"') : visibleIndex++, 
                htmlStr += '<th role="columnheader" data-filed="' + this.options.field + '" rowspan="1" class="u-grid-header-th ' + thLevelClass + '" ' + displayStyle + 'field="' + this.options.field + '" index="' + i + '" visibleIndex="' + vi + '"><div style="position:relative;" class="u-grid-header-div">';
                var colorStype = "";
                if (this.options.headerColor || oThis.options.headerHeight) {
                    var headerC = "", headerH = "";
                    this.options.headerColor && (headerC = "color:" + this.options.headerColor + ";"), 
                    oThis.options.headerHeight && (headerH = "height:" + oThis.options.headerHeight + "px;line-height:" + oThis.options.headerHeight + "px;"), 
                    colorStype = 'style="' + headerC + headerH + '"';
                }
                htmlStr += '<div class="u-grid-header-link" field="' + this.options.field + '"  ' + colorStype + ">" + this.options.title + "</div>", 
                htmlStr += "</div></th>";
            }), htmlStr += "</tr>";
        }, createContent = function() {
            var h = "", displayStr = "", bottonStr = "", lbw = 0;
            if (this.countContentHeight) {
                var wh = $("#" + this.options.id)[0].offsetHeight;
                this.wholeHeight = wh, wh > 0 && (this.contentHeight = parseInt(wh) - this.exceptContentHeight - 1 > 0 ? parseInt(wh) - this.exceptContentHeight - 1 : 0, 
                this.contentHeight > 0 && (h = 'style="height:' + this.contentHeight + 'px;"'));
            }
            var htmlStr = '<div id="' + this.options.id + '_content" class="u-grid-content" ' + h + ">";
            return (this.options.showNumCol || this.options.multiSelect) && (htmlStr += this.createContentLeft(), 
            this.contentWidth > this.contentMinWidth || (displayStr = "display:none;", bottonStr = "bottom:0px;"), 
            htmlStr += this.createContentSumRow(bottonStr), u.isIOS && (displayStr += "width:0px;"), 
            lbw = "right" == this.options.fixedFloat ? this.leftW : this.leftW + this.fixedWidth, 
            htmlStr += '<div class="u-grid-content-left-bottom" id="' + this.options.id + '_content_left_bottom" style="width:' + lbw + "px;" + displayStr + '">', 
            htmlStr += "</div>"), htmlStr += this.createContentTableFixed(), htmlStr += this.createContentTable(), 
            htmlStr += "</div>";
        }, createContentSumRow = function() {
            return "";
        }, createContentLeft = function() {
            var oThis = this, htmlStr = "", left = 0, sumRowClass = "", topStr = "";
            return this.options.showSumRow && this.options.sumRowFirst && this.options.sumRowHeight && (topStr = "top:" + this.options.sumRowHeight + "px"), 
            this.options.showSumRow && (sumRowClass = "u-grid-content-left-sum", this.options.sumRowFirst && (sumRowClass += " u-grid-content-left-sum-first")), 
            this.options.multiSelect && (htmlStr += '<div class="u-grid-content-left ' + sumRowClass + '" id="' + this.options.id + '_content_multiSelect" style="width:' + this.multiSelectWidth + "px;" + topStr + '">', 
            this.dataSourceObj.rows && $.each(this.dataSourceObj.rows, function(i) {
                htmlStr += oThis.createContentLeftMultiSelectRow(this);
            }), htmlStr += "</div>", left += this.multiSelectWidth), this.options.showNumCol && (htmlStr += '<div class="u-grid-content-left ' + sumRowClass + '" id="' + this.options.id + '_content_numCol" style="width:' + this.numWidth + "px;left:" + left + "px;" + topStr + '">', 
            this.dataSourceObj.rows && $.each(this.dataSourceObj.rows, function(i, row) {
                htmlStr += oThis.createContentLeftNumColRow(i, row.value);
            }), htmlStr += "</div>"), htmlStr;
        }, createContentLeftMultiSelectRow = function(row, displayFlag) {
            var displayStr = "";
            !this.options.autoExpand && row.level > 0 && "block" != displayFlag && (displayStr = "display:none;");
            var tmpcheck = row.value["$_#_@_id"];
            tmpcheck || (tmpcheck = setTimeout(function() {}));
            var rootObj = row.value, objAry = this.selectRows, re = objCompare(rootObj, objAry);
            if (_gridBrowser.gridBrowser.isIE8) var htmlStr = '<div style="width:' + this.multiSelectWidth + "px;" + displayStr + '" class="u-grid-content-multiSelect " ><span class="u-grid-checkbox-outline" id="checkbox' + tmpcheck + '" value="1"><span class="u-grid-checkbox-tick-outline"></span></span></div>'; else if (re) var htmlStr = '<div style="width:' + this.multiSelectWidth + "px;" + displayStr + '" class="u-grid-content-multiSelect checkbox check-success u-grid-content-sel-row" ><span class="u-grid-checkbox-outline  is-checked" id="checkbox' + tmpcheck + '" value="1"><span class="u-grid-checkbox-tick-outline"></span></span></div>'; else var htmlStr = '<div style="width:' + this.multiSelectWidth + "px;" + displayStr + '" class="u-grid-content-multiSelect checkbox check-success" ><span class="u-grid-checkbox-outline" id="checkbox' + tmpcheck + '" value="1"><span class="u-grid-checkbox-tick-outline"></span></span></div>';
            return htmlStr;
        }, createContentLeftNumColRow = function(index) {
            var row = this.dataSourceObj.rows[index], rootObj = row.value, objAry = this.selectRows, re = objCompare(rootObj, objAry);
            return re ? '<div style="width:' + this.numWidth + 'px;" class="u-grid-content-num  u-grid-content-sel-row">' + (index + 1) + "</div>" : '<div style="width:' + this.numWidth + 'px;" class="u-grid-content-num">' + (index + 1) + "</div>";
        }, createContentTable = function(createFlag) {
            var leftW, idStr, styleStr, hStr, cssStr, tableStyleStr;
            hStr = this.countContentHeight && parseInt(this.contentHeight) > 0 ? "height:" + this.contentHeight + "px;" : "", 
            "fixed" == createFlag ? (leftW = parseInt(this.leftW), idStr = "fixed_", cssStr = "fixed-", 
            styleStr = "right" == this.options.fixedFloat ? 'style="position:absolute;width:' + this.fixedWidth + "px;right:0px;" + hStr + '"' : 'style="position:absolute;width:' + this.fixedWidth + "px;left:" + leftW + "px;" + hStr + '"', 
            tableStyleStr = 'style="width:' + this.fixedWidth + 'px;"') : (leftW = "right" == this.options.fixedFloat ? parseInt(this.leftW) : parseInt(this.leftW) + parseInt(this.fixedWidth, 0), 
            idStr = "", cssStr = "", styleStr = 'style="position:relative;left:' + leftW + "px;" + hStr, 
            this.contentMinWidth > 0 && (styleStr += "width:" + this.contentMinWidth + "px;"), 
            this.options.noScroll && (styleStr += "overflow-x:hidden;"), styleStr += '"', tableStyleStr = "", 
            this.contentMinWidth > 0 && (tableStyleStr = this.contentWidth > 0 ? 'style="min-width:' + this.contentMinWidth + "px;width:" + this.contentWidth + 'px;"' : 'style="min-width:' + this.contentMinWidth + 'px;"'));
            var htmlStr = '<div id="' + this.options.id + "_content_" + idStr + 'div" class="u-grid-content-' + cssStr + 'div" ' + styleStr + ">";
            return htmlStr += '<div style="height:30px;position:absolute;top:-30px;width:100%;z-index:-1;"></div><table role="grid" id="' + this.options.id + "_content_" + idStr + 'table" ' + tableStyleStr + ">", 
            htmlStr += this.createColgroup(createFlag), htmlStr += '<thead role="rowgroup" id="' + this.options.id + "_content_" + idStr + 'thead" style="display:none">', 
            htmlStr += this.createThead(createFlag), htmlStr += "</thead>", htmlStr += this.createContentRows(createFlag), 
            htmlStr += "</table>", "fixed" != createFlag && (htmlStr += this.createNoRowsDiv()), 
            htmlStr += "</div>";
        }, createContentTableFixed = function() {
            return "";
        }, createNoRowsDiv = function() {
            var styleStr = "", styleStr1 = "";
            this.contentMinWidth > 0 && (styleStr += 'style="width:' + this.contentMinWidth + 'px;"'), 
            this.contentWidth > 0 && (styleStr1 += 'style="width:' + this.contentWidth + 'px;"');
            var htmlStr = '<div class="u-grid-noRowsDiv"' + styleStr1 + ' id="' + this.options.id + '_noRows"></div>';
            return htmlStr += '<div class="u-grid-noRowsShowDiv"' + styleStr + ' id="' + this.options.id + '_noRowsShow">' + this.transMap.ml_no_rows + "</div>";
        }, createContentRows = function(createFlag) {
            var idStr, oThis = this, htmlStr = "";
            return idStr = "fixed" == createFlag ? "fixed_" : "", this.dataSourceObj.rows && (htmlStr += '<tbody role="rowgroup" id="' + this.options.id + "_content_" + idStr + 'tbody">', 
            this.options.sumRowFirst && (htmlStr += this.createContentRowsSumRow(createFlag)), 
            $.each(this.dataSourceObj.rows, function(i) {
                htmlStr += oThis.createContentOneRow(this, createFlag);
            }), this.options.sumRowFirst || (htmlStr += this.createContentRowsSumRow(createFlag)), 
            htmlStr += "</tbody>"), htmlStr;
        }, createContentRowsSumRow = function() {
            return "";
        }, createContentOneRow = function(row, createFlag, displayFlag) {
            var styleStr = "";
            !this.options.autoExpand && row.level > 0 && "block" != displayFlag && (styleStr = 'style="display:none"');
            var rootObj = row.value, objAry = this.selectRows, re = objCompare(rootObj, objAry), htmlStr = "", classStr = "";
            return this.options.showTree && (row.hasChild ? classStr += " u-grid-content-parent-row " : classStr += " u-grid-content-leaf-row ", 
            0 == row.level ? classStr += " u-grid-content-level0-row " : classStr += " u-grid-content-levelother-row "), 
            re && (classStr += "u-grid-content-sel-row"), htmlStr = '<tr role="row" class="' + classStr + '" ' + styleStr + ">", 
            htmlStr += this.createContentOneRowTd(row, createFlag), htmlStr += "</tr>";
        }, createContentOneRowForIE = function(table, index, rowObj, createFlag, displayFlag) {
            var row = table.insertRow(index + 1);
            row.setAttribute("role", "row"), !this.options.autoExpand && rowObj.level > 0 && "block" != displayFlag && (row.style.display = "none"), 
            this.options.showTree && (row.hasChild ? $(row).addClass("u-grid-content-parent-row") : $(row).addClass("u-grid-content-leaf-row"), 
            0 == row.level ? $(row).addClass("u-grid-content-level0-row") : $(row).addClass("u-grid-content-levelother-row")), 
            this.createContentOneRowTdForIE(row, rowObj, createFlag);
        }, repaintRow = function(rowIndex) {
            var tr = $("#" + this.options.id + "_content_tbody").find('tr[role="row"]')[rowIndex], fixedtr = $("#" + this.options.id + "_content_fixed_tbody").find('tr[role="row"]')[rowIndex], row = this.dataSourceObj.rows[rowIndex], $tr = $(tr), index = this.getTrIndex($tr);
            if (_gridBrowser.gridBrowser.isIE8 || _gridBrowser.gridBrowser.isIE9) {
                var table = $("#" + this.options.id + "_content_table")[0], fixedtable = $("#" + this.options.id + "_content_fixed_table")[0], className = tr.className, fixclassName = fixedtr.className;
                table.deleteRow(rowIndex + 1), fixedtable.deleteRow(rowIndex + 1);
                var tr = table.insertRow(rowIndex + 1);
                u.addClass(tr, className);
                var fixedtr = fixedtable.insertRow(rowIndex + 1);
                u.addClass(fixedtr, fixclassName), this.createContentOneRowTdForIE(tr, row), this.createContentOneRowTdForIE(fixedtr, row, "fixed");
            } else tr.innerHTML = this.createContentOneRowTd(row), fixedtr && (fixedtr.innerHTML = this.createContentOneRowTd(row, "fixed"));
            var obj = {};
            obj.begin = index, obj.length = 1, this.renderTypeFun(obj);
        }, createContentOneRowTd = function(row, createFlag) {
            var gridCompColumnArr, oThis = this, htmlStr = "", value = row.value;
            return gridCompColumnArr = "fixed" == createFlag ? this.gridCompColumnFixedArr : this.gridCompColumnArr, 
            $.each(gridCompColumnArr, function() {
                var f = this.options.field, v = $(value).attr(f);
                v = oThis.getString(v, ""), "object" == $.type(v) && (v = v.showValue);
                var treeStyle = (this.options.renderType, ""), spanStr = "", iconStr = "", tdStyle = "";
                if (oThis.options.showTree && this.firstColumn) {
                    var l = parseInt(oThis.treeLeft) * parseInt(row.level);
                    treeStyle = 'style="position:relative;', row.hasChild ? spanStr = oThis.options.autoExpand ? '<span class=" uf uf-reduce-s-o u-grid-content-tree-span"></span>' : '<span class=" uf uf-add-s-o u-grid-content-tree-span"></span>' : l += 16, 
                    treeStyle += "text-align:" + this.options.textAlign + ";", treeStyle += "left:" + l + 'px;"';
                } else treeStyle += 'style="text-align:' + this.options.textAlign + '";';
                this.options.visible ? oThis.options.rowHeight && (tdStyle += 'style="height:' + oThis.options.rowHeight + "px;line-height:" + oThis.options.rowHeight + 'px;"') : (tdStyle = 'style="display:none;', 
                oThis.options.rowHeight && (tdStyle += "height:" + oThis.options.rowHeight + "px;line-height:" + oThis.options.rowHeight + "px;"), 
                tdStyle += '"'), this.options.icon && (iconStr = '<span class="' + this.options.icon + '"></span>'), 
                htmlStr += '<td role="rowcell"  ' + tdStyle + ' ><div class="u-grid-content-td-div" ' + treeStyle + ">" + spanStr + iconStr + "<span>" + v.replace(/\</g, "&lt;").replace(/\>/g, "&gt;") + "</span></div></td>";
            }), htmlStr;
        }, createContentOneRowTdForIE = function(row, rowObj, createFlag) {
            var gridCompColumnArr, oThis = this, value = rowObj.value;
            gridCompColumnArr = "fixed" == createFlag ? this.gridCompColumnFixedArr : this.gridCompColumnArr, 
            $.each(gridCompColumnArr, function() {
                var f = this.options.field, v = $(value).attr(f), v = oThis.getString(v, "");
                "object" == $.type(v) && (v = v.showValue);
                var treeStyle = (this.options.renderType, ""), spanStr = "", iconStr = "", htmlStr = "", newCell = row.insertCell();
                if (newCell.setAttribute("role", "rowcell"), oThis.options.showTree && this.firstColumn) {
                    var l = parseInt(oThis.treeLeft) * parseInt(rowObj.level);
                    treeStyle = 'style="position:relative;', rowObj.hasChild ? spanStr = oThis.options.autoExpand ? '<span class=" uf uf-reduce-s-o u-grid-content-tree-span"></span>' : '<span class=" uf uf-add-s-o u-grid-content-tree-span"></span>' : l += 18, 
                    treeStyle += "left:" + l + 'px;"';
                }
                this.options.visible || (newCell.style.display = "none"), oThis.options.rowHeight && (newCell.style.height = oThis.options.rowHeight + "px", 
                newCell.style.lineHeight = oThis.options.rowHeight + "px"), this.options.icon && (iconStr = '<span class="' + this.options.icon + '"></span>'), 
                htmlStr += '<div class="u-grid-content-td-div" ' + treeStyle + ">" + spanStr + iconStr + "<span>" + v.replace(/\</g, "&lt;").replace(/\>/g, "&gt;") + "</span></div>", 
                newCell.insertAdjacentHTML("afterBegin", htmlStr);
            });
        }, repairContent = function() {
            var $pDiv = $("#" + this.options.id + "_content").parent();
            if ($("#" + this.options.id + "_content").remove(null, !0), $pDiv[0]) {
                var htmlStr = this.createContent();
                $pDiv[0].insertAdjacentHTML("beforeEnd", htmlStr), this.renderTypeFun(), this.initContentDivEventFun(), 
                $("#" + this.options.id + "_content_div")[0] && ($("#" + this.options.id + "_content_div")[0].scrollLeft = this.scrollLeft), 
                $("#" + this.options.id + "_content_edit_menu").css("display", "none");
            }
            this.realtimeTableRows = null;
        }, objCompare = function(rootObj, objAry) {
            for (var aryLen = objAry.length, matchNum = 0, i = 0; i < aryLen; i++) {
                matchNum += rootObj == objAry[i] ? 1 : 0;
            }
            return matchNum > 0;
        };
        exports.createFunObj = {
            createDivs: createDivs,
            repaintDivs: repaintDivs,
            createGridDivs: createGridDivs,
            repaintGridDivs: repaintGridDivs,
            createColumnMenu: createColumnMenu,
            createHeader: createHeader,
            createHeaderTable: createHeaderTable,
            createHeaderTableFixed: createHeaderTableFixed,
            createHeaderDrag: createHeaderDrag,
            createColgroup: createColgroup,
            createThead: createThead,
            createContent: createContent,
            createContentSumRow: createContentSumRow,
            createContentLeft: createContentLeft,
            createContentLeftMultiSelectRow: createContentLeftMultiSelectRow,
            createContentLeftNumColRow: createContentLeftNumColRow,
            createContentTable: createContentTable,
            createContentTableFixed: createContentTableFixed,
            createNoRowsDiv: createNoRowsDiv,
            createContentRows: createContentRows,
            createContentRowsSumRow: createContentRowsSumRow,
            createContentOneRow: createContentOneRow,
            createContentOneRowForIE: createContentOneRowForIE,
            repaintRow: repaintRow,
            createContentOneRowTd: createContentOneRowTd,
            createContentOneRowTdForIE: createContentOneRowTdForIE,
            repairContent: repairContent
        };
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var trHoverFun = function(index) {
            var oThis = this;
            if ($("#" + oThis.options.id + "_content_tbody").find('tr[role="row"]').removeClass("u-grid-move-bg"), 
            $("#" + oThis.options.id + "_content_fixed_tbody").find('tr[role="row"]').removeClass("u-grid-move-bg"), 
            oThis.options.multiSelect && $("#" + oThis.options.id + "_content_multiSelect").find("div").removeClass("u-grid-move-bg"), 
            oThis.options.showNumCol && $("#" + oThis.options.id + "_content_numCol").find("div").removeClass("u-grid-move-bg"), 
            index > -1) {
                var $tr = $("#" + oThis.options.id + "_content_tbody").find('tr[role="row"]').eq(index);
                if ($tr[0].id && $tr[0].id == oThis.options.id + "_edit_tr") return;
                if ($("#" + oThis.options.id + "_content_tbody").find('tr[role="row"]').eq(index).addClass("u-grid-move-bg"), 
                $("#" + oThis.options.id + "_content_fixed_tbody").find('tr[role="row"]').eq(index).addClass("u-grid-move-bg"), 
                oThis.options.multiSelect && $("#" + oThis.options.id + "_content_multiSelect").find("div").eq(index).addClass("u-grid-move-bg"), 
                oThis.options.showNumCol && $("#" + oThis.options.id + "_content_numCol").find("div").eq(index).addClass("u-grid-move-bg"), 
                "function" == typeof oThis.options.onRowHover && !$tr.is(".u-grid-content-sum-row")) {
                    var obj = {};
                    obj.gridObj = oThis, obj.rowObj = oThis.dataSourceObj.rows[index], obj.rowIndex = index, 
                    oThis.options.onRowHover(obj);
                }
            }
        }, setIntervalFun = function(e) {
            this.widthChangeFun(), this.heightChangeFun(), this.editorRowChangeFun();
        }, editorRowChangeFun = function() {}, afterGridDivsCreate = function() {
            "grid" == this.showType && (this.columnsVisibleFun(), this.resetThVariable(), this.countRowHeight(), 
            this.noRowsShowFun(), this.renderTypeFun(), this.resetScrollLeft(), this.hideEditMenu(), 
            this.resetLeftHeight(), this.isCheckedHeaderRow(), "function" == typeof this.options.afterCreate && this.options.afterCreate.call(this));
        }, countRowHeight = function() {
            $("#" + this.options.id + "_content_tbody tr")[0] && (this.rowHeight = $("#" + this.options.id + "_content_tbody tr")[0].offsetHeight);
        }, resetLeftHeight = function() {
            var self = this;
            this.resetLeftHeightSetTimeout && clearTimeout(this.resetLeftHeightSetTimeout), 
            this.resetLeftHeightSetTimeout = setTimeout(function() {
                resetLeftHeightFun.call(self);
            }, 100);
        }, resetLeftHeightFun = function() {
            if (this.options.showNumCol || this.options.multiSelect) for (var $trs = $("#" + this.options.id + "_content_tbody tr"), $leftNums = $("#" + this.options.id + "_content_numCol div"), $leftSelects = $("#" + this.options.id + "_content_multiSelect > div"), i = 0; i < $trs.length; i++) {
                var nowRowHeight = $trs[i].offsetHeight;
                $leftNums[i] && ($leftNums[i].style.height = nowRowHeight + "px"), $leftSelects[i] && ($leftSelects[i].style.height = nowRowHeight + "px");
            }
        }, noRowsShowFun = function() {
            this.dataSourceObj.rows && this.dataSourceObj.rows.length > 0 ? ($("#" + this.options.id + "_noRowsShow").css("display", "none"), 
            $("#" + this.options.id + "_noRows").css("display", "none")) : ($("#" + this.options.id + "_noRowsShow").css("display", "block"), 
            $("#" + this.options.id + "_noRows").css("display", "block"));
        }, afterRepaintGrid = function() {
            this.resetScrollLeft(), this.hideEditMenu();
        }, resetScrollLeft = function() {
            if ($("#" + this.options.id + "_content_div")[0]) try {
                $("#" + this.options.id + "_content_div")[0].scrollLeft = this.scrollLeft;
            } catch (e) {}
        }, hideEditMenu = function() {};
        exports.createCalFunOjb = {
            trHoverFun: trHoverFun,
            setIntervalFun: setIntervalFun,
            editorRowChangeFun: editorRowChangeFun,
            afterGridDivsCreate: afterGridDivsCreate,
            countRowHeight: countRowHeight,
            noRowsShowFun: noRowsShowFun,
            afterRepaintGrid: afterRepaintGrid,
            resetScrollLeft: resetScrollLeft,
            hideEditMenu: hideEditMenu,
            resetLeftHeight: resetLeftHeight
        };
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var getColumnAttr = function(attr, field) {
            for (var i = 0; i < this.gridCompColumnArr.length; i++) if (this.gridCompColumnArr[i].options.field == field) return $(this.gridCompColumnArr[i].options).attr(attr);
            for (var i = 0; i < this.gridCompColumnFixedArr.length; i++) if (this.gridCompColumnFixedArr[i].options.field == field) return $(this.gridCompColumnFixedArr[i].options).attr(attr);
            return "";
        }, getColumnByField = function(field) {
            for (var i = 0; i < this.gridCompColumnArr.length; i++) if (this.gridCompColumnArr[i].options.field == field) return this.gridCompColumnArr[i];
            for (var i = 0; i < this.gridCompColumnFixedArr.length; i++) if (this.gridCompColumnFixedArr[i].options.field == field) return this.gridCompColumnFixedArr[i];
            return null;
        }, getIndexOfColumn = function(column) {
            for (var index = -1, i = 0; i < this.gridCompColumnArr.length; i++) if (this.gridCompColumnArr[i] == column) {
                index = i;
                break;
            }
            return index;
        }, getVisibleIndexOfColumn = function(column) {
            for (var index = -1, j = 0, i = 0; i < this.gridCompColumnArr.length; i++) {
                if (this.gridCompColumnArr[i] == column) {
                    "none" != $("#" + this.options.id + "_header").find("th").eq(i).css("display") && (index = j);
                    break;
                }
                "none" != $("#" + this.options.id + "_header").find("th").eq(i).css("display") && j++;
            }
            return index;
        }, getNextVisibleInidexOfColumn = function(column) {
            for (var index = -1, flag = !1, j = 0, i = 0; i < this.gridCompColumnArr.length; i++) {
                if (this.gridCompColumnArr[i] == column && ("none" != $("#" + this.options.id + "_header").find("th").eq(i).css("display") && j++, 
                flag = !0), 1 == flag && "none" != $("#" + this.options.id + "_header").find("th").eq(i).css("display")) {
                    index = j;
                    break;
                }
                "none" != $("#" + this.options.id + "_header").find("th").eq(i).css("display") && j++;
            }
            return index;
        }, getSelectRows = function() {
            return this.selectRows;
        }, getSelectRowsIndex = function() {
            return this.selectRowsIndex;
        }, getFocusRow = function() {
            return this.focusRow;
        }, getFocusRowIndex = function() {
            return this.focusRowIndex;
        }, getAllRows = function() {
            var oThis = this;
            return this.allRows = new Array(), this.dataSourceObj.rows && $.each(this.dataSourceObj.rows, function() {
                oThis.allRows.push(this.value);
            }), this.allRows;
        }, getRowByIndex = function(index) {
            return this.dataSourceObj.rows[index];
        }, getRowIndexByValue = function(field, value) {
            var index = -1;
            return $.each(this.dataSourceObj.rows, function(i) {
                $(this.value).attr(field) == value && (index = i);
            }), index;
        }, getChildRowIndex = function(row) {
            var result = [];
            return $.each(row.childRow, function() {
                result.push(this.valueIndex);
            }), result;
        }, getColumnByVisibleIndex = function(index) {
            for (var nowIndex = -1, i = 0; i < this.gridCompColumnArr.length; i++) {
                var column = this.gridCompColumnArr[i];
                if ("none" != $("#" + this.options.id + "_header").find("th").eq(i).css("display") && nowIndex++, 
                nowIndex == index) return column;
            }
            return null;
        };
        exports.getFunObj = {
            getColumnAttr: getColumnAttr,
            getColumnByField: getColumnByField,
            getIndexOfColumn: getIndexOfColumn,
            getVisibleIndexOfColumn: getVisibleIndexOfColumn,
            getNextVisibleInidexOfColumn: getNextVisibleInidexOfColumn,
            getSelectRows: getSelectRows,
            getSelectRowsIndex: getSelectRowsIndex,
            getFocusRow: getFocusRow,
            getFocusRowIndex: getFocusRowIndex,
            getAllRows: getAllRows,
            getRowByIndex: getRowByIndex,
            getRowIndexByValue: getRowIndexByValue,
            getChildRowIndex: getChildRowIndex,
            getColumnByVisibleIndex: getColumnByVisibleIndex
        };
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var isCheckedHeaderRow = function() {
            0 !== this.selectRows.length && this.selectRows.length == this.dataSourceObj.rows.length ? ($("#" + this.options.id + "_header_multi_input").addClass("is-checked"), 
            this.hasChecked = !0) : ($("#" + this.options.id + "_header_multi_input").removeClass("is-checked"), 
            this.hasChecked = !1);
        }, addOneRow = function(row, index) {
            if ("function" == typeof this.options.filterDataFun) {
                row = this.options.filterDataFun.call(this, [ row ])[0];
            }
            var displayFlag = "none", rowObj = {}, l = this.dataSourceObj.rows.length, endFlag = !1;
            rowObj.value = row;
            var treeObj = this.addOneRowTree(row, index, rowObj);
            index = treeObj.index, displayFlag = treeObj.displayFlag, 0 != index && (index && index > 0 ? l < index && (index = l) : index = 0), 
            l == index && (endFlag = !0), rowObj.valueIndex = index, rowObj.value = row, this.dataSourceObj.rows.splice(index, 0, rowObj), 
            this.dataSourceObj.rows.length > index + 1 && $.each(this.dataSourceObj.rows, function(i) {
                i > index && (this.valueIndex = this.valueIndex + 1);
            });
            var l = 0;
            if (this.options.showTree ? (this.dataSourceObj.options.values ? l = this.dataSourceObj.options.values.length : this.dataSourceObj.options.values = new Array(), 
            this.dataSourceObj.options.values.splice(index, 0, row), this.addOneRowTreeHasChildF(rowObj)) : (this.dataSourceObj.options.values || (this.dataSourceObj.options.values = new Array()), 
            this.dataSourceObj.options.values.splice(index, 0, row)), "grid" == this.showType) {
                this.editClose(), this.updateEditRowIndex("+", index);
                try {
                    var htmlStr = this.createContentOneRow(rowObj, "normal", displayFlag);
                    if (endFlag) $("#" + this.options.id + "_content_tbody")[0].insertAdjacentHTML("beforeEnd", htmlStr); else {
                        var $$tr = $("#" + this.options.id + "_content_tbody").find('tr[role="row"]')[index], $$tbody = $("#" + this.options.id + "_content_tbody")[0];
                        $$tr ? $$tr.insertAdjacentHTML("beforeBegin", htmlStr) : $$tbody && $$tbody.insertAdjacentHTML("afterBegin", htmlStr);
                    }
                    if ($("#" + this.options.id + "_content_fixed_div").length > 0) {
                        var htmlStr = this.createContentOneRow(rowObj, "fixed", displayFlag);
                        if (endFlag) $("#" + this.options.id + "_content_fixed_tbody")[0].insertAdjacentHTML("beforeEnd", htmlStr); else {
                            var $$tr = $("#" + this.options.id + "_content_fixed_tbody").find('tr[role="row"]')[index];
                            $$tr ? $$tr.insertAdjacentHTML("beforeBegin", htmlStr) : $("#" + this.options.id + "_content_fixed_tbody")[0] && $("#" + this.options.id + "_content_fixed_tbody")[0].insertAdjacentHTML("afterBegin", htmlStr);
                        }
                    }
                } catch (e) {
                    var table = $("#" + this.options.id + "_content_div table")[0];
                    table && this.createContentOneRowForIE(table, index, rowObj, "normal", displayFlag);
                    var fixedTable = $("#" + this.options.id + "_content_fixed_div table")[0];
                    fixedTable && this.createContentOneRowForIE(fixedTable, index, rowObj, "fixed", displayFlag);
                }
                if (this.options.multiSelect) {
                    var htmlStr = this.createContentLeftMultiSelectRow(rowObj, displayFlag);
                    if (endFlag) $("#" + this.options.id + "_content_multiSelect")[0].insertAdjacentHTML("beforeEnd", htmlStr); else {
                        var $$div = $("#" + this.options.id + "_content_multiSelect").find("div")[index];
                        $$div ? $$div.insertAdjacentHTML("beforeBegin", htmlStr) : $("#" + this.options.id + "_content_multiSelect")[0].insertAdjacentHTML("afterBegin", htmlStr);
                    }
                }
                if (this.options.showNumCol) {
                    var htmlStr = this.createContentLeftNumColRow(l, row);
                    if (endFlag) $("#" + this.options.id + "_content_numCol")[0].insertAdjacentHTML("beforeEnd", htmlStr); else {
                        var $$div = $("#" + this.options.id + "_content_numCol").find("div")[index];
                        $$div ? $$div.insertAdjacentHTML("beforeBegin", htmlStr) : $("#" + this.options.id + "_content_numCol")[0].insertAdjacentHTML("afterBegin", htmlStr);
                    }
                    this.resetNumCol(), this.updateNumColLastRowFlag();
                }
                this.repairSumRow(), this.noRowsShowFun(), this.updateLastRowFlag(), this.resetLeftHeight();
                var obj = {};
                obj.begin = index, obj.length = 1, this.renderTypeFun(obj);
            }
        }, addOneRowTree = function(row, index) {
            return index;
        }, addOneRowTreeHasChildF = function() {}, editClose = function() {}, addRows = function(rows, index) {
            if (this.$ele.data("gridComp") == this) if (this.options.showTree) for (var l = rows.length, i = 0; i < l; i++) this.addOneRow(rows[i], l); else {
                "function" == typeof this.options.filterDataFun && (rows = this.options.filterDataFun.call(this, rows)), 
                this.editClose();
                var htmlStr = "", htmlStrmultiSelect = "", htmlStrNumCol = "", htmlStrFixed = "", oThis = this, l = this.dataSourceObj.rows.length, endFlag = !1;
                0 != index && (index && index > 0 ? l < index && (index = l) : index = 0), l == index && (endFlag = !0);
                var rowObjArr = new Array();
                if ($.each(rows, function(i) {
                    var rowObj = {};
                    rowObj.value = this, rowObj.valueIndex = index + i, rowObjArr.push(rowObj), oThis.dataSourceObj.rows.splice(index + i, 0, rowObj), 
                    oThis.updateEditRowIndex("+", index + i);
                }), this.dataSourceObj.options.values || (this.dataSourceObj.options.values = new Array()), 
                $.each(rows, function(i) {
                    oThis.dataSourceObj.options.values.splice(index + i, 0, this);
                }), this.dataSourceObj.rows.length > index + rows.length && $.each(this.dataSourceObj.rows, function(i) {
                    i > index + rows.length - 1 && (this.valueIndex = this.valueIndex + rows.length);
                }), "grid" == this.showType && $("#" + this.options.id + "_content_div tbody")[0]) {
                    $.each(rowObjArr, function(i, row) {
                        htmlStr += oThis.createContentOneRow(this), htmlStrFixed += oThis.createContentOneRowFixed(this), 
                        oThis.options.multiSelect && (htmlStrmultiSelect += oThis.createContentLeftMultiSelectRow(this)), 
                        oThis.options.showNumCol && (htmlStrNumCol += oThis.createContentLeftNumColRow(l + i, row.value));
                    });
                    try {
                        endFlag ? $("#" + this.options.id + "_content_div tbody")[0].insertAdjacentHTML("beforeEnd", htmlStr) : $("#" + this.options.id + "_content_div").find("tbody").find('tr[role="row"]')[index] ? $("#" + this.options.id + "_content_div").find("tbody").find('tr[role="row"]')[index].insertAdjacentHTML("beforeBegin", htmlStr) : $("#" + this.options.id + "_content_div tbody")[0] && $("#" + this.options.id + "_content_div tbody")[0].insertAdjacentHTML("afterBegin", htmlStr), 
                        endFlag ? $("#" + this.options.id + "_content_fixed_div tbody")[0].insertAdjacentHTML("beforeEnd", htmlStrFixed) : $("#" + this.options.id + "_content_fixed_div").find("tbody").find('tr[role="row"]')[index] ? $("#" + this.options.id + "_content_fixed_div").find("tbody").find('tr[role="row"]')[index].insertAdjacentHTML("beforeBegin", htmlStrFixed) : $("#" + this.options.id + "_content_fixed_div tbody")[0] && $("#" + this.options.id + "_content_fixed_div tbody")[0].insertAdjacentHTML("afterBegin", htmlStrFixed);
                    } catch (e) {
                        var table = $("#" + this.options.id + "_content_div table")[0], fixedTable = $("#" + this.options.id + "_content_fixed_div table")[0];
                        table && fixedTable && $.each(rowObjArr, function(i) {
                            oThis.createContentOneRowForIE(table, index + i, this), oThis.createContentOneRowForIE(fixedTable, index + i, this, "fixed");
                        });
                    }
                    if (this.options.multiSelect) if (endFlag) $("#" + this.options.id + "_content_multiSelect")[0].insertAdjacentHTML("beforeEnd", htmlStrmultiSelect); else {
                        var _content_multiSelect = $("#" + this.options.id + "_content_multiSelect").find("div")[index];
                        _content_multiSelect ? _content_multiSelect.insertAdjacentHTML("beforeBegin", htmlStrmultiSelect) : $("#" + this.options.id + "_content_multiSelect")[0].insertAdjacentHTML("afterBegin", htmlStrmultiSelect);
                    }
                    if (this.options.showNumCol) {
                        if (endFlag) $("#" + this.options.id + "_content_numCol")[0].insertAdjacentHTML("beforeEnd", htmlStrNumCol); else {
                            var _content_multiSelect = $("#" + this.options.id + "_content_numCol").find("div")[index];
                            _content_multiSelect ? _content_multiSelect.insertAdjacentHTML("beforeBegin", htmlStrNumCol) : $("#" + this.options.id + "_content_numCol")[0].insertAdjacentHTML("afterBegin", htmlStrNumCol);
                        }
                        this.resetNumCol(), this.updateNumColLastRowFlag();
                    }
                    this.repairSumRow(), this.noRowsShowFun();
                    var obj = {};
                    obj.begin = index, obj.length = rows.length, this.renderTypeFun(obj);
                }
                this.updateLastRowFlag(), this.isCheckedHeaderRow(), this.resetLeftHeight();
            }
        }, createContentOneRowFixed = function(rowObj) {
            return "";
        }, updateEditRowIndex = function(opType, opIndex, num) {}, deleteOneRow = function(index) {
            var oThis = this;
            index = parseInt(index);
            var row = this.dataSourceObj.rows[index];
            if (row) {
                var rowValue = row.value;
                if ("grid" == this.showType && this.editClose(), this.dataSourceObj.rows.splice(index, 1), 
                this.updateEditRowIndex("-", index), this.dataSourceObj.options.values) {
                    var i = this.dataSourceObj.options.values.indexOf(rowValue);
                    this.dataSourceObj.options.values.splice(i, 1);
                }
                if (this.dataSourceObj.rows.length > index + 1 && $.each(this.dataSourceObj.rows, function(i) {
                    i >= index && (this.valueIndex = this.valueIndex - 1);
                }), this.selectRows && $.each(this.selectRows, function(i) {
                    this == rowValue ? (oThis.selectRows.splice(i, 1), oThis.selectRowsObj.splice(i, 1), 
                    oThis.selectRowsIndex.splice(i, 1)) : oThis.selectRowsIndex[i] > index && (oThis.selectRowsIndex[i] = oThis.selectRowsIndex[i] - 1);
                }), this.focusRow && (this.focusRow == rowValue ? (this.focusRow = null, this.focusRowObj = null, 
                this.focusRowIndex = null) : this.focusRowIndex > index && (this.focusRowIndex = this.focusRowIndex - 1)), 
                "grid" == this.showType && ($("#" + this.options.id + '_content_div tbody tr[role="row"]:eq(' + index + ")").remove(), 
                $("#" + this.options.id + '_content_fixed_div tbody tr[role="row"]:eq(' + index + ")").remove(), 
                $("#" + this.options.id + "_content_multiSelect >div:eq(" + index + ")").remove(), 
                $("#" + this.options.id + "_content_numCol >.u-grid-content-num:eq(" + index + ")").remove(), 
                this.resetNumCol(), this.repairSumRow(), this.noRowsShowFun(), this.updateNumColLastRowFlag()), 
                this.deleteOneRowTree(), "function" == typeof this.options.onRowDelete) {
                    var obj = {};
                    if (obj.gridObj = this, obj.index = index, obj.row = row, !this.options.onRowDelete(obj)) return;
                }
                this.isCheckedHeaderRow();
            }
        }, repairSumRow = function() {}, deleteOneRowTree = function() {}, deleteRows = function(indexs) {
            var oThis = this, indexss = new Array();
            $.each(indexs, function(i) {
                indexss.push(indexs[i]);
            }), indexss.sort(function(a, b) {
                return b - a;
            }), $.each(indexss, function(i) {
                oThis.deleteOneRow(this);
            }), this.isCheckedHeaderRow();
        }, updateRow = function(index, row) {
            if (index > -1 && index < this.dataSourceObj.rows.length && (this.dataSourceObj.rows[index].value = row, 
            this.dataSourceObj.options.values[this.dataSourceObj.rows[index].valueIndex] = row, 
            "grid" == this.showType)) {
                var obj = {};
                obj.begin = index, obj.length = 1, this.renderTypeFun(obj), this.repairSumRow();
            }
        }, updateValueAt = function(rowIndex, field, value, force) {
            if (rowIndex > -1 && rowIndex < this.dataSourceObj.rows.length) {
                var oldValue = $(this.dataSourceObj.rows[rowIndex].value).attr(field), treeRowIndex = rowIndex;
                if (void 0 === value && (value = ""), oldValue != value || force) {
                    if ("function" == typeof this.options.onBeforeValueChange) {
                        var obj = {};
                        obj.gridObj = this, obj.rowIndex = treeRowIndex, obj.field = field, obj.oldValue = oldValue, 
                        obj.newValue = value;
                        if (!this.options.onBeforeValueChange(obj)) return;
                    }
                    if ($(this.dataSourceObj.rows[rowIndex].value).attr(field, value), $(this.dataSourceObj.options.values[this.dataSourceObj.rows[rowIndex].valueIndex]).attr(field, value), 
                    "grid" == this.showType) {
                        var obj = {};
                        obj.field = field, obj.begin = rowIndex, obj.length = 1, this.renderTypeFun(obj), 
                        treeRowIndex = this.updateValueAtTree(rowIndex, field, value, force), this.updateValueAtEdit(rowIndex, field, value, force), 
                        this.repairSumRow();
                    }
                    if ("function" == typeof this.options.onValueChange) {
                        var obj = {};
                        obj.gridObj = this, obj.rowIndex = treeRowIndex, obj.field = field, obj.oldValue = oldValue, 
                        obj.newValue = value, this.options.onValueChange(obj);
                    }
                    this.resetLeftHeight();
                }
            }
        }, updateValueAtTree = function(rowIndex, field, value, force) {
            return rowIndex;
        }, updateValueAtEdit = function(rowIndex, field, value, force) {}, setRowSelect = function(rowIndex, doms) {
            var selectDiv, rowTr, fixedRowTr, numColDiv;
            if (!this.dataSourceObj.rows[rowIndex]) return !0;
            if ("grid" == this.showType && (rowTr = doms && doms.contentTrs ? doms.contentTrs[rowIndex] : this.$ele.find("#" + this.options.id + '_content_tbody tr[role="row"]')[rowIndex]), 
            this.dataSourceObj.rows[rowIndex].checked && u.hasClass(rowTr, "u-grid-content-sel-row")) return !0;
            if (selectDiv = doms && doms.multiSelectDivs ? doms.multiSelectDivs[rowIndex] : this.$ele.find("#" + this.options.id + "_content_multiSelect").children()[rowIndex], 
            "function" == typeof this.options.onBeforeRowSelected) {
                var obj = {};
                if (obj.gridObj = this, obj.rowObj = this.dataSourceObj.rows[rowIndex], obj.rowIndex = rowIndex, 
                !this.options.onBeforeRowSelected(obj)) {
                    if (this.options.multiSelect) {
                        var _input = selectDiv.children[0];
                        _input.checked = !1;
                    }
                    return !1;
                }
            }
            if (this.options.multiSelect) {
                if ("grid" == this.showType) {
                    var _input = selectDiv.children[0];
                    $(_input).addClass("is-checked");
                }
            } else this.selectRowsObj && this.selectRowsObj.length > 0 && $.each(this.selectRowsObj, function() {
                this.checked = !1;
            }), this.selectRows = new Array(), this.selectRowsObj = new Array(), this.selectRowsIndex = new Array(), 
            "grid" == this.showType && ($("#" + this.options.id + '_content_tbody tr[role="row"]').removeClass("u-grid-content-sel-row"), 
            $("#" + this.options.id + '_content_tbody tr[role="row"] a').removeClass("u-grid-content-sel-row"), 
            $("#" + this.options.id + '_content_fixed_tbody tr[role="row"]').removeClass("u-grid-content-sel-row"), 
            $("#" + this.options.id + '_content_fixed_tbody tr[role="row"] a').removeClass("u-grid-content-sel-row"), 
            this.options.multiSelect && $("#" + this.options.id + "_content_multiSelect div").removeClass("u-grid-content-sel-row"), 
            this.options.showNumCol && $("#" + this.options.id + "_content_numCol div").removeClass("u-grid-content-sel-row"));
            if ("grid" == this.showType) {
                $(rowTr).addClass("u-grid-content-sel-row"), fixedRowTr = doms && doms.fixContentTrs ? doms.fixContentTrs[rowIndex] : this.$ele.find("#" + this.options.id + '_content_fixed_tbody tr[role="row"]')[rowIndex], 
                $(fixedRowTr).addClass("u-grid-content-sel-row");
                var ini = rowIndex;
                this.eidtRowIndex > -1 && this.eidtRowIndex < rowIndex && "form" == this.options.editType && ini++, 
                this.options.multiSelect && (ini != rowIndex && (selectDiv = this.$ele.find("#" + this.options.id + "_content_multiSelect").children()[ini]), 
                $(selectDiv).addClass("u-grid-content-sel-row")), this.options.showNumCol && (numColDiv = doms && doms.numColDivs ? doms.numColDivs[ini] : this.$ele.find("#" + this.options.id + "_content_numCol").children()[ini], 
                $(numColDiv).addClass("u-grid-content-sel-row"));
            }
            if (this.selectRows.push(this.dataSourceObj.rows[rowIndex].value), this.selectRowsObj.push(this.dataSourceObj.rows[rowIndex]), 
            this.selectRowsIndex.push(rowIndex), this.dataSourceObj.rows[rowIndex].checked = !0, 
            this.isCheckedHeaderRow(), "function" == typeof this.defaultOnRowSelected) {
                var obj = {};
                obj.gridObj = this, obj.rowObj = this.dataSourceObj.rows[rowIndex], obj.rowIndex = rowIndex, 
                this.defaultOnRowSelected(obj);
            }
            if ("function" == typeof this.options.onRowSelected) {
                var obj = {};
                obj.gridObj = this, obj.rowObj = this.dataSourceObj.rows[rowIndex], obj.rowIndex = rowIndex, 
                this.options.onRowSelected(obj);
            }
            return !0;
        }, setRowUnselect = function(rowIndex) {
            var oThis = this;
            if (!this.dataSourceObj.rows[rowIndex]) return !0;
            if (!this.dataSourceObj.rows[rowIndex].checked) return !0;
            if ("function" == typeof this.options.onBeforeRowUnSelected) {
                var obj = {};
                if (obj.gridObj = this, obj.rowObj = this.dataSourceObj.rows[rowIndex], obj.rowIndex = rowIndex, 
                !this.options.onBeforeRowUnSelected(obj)) return this.options.multiSelect && ($("#" + this.options.id + "_content_multiSelect input:eq(" + rowIndex + ")")[0].checked = !0), 
                !1;
            }
            this.options.multiSelect && $("#" + this.options.id + "_content_multiSelect .u-grid-checkbox-outline:eq(" + rowIndex + ")").removeClass("is-checked");
            var ini = rowIndex;
            if (this.eidtRowIndex > -1 && this.eidtRowIndex < rowIndex && "form" == this.options.editType && ini++, 
            $("#" + this.options.id + '_content_tbody tr[role="row"]:eq(' + ini + ")").removeClass("u-grid-content-sel-row"), 
            $("#" + this.options.id + '_content_tbody tr[role="row"]:eq(' + ini + ") a").removeClass("u-grid-content-sel-row"), 
            $("#" + this.options.id + '_content_fixed_tbody tr[role="row"]:eq(' + ini + ")").removeClass("u-grid-content-sel-row"), 
            $("#" + this.options.id + '_content_fixed_tbody tr[role="row"]:eq(' + ini + ") a").removeClass("u-grid-content-sel-row"), 
            this.options.multiSelect && $("#" + this.options.id + "_content_multiSelect >div:eq(" + ini + ")").removeClass("u-grid-content-sel-row"), 
            this.options.showNumCol && $("#" + this.options.id + "_content_numCol >div:eq(" + ini + ")").removeClass("u-grid-content-sel-row"), 
            $.each(this.selectRows, function(i) {
                this == oThis.dataSourceObj.rows[rowIndex].value && (oThis.selectRows.splice(i, 1), 
                oThis.selectRowsObj.splice(i, 1), oThis.selectRowsIndex.splice(i, 1));
            }), this.dataSourceObj.rows[rowIndex].checked = !1, $("#" + this.options.id + "_header_multi_input").removeClass("is-checked"), 
            "function" == typeof this.options.onRowUnSelected) {
                var obj = {};
                obj.gridObj = this, obj.rowObj = this.dataSourceObj.rows[rowIndex], obj.rowIndex = rowIndex, 
                this.options.onRowUnSelected(obj);
            }
            return oThis.isCheckedHeaderRow(), !0;
        }, setAllRowSelect = function() {
            if ($("#" + this.options.id + "_header_multi_input").addClass("is-checked"), "function" == typeof this.options.onBeforeAllRowSelected) {
                var obj = {};
                if (obj.gridObj = this, obj.rowObjs = this.dataSourceObj.rows, !this.options.onBeforeAllRowSelected(obj)) return;
            }
            var multiSelectDivs = this.$ele.find("#" + this.options.id + "_content_multiSelect").children(), numColDivs = this.$ele.find("#" + this.options.id + "_content_numCol").children(), contentTrs = this.$ele.find("#" + this.options.id + '_content_tbody tr[role="row"]'), fixContentTrs = this.$ele.find("#" + this.options.id + '_content_fixed_tbody tr[role="row"]');
            this.$ele.find("#" + this.options.id + '_content_tbody tr[role="row"]');
            for (var i = 0; i < this.dataSourceObj.rows.length; i++) this.setRowSelect(i, {
                multiSelectDivs: multiSelectDivs,
                numColDivs: numColDivs,
                contentTrs: contentTrs,
                fixContentTrs: fixContentTrs
            });
            if (this.hasChecked = !0, "function" == typeof this.options.onAllRowSelected) {
                var obj = {};
                obj.gridObj = this, obj.rowObjs = this.dataSourceObj.rows, this.options.onAllRowSelected(obj);
            }
        }, setAllRowUnSelect = function() {
            if ($("#" + this.options.id + "_header_multi_input").removeClass("is-checked"), 
            "function" == typeof this.options.onBeforeAllRowUnSelected) {
                var obj = {};
                if (obj.gridObj = this, obj.rowObjs = this.dataSourceObj.rows, !this.options.onBeforeAllRowUnSelected(obj)) return;
            }
            for (var i = 0; i < this.dataSourceObj.rows.length; i++) this.setRowUnselect(i);
            if (this.hasChecked = !1, "function" == typeof this.options.onAllRowUnSelected) {
                var obj = {};
                obj.gridObj = this, obj.rowObjs = this.dataSourceObj.rows, this.options.onAllRowUnSelected(obj);
            }
        }, setRowFocus = function(rowIndex) {
            if (this.dataSourceObj.rows[rowIndex].focus) return !0;
            if (!this.dataSourceObj.rows[rowIndex]) return !0;
            if ("function" == typeof this.options.onBeforeRowFocus) {
                var obj = {};
                if (obj.gridObj = this, obj.rowObj = this.dataSourceObj.rows[rowIndex], obj.rowIndex = rowIndex, 
                !this.options.onBeforeRowFocus(obj)) return !1;
            }
            $("#" + this.options.id + '_content_tbody tr[role="row"]').removeClass("u-grid-content-focus-row"), 
            $("#" + this.options.id + '_content_tbody tr[role="row"] a').removeClass("u-grid-content-focus-row"), 
            $("#" + this.options.id + '_content_fixed_tbody tr[role="row"]').removeClass("u-grid-content-focus-row"), 
            $("#" + this.options.id + '_content_fixed_tbody tr[role="row"] a').removeClass("u-grid-content-focus-row"), 
            this.options.multiSelect && $("#" + this.options.id + "_content_multiSelect").find("div").removeClass("u-grid-content-focus-row"), 
            this.options.showNumCol && $("#" + this.options.id + "_content_numCol").find("div").removeClass("u-grid-content-focus-row"), 
            this.focusRowObj && (this.focusRowObj.focus = !1), $("#" + this.options.id + '_content_tbody tr[role="row"]:eq(' + rowIndex + ")").addClass("u-grid-content-focus-row"), 
            $("#" + this.options.id + '_content_tbody tr[role="row"]:eq(' + rowIndex + ") a").addClass("u-grid-content-focus-row"), 
            $("#" + this.options.id + '_content_fixed_tbody tr[role="row"]:eq(' + rowIndex + ")").addClass("u-grid-content-focus-row"), 
            $("#" + this.options.id + '_content_fixed_tbody tr[role="row"]:eq(' + rowIndex + ") a").addClass("u-grid-content-focus-row");
            var ini = rowIndex;
            if (this.eidtRowIndex > -1 && this.eidtRowIndex < rowIndex && "form" == this.options.editType && ini++, 
            this.options.multiSelect && $("#" + this.options.id + "_content_multiSelect >div:eq(" + ini + ")").addClass("u-grid-content-focus-row"), 
            this.options.showNumCol && $("#" + this.options.id + "_content_numCol >div:eq(" + ini + ")").addClass("u-grid-content-focus-row"), 
            this.focusRow = this.dataSourceObj.rows[rowIndex].value, this.focusRowObj = this.dataSourceObj.rows[rowIndex], 
            this.focusRowIndex = rowIndex, this.dataSourceObj.rows[rowIndex].focus = !0, "function" == typeof this.options.onRowFocus) {
                var obj = {};
                obj.gridObj = this, obj.rowObj = this.dataSourceObj.rows[rowIndex], obj.rowIndex = rowIndex, 
                this.options.onRowFocus(obj);
            }
            return !0;
        }, setRowUnFocus = function(rowIndex) {
            if (!this.dataSourceObj.rows[rowIndex]) return !0;
            if ("function" == typeof this.options.onBeforeRowUnFocus) {
                var obj = {};
                if (obj.gridObj = this, obj.rowObj = this.dataSourceObj.rows[rowIndex], obj.rowIndex = rowIndex, 
                !this.options.onBeforeRowUnFocus(obj)) return !1;
            }
            if (!this.dataSourceObj.rows[rowIndex].focus) return !0;
            var ini = rowIndex;
            if (this.eidtRowIndex > -1 && this.eidtRowIndex < rowIndex && "form" == this.options.editType && ini++, 
            $("#" + this.options.id + '_content_tbody tr[role="row"]:eq(' + ini + ")").removeClass("u-grid-content-focus-row"), 
            $("#" + this.options.id + '_content_tbody tr[role="row"]:eq(' + ini + ") a").removeClass("u-grid-content-focus-row"), 
            $("#" + this.options.id + '_content_fixed_tbody tr[role="row"]:eq(' + ini + ")").removeClass("u-grid-content-focus-row"), 
            $("#" + this.options.id + '_content_fixed_tbody tr[role="row"]:eq(' + ini + ") a").removeClass("u-grid-content-focus-row"), 
            this.options.multiSelect && $("#" + this.options.id + "_content_multiSelect >div:eq(" + ini + ")").removeClass("u-grid-content-focus-row"), 
            this.options.showNumCol && $("#" + this.options.id + "_content_numCol >div:eq(" + ini + ")").removeClass("u-grid-content-focus-row"), 
            this.dataSourceObj.rows[rowIndex].focus = !1, this.focusRow = null, this.focusRowObj = null, 
            this.focusRowIndex = null, "function" == typeof this.options.onRowUnFocus) {
                var obj = {};
                obj.gridObj = this, obj.rowObj = this.dataSourceObj.rows[rowIndex], obj.rowIndex = rowIndex, 
                this.options.onRowUnFocus(obj);
            }
            return this.options.multiSelect || this.setRowUnselect(rowIndex), !0;
        }, resetNumCol = function() {
            var numCols = $("#" + this.options.id + "_content_numCol >.u-grid-content-num");
            $.each(numCols, function(i) {
                this.innerHTML = i + 1 + "";
            });
        };
        exports.operateRowFunObj = {
            isCheckedHeaderRow: isCheckedHeaderRow,
            addOneRow: addOneRow,
            addOneRowTree: addOneRowTree,
            addOneRowTreeHasChildF: addOneRowTreeHasChildF,
            editClose: editClose,
            addRows: addRows,
            createContentOneRowFixed: createContentOneRowFixed,
            updateEditRowIndex: updateEditRowIndex,
            deleteOneRow: deleteOneRow,
            repairSumRow: repairSumRow,
            deleteOneRowTree: deleteOneRowTree,
            deleteRows: deleteRows,
            updateRow: updateRow,
            updateValueAt: updateValueAt,
            updateValueAtTree: updateValueAtTree,
            updateValueAtEdit: updateValueAtEdit,
            setRowSelect: setRowSelect,
            setRowUnselect: setRowUnselect,
            setAllRowSelect: setAllRowSelect,
            setAllRowUnSelect: setAllRowUnSelect,
            setRowFocus: setRowFocus,
            setRowUnFocus: setRowUnFocus,
            resetNumCol: resetNumCol
        };
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var renderTypeFun = function(obj) {
            if (this.isGridShow()) {
                if (void 0 === obj) var begin = null, length = null, field = ""; else var begin = void 0 === obj.begin ? null : obj.begin, length = void 0 === obj.length ? null : obj.length, field = void 0 === obj.field ? "" : obj.field;
                var oThis = this, begin = parseInt(begin), length = parseInt(length);
                if (length > 0 && parseInt(begin + length - 1), "" == field) this.gridCompColumnFixedArr && $.each(this.gridCompColumnFixedArr, function(i) {
                    oThis.renderTypeByColumn(this, i, begin, length, !0);
                }), $.each(this.gridCompColumnArr, function(i) {
                    oThis.renderTypeByColumn(this, i, begin, length, !1);
                }); else {
                    var rendered = !1;
                    this.gridCompColumnFixedArr && $.each(this.gridCompColumnFixedArr, function(i) {
                        if (this.options.field == field) return oThis.renderTypeByColumn(this, i, begin, length, !0), 
                        void (rendered = !0);
                    }), rendered || $.each(this.gridCompColumnArr, function(i) {
                        if (this.options.field == field) return void oThis.renderTypeByColumn(this, i, begin, length, !1);
                    });
                }
            }
        }, renderTypeByColumn = function(gridCompColumn, i, begin, length, isFixedColumn) {
            var oThis = this, renderType = gridCompColumn.options.renderType, dataType = (gridCompColumn.options.sumCol, 
            gridCompColumn.options.sumRenderType, gridCompColumn.options.dataType), precision = gridCompColumn.options.precision, field = (gridCompColumn.options.format, 
            gridCompColumn.options.field), end = begin, idSuffix = isFixedColumn === !0 ? "_content_fixed_tbody" : "_content_tbody", visibleColIndex = this.getVisibleIndexOfColumn(gridCompColumn);
            length > 0 && (end = parseInt(begin + length - 1)), this.realtimeTableRows = document.getElementById(oThis.options.id + idSuffix).children;
            for (var notRowIndex = -1, k = 0; k < oThis.realtimeTableRows.length; k++) "row" != oThis.realtimeTableRows[k].getAttribute("role") && (notRowIndex = k);
            $.each(oThis.dataSourceObj.rows, function(j) {
                if (begin >= 0 && j >= begin && j <= end || isNaN(begin)) {
                    oThis.editColIndex == visibleColIndex && oThis.eidtRowIndex == j && "default" == oThis.options.editType && (oThis.editColIndex = -1, 
                    oThis.eidtRowIndex = -1);
                    var trIndex = j;
                    notRowIndex != -1 && j >= notRowIndex && trIndex++;
                    var tr = oThis.realtimeTableRows[trIndex], td = tr.children[i];
                    if (oThis.iconSpan) var iconSpan = oThis.iconSpan;
                    if (td) {
                        if (td.children[0].innerHTML.indexOf("u-grid-content-tree-span") != -1) var span = td.children[0].children[1]; else var span = td.children[0];
                        if (span) {
                            var v = $(this.value).attr(field);
                            if ("function" == typeof renderType || "Date" == dataType || "Datetime" == dataType || "Int" == dataType || "Float" == dataType) if (span.innerHTML = "", 
                            "function" == typeof renderType) {
                                v = oThis.getString(v, "");
                                var obj = {};
                                obj.value = v, obj.element = span, obj.gridObj = oThis, obj.row = this, obj.gridCompColumn = gridCompColumn, 
                                obj.rowIndex = j, renderType.call(oThis, obj);
                            } else if ("Date" == dataType || "Datetime" == dataType) null != v && void 0 != v && "null" != v && "undefined" != v && "" != v || (v = ""), 
                            v = "Date" == dataType ? u.dateRender(v) : u.dateTimeRender(v), span.innerHTML = v, 
                            span.title = v; else if ("Int" == dataType) v = parseInt(v), v ? (span.innerHTML = v, 
                            span.title = v) : (span.innerHTML = "", span.title = ""); else if ("Float" == dataType) {
                                if (precision) {
                                    var o = {};
                                    o.value = v, o.precision = precision, v = oThis.DicimalFormater(o);
                                } else v = parseFloat(v);
                                v ? (span.innerHTML = v, span.title = v) : (span.innerHTML = "", span.title = "");
                            } else {
                                v = oThis.getString(v, "");
                                var v1 = v.replace(/\</g, "<");
                                v1 = v1.replace(/\>/g, ">"), span.title = v, v = v.replace(/\</g, "&lt;"), v = v.replace(/\>/g, "&gt;"), 
                                span.innerHTML = v;
                            } else {
                                v = oThis.getString(v, "");
                                var v1 = v.replace(/\</g, "<");
                                v1 = v1.replace(/\>/g, ">"), span.title = v, v = v.replace(/\</g, "&lt;"), v = v.replace(/\>/g, "&gt;"), 
                                0 == i && iconSpan && (v = iconSpan += v), span.innerHTML = v;
                            }
                            var obj = {
                                span: span,
                                column: gridCompColumn
                            }, colum_maxlength = gridCompColumn.options.maxLength, overFlag = !1;
                            overFlag = colum_maxlength && colum_maxlength > 0 ? span.innerHTML.length > colum_maxlength : oThis.getRenderOverFlag(obj), 
                            overFlag && $(span).addClass("u-grid-content-td-div-over");
                        }
                    }
                }
            }), this.renderTypeSumRow(gridCompColumn, i, begin, length, isFixedColumn);
        }, getRenderOverFlag = function(obj) {
            return;
        }, renderTypeSumRow = function(gridCompColumn, i, begin, length, isFixedColumn) {};
        exports.renderTypeFunObj = {
            renderTypeFun: renderTypeFun,
            renderTypeByColumn: renderTypeByColumn,
            renderTypeSumRow: renderTypeSumRow,
            getRenderOverFlag: getRenderOverFlag
        };
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var setColumnVisibleByColumn = function(column, visible) {
            var index = this.getIndexOfColumn(column);
            this.setColumnVisibleByIndex(index, visible);
        }, setColumnVisibleByIndex = function(index, visible) {
            if (index >= 0) {
                var column = this.gridCompColumnArr[index], visibleIndex = this.getVisibleIndexOfColumn(column);
                if (0 == column.options.visible && visible) {
                    var htmlStr = "<col";
                    column.options.width && (htmlStr += ' style="width:' + this.formatWidth(column.options.width) + '"'), 
                    htmlStr += ">", $("#" + this.options.id + "_header_table th:eq(" + index + ")").css("display", ""), 
                    $("#" + this.options.id + "_content_table th:eq(" + index + ")").css("display", ""), 
                    $("td:eq(" + index + ")", $("#" + this.options.id + "_content tbody tr")).css("display", "");
                    var nextVisibleIndex = this.getNextVisibleInidexOfColumn(column);
                    if (nextVisibleIndex < 1) try {
                        $("#" + this.options.id + "_header_table col:last")[0].insertAdjacentHTML("afterEnd", htmlStr), 
                        $("#" + this.options.id + "_content_table col:last")[0].insertAdjacentHTML("afterEnd", htmlStr);
                    } catch (e) {
                        $("#" + this.options.id + "_header_table col:last").after(htmlStr), $("#" + this.options.id + "_content_table col:last").after(htmlStr);
                    } else try {
                        $("#" + this.options.id + "_header_table col:eq(" + (nextVisibleIndex - 1) + ")")[0].insertAdjacentHTML("beforeBegin", htmlStr), 
                        $("#" + this.options.id + "_content_table col:eq(" + (nextVisibleIndex - 1) + ")")[0].insertAdjacentHTML("beforeBegin", htmlStr);
                    } catch (e) {
                        $("#" + this.options.id + "_header_table col:eq(" + (nextVisibleIndex - 1) + ")").before(htmlStr), 
                        $("#" + this.options.id + "_content_table col:eq(" + (nextVisibleIndex - 1) + ")").before(htmlStr);
                    }
                    var newContentW = this.contentWidth + parseInt(column.options.width);
                }
                if (1 == column.options.visible && !visible) {
                    $("#" + this.options.id + "_header_table th:eq(" + index + ")").css("display", "none"), 
                    $("#" + this.options.id + "_header_table col:eq(" + visibleIndex + ")").remove(), 
                    $("#" + this.options.id + "_content_table th:eq(" + index + ")").css("display", "none"), 
                    $("#" + this.options.id + "_content_table col:eq(" + visibleIndex + ")").remove(), 
                    $("td:eq(" + index + ")", $("#" + this.options.id + "_content_table tbody tr")).css("display", "none");
                    var newContentW = this.contentWidth - parseInt(column.options.width);
                }
                column.options.visible = visible, this.columnsVisibleFun();
                var w = this.contentWidthChange(newContentW);
                this.lastVisibleColumn.options.width = this.lastVisibleColumnWidth, this.contentWidth = w, 
                this.resetThVariable(), this.saveGridCompColumnArrToLocal();
            }
        }, setCoulmnWidthByField = function(field, newWidth) {
            var column = this.getColumnByField(field);
            this.setColumnWidth(column, newWidth);
        }, setColumnWidth = function(column, newWidth) {
            if (newWidth > this.minColumnWidth || newWidth == this.minColumnWidth) {
                var nowVisibleThIndex = this.getVisibleIndexOfColumn(column), oldWidth = column.options.width, changeWidth = newWidth - oldWidth, cWidth = this.contentWidth + changeWidth;
                this.contentWidth = this.contentWidthChange(cWidth), $("#" + this.options.id + "_header_table col:eq(" + nowVisibleThIndex + ")").css("width", newWidth + "px"), 
                $("#" + this.options.id + "_content_table col:eq(" + nowVisibleThIndex + ")").css("width", newWidth + "px"), 
                column.options.width = newWidth, column.options.realWidth = newWidth, this.resetThVariable(), 
                this.saveGridCompColumnArrToLocal();
            }
            this.columnsVisibleFun();
        }, setDataSource = function(dataSource) {
            this.$ele.data("gridComp") == this && (this.initDataSourceVariable(), this.options.dataSource = dataSource, 
            this.initDataSource(), this.repairContent(), this.afterGridDivsCreate());
        }, setDataSourceFun1 = function(dataSource) {
            var dataSourceObj = {};
            if (dataSource.values) {
                var valuesArr = new Array();
                $.each(dataSource.values, function() {
                    if (dataSource.fields) {
                        var valueObj = {}, value = this;
                        $.each(dataSource.fields, function(j) {
                            $(valueObj).attr(this, value[j]);
                        }), valuesArr.push(valueObj);
                    }
                });
            }
            $(dataSourceObj).attr("values", valuesArr), this.setDataSource(dataSourceObj);
        };
        exports.setFunObj = {
            setColumnVisibleByColumn: setColumnVisibleByColumn,
            setColumnVisibleByIndex: setColumnVisibleByIndex,
            setCoulmnWidthByField: setCoulmnWidthByField,
            setColumnWidth: setColumnWidth,
            setDataSource: setDataSource,
            setDataSourceFun1: setDataSourceFun1
        };
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var widthChangeFun = function() {
            var oThis = this;
            if ($("#" + this.options.id)[0]) {
                var w = $("#" + this.options.id)[0].offsetWidth;
                this.wholeWidth != w && this.$ele.data("gridComp") == this && 0 != w && (this.wholeWidth = w, 
                w > this.options.formMaxWidth && ("form" == this.showType || "" == this.showType || !$("#" + this.options.id + "_content_div tbody")[0]) || this.options.overWidthHiddenColumn || this.options.noScroll ? oThis.widthChangeGridFun() : w > 0 && w < this.options.formMaxWidth && ("grid" == this.showType || this.showType), 
                w > this.options.formMaxWidth && (this.contentMinWidth = parseInt(this.wholeWidth) - parseInt(this.leftW) - parseInt(this.fixedWidth), 
                this.contentMinWidth < 0 && (this.contentMinWidth = 0), setTimeout(function() {
                    $("#" + oThis.options.id + "_header_wrap").css("max-width", oThis.wholeWidth + "px"), 
                    $("#" + oThis.options.id + "_content_div").css("width", oThis.contentMinWidth + "px"), 
                    $("#" + oThis.options.id + "_content_table").css("min-width", oThis.contentMinWidth + "px"), 
                    $("#" + oThis.options.id + "_content_table").css("width", oThis.contentMinWidth + "px"), 
                    $("#" + oThis.options.id + "_header_table").css("min-width", oThis.contentMinWidth + "px"), 
                    $("#" + oThis.options.id + "_header_table").css("width", oThis.contentMinWidth + "px"), 
                    $("#" + oThis.options.id + "_noRowsShow").css("width", oThis.contentMinWidth + "px"), 
                    oThis.columnsVisibleFun(), oThis.contentRealWidth < oThis.contentMinWidth ? oThis.contentWidth = oThis.contentMinWidth : oThis.contentWidth = oThis.contentRealWidth, 
                    $("#" + oThis.options.id + "_noRows").css("width", oThis.contentWidth + "px"), "function" == typeof oThis.options.afterCreate && oThis.options.afterCreate.call(oThis);
                }, 300)), $("#" + oThis.options.id + "_header_table").css("width", oThis.contentMinWidth + "px"), 
                $("#" + oThis.options.id + "_edit_form").css("width", oThis.contentMinWidth + "px"), 
                this.preWholeWidth = w, this.resetLeftHeight());
            }
        }, widthChangeGridFun = function() {
            var halfWholeWidth = parseInt(this.wholeWidth / 2);
            if (this.noScrollWidthReset(), this.widthChangeGridFunFixed(halfWholeWidth), this.widthChangeGridFunOverWidthHidden(), 
            this.contentMinWidth = parseInt(this.wholeWidth) - parseInt(this.leftW) - parseInt(this.fixedWidth), 
            this.contentMinWidth < 0 && (this.contentMinWidth = 0), this.contentRealWidth < this.contentMinWidth) {
                this.contentWidth = this.contentMinWidth;
                var oldWidth = this.lastVisibleColumn.options.width;
                this.lastVisibleColumnWidth = oldWidth + (this.contentMinWidth - this.contentRealWidth), 
                this.lastVisibleColumn.options.width = this.lastVisibleColumnWidth;
            } else this.contentWidth = this.contentRealWidth;
            this.createGridFlag = !1, this.createGridDivs(), $("#" + this.options.id + "_form").css("display", "none"), 
            $("#" + this.options.id + "_grid").css("display", "block");
        }, noScrollWidthReset = function() {
            if (this.options.noScroll) {
                for (var nowW = 0, i = 0; i < this.gridCompColumnArr.length; i++) {
                    var column = this.gridCompColumnArr[i], nowWidth = column.options.optionsWidth + "", whole = this.wholeWidth - this.leftW;
                    if (nowWidth.indexOf("%") > 0) var newWidth = parseInt(nowWidth.replace("%", "") * whole / 100); else var newWidth = nowWidth;
                    newWidth < this.minColumnWidth && (newWidth = this.minColumnWidth), column.options.visible && (nowW += newWidth), 
                    this.setColumnWidth(column, newWidth);
                }
                this.hasNoScrollRest = !0;
            }
            if (nowW > whole) {
                var lastVisibleColumn = this.lastVisibleColumn, lastWidth = lastVisibleColumn.options.width, newLastWidth = lastWidth - (nowW - whole);
                this.setColumnWidth(lastVisibleColumn, newLastWidth);
            }
        }, widthChangeGridFunFixed = function(halfWholeWidth) {}, widthChangeGridFunOverWidthHidden = function() {}, heightChangeFun = function() {
            if (this.countContentHeight) {
                var oldH = this.wholeHeight, h = $("#" + this.options.id)[0].offsetHeight;
                if (this.wholeHeight = h, oldH != h && h > 0) {
                    var contentH = h - 1 - this.exceptContentHeight > 0 ? h - 1 - this.exceptContentHeight : 0;
                    $("#" + this.options.id + "_content").css("height", contentH + "px"), $("#" + this.options.id + "_content_div").css("height", contentH + "px");
                }
            }
        }, contentWidthChange = function(newContentWidth) {
            if (newContentWidth < this.contentMinWidth) {
                var oldW = parseInt(this.lastVisibleColumn.options.width);
                this.lastVisibleColumnWidth = oldW + (this.contentMinWidth - newContentWidth), $("#" + this.options.id + "_header_table col:last").css("width", this.lastVisibleColumnWidth + "px"), 
                $("#" + this.options.id + "_content_table col:last").css("width", this.lastVisibleColumnWidth + "px"), 
                newContentWidth = this.contentMinWidth;
            }
            if (newContentWidth > this.contentMinWidth) {
                var l = this.overWidthVisibleColumnArr.length;
                if (l > 0) {
                    for (var i = 0; i < l; i++) {
                        var overWidthColumn = this.overWidthVisibleColumnArr[i], nowVisibleIndex = this.getVisibleIndexOfColumn(overWidthColumn), w = parseInt(overWidthColumn.options.width), realW = overWidthColumn.options.realWidth;
                        $("#" + this.options.id + "_header_table col:eq(" + nowVisibleIndex + ")").css("width", realW + "px"), 
                        $("#" + this.options.id + "_content_table col:eq(" + nowVisibleIndex + ")").css("width", realW + "px"), 
                        newContentWidth -= w - realW, overWidthColumn.options.width = overWidthColumn.options.realWidth;
                    }
                    if (newContentWidth < this.contentMinWidth) {
                        var oldW = parseInt(this.lastVisibleColumn.options.width);
                        this.lastVisibleColumnWidth = oldW + (this.contentMinWidth - newContentWidth), $("#" + this.options.id + "_header_table col:last").css("width", this.lastVisibleColumnWidth + "px"), 
                        $("#" + this.options.id + "_content_table col:last").css("width", this.lastVisibleColumnWidth + "px"), 
                        this.lastVisibleColumn.options.width = this.lastVisibleColumnWidth, newContentWidth = this.contentMinWidth;
                    }
                }
                newContentWidth > this.contentMinWidth ? ($("#" + this.options.id + "_content_left_bottom").css("display", "block"), 
                $("#" + this.options.id + "_content_left_sum_bottom").css("bottom", 16)) : ($("#" + this.options.id + "_content_left_bottom").css("display", "none"), 
                $("#" + this.options.id + "_content_left_sum_bottom").css("bottom", 0));
            } else $("#" + this.options.id + "_content_left_bottom").css("display", "none"), 
            $("#" + this.options.id + "_content_left_sum_bottom").css("bottom", 0);
            return this.options.noScroll || ($("#" + this.options.id + "_content_table").css("width", newContentWidth + "px"), 
            $("#" + this.options.id + "_noRows").css("width", newContentWidth + "px")), newContentWidth;
        };
        exports.wdChangeFunObj = {
            widthChangeFun: widthChangeFun,
            widthChangeGridFun: widthChangeGridFun,
            widthChangeGridFunFixed: widthChangeGridFunFixed,
            widthChangeGridFunOverWidthHidden: widthChangeGridFunOverWidthHidden,
            heightChangeFun: heightChangeFun,
            contentWidthChange: contentWidthChange,
            noScrollWidthReset: noScrollWidthReset
        };
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(5), __webpack_require__(4), __webpack_require__(9) ], 
        __WEBPACK_AMD_DEFINE_FACTORY__ = factory, void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(_dataSource, _column, _gridComp) {
        "use strict";
        var old = $.fn.grid;
        $.fn.grid = function(options) {
            var grid = $(this).data("gridComp");
            return grid || $(this).data("gridComp", grid = new _gridComp.gridComp(this, options)), 
            grid;
        }, $.fn.grid.gridComp = _gridComp.gridComp, $.fn.grid.gridCompColumn = _column.column, 
        $.fn.grid.dataSource = _dataSource.dataSource, $.fn.grid.noConflict = function() {
            return $.fn.grid = old, this;
        };
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports, __webpack_require__(0), __webpack_require__(2) ], 
        __WEBPACK_AMD_DEFINE_FACTORY__ = factory, void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports, _gridCompEvent, _gridCompInit) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.colMenu_initGridEventFun = exports.colMenu_initEventFun = exports.re_createColumnMenu = exports.colMenu_initGridCompColumn = exports.re_initGridCompColumnColumnMenuFun = void 0;
        var re_initGridCompColumnColumnMenuFun = function(columnOptions) {
            var column1 = new this.gridCompColumn(columnOptions, this);
            column1.options.realWidth = column1.options.width, this.basicGridCompColumnArr.push(column1);
        }, colMenu_initGridCompColumn = function() {
            this.menuColumnsHeight = this.gridCompColumnArr.length * this.columnMenuHeight;
        }, re_createColumnMenu = function() {
            var oThis = this, htmlStr = '<div class="u-grid-column-menu" id="' + this.options.id + '_column_menu">';
            return htmlStr += '<ul data-role="menu" role="menubar" class="u-grid-column-menu-ul" id="' + this.options.id + '_column_menu_ul">', 
            htmlStr += '<li class="u-grid-column-menu-li" role="menuitem">', htmlStr += '<div class="u-grid-column-menu-div1" id="' + this.options.id + '_clearSet">', 
            htmlStr += '<span class="u-grid-column-menu-span">' + this.transMap.ml_clear_set + "</span>", 
            htmlStr += "</div></li>", htmlStr += '<div class="u-grid-column-menu-columns" id="' + this.options.id + '_column_menu_columns">', 
            htmlStr += '<ul data-role="menu" role="menubar" class="u-grid-column-menu-columns-ul" id="' + this.options.id + '_column_menu_columns_ul">', 
            $.each(this.gridCompColumnArr, function(i) {
                if ("" != oThis.getString(this.options.title, "")) {
                    htmlStr += '<li class="u-grid-column-menu-columns-li" role="menuitem" index="' + i + '">', 
                    htmlStr += '<div class="u-grid-column-menu-columns-div1">';
                    var checkedStr = "";
                    this.options.visible && (checkedStr = " checked"), this.options.canVisible || (checkedStr += ' style="display:none;"'), 
                    htmlStr += '<div class="u-grid-column-menu-columns-div2"><input type="checkbox" ' + checkedStr + "><label></label></div>", 
                    htmlStr += '<span class="u-grid-column-menu-columns-span">' + this.options.title + "</span>", 
                    htmlStr += "</div></li>";
                }
            }), htmlStr += "</ul></div>", htmlStr += "</ul></div>";
        }, colMenu_initEventFun = function() {
            var oThis = this;
            $("#" + this.options.id).on("mouseup", function(e) {
                if ($(e.target).closest("#" + oThis.options.id + "_header").length > 0) {
                    if (oThis.mouseUpX = e.clientX, oThis.mouseUpY = e.clientY, oThis.mouseDownX == oThis.mouseUpX && oThis.mouseDownY == oThis.mouseUpY) {
                        oThis.columnClickX = e.clientX, oThis.columnClickY = e.clientY;
                        $(e.target).closest("th")[0];
                        if ($(e.target).hasClass("u-grid-header-columnmenu")) {
                            $("#" + oThis.options.id + "_column_menu").css("display", "block");
                            var left = e.clientX - 160;
                            left < 0 && (left = 0);
                            var top = e.clientY + 10;
                            $("#" + oThis.options.id + "_column_menu").css("left", left), $("#" + oThis.options.id + "_column_menu").css("top", top);
                            var sH = ($(window).width(), $(window).height()), columnsHeight = oThis.menuColumnsHeight;
                            oThis.menuColumnsHeight + top + 34 > sH ? (columnsHeight = sH - top - 34, $("#" + oThis.options.id + "_column_menu_columns").css("height", columnsHeight + "px")) : $("#" + oThis.options.id + "_column_menu_columns").css("height", ""), 
                            oThis.ele.createColumnMenuFlag = !0;
                        }
                    }
                } else $(e.target).closest("#" + oThis.options.id + "_content").length;
            }), $(document).on("click", function() {
                0 == oThis.columnMenuMove && 0 == oThis.ele.createColumnMenuFlag && oThis.ele.offsetWidth > 0 && $("#" + oThis.options.id + "_column_menu").css("display", "none"), 
                oThis.ele.createColumnMenuFlag = !1;
            }), $(document).on("scroll", function() {
                0 == oThis.columnMenuMove && 0 == oThis.ele.createColumnMenuFlag && oThis.ele.offsetWidth > 0 && $("#" + oThis.options.id + "_column_menu").css("display", "none"), 
                oThis.ele.createColumnMenuFlag = !1;
            });
        }, colMenu_initGridEventFun = function() {
            var oThis = this;
            $("#" + this.options.id + "_column_menu_ul").off("mousemove"), $("#" + this.options.id + "_column_menu_ul").on("mousemove", function(e) {
                oThis.columnMenuMove = !0;
            }), $("#" + this.options.id + "_column_menu_ul").off("mouseout"), $("#" + this.options.id + "_column_menu_ul").on("mouseout", function(e) {
                oThis.columnMenuMove = !1;
            }), $("#" + this.options.id + "_clearSet").off("click"), $("#" + this.options.id + "_clearSet").on("click", function(e) {
                oThis.clearLocalData(), oThis.initGridCompColumn(), oThis.hasNoScrollRest = !1, 
                oThis.noScrollWidthReset(), oThis.dataSourceObj.sortRows(), oThis.repaintGridDivs(), 
                "function" == typeof oThis.options.onClearSetFun && oThis.options.onClearSetFun(oThis);
            }), $("#" + this.options.id + "_column_menu_columns_ul li input").off("click"), 
            $("#" + this.options.id + "_column_menu_columns_ul li input").on("click", function(e) {
                var index = $(this).closest("li").attr("index");
                if (oThis.gridCompColumnArr[index].options.visible) {
                    $(this)[0].checked = !1;
                    if (0 == $("input:checked", $("#" + oThis.options.id + "_column_menu_columns_ul")).length) return void ($(this)[0].checked = !0);
                    if (8 == document.documentMode) {
                        var oldScrollTop = $("#" + oThis.options.id + "_column_menu_columns")[0].scrollTop, oldTop = $("#" + oThis.options.id + "_column_menu")[0].style.top, oldLeft = $("#" + oThis.options.id + "_column_menu")[0].style.left;
                        oThis.gridCompColumnArr[index].options.visible = !1, oThis.repaintGridDivs(), $("#" + oThis.options.id + "_column_menu").css("display", "block"), 
                        $("#" + oThis.options.id + "_column_menu").css("left", oldLeft), $("#" + oThis.options.id + "_column_menu").css("top", oldTop), 
                        $("#" + oThis.options.id + "_column_menu_columns")[0].scrollTop = oldScrollTop;
                    } else oThis.setColumnVisibleByIndex(index, !1), oThis.gridCompColumnArr[index].options.visible = !1;
                } else if ($(this)[0].checked = !0, 8 == document.documentMode) {
                    var oldScrollTop = $("#" + oThis.options.id + "_column_menu")[0].scrollTop, oldTop = $("#" + oThis.options.id + "_column_menu")[0].style.top, oldLeft = $("#" + oThis.options.id + "_column_menu")[0].style.left;
                    oThis.gridCompColumnArr[index].options.visible = !0, oThis.repaintGridDivs(), $("#" + oThis.options.id + "_column_menu").css("display", "block"), 
                    $("#" + oThis.options.id + "_column_menu").css("left", oldLeft), $("#" + oThis.options.id + "_column_menu").css("top", oldTop), 
                    $("#" + oThis.options.id + "_column_menu_columns")[0].scrollTop = oldScrollTop;
                } else oThis.setColumnVisibleByIndex(index, !0), oThis.gridCompColumnArr[index].options.visible = !0;
                oThis.saveGridCompColumnArrToLocal(), e.stopPropagation();
            }), $("#" + this.options.id + "_column_menu_columns_ul li").off("click"), $("#" + this.options.id + "_column_menu_columns_ul li").on("click", function(e) {
                $(this).find("input").click();
            });
        };
        exports.re_initGridCompColumnColumnMenuFun = re_initGridCompColumnColumnMenuFun, 
        exports.colMenu_initGridCompColumn = colMenu_initGridCompColumn, exports.re_createColumnMenu = re_createColumnMenu, 
        exports.colMenu_initEventFun = colMenu_initEventFun, exports.colMenu_initGridEventFun = colMenu_initGridEventFun;
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports, __webpack_require__(0) ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports, _gridCompEvent) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.dragFunObj = void 0;
        var re_createHeaderDrag = function() {
            return '<div class="u-grid-header-resize-handle" id="' + this.options.id + '_resize_handle"><div class="u-grid-header-resize-handle-inner"></div></div>';
        }, drag_initEventFun = function() {
            var oThis = this;
            $("#" + this.options.id).on("mousemove", function(e) {
                if ($(e.target).closest("#" + oThis.options.id + "_header").length > 0) {
                    var eleTh = $(e.target).closest("th")[0];
                    oThis.headerThDrag(e, eleTh);
                }
                oThis.dragFun(e), e.stopPropagation();
            }), $("#" + this.options.id + "_top").on("mousemove", function(e) {
                oThis.dragFun(e), e.stopPropagation();
            }), $("#" + this.options.id).on("mouseup", function(e) {
                oThis.dragEnd(e);
            }), $("#" + this.options.id + "_top").on("mouseup", function(e) {
                oThis.dragEnd(e);
            });
        }, drag_initGridEventFun = function() {
            var oThis = this;
            $("#" + this.options.id + "_resize_handle").on("mousedown", function(e) {
                oThis.dragStart(e);
            });
        }, dragStart = function(e) {
            this.dragFlag = !0, this.dragW = null, this.dragStartX = e.clientX;
        }, dragFun = function(e) {
            if (this.dragFlag) {
                var nowTh = $("#" + this.options.id + "_resize_handle")[0].nowTh, $nowTh = $(nowTh), nowThIndex = $nowTh.attr("index"), column = this.gridCompColumnArr[nowThIndex], nowVisibleThIndex = this.getVisibleIndexOfColumn(column);
                if (nowTh && column != this.lastVisibleColumn) {
                    this.dragEndX = e.clientX;
                    var changeWidth = parseInt(this.dragEndX) - parseInt(this.dragStartX), newWidth = parseInt(nowTh.attrWidth) + parseInt(changeWidth), cWidth = parseInt(this.contentWidth) + parseInt(changeWidth);
                    if (newWidth > this.minColumnWidth) {
                        if (this.options.noScroll) {
                            var nextVisibleThIndex = this.getNextVisibleInidexOfColumn(column);
                            if (nextVisibleThIndex > -1) {
                                var nextColumn = this.getColumnByVisibleIndex(nextVisibleThIndex);
                                (!this.dragNextClomunWidth || this.dragNextClomunWidth < 0) && (this.dragNextClomunWidth = nextColumn.options.width);
                            }
                            var nextNewWidth = parseInt(this.dragNextClomunWidth) - parseInt(changeWidth);
                            if (!(nextNewWidth > this.minColumnWidth)) return void $("#" + this.options.id + "_top").css("display", "block");
                        }
                        this.options.noScroll || (this.dragW = this.contentWidthChange(cWidth)), $("#" + this.options.id + "_header_table col:eq(" + nowVisibleThIndex + ")").css("width", newWidth + "px"), 
                        $("#" + this.options.id + "_content_table col:eq(" + nowVisibleThIndex + ")").css("width", newWidth + "px"), 
                        column.options.width = newWidth, column.options.realWidth = newWidth, this.options.noScroll && ($("#" + this.options.id + "_header_table col:eq(" + nextVisibleThIndex + ")").css("width", nextNewWidth + "px"), 
                        $("#" + this.options.id + "_content_table col:eq(" + nextVisibleThIndex + ")").css("width", nextNewWidth + "px"), 
                        nextColumn.options.width = nextNewWidth, nextColumn.options.realWidth = nextNewWidth);
                    }
                }
                $("#" + this.options.id + "_top").css("display", "block");
            }
        }, dragEnd = function(e) {
            this.dragFlag && (this.resetThVariable(), this.saveGridCompColumnArrToLocal()), 
            this.dragNextClomunWidth = -1, this.lastVisibleColumn.options.width = this.lastVisibleColumnWidth, 
            this.dragW && (this.contentWidth = this.dragW), $("#" + this.options.id + "_resize_handle")[0].nowTh = null, 
            this.dragFlag = !1, $("#" + this.options.id + "_top").css("display", "none");
        }, headerThDrag = function(e, ele) {
            if (!this.dragFlag && !this.swapColumnFlag && ele && ele.gridCompColumn && ele.gridCompColumn.options.canDrag && $("#" + this.options.id + "_resize_handle")[0].nowTh != ele) {
                $(ele);
                $("#" + this.options.id + "_resize_handle").css("left", ele.attrRightTotalWidth - this.scrollLeft - 4 + this.leftW + this.fixedWidth), 
                $("#" + this.options.id + "_resize_handle")[0].nowTh = ele;
            }
        }, re_resetThVariableDrag = function(nowTh, gridCompColumn, width) {
            !$("#" + this.options.id + "_resize_handle")[0].nowTh && gridCompColumn.options.canDrag && ($("#" + this.options.id + "_resize_handle").css("left", width - 4 + this.leftW), 
            $("#" + this.options.id + "_resize_handle")[0].nowTh = nowTh);
        };
        exports.dragFunObj = {
            createHeaderDrag: re_createHeaderDrag,
            dragStart: dragStart,
            dragFun: dragFun,
            dragEnd: dragEnd,
            headerThDrag: headerThDrag,
            resetThVariableDrag: re_resetThVariableDrag,
            drag_initEventFun: drag_initEventFun,
            drag_initGridEventFun: drag_initGridEventFun
        };
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports, __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports, _gridCompInit) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.editFromFunObj = void 0;
        var editForm_initDefault = function() {
            this.defaults = $.extend(!0, {}, this.defaults, {
                noneEditableFormShow: !0
            });
        }, editForm_setRequired = function(field, value) {
            var oThis = this;
            $.each(this.gridCompColumnArr, function(i) {
                this.options.field == field && (this.options.required = value, value ? $("#" + oThis.options.id + "_edit_" + this.options.field).parent().find(".u-grid-edit-mustFlag").show() : $("#" + oThis.options.id + "_edit_" + this.options.field).parent().find(".u-grid-edit-mustFlag").hide());
            });
        }, re_editorRowChangeFun = function() {
            if ($("#" + this.options.id + "_edit_form").length > 0) {
                var h = $("#" + this.options.id + "_edit_form")[0].offsetHeight;
                $("#" + this.options.id + "_numCol_edit").css("height", h), $("#" + this.options.id + "_multiSelect_edit").css("height", h);
            }
        }, formEditCell = function(value, field, title, required, headerColor) {
            var st = title + "";
            st.lengthb() > 28 && (st = st.substrCH(26) + "...");
            var htmlStr = '<div class="u-grid-edit-whole-div"><div class="u-grid-edit-label"><div title="' + title + '" style="color:' + headerColor + '">' + st + '<span style="color:red;' + (required ? "" : "display: none") + '" class="u-grid-edit-mustFlag">*</span></div></div>';
            return htmlStr += '<div id="' + this.options.id + "_edit_" + field + '" class="u-grid-edit-div"></div>', 
            htmlStr += "</div>";
        };
        exports.editFromFunObj = {
            editForm_initDefault: editForm_initDefault,
            editForm_setRequired: editForm_setRequired,
            editorRowChangeFun: re_editorRowChangeFun,
            formEditCell: formEditCell
        };
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports, __webpack_require__(6) ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports, _gridCompOther) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.fixFunObj = void 0;
        var re_initGridCompFixedColumn = function() {
            var oThis = this, removeArr = [];
            $.each(this.gridCompColumnArr, function(i) {
                1 == this.options.fixed && oThis.gridCompColumnFixedArr.push(this);
            }), $.each(this.gridCompColumnFixedArr, function(i) {
                1 != this.options.fixed && (oThis.gridCompColumnArr.push(this), removeArr.push(this));
            }), $.each(removeArr, function(i) {
                for (var i = oThis.gridCompColumnFixedArr.length; i > -1; i--) if (this == oThis.gridCompColumnFixedArr[i]) {
                    oThis.gridCompColumnFixedArr.splice(i, 1);
                    break;
                }
            }), $.each(this.gridCompColumnFixedArr, function(i) {
                for (var i = oThis.gridCompColumnArr.length; i > -1; i--) if (oThis.gridCompColumnArr[i] == this) {
                    oThis.gridCompColumnArr.splice(i, 1);
                    break;
                }
            });
        }, fixed_columnsVisibleFun = function() {
            var oThis = this, fixW = 0;
            $.each(this.gridCompColumnFixedArr, function() {
                this.options.visible && (fixW += parseInt(this.options.width), this.firstColumn = oThis.firstColumn, 
                oThis.firstColumn = !1);
            }), this.fixedRealWidth = fixW;
        }, re_createHeaderTableFixed = function() {
            return this.createHeaderTable("fixed");
        }, re_createContentTableFixed = function() {
            return this.createContentTable("fixed");
        }, re_createContentOneRowFixed = function(rowObj) {
            return this.createContentOneRow(rowObj, "fixed");
        }, re_widthChangeGridFunFixed = function(halfWholeWidth) {
            this.fixedRealWidth > halfWholeWidth ? this.fixedWidth = halfWholeWidth : this.fixedWidth = this.fixedRealWidth;
        }, setColumnFixed = function(field, fixed) {
            this.getColumnByField(field).options.fixed = fixed, this.initGridCompFixedColumn(), 
            this.repaintDivs();
        };
        exports.fixFunObj = {
            initGridCompFixedColumn: re_initGridCompFixedColumn,
            fixed_columnsVisibleFun: fixed_columnsVisibleFun,
            createHeaderTableFixed: re_createHeaderTableFixed,
            createContentTableFixed: re_createContentTableFixed,
            createContentOneRowFixed: re_createContentOneRowFixed,
            widthChangeGridFunFixed: re_widthChangeGridFunFixed,
            setColumnFixed: setColumnFixed
        };
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var createFromDivs = function() {
            if (!this.createFormFlag) {
                var htmlStr = '<div id="' + this.options.id + '_form" class="u-grid-form">';
                htmlStr += this.createFromContent(), $("#" + this.options.id)[0].insertAdjacentHTML("afterBegin", htmlStr), 
                this.createFormFlag = !0;
            }
        }, createFromContent = function() {
            var htmlStr = '<div class="u-grid-form-content" id="' + this.options.id + '_form_content" class="u-grid-content">';
            return htmlStr += '<table role="grid" id="' + this.options.id + '_form_content_table">', 
            htmlStr += this.createFormContentRows(), htmlStr += "</table>";
        }, createFormContentRows = function() {
            var oThis = this, htmlStr = "";
            return this.dataSourceObj.rows && (htmlStr += '<tbody role="rowgroup" id="' + this.options.id + '_form_content_tbody">', 
            $.each(this.dataSourceObj.rows, function() {
                htmlStr += '<tr role="row"><td role="rowcell">';
                var value = this.value;
                $.each(oThis.gridCompColumnArr, function() {
                    var f = this.options.field, t = this.options.title, v = $(value).attr(f);
                    htmlStr += "<div>" + t + ":</div>", htmlStr += "<div>" + v + "</div>";
                }), htmlStr += "</td></tr>";
            }), htmlStr += "</tbody>"), htmlStr;
        }, widthChangeFormFun = function() {
            this.createFromDivs(), $("#" + this.options.id + "_grid").css("display", "none"), 
            $("#" + this.options.id + "_form").css("display", "block"), this.showType = "form", 
            "function" == typeof this.options.afterCreate && this.options.afterCreate.call(this);
        };
        exports.formShowFunOjb = {
            createFromDivs: createFromDivs,
            createFromContent: createFromContent,
            createFormContentRows: createFormContentRows,
            widthChangeFormFun: widthChangeFormFun
        };
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var re_resetThVariableHeaderLevel = function() {
            var oThis = this, maxHeaderLevel = this.options.maxHeaderLevel, columnWidthArr = [];
            $("#" + this.options.id + "_header_table th", this.$ele).each(function(i) {
                var gridCompColumn = oThis.gridCompColumnArr[i], field = gridCompColumn.options.field, w = 0;
                gridCompColumn.options.visible && (w = parseInt(gridCompColumn.options.width));
                var obj = {
                    field: field,
                    width: w
                };
                columnWidthArr.push(obj);
            });
            for (var firstColumnField = this.getColumnByVisibleIndex(0).options.field, i = 0; i < this.gridCompLevelColumn.length; i++) {
                var column = this.gridCompLevelColumn[i], field = column.field, title = column.title, startField = column.startField, endField = column.endField;
                if (startField && endField) {
                    var startTh = $("th[field=" + startField + "]", this.$ele.find("#" + this.options.id + "_header_thead")), styleStr = ' style="', classStr = "", linkStyleStr = "", headerLevel = column.headerLevel;
                    styleStr += "top:" + (parseInt(maxHeaderLevel) - parseInt(headerLevel)) * this.baseHeaderHeight + "px;z-index:" + headerLevel + ";";
                    for (var width = 0, startFlag = !1, j = 0; j < columnWidthArr.length; j++) {
                        var nowColumn = columnWidthArr[j], nowField = nowColumn.field;
                        if ((nowField == startField || startFlag) && (startFlag = !0, width += nowColumn.width, 
                        nowField == endField)) break;
                    }
                    styleStr += "width:" + width + "px;", styleStr += '" ', firstColumnField == startField && (classStr += " grid-no-left-border "), 
                    maxHeaderLevel == headerLevel && (classStr += " grid-max-level-div "), this.options.headerHeight && (linkStyleStr = 'style="height:' + this.options.headerHeight + "px;line-height:" + this.options.headerHeight + 'px;"');
                    var htmlStr = '<div id="' + this.options.id + field + '" class="u-gird-parent ' + classStr + '" ' + styleStr + '><div class="u-grid-header-link" ' + linkStyleStr + ' title="' + title + '">' + title + "</div></div>";
                    startTh[0].insertAdjacentHTML("afterBegin", htmlStr);
                }
            }
        }, re_initGridCompColumnHeaderLevelFun = function(columnOptions) {
            if (columnOptions.headerLevel > 1) {
                this.gridCompLevelColumn.push(columnOptions);
                var oldLength = this.gridCompColumnArr.length;
                this.gridCompColumnArr.length = oldLength - 1, this.basicGridCompColumnArr && this.basicGridCompColumnArr.length > 0 && (this.basicGridCompColumnArr.length = oldLength - 1);
            }
        }, getLevelTitleByField = function(field) {
            for (var i = 0; i < this.gridCompLevelColumn.length; i++) {
                if (this.gridCompLevelColumn[i].field == field) return this.gridCompLevelColumn[i].title;
            }
            return "";
        };
        exports.headerLevelFunObj = {
            resetThVariableHeaderLevel: re_resetThVariableHeaderLevel,
            initGridCompColumnHeaderLevelFun: re_initGridCompColumnHeaderLevelFun,
            getLevelTitleByField: getLevelTitleByField
        };
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var re_initGridCompColumnLoacl = function() {
            var oThis = this, localGridCompColumnArr = this.getGridCompColumnArrFromLocal();
            null != localGridCompColumnArr && (this.gridCompColumnArr = localGridCompColumnArr, 
            $.each(this.gridCompColumnArr, function() {
                for (var field = this.options.field, i = 0; i < oThis.options.columns.length; i++) {
                    var c = oThis.options.columns[i];
                    if (c.field == field) {
                        var options = $.extend({}, c, this.options);
                        this.options = options, this.options.realWidth = this.options.width;
                        break;
                    }
                }
            }));
        }, getLocalData = function getLocalData() {
            if (!this.options.needLocalStorage) return null;
            if (null == window.localStorage) return null;
            if (null != this.$sd_storageData) return this.$sd_storageData;
            if (null == window.localStorage.getItem(this.localStorageId)) try {
                window.localStorage.setItem(this.localStorageId, "{}");
            } catch (e) {
                return null;
            }
            var storageDataStr = window.localStorage.getItem(this.localStorageId);
            return "undefined" == typeof JSON ? this.$sd_storageData = eval("(" + storageDataStr + ")") : this.$sd_storageData = JSON.parse(storageDataStr), 
            this.$sd_storageData;
        }, saveLocalData = function() {
            if (!this.options.needLocalStorage) return null;
            var oThis = this;
            this.saveSettimeout && clearTimeout(this.saveSettimeout), this.saveSettimeout = setTimeout(function() {
                if (null != oThis.$sd_storageData && null != window.localStorage) {
                    var strogeDataStr = JSON.stringify(oThis.$sd_storageData);
                    try {
                        window.localStorage.setItem(oThis.localStorageId, strogeDataStr);
                    } catch (e) {}
                }
            }, 200);
        }, clearLocalData = function() {
            if (!this.options.needLocalStorage) return null;
            this.saveSettimeout && clearTimeout(this.saveSettimeout), window.localStorage.setItem(this.localStorageId, "{}"), 
            this.$sd_storageData = {};
        }, saveGridCompColumnArrToLocal = function() {
            if (!this.options.needLocalStorage) return null;
            this.getLocalData().gridCompColumnArr = this.gridCompColumnArr.concat(this.gridCompColumnFixedArr), 
            this.saveLocalData();
        }, getGridCompColumnArrFromLocal = function() {
            if (!this.options.needLocalStorage) return null;
            var defData = this.getLocalData();
            return null == defData ? null : null == defData.gridCompColumnArr ? null : defData.gridCompColumnArr;
        }, localStorageFunObj = exports.localStorageFunObj = {
            initGridCompColumnLoacl: re_initGridCompColumnLoacl,
            getLocalData: getLocalData,
            saveLocalData: saveLocalData,
            clearLocalData: clearLocalData,
            saveGridCompColumnArrToLocal: saveGridCompColumnArrToLocal,
            getGridCompColumnArrFromLocal: getGridCompColumnArrFromLocal
        };
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var re_initGridHiddenLevelColumn = function() {
            if (this.options.overWidthHiddenColumn) {
                this.gridCompHiddenLevelColumnArr = this.gridCompColumnArr.slice(0), this.gridCompHiddenLevelColumnArr.sort(function(a, b) {
                    return a.options.hiddenLevel > b.options.hiddenLevel ? -1 : 1;
                });
            }
        }, re_widthChangeGridFunOverWidthHidden = function() {
            if (this.options.overWidthHiddenColumn) {
                this.lastVisibleColumn.options.width = this.lastVisibleColumn.options.realWidth;
                var wholeWidth = parseInt(this.wholeWidth) - parseInt(this.leftW), columnWholeWidth = parseInt(this.fixedWidth) + parseInt(this.contentRealWidth);
                if (columnWholeWidth > wholeWidth) {
                    for (var i = 0; i < this.gridCompHiddenLevelColumnArr.length; i++) {
                        var column = this.gridCompHiddenLevelColumnArr[i];
                        if (column.options.visible && (column.options.visible = !1, columnWholeWidth = parseInt(columnWholeWidth) - parseInt(column.options.width)), 
                        !(columnWholeWidth > wholeWidth)) break;
                    }
                    this.columnsVisibleFun();
                } else {
                    for (var i = this.gridCompHiddenLevelColumnArr.length - 1; i > -1; i--) {
                        var column = this.gridCompHiddenLevelColumnArr[i];
                        if (!column.options.visible) {
                            if ((columnWholeWidth = parseInt(columnWholeWidth) + parseInt(column.options.width)) > wholeWidth) break;
                            column.options.visible = !0;
                        }
                    }
                    this.columnsVisibleFun();
                }
            }
        };
        exports.overWidthHiddenFunObj = {
            initGridHiddenLevelColumn: re_initGridHiddenLevelColumn,
            widthChangeGridFunOverWidthHidden: re_widthChangeGridFunOverWidthHidden
        };
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports, __webpack_require__(0) ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports, _gridCompEvent) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.rowDragFunObj = void 0;
        var rowDrag_initGridEventFun = function() {
            var oThis = this;
            $("#" + this.options.id + "_content_tbody").on("mousedown", function(e) {
                var $tarTr = $(e.target).closest("tr"), isEditTr = $(e.target).closest("tr").hasClass("grid_edit_form_tr");
                if ($tarTr.length > 0 && !isEditTr) {
                    var eleTr = $(e.target).closest("tr")[0];
                    oThis.options.canRowDrag && oThis.rowDragStart(e, eleTr);
                }
            }), $("#" + this.options.id + "_content_tbody").on("mousemove", function(e) {
                oThis.mouseMoveX = e.clientX, oThis.mouseMoveY = e.clientY, oThis.rowDragEle && (oThis.mouseMoveX != oThis.rowDragStartX || oThis.mouseMoveY != oThis.rowDragStartY) && oThis.options.canRowDrag && (oThis.rowDragFlag = !0, 
                oThis.rowDragFun(e)), e.stopPropagation();
            }), $("#" + this.options.id + "_content_tbody").on("mouseup", function(e) {
                oThis.mouseUpX = e.clientX, oThis.mouseUpY = e.clientY, oThis.rowDragEnd(e);
            });
        }, rowDragStart = function(e, ele) {
            var oThis = this;
            this.options.canRowDrag && (this.rowDragStartX = e.clientX, this.rowDragStartY = e.clientY, 
            this.rowDragEle = ele, $("#" + this.options.id + "_content_tbody").find("tr").each(function(i) {
                if ($(this).is(oThis.rowDragEle)) return oThis.rowDragStartIndex = i, !1;
            }));
        }, rowDragFun = function(e) {
            if (this.options.canRowDrag && this.rowDragFlag) {
                this.rowDragEndX = e.clientX, this.rowDragEndY = e.clientY;
                var changeY = (this.rowDragEndX, this.rowDragStartX, this.rowDragEndY - this.rowDragStartY), rowHeight = this.rowDragEle.clientHeight, rowCounts = parseInt(changeY / rowHeight);
                this.dragdirection = rowCounts < 0 ? -1 : 1, this.rowDragEndIndex = this.rowDragStartIndex + rowCounts, 
                this.rowDragEndIndex < 0 && (this.rowDragEndIndex = 0), this.rowDragEndIndex != this.rowDragStartIndex && ($("#" + this.options.id + "_content_tbody").find("tr td").removeClass("u-grid-drag-icon"), 
                $("#" + this.options.id + "_content_tbody").find("tr").eq(this.rowDragEndIndex).find("td").first().addClass("u-grid-drag-icon"));
            }
        }, rowDragEnd = function(e) {
            var tempdata;
            this.options.canRowDrag && (this.rowDragFlag && this.rowDragEndIndex != this.rowDragStartIndex && (tempdata = this.dataSourceObj.rows[this.rowDragStartIndex], 
            $("#" + this.options.id + "_content_tbody").find("tr td").removeClass("u-grid-drag-icon"), 
            this.dragdirection < 0 ? ($("#" + this.options.id + "_content_tbody").find("tr").eq(this.rowDragEndIndex).before(this.rowDragEle), 
            this.dataSourceObj.rows.splice(this.rowDragStartIndex, 1), this.dataSourceObj.rows.splice(this.rowDragEndIndex, 0, tempdata)) : (this.dataSourceObj.rows.splice(this.rowDragStartIndex, 1), 
            this.rowDragEndIndex >= this.dataSourceObj.rows.length ? ($("#" + this.options.id + "_content_tbody").append(this.rowDragEle), 
            this.dataSourceObj.rows.splice(this.rowDragEndIndex + 1, 0, tempdata)) : ($("#" + this.options.id + "_content_tbody").find("tr").eq(this.rowDragEndIndex + 1).before(this.rowDragEle), 
            this.dataSourceObj.rows.splice(this.rowDragEndIndex, 0, tempdata)))), this.rowDragFlag = !1, 
            this.rowDragEle = void 0);
        }, setRowDrag = function(isDrag) {
            this.options.canRowDrag = isDrag;
        };
        exports.rowDragFunObj = {
            rowDrag_initGridEventFun: rowDrag_initGridEventFun,
            rowDragStart: rowDragStart,
            rowDragFun: rowDragFun,
            rowDragEnd: rowDragEnd,
            setRowDrag: setRowDrag
        };
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var re_createContentRowsSumRow = function(createFlag) {
            var htmlStr = "";
            return this.options.showSumRow && this.dataSourceObj.rows && this.dataSourceObj.rows.length > 0 && (htmlStr += this.createSumRow(createFlag)), 
            htmlStr;
        }, re_createContentSumRow = function(bottonStr) {
            return "";
        }, createSumRow = function(createFlag) {
            if (this.options.showSumRow) {
                var idStr, gridCompColumnArr, oThis = this;
                "fixed" == createFlag ? (idStr = "fixed_", gridCompColumnArr = this.gridCompColumnFixedArr) : (idStr = "", 
                gridCompColumnArr = this.gridCompColumnArr);
                var t = parseInt(this.wholeHeight) - this.exceptContentHeight - 48 - this.scrollBarHeight;
                t = t > 0 ? t : 0;
                var htmlStr = '<tr role="sumrow" class="u-grid-content-sum-row" id="' + this.options.id + "_content_" + idStr + 'sum_row" style="top:' + t + 'px;">';
                return $.each(gridCompColumnArr, function() {
                    var f = this.options.field, precision = this.options.precision, dataType = this.options.dataType, sumValue = oThis.dataSourceObj.getSumValue(f, this, oThis);
                    if ("float" == dataType) {
                        var o = {};
                        o.value = sumValue, o.precision = precision ? precision : 2, sumValue = oThis.DicimalFormater(o);
                    }
                    var tdStyle = "";
                    this.options.visible ? oThis.options.rowHeight && (tdStyle += 'style="height:' + oThis.options.rowHeight + "px;line-height:" + oThis.options.rowHeight + 'px;"') : (tdStyle = 'style="display:none;', 
                    oThis.options.rowHeight && (tdStyle += "height:" + oThis.options.rowHeight + "px;line-height:" + oThis.options.rowHeight + "px;"), 
                    tdStyle += '"'), htmlStr += '<td role="sumrowcell" title="' + sumValue + '" ' + tdStyle + ">", 
                    this.firstColumn && (htmlStr += '<div class="u-gird-centent-sum-div"><span>' + oThis.transMap.ml_sum + "</span></div>");
                    var contentStyle = "";
                    "integer" != this.options.dataType && "float" != this.options.dataType || (contentStyle = 'style="text-align: right;"'), 
                    htmlStr += '<div class="u-grid-content-td-div" ' + contentStyle + '><span value="' + sumValue + '">' + sumValue + "</span></div></td>";
                }), htmlStr += "</tr>";
            }
        }, createSumRowForIE = function(table, createFlag) {
            if (this.options.showSumRow) {
                var idStr, gridCompColumnArr, oThis = this;
                "fixed" == createFlag ? (idStr = "fixed_", gridCompColumnArr = this.gridCompColumnFixedArr) : (idStr = "", 
                gridCompColumnArr = this.gridCompColumnArr);
                var t = parseInt(this.wholeHeight) - this.exceptContentHeight - 48 - this.scrollBarHeight;
                t = t > 0 ? t : 0;
                var row = table.insertRow();
                row.role = "sumrow", row.className = "u-grid-content-sum-row", row.id = this.options.id + "_content_" + idStr + "sum_row", 
                row.style.top = t + "px", $.each(gridCompColumnArr, function() {
                    var f = this.options.field, precision = this.options.precision, dataType = this.options.dataType, sumValue = oThis.dataSourceObj.getSumValue(f, this, oThis);
                    if ("float" == dataType) {
                        var o = {};
                        o.value = sumValue, o.precision = precision ? precision : 2, sumValue = oThis.DicimalFormater(o);
                    }
                    var newCell = row.insertCell();
                    newCell.role = "sumrowcell", newCell.title = sumValue, oThis.options.sumRowHeight && (newCell.style.height = oThis.options.sumRowHeight + "px", 
                    newCell.style.lineHeight = oThis.options.sumRowHeight + "px");
                    var contentStyle = "";
                    "integer" != this.options.dataType && "float" != this.options.dataType || (contentStyle = 'style="text-align: right;"');
                    var htmlStr = '<div class="u-grid-content-td-div" ' + contentStyle + ">";
                    this.firstColumn && (htmlStr += '<div class="u-gird-centent-sum-div"><span>' + oThis.transMap.ml_sum + "</span></div>"), 
                    htmlStr += '<span value="' + sumValue + '">' + sumValue + "</span></div>", newCell.insertAdjacentHTML("afterBegin", htmlStr);
                });
            }
        }, re_repairSumRow = function() {
            var self = this;
            this.re_repairSumRowSetTimeout && clearTimeout(this.re_repairSumRowSetTimeout), 
            this.re_repairSumRowSetTimeout = setTimeout(function() {
                re_repairSumRowFun.call(self);
            }, 100);
        }, re_repairSumRowFun = function() {
            if (this.options.showSumRow) {
                $("#" + this.options.id + "_content_div tbody .u-grid-content-sum-row").remove(), 
                $("#" + this.options.id + "_content_fixed_div tbody .u-grid-content-sum-row").remove();
                try {
                    if (this.dataSourceObj.rows && this.dataSourceObj.rows.length > 0) {
                        var htmlStr = this.createSumRow();
                        this.options.sumRowFirst ? $("#" + this.options.id + "_content_div tbody")[0].insertAdjacentHTML("afterBegin", htmlStr) : $("#" + this.options.id + "_content_div tbody")[0].insertAdjacentHTML("beforeEnd", htmlStr);
                        var htmlStr = this.createSumRow("fixed");
                        $("#" + this.options.id + "_content_fixed_div tbody")[0] && (this.options.sumRowFirst ? $("#" + this.options.id + "_content_fixed_div tbody")[0].insertAdjacentHTML("afterBegin", htmlStr) : $("#" + this.options.id + "_content_fixed_div tbody")[0].insertAdjacentHTML("beforeEnd", htmlStr));
                    }
                } catch (e) {
                    var table = $("#" + this.options.id + "_content_div table")[0];
                    $("#" + this.options.id + "_content_fixed_div table")[0];
                    this.createSumRowForIE(table), this.createSumRowForIE(table, "fixed");
                }
                this.renderSumRow();
            }
        }, renderSumRow = function() {
            var oThis = this;
            $.each(this.gridCompColumnFixedArr, function(i) {
                var sumCol = this.options.sumCol, sumRenderType = this.options.sumRenderType;
                if (sumCol) {
                    var sumSpans = $("#" + oThis.options.id + "_content_fixed_sum_row").find("td").eq(i).find("span"), sumSpan = sumSpans[sumSpans.length - 1];
                    if (sumSpan) if ("function" == typeof sumRenderType) {
                        var sumV = $(sumSpan).attr("value"), obj = {};
                        obj.value = sumV, obj.element = sumSpan, obj.gridObj = oThis, obj.gridCompColumn = this, 
                        sumRenderType.call(oThis, obj);
                    } else "integer" != dataType && "float" != dataType || (sumSpan.style.textAlign = "right");
                }
            }), $.each(this.gridCompColumnArr, function(i) {
                var sumCol = this.options.sumCol, dataType = this.options.dataType, sumRenderType = this.options.sumRenderType;
                if (sumCol) {
                    var sumSpans = $("#" + oThis.options.id + "_content_sum_row").find("td").eq(i).find("span"), sumSpan = sumSpans[sumSpans.length - 1];
                    if (sumSpan) if ("function" == typeof sumRenderType) {
                        var sumV = $(sumSpan).attr("value"), obj = {};
                        obj.value = sumV, obj.element = sumSpan, obj.gridObj = oThis, obj.gridCompColumn = this, 
                        sumRenderType.call(oThis, obj);
                    } else "integer" != dataType && "float" != dataType || (sumSpan.style.textAlign = "right");
                }
            });
        }, re_renderTypeSumRow = function(gridCompColumn, i, begin, length, isFixedColumn) {
            var oThis = this, sumCol = gridCompColumn.options.sumCol, sumRenderType = gridCompColumn.options.sumRenderType, dataType = gridCompColumn.options.dataType, idStr = isFixedColumn === !0 ? "fixed_" : "";
            if (sumCol) {
                var sumSpans = $("#" + this.options.id + "_content_" + idStr + "sum_row").find("td").eq(i).find("span"), sumSpan = sumSpans[sumSpans.length - 1];
                if (sumSpan) if ("function" == typeof sumRenderType) {
                    var sumV = $(sumSpan).attr("value"), obj = {};
                    obj.value = sumV, obj.element = sumSpan, obj.gridObj = oThis, obj.gridCompColumn = gridCompColumn, 
                    sumRenderType.call(oThis, obj);
                } else "integer" != dataType && "float" != dataType || (sumSpan.style.textAlign = "right");
            }
        };
        window.maxSumRender = function(opt) {
            var nowMax, gridComp = opt.gridObj, gridCompColumn = opt.gridCompColumn, field = gridCompColumn.options.field, element = opt.element;
            if ($.each(gridComp.dataSourceObj.rows, function(i) {
                var v = $(this.value).attr(field);
                v = "Int" == gridCompColumn.options.dataType ? gridComp.getInt(v, 0) : gridComp.getFloat(v, 0), 
                void 0 === nowMax ? nowMax = v : v > nowMax && (nowMax = v);
            }), "Float" == gridCompColumn.options.dataType && gridCompColumn.options.precision) {
                var o = {};
                o.value = nowMax, o.precision = gridCompColumn.options.precision, nowMax = gridComp.DicimalFormater(o);
            }
            element.innerHTML = nowMax + "";
        }, window.minSumRender = function(opt) {
            var nowMax, gridComp = opt.gridObj, gridCompColumn = opt.gridCompColumn, field = gridCompColumn.options.field, element = opt.element;
            if ($.each(gridComp.dataSourceObj.rows, function(i) {
                var v = $(this.value).attr(field);
                v = "Int" == gridCompColumn.options.dataType ? gridComp.getInt(v, 0) : gridComp.getFloat(v, 0), 
                void 0 === nowMax ? nowMax = v : v < nowMax && (nowMax = v);
            }), "Float" == gridCompColumn.options.dataType && gridCompColumn.options.precision) {
                var o = {};
                o.value = nowMax, o.precision = gridCompColumn.options.precision, nowMax = gridComp.DicimalFormater(o);
            }
            element.innerHTML = nowMax + "";
        }, window.avgSumRender = function(opt) {
            var sumValue = opt.value, gridComp = opt.gridObj, gridCompColumn = opt.gridCompColumn, element = opt.element, l = gridComp.dataSourceObj.rows.length, avgValue = sumValue / l;
            if ("Float" == gridCompColumn.options.dataType && gridCompColumn.options.precision) {
                var o = {};
                o.value = avgValue, o.precision = gridCompColumn.options.precision, avgValue = gridComp.DicimalFormater(o);
            }
            element.innerHTML = avgValue + "";
        };
        exports.sumRowFunObj = {
            createContentRowsSumRow: re_createContentRowsSumRow,
            createContentSumRow: re_createContentSumRow,
            createSumRow: createSumRow,
            createSumRowForIE: createSumRowForIE,
            repairSumRow: re_repairSumRow,
            renderSumRow: renderSumRow,
            renderTypeSumRow: re_renderTypeSumRow
        };
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports, __webpack_require__(0) ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports, _gridCompEvent) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.swapFunObj = void 0;
        var swap_initEventFun = function() {
            var oThis = this;
            $("#" + this.options.id).on("mousedown", function(e) {
                if ($(e.target).closest("#" + oThis.options.id + "_header").length > 0) {
                    var eleTh = $(e.target).closest("th")[0];
                    oThis.options.canSwap && oThis.swapColumnStart(e, eleTh), e.preventDefault();
                } else $(e.target).closest("#" + oThis.options.id + "_content").length;
            }), $("#" + this.options.id).on("mousemove", function(e) {
                oThis.mouseMoveX = e.clientX, oThis.mouseMoveY = e.clientY, oThis.mouseMoveX == oThis.mouseDownX && oThis.mouseDownY == oThis.mouseMoveY || "mouseDownX" == oThis.mouseDownX || !oThis.options.canSwap || (oThis.swapColumnFlag = !0), 
                oThis.swapColumnFun(e), e.stopPropagation();
            }), $("#" + this.options.id + "_top").on("mousemove", function(e) {
                oThis.mouseMoveX = e.clientX, oThis.mouseMoveY = e.clientY, oThis.mouseMoveX == oThis.mouseDownX && oThis.mouseDownY == oThis.mouseMoveY || "mouseDownX" == oThis.mouseDownX || !oThis.options.canSwap || (oThis.swapColumnFlag = !0), 
                oThis.swapColumnFun(e), e.stopPropagation();
            }), $("#" + this.options.id).on("mouseup", function(e) {
                oThis.mouseUpX = e.clientX, oThis.mouseUpY = e.clientY, oThis.swapColumnEnd(e), 
                oThis.mouseUpX = "mouseUpX", oThis.mouseUpY = "mouseUpY", oThis.mouseDownX = "mouseDownX", 
                oThis.mouseDownY = "mouseDownY", oThis.mouseMoveX = "mouseMoveX", oThis.mouseMoveY = "mouseMoveY";
            }), $("#" + this.options.id + "_top").on("mouseup", function(e) {
                oThis.mouseUpX = e.clientX, oThis.mouseUpY = e.clientY, oThis.swapColumnEnd(e), 
                oThis.mouseUpX = "mouseUpX", oThis.mouseUpY = "mouseUpY", oThis.mouseDownX = "mouseDownX", 
                oThis.mouseDownY = "mouseDownY", oThis.mouseMoveX = "mouseMoveX", oThis.mouseMoveY = "mouseMoveY";
            });
        }, swap_initGridEventFun = function() {
        }, swapColumnStart = function(e, ele) {
            this.options.canSwap && (this.swapColumnEle = ele, this.swapColumnStartX = e.clientX, 
            this.swapColumnStartY = e.clientY);
        }, swapColumnFun = function(e) {
            if (this.options.canSwap) {
                var oThis = this;
                if (this.swapColumnFlag) {
                    var nowTh = this.swapColumnEle;
                    if (!nowTh) return;
                    var $nowTh = $(nowTh);
                    if (!nowTh.gridCompColumn) return;
                    var nowGridCompColumn = nowTh.gridCompColumn;
                    if (0 == $("#" + this.options.id + "_clue").length) {
                        var $d = $('<div class="u-grid u-grid-header-drag-clue" id="' + this.options.id + '_clue" />').css({
                            width: nowTh.scrollWidth + "px",
                            left: nowTh.attrLeftTotalWidth - oThis.scrollLeft + oThis.leftW + oThis.fixedWidth + "px",
                            top: "0px",
                            paddingLeft: $nowTh.css("paddingLeft"),
                            paddingRight: $nowTh.css("paddingRight"),
                            lineHeight: $nowTh.height() + "px",
                            paddingTop: $nowTh.css("paddingTop"),
                            paddingBottom: $nowTh.css("paddingBottom")
                        }).html(nowGridCompColumn.options.title || nowGridCompColumn.options.field).prepend('<span class="uf uf-bancirclesymbol u-grid-header-drag-status" />');
                        try {
                            $("#" + this.options.id)[0].insertAdjacentElement("afterBegin", $d[0]);
                        } catch (e) {
                            $("#" + this.options.id)[0].insertBefore($d[0], $("#" + this.options.id)[0].firstChild);
                        }
                        $d.on("mousemove", function() {
                            e.stopPropagation();
                        });
                    }
                    this.swapColumnEndX = e.clientX, this.swapColumnEndY = e.clientY;
                    var changeX = this.swapColumnEndX - this.swapColumnStartX, changeY = this.swapColumnEndY - this.swapColumnStartY;
                    if ($("#" + this.options.id + "_clue").css({
                        left: nowTh.attrLeftTotalWidth + changeX - oThis.scrollLeft + oThis.leftW + oThis.fixedWidth + "px",
                        top: changeY + "px"
                    }), 0 == $("#" + this.options.id + "_swap_top").length) {
                        var $d = $('<span class="uf uf-sortdown u-grid-header-swap-tip-span"  id="' + this.options.id + '_swap_top"/>');
                        $d.css({
                            top: $nowTh.height() - 6 + "px"
                        });
                        var $d1 = $('<span class="uf uf-sortup u-grid-header-swap-tip-span" id="' + this.options.id + '_swap_down" />');
                        $d1.css({
                            top: "6px"
                        });
                        try {
                            $("#" + this.options.id)[0].insertAdjacentElement("afterBegin", $d[0]), $("#" + this.options.id)[0].insertAdjacentElement("afterBegin", $d1[0]);
                        } catch (e) {
                            $("#" + this.options.id)[0].insertBefore($d[0], $("#" + this.options.id)[0].firstChild), 
                            $("#" + this.options.id)[0].insertBefore($d1[0], $("#" + this.options.id)[0].firstChild);
                        }
                    }
                    this.canSwap = !1, $("#" + this.options.id + "_header_table th").each(function(i) {
                        var left = $(this).offset().left, right = left + parseInt(this.attrWidth);
                        if (0 == i && e.clientX < left) oThis.swapColumnEle != this && (oThis.swapToColumnEle = "LeftEle", 
                        $("#" + oThis.options.id + "_swap_top").css({
                            left: -oThis.scrollLeft - 3 + oThis.leftW + oThis.fixedWidth + "px",
                            display: "block"
                        }), $("#" + oThis.options.id + "_swap_down").css({
                            left: -oThis.scrollLeft - 3 + oThis.leftW + oThis.fixedWidth + "px",
                            display: "block"
                        })), oThis.canSwap = !0; else if (left < e.clientX && e.clientX < right && oThis.swapColumnEle != this && parseInt($(this).attr("index")) + 1 != parseInt($(oThis.swapColumnEle).attr("index"))) return oThis.swapToColumnEle != this && (oThis.swapToColumnEle = this, 
                        $("#" + oThis.options.id + "_swap_top").css({
                            left: this.attrRightTotalWidth - oThis.scrollLeft - 3 + oThis.leftW + oThis.fixedWidth + "px",
                            display: "block"
                        }), $("#" + oThis.options.id + "_swap_down").css({
                            left: this.attrRightTotalWidth - oThis.scrollLeft - 3 + oThis.leftW + oThis.fixedWidth + "px",
                            display: "block"
                        })), oThis.canSwap = !0, !1;
                    }), this.canSwap ? $(".u-grid-header-drag-status").removeClass("uf-bancirclesymbol").addClass("uf-plussigninablackcircle") : ($("#" + this.options.id + "_swap_top").css("display", "none"), 
                    $("#" + this.options.id + "_swap_down").css("display", "none"), $(".u-grid-header-drag-status").removeClass("uf-plussigninablackcircle").addClass("uf-bancirclesymbol"), 
                    this.swapToColumnEle = null), $("#" + this.options.id + "_top").css("display", "block");
                }
            }
        }, swapColumnEnd = function(e) {
            if (this.options.canSwap) {
                if (this.swapColumnFlag) {
                    if (this.swapToColumnEle) {
                        var swapColumnEle = this.swapColumnEle, swapToColumnEle = this.swapToColumnEle, swapColumnIndex = $(swapColumnEle).attr("index"), swapToColumnIndex = $(swapToColumnEle).attr("index"), swapGridCompColumn = this.gridCompColumnArr[swapColumnIndex];
                        this.gridCompColumnArr.splice(parseInt(swapToColumnIndex) + 1, 0, swapGridCompColumn), 
                        parseInt(swapColumnIndex) < parseInt(swapToColumnIndex) ? this.gridCompColumnArr.splice(parseInt(swapColumnIndex), 1) : this.gridCompColumnArr.splice(parseInt(swapColumnIndex) + 1, 1), 
                        this.saveGridCompColumnArrToLocal(), this.repaintGridDivs();
                    }
                    $("#" + this.options.id + "_clue").remove(), $("#" + this.options.id + "_swap_top").css("display", "none"), 
                    $("#" + this.options.id + "_swap_down").css("display", "none");
                }
                this.swapColumnFlag = !1, $("#" + this.options.id + "_top").css("display", "none");
            }
        };
        exports.swapFunObj = {
            swap_initEventFun: swap_initEventFun,
            swap_initGridEventFun: swap_initGridEventFun,
            swapColumnStart: swapColumnStart,
            swapColumnFun: swapColumnFun,
            swapColumnEnd: swapColumnEnd
        };
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(global, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports, __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(0, function(exports, _gridBrowser) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.utilFunOjb = void 0;
        var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, formatWidth = function(w) {
            return w ? (w + "").indexOf("%") > 0 ? w : parseInt(w) + "px" : "";
        }, swapEle = function(e1, e2) {
            var n = e1.next(), p = e2.prev();
            e2.insertBefore(n), e1.insertAfter(p);
        }, getString = function(value, defaultValue) {
            return null !== value && void 0 !== value && "null" !== value && "undefined" !== value && "" !== value || (value = defaultValue), 
            _gridBrowser.gridBrowser.isIE8 ? [ value ].join("") : value + "";
        }, getInt = function(value, defaultValue) {
            return (null === value || void 0 === value || "null" === value || "undefined" === value || "" === value || isNaN(value)) && (value = defaultValue), 
            value;
        }, getFloat = function(value, defaultValue) {
            return (null === value || void 0 === value || "null" === value || "undefined" === value || "" === value || isNaN(value)) && (value = defaultValue), 
            value;
        }, cloneObj = function(obj) {
            var o;
            if ("object" == (void 0 === obj ? "undefined" : _typeof(obj))) if (null === obj) o = null; else if (obj instanceof Array) {
                o = [];
                for (var i = 0, len = obj.length; i < len; i++) o.push(this.cloneObj(obj[i]));
            } else {
                o = {};
                for (var k in obj) o[k] = this.cloneObj(obj[k]);
            } else o = obj;
            return o;
        }, DicimalFormater = function(obj) {
            for (var value = obj.value + "", precision = obj.precision, i = 0; i < value.length; i++) if ("-0123456789.".indexOf(value.charAt(i)) == -1) return "";
            return checkDicimalInvalid(value, precision);
        }, checkDicimalInvalid = function(value, precision) {
            if (null == value || isNaN(value)) return "";
            var digit = parseFloat(value), result = (digit * Math.pow(10, precision) / Math.pow(10, precision)).toFixed(precision);
            return "NaN" == result ? "" : result;
        }, accAdd = function(v1, v2) {
            var r1, r2, m;
            try {
                r1 = v1.toString().split(".")[1].length;
            } catch (e) {
                r1 = 0;
            }
            try {
                r2 = v2.toString().split(".")[1].length;
            } catch (e) {
                r2 = 0;
            }
            return m = Math.pow(10, Math.max(r1, r2)), (v1 * m + v2 * m) / m;
        }, getTrIndex = function($tr) {
            return $('tr[id!="' + this.options.id + '_edit_tr"][role="row"]', $tr.parent()).index($tr);
        }, getDataTableRowIdByRow = function(row) {
            return row.value["$_#_@_id"];
        };
        String.prototype.substrCH = function(nLen) {
            for (var i = 0, j = 0; i < nLen && j < this.length; ) {
                var charCode = this.charCodeAt(j);
                if (charCode > 256 && i == nLen - 1) break;
                i += charCode > 256 ? 2 : 1, j += 1;
            }
            return this.substr(0, j);
        };
        exports.utilFunOjb = {
            formatWidth: formatWidth,
            swapEle: swapEle,
            getString: getString,
            getInt: getInt,
            getFloat: getFloat,
            cloneObj: cloneObj,
            DicimalFormater: DicimalFormater,
            accAdd: accAdd,
            getTrIndex: getTrIndex,
            getDataTableRowIdByRow: getDataTableRowIdByRow
        };
    });
} ]);