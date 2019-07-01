import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import TopicsList from './TopicsList';
import MenuIcon from '@material-ui/icons/Menu';
import ListAlt from "@material-ui/icons/ListAlt";
import { getTopics } from '../../api';
import { IconButton, ListItem, ListItemText, Divider } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Home from "@material-ui/icons/Home"
import { Link } from '@reach/router';

export default class TopicsDrawer extends Component {
    state = {
        topics: null,
        left: false,
        //loading true, when update/mount set to false
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
                    <Link to={"/"}>
                        <ListItem button key="home">
                            <ListItemIcon><Home /></ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </ListItem>
                    </Link>
                    <Divider />
                    <ListItem>
                        <ListItemIcon><ListAlt /></ListItemIcon>
                        <ListItemText ><strong>Topics</strong></ListItemText>
                    </ListItem>
                    <Divider />
                    <TopicsList toggleDrawer={this.toggleDrawer} side={this.state.side} topics={this.state.topics} />
                </Drawer>
            </div>
        )
    }

    toggleDrawer = (side, open) => (event) => {
        this.setState({ ...this.state, [side]: open });
    };

}