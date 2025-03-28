import {getConterparties, deleteCounterparty, addCounterparty} from "../config";

export function itemsHasErrored(err) {
    return {
        type: "ITEMS_HAS_ERRORED",
        error: err
    };
}

export function itemsIsLoading(bool) {
    return {
        type: "ITEMS_IS_LOADING",
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: "ITEMS_FETCH_DATA_SUCCESS",
        items: items
    };
}

export function itemsFetchData() {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        fetch(getConterparties)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items.value)))
            .catch((items) => dispatch(itemsHasErrored(items.error)));
    };
}

export function deleteItem(id) {
    return {
        type: "DELETE_ITEM",
        id
    };
}

export function deleteData(id) {
    return (dispatch) => {
        fetch(deleteCounterparty + id, {
            method: "delete"
        })
        .then(() => dispatch(deleteItem(id)))
    }
}

export function addItem(items) {
    return {
        type: "ADD_ITEM",
        items
    };
}

export function addData(name, email, phone, legalEntity, contact, name_responsible, email_responsible, phone_responsible) {
    return (dispatch) => {
        fetch(addCounterparty, {
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
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
            .then(() => {
                fetch(getConterparties)
                 .then((response) => response.json())
                 .then((items) => dispatch(addItem(items.value)))
                    dispatch({
                    type: "ROUTING",
                    payload: {
                        method: "push",
                        nextUrl: "/"
                    }
                 })
            })
            .catch((response) => {alert("Ошибка заполнения полей"); return});
    }
}
