import React, { Component } from 'react'
import { getTopic } from '../../api';
import TopicCard from './TopicCard';
import TopicArticlesList from './TopicArticlesList';
import ErrorPage from '../errors/ErrorPage';

export default class SingleTopicPage extends Component {
    state = {
        topic: null,
        error: false
    }

    componentDidMount() {
        getTopic(this.props.slug)
            .then(topic => {
                this.setState({ topic })
            })
            .catch(error => {
                this.setState({ error })
            })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.slug !== this.props.slug) {
            getTopic(this.props.slug)
                .then(topic => {
                    this.setState({ topic })
                })
        }
    }

    render() {
        const { topic, error } = this.state;

        if (error) return (<ErrorPage error={error} />)
        return (
            <div>
                {topic && <TopicCard topic={topic} />}
                <TopicArticlesList slug={this.props.slug} />
            </div>
        )
    }
    handleChange = event => {
        if (event.target.value) {
            this.setState({ sortBy: event.target.value })
        }
    }
}