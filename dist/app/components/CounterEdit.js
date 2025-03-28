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
var counterparty_1 = require("../actions/counterparty");
require("./CounterEdit.less");
var CounterEdit = (function (_super) {
    __extends(CounterEdit, _super);
    function CounterEdit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CounterEdit.prototype.componentDidMount = function () {
        this.props.fetchData(this.props.id);
    };
    CounterEdit.prototype.render = function () {
        return (React.createElement("div", null,
            "id: ",
            this.props.id,
            React.createElement("label", null,
                "\u0424.\u0418.\u041E.:",
                React.createElement("input", { type: "text", ref: "name" })),
            " ",
            React.createElement("br", null),
            React.createElement("label", null,
                "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:",
                React.createElement("input", { type: "text", ref: "phone" }),
                " "),
            " ",
            React.createElement("br", null),
            React.createElement("label", null,
                "E-mail:",
                React.createElement("input", { type: "text", ref: "email" }),
                " "),
            " ",
            React.createElement("br", null),
            React.createElement("button", { className: "anyButton" }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("br", null)));
    };
    ;
    return CounterEdit;
}(React.Component));
var mapStateToProps = function (state, ownProps) {
    return {
        items: state.items,
        contact: state.contact,
        hasErrored: state.counterpartyHasErrored,
        isLoading: state.counterpartyIsLoading,
        id: ownProps.params.id
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        fetchData: function (id) { return dispatch(counterparty_1.counterpartyFetchData(id)); }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(CounterEdit);
//# sourceMappingURL=CounterEdit.js.map