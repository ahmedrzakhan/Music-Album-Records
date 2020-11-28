import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";
const styles = () => ({
  alignCenter: {
    textAlign: "center",
  },
  padding: {
    padding: 20,
  },
  media: {
    paddingTop: "65%",
    margin: "28px",
  },
});
class AlbumCard extends Component {
  render() {
    const { data, classes } = this.props;
    const { album, photo, songs } = data;
    return (
      <>
        <Card raised className={classes.padding}>
          <CardActionArea className={classes.alignCenter}>
            {photo ? (
              <CardMedia image={photo} className={classes.media} />
            ) : null}
            <CardContent>
              <Typography noWrap variant="h5">
                {album}
              </Typography>
              <Typography>Total Songs: {songs.length}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </>
    );
  }
}

export default withStyles(styles)(AlbumCard);
