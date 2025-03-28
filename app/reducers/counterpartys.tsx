const initialState =  [
        {id: 0, name: "Иванов", phone: "695461242"},
        {id: 1, name: "Петров", phone: "456456456"}
    ]

export default function counterpartyList(state = initialState, action) {
    if (action.type === "ADD") {
        return [
            ...state,
            action.payload
        ]
    }
    else if (action.type === "DELETE") {
        console.log(action.id);
        return state
        /*state.filter(id => id !== action.id)
         state.filter(function(id) {
         return id !== action.id})*/
    }
    return state;
}