import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import TopicsList from './TopicsList';
import MenuIcon from '@material-ui/icons/Menu';
import { getTopics } from '../../api';
import { IconButton } from '@material-ui/core';

export default class TopicsDrawer extends Component {
    state = {
        topics: null,
        left: false,
    }

    componentDidMount() {
        getTopics()
            .then(topics => {
                this.setState({ topics })
            })
    }

    render() {
        return (
            <div>
                <IconButton onClick={this.toggleDrawer('left', !this.state.left)}>
                    <MenuIcon />
                </IconButton>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <TopicsList toggleDrawer={this.toggleDrawer} side={this.state.side} topics={this.state.topics} />
                </Drawer>
            </div>
        )
    }

    toggleDrawer = (side, open) => (event) => {
        this.setState({ ...this.state, [side]: open });
    };
}