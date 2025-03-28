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
require("./import.less");
var List = (function (_super) {
    __extends(List, _super);
    function List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    List.prototype.render = function () {
        return ();
    };
    return List;
}(React.Component));
var mapStateToProps = function (state) {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        fetchData: function () { return dispatch(items_1.itemsFetchData()); },
        deleteData: function (id) { return dispatch(items_1.deleteData(id)); }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(List);
//# sourceMappingURL=import.js.map