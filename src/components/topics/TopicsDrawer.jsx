import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import TopicsList from './TopicsList';
import Button from '@material-ui/core/Button';
import { styled } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles"
import MenuIcon from '@material-ui/icons/Menu';

import { getTopics } from '../../api';
import { IconButton } from '@material-ui/core';


const theme = createMuiTheme();

const MyButton = styled(Button)({
    marginLeft: theme.spacing(4),
    padding: theme.spacing(2),
})

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
                {/* <MyButton onClick={this.toggleDrawer('left', !this.state.left)}>TOPICS</MyButton> */}
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
        console.log(side, open)
        // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        //     return;
        // }
        this.setState({ ...this.state, [side]: open });
    };
}