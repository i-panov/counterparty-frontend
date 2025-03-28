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
var react_router_1 = require("react-router");
require("./App.less");
var List_1 = require("./List");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", { className: "wrap" },
            React.createElement("h1", null, "\u0421\u043F\u0438\u0441\u043E\u043A \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u043E\u0432"),
            React.createElement("div", null,
                React.createElement(react_router_1.Link, { to: "/add", className: "but new" }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430"),
                React.createElement(react_router_1.Link, { to: "/import", className: "but import" }, "\u0418\u043C\u043F\u043E\u0440\u0442")),
            React.createElement("br", null),
            React.createElement(List_1.default, null),
            React.createElement("br", null),
            React.createElement("a", { href: "http://localhost:8888/persist/exportExcel", className: "but export" }, "\u042D\u043A\u0441\u043F\u043E\u0440\u0442")));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=App.js.map