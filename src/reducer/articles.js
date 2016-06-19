import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'
import { normalizedArticles } from '../fixtures'
import _ from 'lodash';

export default (articles = normalizedArticles, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter((article) => article.id != payload.id);
            break;
        case ADD_COMMENT:
            const newArticles = articles.filter((article) => article.id !== payload.articleId);
            const article = articles.filter((article) => article.id === payload.articleId)[0];
            //здесь вы мутируете article - плохо
            article.comments = (article.comments || []).concat(payload.comment.id);
            return newArticles.concat(article);
            break;
    }

    return articles
}
