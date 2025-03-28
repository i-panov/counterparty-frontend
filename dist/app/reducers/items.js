"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var initialState = { error: [], items: [], isLoading: false };
function items(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case "ITEMS_HAS_ERRORED":
            return __assign({}, state, { error: action.err });
        case "ITEMS_IS_LOADING":
            return __assign({}, state, { isLoading: action.isLoading });
        case "ITEMS_FETCH_DATA_SUCCESS":
            return __assign({}, state, { items: action.items });
        case "ADD_ITEM":
            return __assign({}, state, { items: action.items });
        case "DELETE_ITEM":
            return __assign({}, state, { items: state.items.filter(function (item) {
                    return action.id.toString().indexOf(item.id) == -1;
                })
            });
        default:
            return state;
    }
}
exports.items = items;
//# sourceMappingURL=items.js.map