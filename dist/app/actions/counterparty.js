"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function counterpartyHasErrored(err) {
    return {
        type: "COUNTERPARTY_HAS_ERRORED",
        error: err
    };
}
exports.counterpartyHasErrored = counterpartyHasErrored;
function counterpartyIsLoading(bool) {
    return {
        type: "COUNTERPARTY_IS_LOADING",
        isLoading: bool
    };
}
exports.counterpartyIsLoading = counterpartyIsLoading;
function counterpartyFetchDataSuccess(counterparty) {
    return {
        type: "COUNTERPARTY_FETCH_DATA_SUCCESS",
        counterparty: counterparty
    };
}
exports.counterpartyFetchDataSuccess = counterpartyFetchDataSuccess;
function counterpartyFetchData(id) {
    return function (dispatch) {
        dispatch(counterpartyIsLoading(true));
        fetch("http://localhost:8888/counterparties/getConterparty/" + id)
            .then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            dispatch(counterpartyIsLoading(false));
            return response;
        })
            .then(function (response) { return response.json(); })
            .then(function (counterparty) { return dispatch(counterpartyFetchDataSuccess(counterparty.value)); })
            .catch(function (counterparty) { return dispatch(counterpartyHasErrored(counterparty.error)); });
    };
}
exports.counterpartyFetchData = counterpartyFetchData;
//# sourceMappingURL=counterparty.js.map