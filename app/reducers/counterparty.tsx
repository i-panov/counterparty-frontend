let initialState = {error:[], counterparty:{}, isLoading:false};

export function counterparty(state = initialState, action) {
    switch (action.type) {
        case "COUNTERPARTY_HAS_ERRORED":
            return {...state, ...{error:action.err}};

        case "COUNTERPARTY_IS_LOADING":
            return {...state, ...{isLoading:action.isLoading}};

        case "COUNTERPARTY_FETCH_DATA_SUCCESS":
            return {...state, ...{counterparty:action.counterparty}};

        default:
            return state;
    }
}