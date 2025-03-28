"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var initialState = [
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
];
function counter(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case "UPDATE_AGENT":
            return __assign({}, state, { name: action.payload, address: action.payload, phone: action.payload, advert: action.payload, email: action.payload });
        default:
            return state;
    }
}
exports.default = counter;
//# sourceMappingURL=counter-reducers.js.map