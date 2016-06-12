import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import { addComment } from '../AC/comment'
import { addIdComment } from '../AC/articles'

class CommentList extends Component {
    static defaultProps = {

    }

    static propTypes = {
        comments: PropTypes.array,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };
    render() {
        return (
            <div>
                {this.getToggler()}
                {this.getList()}
                {this.getFormAdd()}
            </div>
        )
    }

    componentDidMount() {
        console.log('I am mounted')
    }

    componentWillUpdate(nextProps) {
        console.log(this.props.isOpen, ' changes to ', nextProps.isOpen)
    }


    getToggler() {
        const { isOpen, toggleOpen } = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return <a href = "#" onClick = {toggleOpen}>{text}</a>
    }

    getList() {
        const { comments, isOpen } = this.props;
        if (!isOpen) return null
        if (!comments || !comments.length) return <h3>No comments yet</h3>
        const items = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <ul>{items}</ul>
    }

    getFormAdd() {
        const {isOpen} = this.props;
        if (!isOpen) return null
        return <div>
            <p><input ref="input" type="text" placeholder="Name" /></p>
            <p><textarea ref="textarea" placeholder="Text" name="comment" cols="40" rows="3" /></p>
            <input type="submit" onClick = {this.handleAddComment} value="Add comment" />
            <input type="reset" value="Clear" />
        </div>
    }

    handleAddComment = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();

        const {comments, articleId} = this.props;
        const {input, textarea} = this.refs;
        const idComment = ++comments.length;
        //это плохо:
        //1) незачем разбивать на 2 отдельных экшина, 
        //2) герерацию id лучше делать в AC,
        //3) id как comments.length(тем-более length комментов к конкретной статье) не будет уникальным 
        addComment({
            id: idComment,
            name: input.value,
            text: textarea.value
        });

        addIdComment(articleId, idComment);
    }
}

export default toggleOpen(CommentList)
