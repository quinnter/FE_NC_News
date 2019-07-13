import React from "react";
import { withStyles, Grid } from "@material-ui/core";

const styles = theme => ({
  topicCard: {
    flexGrow: 1,
    minWidth: 260,
    background: theme.palette.primary.light,
    border: 0,
    borderRadius: 5,
    boxShadow: "0 3px 5px 2px lightgrey",
    margin: "10px"
  },
  description: {
    maxWidth: 150
  },
  title: {
    maxWidth: 150,
    textTransform: "capitalize"
  }
});

function TopicCard({ topic, classes }) {
  return (
    <div className={classes.topicCard}>
      <Grid
        container
        spacing={1}
        direction={"column"}
        justify="space-evenly"
        alignItems={"center"}
      >
        <Grid item>
          <h1 className={classes.title}>Topic: {topic.slug}</h1>
        </Grid>
        <h5 className={classes.description}>{topic.description}</h5>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(TopicCard);
