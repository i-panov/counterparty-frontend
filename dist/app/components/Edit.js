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
var Edit = (function (_super) {
    __extends(Edit, _super);
    function Edit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Edit.prototype.addCounterparty = function () {
        this.props.onAddCounterparty(Date.now(), this.counterpartyNameInput.value, this.counterpartyPhoneInput.value);
        this.counterpartyNameInput.value = "";
        this.counterpartyPhoneInput.value = "";
    };
    ;
    Edit.prototype.render = function () {
        var _this = this;
        console.log(this.props.counterpartys);
        return (React.createElement("div", null,
            React.createElement("input", { type: "text", ref: function (input) { _this.counterpartyNameInput = input; } }),
            React.createElement("br", null),
            React.createElement("input", { type: "text", ref: function (input) { _this.counterpartyPhoneInput = input; } }),
            React.createElement("br", null),
            React.createElement("button", { onClick: this.addCounterparty.bind(this) }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")));
    };
    return Edit;
}(React.Component));
exports.default = react_redux_1.connect(function (state) { return ({
    counterpartys: state.counterpartys
}); }, function (dispatch) { return ({
    onAddCounterparty: function (id, name, phone) {
        dispatch({ type: "ADD", payload: { id: id, name: name, phone: phone } });
    }
}); })(Edit);
//# sourceMappingURL=Edit.js.map