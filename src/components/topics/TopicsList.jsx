import React from 'react'
import { Link } from "@reach/router";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Divider } from '@material-ui/core';


export default function TopicsList({ topics, side, toggleDrawer }) {
    return (
        <div
        >

            <List>
                {topics.map((topic) => {
                    return (
                        <Link to={`/topics/${topic.slug}`} onClick={toggleDrawer('left', false)} >
                            <ListItem button key={topic.slug} >
                                <ListItemText primary={topic.slug} />
                            </ListItem>
                            {/* <Divider /> */}
                        </Link>

                    )
                })}
            </List>
        </div>
    );

}