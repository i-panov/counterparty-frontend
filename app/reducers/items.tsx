let initialState = {error:[], items:[], isLoading:false};

export function items(state = initialState, action) {
    switch (action.type) {
        case "ITEMS_HAS_ERRORED":
            return {...state, ...{error:action.err}};

        case "ITEMS_IS_LOADING":
            return {...state, ...{isLoading:action.isLoading}};

        case "ITEMS_FETCH_DATA_SUCCESS":
            return {...state, ...{items:action.items}};

        case "DELETE_ITEM":
            return {...state,
                ...{items:
                    state.items.filter(function(item){
                        return action.id.toString().indexOf(item.id) == -1;
                    })
                }
            };

        case "ADD_ITEM":
            return {...state, ...{items:action.items}};

        case "UPDATE_PERSON":
            return {...state, ...{items:action.items}};

        case "UPDATE_ENTITY":
            return {...state, ...{items:action.items}};

        case "ADD_CONTACT":
            return {...state, ...{items:action.items}};

        case "DELETE_CONTACT":
            return {...state, ...{items:action.items}};

        default:
            return state;
    }
}