import React, {PropTypes} from 'react'

function Comment(props) {
    const {id, name, text} = props;

    return (
        <div data-id={id}>
            <h3>{name}</h3>
            <p>{text}</p>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}

export default Comment