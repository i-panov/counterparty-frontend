"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_thunk_1 = require("redux-thunk");
var reducers_1 = require("../reducers");
var redirect_1 = require("../middlewares/redirect");
function configureStore() {
    var store = redux_1.compose(redux_1.applyMiddleware(redux_thunk_1.default), redux_1.applyMiddleware(redirect_1.redirect))(redux_1.createStore)(reducers_1.default);
    return store;
}
exports.default = configureStore;
//# sourceMappingURL=configureStore.js.map