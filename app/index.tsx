import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux"

import App from "./components/App";
import View from "./components/View";
import Add from "./components/Add";
import CounterEdit from "./components/CounterEdit";
import Import from "./components/Import_xls";

import configureStore from "./store/configureStore";
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route path="/" component={App}/>
                <Route path="/add" component={Add}/>
                <Route path="/view/:id" component={View}/>
                <Route path="/counter/:id" component={CounterEdit}/>
                <Route path="/import" component={Import}/>
            </div>
        </Router>
    </Provider>,
  document.getElementById("app")
);