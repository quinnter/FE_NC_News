import React, { Component } from 'react'
import { getTopic } from '../../api';
import TopicCard from './TopicCard';
import TopicArticlesList from './TopicArticlesList';
import ErrorPage from '../errors/ErrorPage';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    root: {
        padding: '2px 4px',
        display: "flex",
        alignItems: "center",
        maxWidth: 900,
        margin: "10px"
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4
    }

})

class SingleTopicPage extends Component {
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
        const { classes } = this.props;

        if (error) return (<ErrorPage error={error} />)
        return (
            <div>
                {topic && <TopicCard topic={topic} />}
                {topic && <TopicArticlesList slug={this.props.slug} />}
            </div>
        )
    }
    handleChange = event => {
        if (event.target.value) {
            this.setState({ sortBy: event.target.value })
        }
    }
}

export default withStyles(styles)(SingleTopicPage);