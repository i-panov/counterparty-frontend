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
require("./View.less");
var ViewBailee = (function (_super) {
    __extends(ViewBailee, _super);
    function ViewBailee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewBailee.prototype.render = function () {
        var y = typeof (this.props.data);
        console.log(y);
        for (var key in this.props.data) {
            console.log("Ключ: " + key + " значение: " + this.props.data[key]);
        }
        //console.log(this.props.data["name"]);
        return (React.createElement("div", null,
            React.createElement("p", { className: "name" }, "1")));
    };
    return ViewBailee;
}(React.Component));
exports.default = ViewBailee;
//# sourceMappingURL=ViewBailee.js.map