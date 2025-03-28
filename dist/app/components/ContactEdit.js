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
var ContactEdit = (function (_super) {
    __extends(ContactEdit, _super);
    function ContactEdit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContactEdit.prototype.componentDidMount = function () {
        this.props.fetchData(this.props.id);
    };
    ContactEdit.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement("input", { type: "text", ref: "name" }),
                React.createElement("br", null),
                React.createElement("input", { type: "text", ref: "email" }),
                React.createElement("br", null),
                React.createElement("input", { type: "text", ref: "phone" }),
                React.createElement("br", null),
                React.createElement("button", null, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")),
            React.createElement("ul", null, this.props.items.map(function (item) { return (React.createElement("div", { key: item.id },
                React.createElement("li", null,
                    React.createElement("button", null, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"),
                    React.createElement("button", null, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"),
                    React.createElement("br", null)))); }))));
    };
    return ContactEdit;
}(React.Component));
var mapStateToProps = function (state) {
    return {
        items: state.items
    };
};
var mapDispatchToProps = function (dispatch) {
    return {};
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ContactEdit);
//# sourceMappingURL=ContactEdit.js.map