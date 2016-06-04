import React, { Component } from 'react'

export default (CustomComponent) => class DecoratedComponent extends Component {

    constructor(props) {
        super();

        this.state = {
            openedArticle: null,
            isOpen: false
        };
    }

    accordion = id => ev => {
        const {openedArticle, isOpen} = this.state;

        this.setState({
            openedArticle: id,
            isOpen: id === openedArticle && !isOpen
        })
    };

    render() {
        const {openedArticle, isOpen} = this.state;

        return <CustomComponent
            {...this.props}
            isOpen = {isOpen}
            openedArticle = {openedArticle}
            accordion = {this.accordion}
        />
    }
}