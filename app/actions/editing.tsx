import {getConterparties} from "../config";

export function updatePerson(items) {
    return {
        type: "UPDATE_PERSON",
        items
    };
}

export function changePerson(id, name, phone, email) {
    return (dispatch) => {
        fetch("http://localhost:8888/counterparties/changePerson", {
            method: "post",
            headers: {
                "date": "Sun, 20 Aug 2017 18:12:45 GMT",
                "transfer-encoding": "chunked",
                "content-type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({
                email: email,
                id: id,
                name: name,
                phone: phone
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
                    .then((items) => dispatch(updatePerson(items.value)))
            })
            .catch((response) => {alert("Ошибка заполнения полей"); return});
    }
}

export function updateEntity(items) {
    return {
        type: "UPDATE_ENTITY",
        items
    };
}

export function changeEntity(id_counter, id_legal) {
    return (dispatch) => {
        fetch("http://localhost:8888/counterparties/changeLegalEntity/" + id_counter + "/" + id_legal, {
            method: "post"
        })
            .then(() => {
                fetch(getConterparties)
                    .then((response) => response.json())
                    .then((items) => dispatch(updateEntity(items.value)))
            })
    }
}

export function addContact(items) {
    return {
        type: "ADD_CONTACT",
        items
    };
}

export function addPerson(id, name, phone, email) {
    return (dispatch) => {
        fetch("http://localhost:8888/counterparties/addContactPerson/" + id, {
            method: "post",
            headers: {
                "date": "Sun, 20 Aug 2017 18:12:45 GMT",
                "transfer-encoding": "chunked",
                "content-type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({
                email: email,
                name: name,
                phone: phone
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
                    .then((items) => dispatch(addContact(items.value)))
            })
            .catch((response) => {alert("Ошибка заполнения полей"); return});
    }
}

export function deleteContact(items) {
    return {
        type: "DELETE_CONTACT",
        items
    };
}

export function deletePerson(id_counter, id_contact) {
    return (dispatch) => {
        fetch("http://localhost:8888/counterparties/deleteContactPerson/" + id_counter + "/" + id_contact, {
            method: "delete"
        });
    }
}