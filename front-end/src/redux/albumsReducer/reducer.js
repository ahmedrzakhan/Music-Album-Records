import {
  GET_ALBUMS_REQUEST,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_FAILURE,
} from "./actionTypes";

const initialState = {
  albums: [{ album: "pp" }],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALBUMS_REQUEST:
      return { ...state, ...payload };

    default:
      return state;
  }
};
