"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initialState = [
    {
        id: 1,
        name: "Ivanov I.P.",
        phone: "19475739203"
    }
];
function contact(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        default:
            return state;
    }
}
exports.default = contact;
//# sourceMappingURL=contact-reducers.js.map