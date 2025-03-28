import {addItem} from "../actions/items";
import {getConterparties,importExcel} from "../config";

export function upload(file) {
    return (dispatch) => {
        fetch(importExcel, {
            method: "post",
            body: file
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
            .catch((response) => {alert("Ошибка загрузки"); return});
    }
}