const initialState = [
    {
        id: 1,
        name: "Ivanov I.P.",
        phone: "19475739203"
    }
]

export default function contact(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}