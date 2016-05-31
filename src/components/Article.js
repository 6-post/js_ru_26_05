import React, { PropTypes, Component } from 'react'
import Comments from './Comments'

class Article extends Component {

    state = {
        isOpen: false
    };

    render() {
        const { article } = this.props;
        const { isOpen } = this.state;

        if (!article) return <h3>No article</h3>
        const text = isOpen ? <section>{article.text}</section> : null;
        const comments = article.comments ? <Comments comments = {article.comments} /> : null;

        return (
            <div>
                <h3 onClick = {this.toggleOpen}>{article.title}</h3>
                {text}
                {comments}
            </div>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        id: PropTypes.string.isRequired
    }),
    options: PropTypes.object
}

export default Article