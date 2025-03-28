"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var react_router_redux_1 = require("react-router-redux");
var items_1 = require("./items");
var counterparty_1 = require("./counterparty");
var select_1 = require("./select");
var counter_reducers_1 = require("./counter-reducers");
var contact_reducers_1 = require("./contact-reducers");
exports.default = redux_1.combineReducers({
    routing: react_router_redux_1.routerReducer,
    items: items_1.items,
    legalEntities: select_1.legalEntities,
    counterparty: counterparty_1.counterparty,
    counter: counter_reducers_1.default,
    contact: contact_reducers_1.default
});
//# sourceMappingURL=index.js.map