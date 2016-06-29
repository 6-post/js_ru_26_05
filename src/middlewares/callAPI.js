import $ from 'jquery'
import { START, SUCCESS, FAIL } from '../constants'

export default store => next => action => {
    const {withCommentPage, type, ...rest } = action;
    let callAPI = action.callAPI;
    if (!callAPI) return next(action);

    if (withCommentPage) {
        const LIMIT = 5;
        const page = rest.payload.page;
        callAPI = `${callAPI}?offset=${page * LIMIT - LIMIT}&limit=${LIMIT}`
    }

    next({ ...rest, type: type + START });
    setTimeout(() => {
        $.get(callAPI)
            .done(response => next({...rest, type: type + SUCCESS, response}))
            .fail(error => next({...rest, type: type + FAIL, error}))
    }, 1000)
}