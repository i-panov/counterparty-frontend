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
var SelectList_1 = require("./SelectList");
require("./Add.less");
var Add = (function (_super) {
    __extends(Add, _super);
    function Add() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            id: 1,
            name: "",
            email: "",
            phone: "",
            contact: [],
            name_contact: "",
            email_contact: "",
            phone_contact: "",
            name_responsible: "",
            email_responsible: "",
            phone_responsible: ""
        };
        _this.handleOnChange = function (value) {
            _this.setState({
                id: value
            });
        };
        _this.onStateChange = function (e) {
            var id = e.target.id;
            _this.setState((_a = {}, _a[id] = e.target.value, _a));
            var _a;
        };
        _this.onContactAdd = function () {
            var name = _this.state.name_contact;
            var email = _this.state.email_contact;
            var phone = _this.state.email_contact;
            _this.setState({
                contact: _this.state.contact.concat([{
                        email: email,
                        name: name,
                        phone: phone
                    }])
            });
        };
        return _this;
    }
    Add.prototype.addAgent = function () {
        console.log(this.state.name, this.state.email, this.state.phone, this.state.id, this.state.contact, this.state.name_responsible, this.state.email_responsible, this.state.phone_responsible);
        this.props.addData(this.state.name, this.state.email, this.state.phone, this.state.id, this.state.contact, this.state.name_responsible, this.state.email_responsible, this.state.phone_responsible);
    };
    ;
    Add.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "add" },
            React.createElement("h1", null, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430"),
            React.createElement("span", { className: "italic inp" }, "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F: "),
            React.createElement(SelectList_1.default, { onChange: this.handleOnChange }),
            React.createElement("br", null),
            React.createElement("span", { className: "italic inp" }, "\u0424.\u0418.\u041E.: "),
            React.createElement("input", { className: "inp", type: "text", id: "name", value: this.state.name, onChange: this.onStateChange }),
            React.createElement("br", null),
            React.createElement("span", { className: "italic inp" }, "E-mail: "),
            React.createElement("input", { className: "inp", type: "text", id: "email", value: this.state.email, onChange: this.onStateChange }),
            React.createElement("br", null),
            React.createElement("span", { className: "italic inp" }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D: "),
            React.createElement("input", { className: "inp", type: "text", id: "phone", value: this.state.phone, onChange: this.onStateChange }),
            React.createElement("hr", null),
            React.createElement("h2", null, "\u041A\u043E\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u043B\u0438\u0446\u0430"),
            React.createElement("span", { className: "italic inp" }, "\u0424.\u0418.\u041E.: "),
            React.createElement("input", { className: "inp", type: "text", id: "name_contact", value: this.state.name_contact, onChange: this.onStateChange }),
            React.createElement("br", null),
            React.createElement("span", { className: "italic inp" }, "E-mail: "),
            React.createElement("input", { className: "inp", type: "text", id: "email_contact", value: this.state.email_contact, onChange: this.onStateChange }),
            React.createElement("br", null),
            React.createElement("span", { className: "italic inp" }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D: "),
            React.createElement("input", { className: "inp", type: "text", id: "phone_contact", value: this.state.phone_contact, onChange: this.onStateChange }),
            React.createElement("br", null),
            React.createElement("div", { className: "btn btnAdd", onClick: function () { return _this.onContactAdd(); } }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u043E\u0435 \u043B\u0438\u0446\u043E"),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("p", null, this.state.contact.map(function (item) { return (React.createElement("p", null,
                React.createElement("b", null, item.name),
                " - ",
                item.phone,
                " - ",
                item.email)); })),
            React.createElement("br", null),
            React.createElement("hr", null),
            React.createElement("h2", null, "\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043B\u0438\u0446\u043E"),
            React.createElement("span", { className: "italic inp" }, "\u0424.\u0418.\u041E.: "),
            React.createElement("input", { className: "inp", type: "text", id: "name_responsible", value: this.state.name_responsible, onChange: this.onStateChange }),
            React.createElement("br", null),
            React.createElement("span", { className: "italic inp" }, "E-mail: "),
            React.createElement("input", { className: "inp", type: "text", id: "email_responsible", value: this.state.email_responsible, onChange: this.onStateChange }),
            React.createElement("br", null),
            React.createElement("span", { className: "italic inp" }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D: "),
            React.createElement("input", { className: "inp", type: "text", id: "phone_responsible", value: this.state.phone_responsible, onChange: this.onStateChange }),
            React.createElement("br", null),
            React.createElement("div", { className: "btn btnAdd", onClick: function () { return _this.addAgent(); } }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")));
    };
    return Add;
}(React.Component));
var mapStateToProps = function (state) {
    return {
        items: state.counterparty,
        error: state.error
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        addData: function (name, email, phone, legalEntity, contact, name_responsible, email_responsible, phone_responsible) { return dispatch(items_1.addData(name, email, phone, legalEntity, contact, name_responsible, email_responsible, phone_responsible)); }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Add);
//# sourceMappingURL=Add.js.map