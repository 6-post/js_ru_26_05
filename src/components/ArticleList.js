import React, { PropTypes, Component } from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
    render() {
        const {
            articles,
            openedArticle,
            isOpen,
            accordion
        } = this.props;

        const articleItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                     isOpen = {!isOpen && article.id === openedArticle}
                openArticle = {accordion(article.id)}
            />
        </li>);

        return (
            <ul>
                {articleItems}
            </ul>
        )
    }

}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    openedArticle: PropTypes.string,
    isOpen: PropTypes.bool,
    accordion: PropTypes.func
}

export default accordion(ArticleList);