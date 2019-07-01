import React from 'react'
import { Link } from "@reach/router";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronRight from "@material-ui/icons/ChevronRight"

import { withStyles, Icon } from '@material-ui/core';


const styles = theme => ({
    text: {
        textTransform: "capitalize",
    },
    root: {
        width: 200,
    }
})


function TopicsList({ topics, side, toggleDrawer, classes }) {
    return (
        <div>
            <List className={classes.root}>
                {topics.map((topic) => {
                    return (
                        <Link to={`/topics/${topic.slug}`} onClick={toggleDrawer('left', false)} key={topic.slug} >
                            <ListItem button  >
                                <Icon>
                                    <ChevronRight />
                                </Icon>
                                <ListItemText primary={topic.slug} className={classes.text} />
                            </ListItem>
                        </Link>
                    )
                })}
            </List>
        </div>
    );

}

export default withStyles(styles)(TopicsList);