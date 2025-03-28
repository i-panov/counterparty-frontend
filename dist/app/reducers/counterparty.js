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
var initialState = { error: [], counterparty: {}, isLoading: false };
function counterparty(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case "COUNTERPARTY_HAS_ERRORED":
            return __assign({}, state, { error: action.err });
        case "COUNTERPARTY_IS_LOADING":
            return __assign({}, state, { isLoading: action.isLoading });
        case "COUNTERPARTY_FETCH_DATA_SUCCESS":
            return __assign({}, state, { counterparty: action.counterparty });
        default:
            return state;
    }
}
exports.counterparty = counterparty;
//# sourceMappingURL=counterparty.js.map