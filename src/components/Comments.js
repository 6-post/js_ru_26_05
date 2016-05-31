import React, {PropTypes, Component} from 'react'
import Comment from './Comment'

class Comments extends Component {

    state = {
        isOpen: false
    };

    render() {
        const {comments} = this.props;
        const {isOpen} = this.state;
        const textLink = this.state.isOpen ? 'close comments' : 'open comments';

        const commentItems = comments.map((comment) => {
            return <Comment key={comment.id} {...comment} />;
        });

        return (
            <div>
                <a onClick = {this.toggleOpen} href="#">{textLink}</a>
                {isOpen ? commentItems : null}
            </div>
        )
    }

    toggleOpen = (evt) => {
        evt.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

Comments.propTypes = {
    comments: PropTypes.array
};

export default Comments