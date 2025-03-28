"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var items_1 = require("../actions/items");
require("./List.less");
var SelectList = (function (_super) {
    __extends(SelectList, _super);
    function SelectList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderOptions = function () {
            return this.state.genres.map(function (genre, i) {
                return (React.createElement("option", { value: i, value: i }, "\u041E\u0434\u0438\u043D"));
            });
        };
        _this.render = function () {
            return (React.createElement("select", null, this.renderOptions()));
        };
        return _this;
    }
    SelectList.prototype.componentDidMount = function () {
        this.props.fetchSelect();
    };
    return SelectList;
}(React.Component));
;
var mapStateToProps = function (state) {
    return {
        items: state.items
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        fetchData: function () { return dispatch(items_1.itemsFetchData()); }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SelectList);
//# sourceMappingURL=Select.js.map