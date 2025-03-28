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
var upload_1 = require("../actions/upload");
require("./Import_xls.less");
var Import_xls = (function (_super) {
    __extends(Import_xls, _super);
    function Import_xls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Import_xls.prototype.handleChange = function (e) {
        e.preventDefault();
        var formData = new FormData();
        formData.append("file", e.target.files[0]);
        this.props.upload(formData);
    };
    Import_xls.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "wrap" },
            React.createElement("h1", null, "\u0418\u043C\u043F\u043E\u0440\u0442 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u043E\u0432"),
            React.createElement("form", { onSubmit: function (e) { return _this.handleChange(e); } },
                React.createElement("input", { className: "fileInput", type: "file", onChange: function (e) { return _this.handleChange(e); } }))));
    };
    return Import_xls;
}(React.Component));
var mapStateToProps = function (state) {
    return {};
};
var mapDispatchToProps = function (dispatch) {
    return {
        upload: function (file) { return dispatch(upload_1.upload(file)); }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Import_xls);
//# sourceMappingURL=Import_xls.js.map