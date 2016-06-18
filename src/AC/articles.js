import {DELETE_ARTICLE} from '../constants/article';

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}