export function counterpartyHasErrored(err) {
    return {
        type: "COUNTERPARTY_HAS_ERRORED",
        err
    };
}

export function counterpartyIsLoading(bool) {
    return {
        type: "COUNTERPARTY_IS_LOADING",
        isLoading: bool
    };
}

export function counterpartyFetchDataSuccess(counterpartys) {
    return {
        type: "COUNTERPARTY_FETCH_DATA_SUCCESS",
        counterpartys
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
            .then((counterpartys) => dispatch(counterpartyFetchDataSuccess(counterpartys.value)))
            .catch((counterpartys) => dispatch(counterpartyHasErrored(counterpartys.error)));
    };
}