import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { items } from "./items";
import { counterparty } from "./counterparty";
import { legalEntities } from "./select";
import counter from "./counter-reducers";
import contact from "./contact-reducers";

export default combineReducers({
    routing: routerReducer,
    items,
    legalEntities,
    counterparty,
    counter,
    contact})