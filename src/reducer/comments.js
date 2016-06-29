import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, SUCCESS, START, FAIL, LOAD_COMMENTS_WITH_OFFSET } from '../constants'
import { normalizedComments } from '../fixtures'
import { fromArray } from '../store/utils'
import { fromJS, Map, OrderedMap } from 'immutable'

const defaultState = Map({
    entities: OrderedMap({}),
    loading: false
})

export default (comments = defaultState, action) => {
    const { type, payload, randomId, response, error } = action;

    switch (type) {
        case ADD_COMMENT:
            return comments.setIn(['entities', randomId.toString()], fromJS({...payload.comment, id: randomId}));

        case LOAD_COMMENTS_FOR_ARTICLE + SUCCESS:
            return comments.update('entities', entities => entities.merge(fromJS(fromArray(response))));

        case LOAD_COMMENTS_WITH_OFFSET + SUCCESS:
            return comments
                .set('total', response.total)
                .set('comments', fromJS(fromArray(response.records)));
    }

    return comments
}