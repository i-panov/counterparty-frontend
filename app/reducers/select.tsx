let initialState = {error:[], legalEntities:[], isLoading:false};

export function legalEntities(state = initialState, action) {
    switch (action.type) {
        case "LEGAL_ENTITIES_HAS_ERRORED":
            return {...state, ...{error:action.err}};

        case "LEGAL_ENTITIES_IS_LOADING":
            return {...state, ...{isLoading:action.isLoading}};

        case "LEGAL_ENTITIES_FETCH_DATA_SUCCESS":
            return {...state, ...{legalEntities:action.legalEntities}};

        default:
            return state;
    }
}