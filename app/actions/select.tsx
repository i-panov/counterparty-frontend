import {getLegalEntities} from "../config";

export function legalEntitiesitemsHasErrored(err) {
    return {
        type: "LEGAL_ENTITIES_HAS_ERRORED",
        error: err
    };
}

export function legalEntitiesitemsIsLoading(bool) {
    return {
        type: "LEGAL_ENTITIES_IS_LOADING",
        isLoading: bool
    };
}


export function legalEntitiesFetchDataSuccess(legalEntities) {
    return {
        type: "LEGAL_ENTITIES_FETCH_DATA_SUCCESS",
        legalEntities: legalEntities
    };
}

export function legalEntitiesFetchData() {
    return (dispatch) => {
        fetch(getLegalEntities)
            .then((response) => response.json())
            .then((legalEntities) => dispatch(legalEntitiesFetchDataSuccess(legalEntities.value)))
    };
}