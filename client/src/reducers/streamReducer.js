import {
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  CREATE_STREAM,
  DELETE_STREAM
} from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      // for DELETE_STREAM we already pass the id as the paylaod. omit() creates a new object and not the new object
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
