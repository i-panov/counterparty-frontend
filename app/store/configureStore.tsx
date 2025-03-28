import { createStore, applyMiddleware, compose } from "redux"
import thunkMiddleware from "redux-thunk"
import rootReducer from "../reducers";
import { redirect } from "../middlewares/redirect"

export default function configureStore() {
    const store = compose(
        applyMiddleware(thunkMiddleware),
        applyMiddleware(redirect)
    )(createStore)(rootReducer)

    return store
}