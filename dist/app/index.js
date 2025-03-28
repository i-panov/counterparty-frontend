"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var react_redux_1 = require("react-redux");
var react_router_1 = require("react-router");
var react_router_redux_1 = require("react-router-redux");
var App_1 = require("./components/App");
var View_1 = require("./components/View");
var Add_1 = require("./components/Add");
var CounterEdit_1 = require("./components/CounterEdit");
var Import_xls_1 = require("./components/Import_xls");
var configureStore_1 = require("./store/configureStore");
var store = configureStore_1.default();
var history = react_router_redux_1.syncHistoryWithStore(react_router_1.browserHistory, store);
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(react_router_1.Router, { history: history },
        React.createElement("div", null,
            React.createElement(react_router_1.Route, { path: "/", component: App_1.default }),
            React.createElement(react_router_1.Route, { path: "/add", component: Add_1.default }),
            React.createElement(react_router_1.Route, { path: "/view/:id", component: View_1.default }),
            React.createElement(react_router_1.Route, { path: "/counter/:id", component: CounterEdit_1.default }),
            React.createElement(react_router_1.Route, { path: "/import", component: Import_xls_1.default })))), document.getElementById("app"));
//# sourceMappingURL=index.js.map