import React from 'react'
import { withStyles } from '@material-ui/styles';
import { Card, Container, Avatar } from '@material-ui/core';

const styles = theme => ({
    root: {
        display: 'flex'
    },
    card: {
        maxWidth: 275,
        margin: 10,
        alignItems: "center",
        background: "whitesmoke",
        padding: theme.spacing(1),
    },
    title: {
        fontSize: 18,
    },
    pos: {
        marginBottom: 12,
    },
    bigAvatar: {
        margin: 10,
        width: 100,
        height: 100
    }
})

const UserCard = ({ classes, user }) => {
    return (
        <div >
            <Container className={classes.root}>
                <Card className={classes.card}>
                    <p className={classes.title}>Username : {user.username}</p>
                    <p>Name: {user.name}</p>
                    <Avatar alt="Users Profile" src={user.avatar_url} className={classes.bigAvatar} />
                </Card>
            </Container>
        </div>
    )
}

export default withStyles(styles)(UserCard);
