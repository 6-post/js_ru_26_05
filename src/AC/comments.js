import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, LOAD_COMMENTS_WITH_OFFSET } from '../constants'

export function addComment(articleId, comment) {
    return {
        type: ADD_COMMENT,
        payload: {
            articleId,
            comment: {...comment}
        },
        withRandomId: true
    }
}

export function loadCommentsForArticle(id) {
    return {
        type: LOAD_COMMENTS_FOR_ARTICLE,
        payload: { id },
        callAPI: `/api/comment?article=${id}`
    }
}

export function loadCommentsWithOffset (page) {
    return {
        type: LOAD_COMMENTS_WITH_OFFSET,
        payload: { page },
        callAPI: '/api/comment',
        withCommentPage: true
    }
}