import AppDispatcher from '../dispatcher'
import {DELETE_ARTICLE, ADD_ID_COMMENT} from '../constants/article'

export function deleteArticle(id) {
    const action = {
        type: DELETE_ARTICLE,
        payload: { id }
    };

    AppDispatcher.dispatch(action)
}

export function addIdComment(comments, id) {
    const action = {
        type: ADD_ID_COMMENT,
        payload: {
            id: comments,
            idComment: id
        }
    };

    AppDispatcher.dispatch(action)
}