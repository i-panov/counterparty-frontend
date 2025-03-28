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
var react_router_1 = require("react-router");
require("./List.less");
var List = (function (_super) {
    __extends(List, _super);
    function List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    List.prototype.componentDidMount = function () {
        this.props.fetchData();
    };
    List.prototype.render = function () {
        var _this = this;
        var items = this.props.items;
        if (items.error == undefined) {
            return React.createElement("div", null, "\u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442");
        }
        if (items.items.length == 0) {
            return React.createElement("div", null, "\u0414\u0430\u043D\u043D\u044B\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442");
        }
        if (items.isLoading) {
            return React.createElement("p", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026");
        }
        return (React.createElement("div", null,
            React.createElement("ul", { className: "itemList" }, items && items.items && items.items.map(function (item) { return (React.createElement("div", { className: "itemWrap", key: item.id },
                React.createElement("li", { className: "item" },
                    React.createElement(react_router_1.Link, { className: "general_link", to: "/view/" + item.id },
                        React.createElement("b", null, item.name),
                        React.createElement("div", { className: "phone" },
                            "\u0442\u0435\u043B. ",
                            item.phone)),
                    React.createElement(react_router_1.Link, { to: "/counter/" + item.id },
                        React.createElement("div", { className: "btn edit" }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")),
                    React.createElement("div", { className: "btn delete", onClick: function () { return _this.props.deleteData(item.id); } }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"),
                    React.createElement("br", null)))); }))));
    };
    return List;
}(React.Component));
var mapStateToProps = function (state) {
    return {
        items: state.items,
        error: state.error,
        isLoading: state.isLoading
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        fetchData: function () { return dispatch(items_1.itemsFetchData()); },
        deleteData: function (id) { return dispatch(items_1.deleteData(id)); },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(List);
//# sourceMappingURL=List.js.map