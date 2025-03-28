"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initialState = [
    { id: 0, name: "Иванов", phone: "695461242" },
    { id: 1, name: "Петров", phone: "456456456" }
];
function counterpartyList(state, action) {
    if (state === void 0) { state = initialState; }
    if (action.type === "ADD") {
        return state.concat([
            action.payload
        ]);
    }
    else if (action.type === "DELETE") {
        console.log(action.id);
        return state;
        /*state.filter(id => id !== action.id)
         state.filter(function(id) {
         return id !== action.id})*/
    }
    return state;
}
exports.default = counterpartyList;
//# sourceMappingURL=counterpartys.js.map