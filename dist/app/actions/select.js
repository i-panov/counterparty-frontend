"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
function legalEntitiesitemsHasErrored(err) {
    return {
        type: "LEGAL_ENTITIES_HAS_ERRORED",
        error: err
    };
}
exports.legalEntitiesitemsHasErrored = legalEntitiesitemsHasErrored;
function legalEntitiesitemsIsLoading(bool) {
    return {
        type: "LEGAL_ENTITIES_IS_LOADING",
        isLoading: bool
    };
}
exports.legalEntitiesitemsIsLoading = legalEntitiesitemsIsLoading;
function legalEntitiesFetchDataSuccess(legalEntities) {
    return {
        type: "LEGAL_ENTITIES_FETCH_DATA_SUCCESS",
        legalEntities: legalEntities
    };
}
exports.legalEntitiesFetchDataSuccess = legalEntitiesFetchDataSuccess;
function legalEntitiesFetchData() {
    return function (dispatch) {
        fetch(config_1.getLegalEntities)
            .then(function (response) { return response.json(); })
            .then(function (legalEntities) { return dispatch(legalEntitiesFetchDataSuccess(legalEntities.value)); });
    };
}
exports.legalEntitiesFetchData = legalEntitiesFetchData;
//# sourceMappingURL=select.js.map