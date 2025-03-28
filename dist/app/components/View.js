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
require("./View.less");
var View = (function (_super) {
    __extends(View, _super);
    function View() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    View.prototype.componentDidMount = function () {
        this.props.fetchData(this.props.id);
    };
    View.prototype.render = function () {
        var counterparty = this.props.counterparty;
        console.log(counterparty);
        if (counterparty.error == undefined) {
            return React.createElement("div", null, "\u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442");
        }
        if (counterparty.error.length != 0) {
            return (React.createElement("p", null, counterparty && counterparty.error && counterparty.error.map(function (item) { return (React.createElement("p", null,
                "\u041E\u0448\u0438\u0431\u043A\u0430: ",
                React.createElement("b", null, item.field),
                " - ",
                item.message)); })));
        }
        if (counterparty.isLoading) {
            return React.createElement("p", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026");
        }
        return (React.createElement("div", { className: "view" },
            React.createElement("h1", null, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430"),
            React.createElement("h2", null,
                counterparty && counterparty.counterparty && counterparty.counterparty.legalEntity && counterparty.counterparty.legalEntity.name,
                React.createElement("br", null)),
            React.createElement("b", null,
                React.createElement("span", { className: "italic" }, "\u0418\u041D\u041D: "),
                counterparty && counterparty.counterparty && counterparty.counterparty.legalEntity && counterparty.counterparty.legalEntity.inn),
            React.createElement("br", null),
            React.createElement("hr", null),
            React.createElement("div", { className: "responsible" },
                React.createElement("span", { className: "italic" }, "\u0418\u043C\u044F: "),
                counterparty && counterparty.counterparty && counterparty.counterparty.bailee && counterparty.counterparty.bailee.name,
                React.createElement("br", null),
                React.createElement("span", { className: "italic" }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D: "),
                counterparty && counterparty.counterparty && counterparty.counterparty.bailee && counterparty.counterparty.bailee.phone,
                React.createElement("br", null),
                React.createElement("span", { className: "italic" }, "E-mail: "),
                counterparty && counterparty.counterparty && counterparty.counterparty.bailee && counterparty.counterparty.bailee.email,
                React.createElement("br", null)),
            React.createElement("hr", null),
            React.createElement("h3", null, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u043B\u0438\u0446\u0430"),
            React.createElement("div", { className: "contactPerson" }),
            counterparty && counterparty.counterparty && counterparty.counterparty.legalEntity && counterparty.counterparty.contactPersons.map(function (item) { return (React.createElement("div", { className: "itemWrap", key: item.id },
                React.createElement("span", { className: "italic" }, "\u0418\u043C\u044F: "),
                item.name,
                React.createElement("br", null),
                React.createElement("span", { className: "italic" }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D: "),
                item.phone,
                React.createElement("br", null),
                React.createElement("span", { className: "italic" }, "E-mail: "),
                item.email,
                React.createElement("br", null))); }),
            React.createElement("hr", null),
            React.createElement("h3", null, "\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439"),
            React.createElement("div", { className: "responsible" },
                React.createElement("span", { className: "italic" }, "\u0418\u043C\u044F: "),
                counterparty && counterparty.counterparty && counterparty.counterparty.person && counterparty.counterparty.person.name,
                React.createElement("br", null),
                React.createElement("span", { className: "italic" }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D: "),
                counterparty && counterparty.counterparty && counterparty.counterparty.person && counterparty.counterparty.person.phone,
                React.createElement("br", null),
                React.createElement("span", { className: "italic" }, "E-mail: "),
                counterparty && counterparty.counterparty && counterparty.counterparty.person && counterparty.counterparty.person.email,
                React.createElement("br", null))));
    };
    return View;
}(React.Component));
var mapStateToProps = function (state, ownProps) {
    return {
        counterparty: state.counterparty,
        error: state.error,
        isLoading: state.isLoading,
        id: ownProps.params.id
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        fetchData: function (id) { return dispatch(counterparty_1.counterpartyFetchData(id)); }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(View);
//# sourceMappingURL=View.js.map