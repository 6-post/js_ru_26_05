import React, { PropTypes, Component } from 'react'
import { findDOMNode } from 'react-dom'
import Article from './Article'
import oneOpen from '../decorators/oneOpen'
import DayPicker, { DateUtils } from 'react-day-picker';

import 'react-day-picker/lib/style.css';

class ArticleList extends Component {

    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }

    state = {
        from: null,
        to: null,
        selected: null
    };

    handleDayClick(e, day) {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }

    handleResetClick(e) {
        e.preventDefault();
        this.setState({
            from: null,
            to: null
        });
    }

    componentDidMount() {
        console.log('---', 2)
        console.log('---', findDOMNode(this.refs.chart))
    }

    render() {
        const { articles, isOpen, openItem } = this.props;
        const { from, to } = this.state;

        const fromTimestamp = new Date(from).getTime();
        const toTimestamp = new Date(to).getTime();

        const articlesFilter = articles.filter((article) => {
            return (new Date(article.date).getTime() >= fromTimestamp)
                && (to ? new Date(article.date).getTime() <= toTimestamp : true)
        });

        const articleItems = articlesFilter.map((article) => <li key={article.id}>
            <Article article = {article}
                     isOpen = {isOpen(article.id)}
                     openArticle = {openItem(article.id)}
            />
        </li>);

        const options = articles.map((article) => ({
            label: article.title,
            value: article.id
        }));

        console.log(fromTimestamp);
        console.log(toTimestamp);

        return (
            <div>
                <DayPicker
                    ref="daypicker"
                    numberOfMonths={1}
                    selectedDays={day => DateUtils.isDayInRange(day, {from, to})}
                    onDayClick={this.handleDayClick}
                />
                <ul>
                    {articleItems}
                </ul>
            </div>
        )
    }

    handleChange = (selected) => {
        this.setState({
            selected
        })
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,

    isOpen: PropTypes.func.isRequired,
    openItem: PropTypes.func.isRequired
}

export default oneOpen(ArticleList)