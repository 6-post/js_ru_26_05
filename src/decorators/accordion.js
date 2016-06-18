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
        //лучше просто обнулять id открытого элемента если он уже открыт, чем меньше живет в стейте - тем лучше
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
