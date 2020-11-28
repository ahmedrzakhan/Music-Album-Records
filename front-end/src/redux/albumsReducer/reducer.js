import {
  GET_ALBUMS_REQUEST,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_FAILURE,
  GET_ALBUMS_BY_SEARCH_REQUEST,
  GET_ALBUMS_BY_SEARCH_SUCCESS,
  GET_ALBUMS_BY_SEARCH_FAILURE,
} from "./actionTypes";

const initialState = {
  albums: [],
  totalPages: 1,
  numOfAlbums: 1,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALBUMS_REQUEST:
      console.log(type, payload);

      return { ...state, ...payload };

    case GET_ALBUMS_SUCCESS:
      console.log(type, payload);

      const { albums, totalPages, numOfAlbums } = payload;
      return {
        ...state,
        albums: albums,
        totalPages: totalPages,
        numOfAlbums: numOfAlbums,
      };

    case GET_ALBUMS_FAILURE:
      console.log(type, payload);
      return { ...state };

    case GET_ALBUMS_BY_SEARCH_REQUEST:
      console.log(type, payload);
      return { ...state };

    case GET_ALBUMS_BY_SEARCH_SUCCESS:
      console.log(type, payload);

      const { albums: data, totalPages: tpl, numOfAlbums: nums } = payload;
      return { ...state, albums: data, totalPages: tpl, numOfAlbums: nums };

    case GET_ALBUMS_BY_SEARCH_FAILURE:
      console.log(type, payload);
      return { ...state };

    default:
      return state;
  }
};
