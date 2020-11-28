import axios from "axios";

import {
  GET_ALBUMS_REQUEST,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_FAILURE,
  GET_ALBUMS_BY_SEARCH_REQUEST,
  GET_ALBUMS_BY_SEARCH_SUCCESS,
  GET_ALBUMS_BY_SEARCH_FAILURE,
} from "./actionTypes";

export const getAlbumsRequest = (payload) => ({
  type: GET_ALBUMS_REQUEST,
  payload,
});

export const getAlbumsSuccess = (payload) => ({
  type: GET_ALBUMS_SUCCESS,
  payload,
});

export const getAlbumsFailure = (payload) => ({
  type: GET_ALBUMS_FAILURE,
  payload,
});

export const getAlbums = (payload) => async (dispatch) => {
  dispatch(getAlbumsRequest(payload));
  const { genre, order, limit, page } = payload;
  const config = {
    method: "get",
    url: `http://localhost:5000/api/albums/get-albums?order=${order}&genre=${genre}&page=${page}&limit=${limit}`,
  };

  try {
    const response = await axios(config);
    dispatch(getAlbumsSuccess(response.data));
  } catch (err) {
    dispatch(getAlbumsFailure(err));
  }
};

export const getAlbumsBySearchRequest = (payload) => ({
  type: GET_ALBUMS_REQUEST,
  payload,
});

export const getAlbumsBySearchSuccess = (payload) => ({
  type: GET_ALBUMS_SUCCESS,
  payload,
});

export const getAlbumsBySearchFailure = (payload) => ({
  type: GET_ALBUMS_FAILURE,
  payload,
});

export const getAlbumsBySearch = (payload) => async (dispatch) => {
  dispatch(getAlbumsBySearchRequest(payload));
  const { query, limit, page } = payload;

  const config = {
    method: "get",
    url: `http://localhost:5000/api/albums/get-albums-by-search?query=${query}&page=${page}&limit=${limit}`,
  };

  try {
    const response = await axios(config);
    dispatch(getAlbumsBySearchSuccess(response.data));
  } catch (err) {
    dispatch(getAlbumsBySearchFailure(err));
  }
};
