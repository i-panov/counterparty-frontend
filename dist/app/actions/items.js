"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
function itemsHasErrored(err) {
    return {
        type: "ITEMS_HAS_ERRORED",
        error: err
    };
}
exports.itemsHasErrored = itemsHasErrored;
function itemsIsLoading(bool) {
    return {
        type: "ITEMS_IS_LOADING",
        isLoading: bool
    };
}
exports.itemsIsLoading = itemsIsLoading;
function itemsFetchDataSuccess(items) {
    return {
        type: "ITEMS_FETCH_DATA_SUCCESS",
        items: items
    };
}
exports.itemsFetchDataSuccess = itemsFetchDataSuccess;
function itemsFetchData() {
    return function (dispatch) {
        dispatch(itemsIsLoading(true));
        fetch(config_1.getConterparties)
            .then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            dispatch(itemsIsLoading(false));
            return response;
        })
            .then(function (response) { return response.json(); })
            .then(function (items) { return dispatch(itemsFetchDataSuccess(items.value)); })
            .catch(function (items) { return dispatch(itemsHasErrored(items.error)); });
    };
}
exports.itemsFetchData = itemsFetchData;
function deleteItem(id) {
    return {
        type: "DELETE_ITEM",
        id: id
    };
}
exports.deleteItem = deleteItem;
function deleteData(id) {
    return function (dispatch) {
        fetch(config_1.deleteCounterparty + id, {
            method: "delete"
        })
            .then(function () { return dispatch(deleteItem(id)); });
    };
}
exports.deleteData = deleteData;
function addItem(items) {
    return {
        type: "ADD_ITEM",
        items: items
    };
}
exports.addItem = addItem;
function addData(name, email, phone, legalEntity, contact, name_responsible, email_responsible, phone_responsible) {
    return function (dispatch) {
        fetch(config_1.addCounterparty, {
            method: "post",
            headers: {
                "date": "Sun, 20 Aug 2017 18:12:45 GMT",
                "transfer-encoding": "chunked",
                "content-type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({
                bailee: {
                    email: email,
                    name: name,
                    phone: phone
                },
                contactPersons: contact,
                legalEntity: {
                    id: legalEntity
                },
                person: {
                    email: email_responsible,
                    name: name_responsible,
                    phone: phone_responsible
                }
            })
        })
            .then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
            .then(function () {
            fetch(config_1.getConterparties)
                .then(function (response) { return response.json(); })
                .then(function (items) { return dispatch(addItem(items.value)); });
            dispatch({
                type: "ROUTING",
                payload: {
                    method: "push",
                    nextUrl: "/"
                }
            });
        })
            .catch(function (response) { alert("Ошибка заполнения полей"); return; });
    };
}
exports.addData = addData;
//# sourceMappingURL=items.js.map