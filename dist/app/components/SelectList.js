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
var select_1 = require("../actions/select");
require("./Add.less");
var SelectList = (function (_super) {
    __extends(SelectList, _super);
    function SelectList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleFilterChange = function (e) {
            _this.props.onChange && _this.props.onChange(e.target.value);
        };
        return _this;
    }
    SelectList.prototype.componentDidMount = function () {
        this.props.fetchData1();
    };
    SelectList.prototype.render = function () {
        var legalEntities = this.props.legalEntities;
        if (legalEntities.error.length != 0) {
            return (React.createElement("p", null, legalEntities && legalEntities.errors && legalEntities.items.map(function (item) { return (React.createElement("p", null,
                "\u041E\u0448\u0438\u0431\u043A\u0430: ",
                React.createElement("b", null, item.field),
                " - ",
                item.message)); })));
        }
        if (legalEntities.error == undefined) {
            return React.createElement("div", null, "\u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442");
        }
        if (legalEntities.legalEntitiesisLoading) {
            return React.createElement("p", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026");
        }
        return (React.createElement("div", { className: "company" },
            React.createElement("select", { onChange: this.handleFilterChange }, legalEntities && legalEntities.legalEntities && legalEntities.legalEntities.map(function (item) { return (React.createElement("option", { key: item.id, value: item.id }, item.name)); }))));
    };
    return SelectList;
}(React.Component));
var mapStateToProps = function (state) {
    return {
        legalEntities: state.legalEntities,
        error: state.error,
        legalEntitiesisLoading: state.isLoading
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        fetchData1: function () { return dispatch(select_1.legalEntitiesFetchData()); }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SelectList);
//# sourceMappingURL=SelectList.js.map