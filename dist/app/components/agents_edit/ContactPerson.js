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
/**
 * Created by andreygerasimov on 30/07/2017.
 */
var React = require("react");
var ContactPerson = (function (_super) {
    __extends(ContactPerson, _super);
    function ContactPerson() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            editing: false
        };
        _this.onClickEdit = function () {
            _this.setState({ editing: true });
        };
        _this.onClickSave = function () {
            _this.props.updatePersonInfo(_this.refs.newText.value, _this.props.index);
            _this.setState({ editing: false });
        };
        _this.onClickRemove = function () {
            _this.props.removeEntirePerson(_this.props.index);
        };
        return _this;
    }
    ContactPerson.prototype.renderNormal = function () {
        return (React.createElement("div", null,
            React.createElement("div", null, this.props.children),
            React.createElement("button", { onClick: this.onClickEdit }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"),
            React.createElement("button", { onClick: this.onClickRemove }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"),
            React.createElement("br", null),
            React.createElement("br", null)));
    };
    ContactPerson.prototype.renderForm = function () {
        return (React.createElement("div", null,
            React.createElement("input", { type: "text", ref: "newText", defaultValue: this.props.children }),
            React.createElement("button", { onClick: this.onClickSave }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"),
            React.createElement("br", null),
            React.createElement("br", null)));
    };
    ContactPerson.prototype.render = function () {
        if (this.state.editing) {
            return (this.renderForm());
        }
        else {
            return (this.renderNormal());
        }
    };
    return ContactPerson;
}(React.Component));
exports.default = ContactPerson;
//# sourceMappingURL=ContactPerson.js.map