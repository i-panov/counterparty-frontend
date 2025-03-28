"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_1 = require("react-router");
exports.redirect = function (store) { return function (next) { return function (action) {
    if (action.type === 'ROUTING') {
        react_router_1.browserHistory[action.payload.method](action.payload.nextUrl);
    }
    return next(action);
}; }; };
//# sourceMappingURL=redirect.js.map