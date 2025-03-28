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
var ContactPerson_1 = require("./ContactPerson");
var AgentEdit = (function (_super) {
    __extends(AgentEdit, _super);
    function AgentEdit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            persons: ["Vasya", "Helga", "John"]
        };
        _this.addNewPerson = function (text) {
            var arr = _this.state.persons;
            arr.push(text);
            _this.setState({ persons: arr });
        };
        _this.removePerson = function (i) {
            var arr = _this.state.persons;
            arr.splice(i, 1);
            _this.setState({ persons: arr });
        };
        _this.updatePerson = function (newText, i) {
            var arr = _this.state.persons;
            arr[i] = newText;
            _this.setState({ persons: arr });
        };
        _this.eachPerson = function (person, i) {
            return (React.createElement(ContactPerson_1.default, { key: i, index: i, updatePersonInfo: _this.updatePerson, removeEntirePerson: _this.removePerson }, person));
        };
        return _this;
    }
    AgentEdit.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("button", { onClick: this.addNewPerson.bind(null, "Введите имя...") }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u043E\u0435 \u043B\u0438\u0446\u043E"),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("div", null, this.state.persons.map(this.eachPerson))));
    };
    return AgentEdit;
}(React.Component));
exports.default = AgentEdit;
//# sourceMappingURL=AgentEdit.js.map