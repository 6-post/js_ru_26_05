import BasicStore from './BasicStore'
import {ADD_COMMENT} from '../constants/comment'

export default class CommentStore extends BasicStore {
    constructor(...args) {
        super(...args)
        this._subscribe((action) => {
            const { type, payload } = action

            switch (type) {
                case ADD_COMMENT:
                    this._add(payload.data)
                    break
                default:
                    return
            }

            this._emitChange()
        })
    }
}