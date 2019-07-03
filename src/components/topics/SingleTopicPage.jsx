import React, { Component } from 'react'
import { getTopic } from '../../api';
import TopicCard from './TopicCard';
import TopicArticlesList from './TopicArticlesList';
import ErrorPage from '../errors/ErrorPage';
import { withStyles, Grid } from '@material-ui/core';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    topicCard: {
        marginLeft: 0
    },
    articles: {

    }
})

class SingleTopicPage extends Component {
    state = {
        topic: null,
        error: false,
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
            <div className={classes.root}>
                <Grid container direction="row-reverse" justify="space-evenly">
                    <Grid item xs={12} sm={3}>
                        {topic && <TopicCard topic={topic} className={classes.topicCard} />}
                    </Grid>
                    <Grid item>
                        {topic && <TopicArticlesList slug={this.props.slug} />}
                    </Grid>
                </Grid>
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