const initialState = [
    {
        id: 1,
        name: "Vasya",
        address: "Lenina st.",
        phone: "123456789",
        advert: "Central office, 25",
        email: "vasya@email.com",
    },
    {
        id: 2,
        name: "Olga",
        address: "Moskovskaya st.",
        phone: "987654321",
        advert: "Main building 15",
        email: "olga@email.com",
    },
    {
        id: 3,
        name: "Ragnar",
        address: "Denmark",
        phone: "192837465",
        advert: "Copenhagen",
        email: "ragnar@email.com",
    }
]

export default function counter(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_AGENT":
            return {
                ...state,
                name: action.payload,
                address: action.payload,
                phone: action.payload,
                advert: action.payload,
                email: action.payload
            };
        default:
            return state;
    }
}