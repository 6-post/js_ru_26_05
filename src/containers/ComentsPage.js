import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Comment from './../components/Comment'
import { loadCommentsWithOffset } from '../AC/comments'

const LIMIT = 5;

class ComentsPageContainer extends Component {
    static propTypes = {

    };

    componentDidMount() {
        const {page, loadCommentsWithOffset} = this.props;

        loadCommentsWithOffset(page);
    }

    componentWillReceiveProps(nextProps) {
        const {page, loadCommentsWithOffset} = this.props;
        if (nextProps.page !== page) {
            loadCommentsWithOffset(page);
        }
    }

    render() {
        const {comments} = this.props;
        if (!comments) return null;

        const items = comments.get('comments').map(comment => {
            return <li key = {comment.get('id')}><Comment comment = {comment} /></li>
        });

        let i = 0;
        let pageNav = [];
        while (i < Math.ceil(comments.get('total') / LIMIT)) {
            // знаю, что так нельзя, но не придумал, что в key ставить(
            pageNav.push(<Link key={i} to={`/comments/${i+1}`}>{i+1}</Link>);
            i++;
        }

        return <div>
            {items}
            {pageNav}
        </div>
    }
}

export default connect((state, props) => ({
    comments: state.comments,
    page: props.params.page || 1
}), { loadCommentsWithOffset })(ComentsPageContainer)