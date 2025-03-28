"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var items_1 = require("../actions/items");
var config_1 = require("../config");
function upload(file) {
    return function (dispatch) {
        fetch(config_1.importExcel, {
            method: "post",
            body: file
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
                .then(function (items) { return dispatch(items_1.addItem(items.value)); });
            dispatch({
                type: "ROUTING",
                payload: {
                    method: "push",
                    nextUrl: "/"
                }
            });
        })
            .catch(function (response) { alert("Ошибка загрузки"); return; });
    };
}
exports.upload = upload;
//# sourceMappingURL=upload.js.map