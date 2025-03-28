import { browserHistory } from "react-router"

export const redirect = store => next => action => {
    if (action.type === 'ROUTING') {
        browserHistory[action.payload.method](action.payload.nextUrl)
    }
    return next(action)
}