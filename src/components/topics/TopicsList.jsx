import React from 'react'
import { Link } from "@reach/router";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



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
                        </Link>

                    )
                })}
            </List>
        </div>
    );

}