export function counterpartyHasErrored(err) {
    return {
        type: "COUNTERPARTY_HAS_ERRORED",
        error: err
    };
}

export function counterpartyIsLoading(bool) {
    return {
        type: "COUNTERPARTY_IS_LOADING",
        isLoading: bool
    };
}

export function counterpartyFetchDataSuccess(counterparty) {
    return {
        type: "COUNTERPARTY_FETCH_DATA_SUCCESS",
        counterparty: counterparty
    };
}

export function counterpartyFetchData(id) {
    return (dispatch) => {
        dispatch(counterpartyIsLoading(true));

        fetch("http://localhost:8888/counterparties/getConterparty/" + id)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(counterpartyIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((counterparty) => dispatch(counterpartyFetchDataSuccess(counterparty.value)))
            .catch((counterparty) => dispatch(counterpartyHasErrored(counterparty.error)));
    };
}