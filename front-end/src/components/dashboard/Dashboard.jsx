import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getAlbums,
  getAlbumsBySearch,
} from "./../../redux/albumsReducer/actions";
import AlbumCard from "./../card/AlbumCard";
import { Pagination } from "@material-ui/lab";
import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  appBar: {
    width: "100%",
  },
  gridStyle: {
    maxWidth: "100%",
    margin: "auto",

    [theme.breakpoints.down("md")]: {
      padding: "30px 5px 30px 5px",
    },
    [theme.breakpoints.up("md")]: {
      padding: "50px 50px 30px 50px",
    },
  },
  headerStyle: {
    fontWeight: 600,
    fontSize: 18,
    textAlign: "center",
    flexGrow: 1,
  },

  toolbar: theme.mixins.toolbar,
  toolbarStyle: {
    background: "#459EED",
  },
});

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: null,
      limit: 6,
      order: null,
      page: 1,
      query: "",
    };
  }

  handlePageChange = (e, pageNumber) => {
    const { genre, limit, order } = this.state;
    const { getAlbums, history } = this.props;

    history.push(
      `/dashboard?order=${order}&genre=${genre}&page=${pageNumber}&limit=${limit}`
    );

    const payload = {
      page: pageNumber,
      limit: limit,
      genre: genre,
      order: order,
    };

    getAlbums(payload);

    window.scrollTo(0, 0);
  };

  handleFilter = (value) => {
    const { limit, order, page } = this.state;
    const { getAlbums, history } = this.props;

    this.setState({
      genre: value,
    });

    history.push(
      `/dashboard?order=${order}&genre=${value}&page=${page}&limit=${limit}`
    );

    const payload = {
      page: page,
      limit: limit,
      genre: value,
      order: order,
    };

    getAlbums(payload);
  };

  handleSort = (value) => {
    const { genre, limit, page } = this.state;
    const { getAlbums, history } = this.props;

    this.setState({
      order: value,
    });

    history.push(
      `/dashboard?order=${value}&genre=${genre}&page=${page}&limit=${limit}`
    );

    const payload = {
      page: page,
      limit: limit,
      genre: genre,
      order: value,
    };

    getAlbums(payload);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSearch = () => {
    const { query, limit, page } = this.state;
    const { history, getAlbumsBySearch } = this.props;
    history.push(`/dashboard?page=${page}&limit=${limit}&query=${query}`);

    const payload = {
      page: page,
      limit: limit,
      query: query,
    };

    getAlbumsBySearch(payload);
  };
  componentDidMount() {
    const { genre, limit, order, page } = this.state;
    const { getAlbums, history, location } = this.props;

    const queryParams = new URLSearchParams(location.search);

    const paramPage = queryParams.get("page") || page;
    const paramOrder = queryParams.get("order") || order;
    const paramGenre = queryParams.get("genre") || genre;
    const paramLimit = queryParams.get("limit") || limit;

    history.push(
      `/dashboard?order=${paramOrder}&genre=${paramGenre}&page=${paramPage}&limit=${paramLimit}`
    );

    const payload = {
      page: paramPage,
      limit: paramLimit,
      genre: paramGenre,
      order: paramOrder,
    };

    getAlbums(payload);
  }

  render() {
    let { classes, albums, totalPages, numOfAlbums } = this.props;
    const { query } = this.state;
    if (numOfAlbums < 6) {
      totalPages = 1;
    }
    return (
      <>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbarStyle}>
            <Typography className={classes.headerStyle}>Music</Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.toolbar}></div>
        <div>
          <input
            type="text"
            name="query"
            value={query}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSearch}>Search</button>
          <select onChange={(e) => this.handleFilter(e.target.value)}>
            <option>Hip hop</option>
            <option>Post-grunge</option>
            <option>Indie rock</option>
            <option>pop</option>
            <option>Heavy Metal</option>
          </select>
          <select onChange={(e) => this.handleSort(e.target.value)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <Grid
          container
          spacing={3}
          className={classes.gridStyle}
          justify="center"
        >
          {albums.map((album) => (
            <Grid item key={album._id} xs={12} sm={8} md={6} lg={4}>
              <AlbumCard data={album} />
            </Grid>
          ))}
        </Grid>
        <Grid container justify="center">
          <Pagination
            count={totalPages}
            onChange={(e, value) => this.handlePageChange(e, value)}
          />
        </Grid>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  albums: state.albums.albums,
  totalPages: state.albums.totalPages,
  numOfAlbums: state.albums.numOfAlbums,
});

const mapDispatchToProps = (dispatch) => ({
  getAlbums: (payload) => dispatch(getAlbums(payload)),
  getAlbumsBySearch: (payload) => dispatch(getAlbumsBySearch(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Dashboard));
