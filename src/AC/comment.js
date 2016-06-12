import AppDispatcher from '../dispatcher'
import {ADD_COMMENT} from '../constants/comment'

export function addComment(data) {
    const action = {
        type: ADD_COMMENT,
        payload: {data}
    };

    AppDispatcher.dispatch(action)
}