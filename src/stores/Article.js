import BasicStore from './BasicStore'
import {DELETE_ARTICLE, ADD_ID_COMMENT} from '../constants/article'

export default class ArticleStore extends BasicStore {
    constructor(...args) {
        super(...args)
        this._subscribe((action) => {
            const { type, payload } = action

            switch (type) {
                case DELETE_ARTICLE:
                    this._delete(payload.id)
                    break
                case ADD_ID_COMMENT:
                    this._addComment(payload.id, payload.idComment);
                    break
                default:
                    return
            }

            this._emitChange()
        })
    }

    _addComment = (id, idComment) => {
        return this.getById(id).comments.push(idComment);
    }
}